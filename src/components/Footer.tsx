import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Power Embassy Tabernacle" className="h-8 w-8 object-contain" />
              <div>
                <div className="text-lg font-bold text-white">Power Embassy Tabernacle</div>
                <div className="text-xs text-gray-400">Power Outreach Ministries</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              A Christ-centered ministry commissioned to restore humanity back to God through the Word of righteousness, holiness, and truth.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About Us', 'Trustees', 'Contact', 'Donate', 'Church Standard'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase().replace(' ', ''))}
                  className="block text-sm hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">No 6 Iriekpen Street Ukpafisi Quarter Uhonmora Ora Owan West Local Government Edo State Nigeria.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">+2348032237627
 <p>+2347035277444</p>
                <p>+2348114595898</p></span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm">powerembassytabernacle6@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 Power Embassy Tabernacle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
