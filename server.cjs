// Simple Express server to expose a Cloudinary-backed gallery endpoint
const express = require('express');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/api/gallery', async (req, res) => {
  try {
    const folderQuery = req.query.folder && String(req.query.folder).trim();
    const folderEnv = process.env.GALLERY_FOLDER || process.env.CLOUDINARY_FOLDER;
    const folder = folderQuery || folderEnv || undefined;

    console.log('Gallery request - asset_folder:', folder);

    const resources = [];
    let next_cursor = undefined;
    do {
      const opts = { type: 'upload', resource_type: 'image', max_results: 500 };
      if (next_cursor) opts.next_cursor = next_cursor;
      const result = await cloudinary.api.resources(opts);
      console.log('Cloudinary response - count:', result.resources?.length || 0);
      if (result.resources && result.resources.length) {
        resources.push(...result.resources);
      }
      next_cursor = result.next_cursor;
    } while (next_cursor);

    // Filter by asset_folder if specified
    let filtered = resources;
    if (folder) {
      console.log('Available asset_folders in resources:', [...new Set(resources.map(r => r.asset_folder))]);
      filtered = resources.filter(r => r.asset_folder === folder);
      console.log('Looking for asset_folder:', folder, '- found:', filtered.length);
    }

    const images = filtered.map((r) => ({
      id: r.public_id,
      url: r.secure_url || r.url,
      alt: (r.context && r.context.custom && r.context.custom.alt) || r.filename || r.public_id,
      width: r.width,
      height: r.height,
    }));

    console.log('Total images returned:', images.length);
    res.json(images);
  } catch (err) {
    console.error('Cloudinary fetch error:', err);
    res.status(500).json({ error: err.message || 'Failed to fetch gallery' });
  }
});

app.listen(PORT, () => {
  console.log(`Gallery API server listening on http://localhost:${PORT}`);
});

// Debug endpoint: list all folders
app.get('/api/folders', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({ type: 'upload', resource_type: 'image', max_results: 1 });
    const allResources = [];
    let next_cursor = result.next_cursor;
    
    // Fetch a sample to see folder structure
    do {
      if (next_cursor) result.next_cursor = next_cursor;
      const r = await cloudinary.api.resources({ type: 'upload', resource_type: 'image', max_results: 500, next_cursor });
      if (r.resources) allResources.push(...r.resources);
      next_cursor = r.next_cursor;
    } while (next_cursor && allResources.length < 100);

    const folders = [...new Set(allResources.map(r => r.public_id.split('/')[0]))];
    res.json({ total: allResources.length, folders, sample: allResources.slice(0, 10) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
