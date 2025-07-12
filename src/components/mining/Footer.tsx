import React from 'react';
import { Mail, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-purple-500/30 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* XMRT DAO Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400">XMRT DAO</h3>
              <p className="text-gray-300 text-sm">
                Decentralized autonomous organization powering the future of mobile Monero mining through innovative solutions and community-driven development.
              </p>
            </div>

            {/* MobileMonero Branding */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">MobileMonero</h3>
              <p className="text-gray-300 text-sm">
                The premier mobile XMR mining solution. Mine Monero directly on your Android device with optimized performance and user-friendly interface.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-400">Connect</h3>
              <div className="space-y-3">
                <a 
                  href="https://xmrt.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  xmrt.io
                </a>
                <a 
                  href="mailto:xmrtsolutions@gmail.com"
                  className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  xmrtsolutions@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 XMRT DAO. All rights reserved. • Powered by XMRT Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};