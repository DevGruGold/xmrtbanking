import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export const Header = () => (
  <div className="text-center space-y-4">
    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 font-display">
      MobileMonero by XMRT Solutions
    </h1>
    <p className="text-lg text-gray-300">
      The premier mobile Monero mining solution for Android devices
    </p>
    <p className="text-sm text-gray-400 max-w-2xl mx-auto">
      Experience powerful XMR mining optimized for mobile devices. Join thousands of miners in the MobileMonero community and start earning Monero on your smartphone.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
      <Button 
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90"
        onClick={() => window.open('https://mobilemonero.com', '_blank')}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Visit MobileMonero.com
      </Button>
      <Button 
        variant="outline"
        className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
        onClick={() => window.open('https://xmrt.io', '_blank')}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        XMRT.io
      </Button>
    </div>
  </div>
);