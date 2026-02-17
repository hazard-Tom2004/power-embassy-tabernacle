import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/About' },
    { name: 'Trustees', path: '/Trustees' },
    { name: 'Contact', path: '/Contact' },
    { name: 'Gallery', path: '/Gallery' },
    { name: 'Donate', path: '/Donate' },
  ];

  const logoSrc = typeof logo === 'string' ? logo : (logo as { src?: string }).src || '';

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
              onClick={() => router.push('/')} // Updated to use Next.js routing
          >
            <img src={logoSrc} alt="Power Embassy Tabernacle" className="h-10 w-10 object-contain" />
            <div>
              <div className="text-xl font-bold text-gray-900">Power Embassy Tabernacle</div>
              <div className="text-xs text-gray-600">Power Outreach Ministries</div>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                  onClick={() => router.push(item.path)} // Updated to use Next.js routing
                className={`text-sm font-medium transition-colors ${
                  router.pathname === item.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } pb-1`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                    router.push(item.path); // Updated to use Next.js routing
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  router.pathname === item.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
