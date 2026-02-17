import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const folderQuery = Array.isArray(req.query.folder) ? req.query.folder[0] : req.query.folder;
    const folderEnv = process.env.GALLERY_FOLDER || process.env.CLOUDINARY_FOLDER;
    const folder = (folderQuery && String(folderQuery).trim()) || folderEnv || undefined;

    type CloudResource = {
      public_id: string;
      secure_url?: string;
      url?: string;
      context?: { custom?: { alt?: string } };
      filename?: string;
      width?: number;
      height?: number;
      asset_folder?: string;
    };

    const resources: CloudResource[] = [];
    let next_cursor: string | undefined = undefined;
    do {
      const opts: Record<string, unknown> = { type: 'upload', resource_type: 'image', max_results: 500 };
      if (next_cursor) opts.next_cursor = next_cursor;
      const result = (await cloudinary.api.resources(opts)) as { resources?: CloudResource[]; next_cursor?: string };
      if (result.resources && result.resources.length) resources.push(...result.resources);
      next_cursor = result.next_cursor;
    } while (next_cursor);

    let filtered = resources;
    if (folder) filtered = resources.filter((r) => r.asset_folder === folder || r.public_id.startsWith(folder + '/'));

    const images = filtered.map((r) => ({
      id: r.public_id,
      url: r.secure_url || r.url || '',
      alt: (r.context && r.context.custom && r.context.custom.alt) || r.filename || r.public_id,
      width: r.width,
      height: r.height,
    }));

    res.status(200).json(images);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ error: err.message });
    else res.status(500).json({ error: String(err) });
  }
}
