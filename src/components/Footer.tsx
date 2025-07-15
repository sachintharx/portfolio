import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Hashara Vidusanka. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and cutting-edge technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;