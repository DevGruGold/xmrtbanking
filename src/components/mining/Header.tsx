import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export const Header = () => (
  <div className="text-center space-y-4">
    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-primary to-orange-secondary font-display">
      XMRT DAO
    </h1>
    <p className="text-lg text-gray-300">
      AI-Led Decentralized Autonomous Organization
    </p>
    <p className="text-sm text-gray-400 max-w-2xl mx-auto">
      Governance through AI agents powered by ElizaOS, LangChain, and LangFlow. Our autonomous ecosystem drives innovation in decentralized finance with MobileMonero as our liquidity engine.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6">
      <Button 
        variant="orange-gradient"
        onClick={() => window.open('https://xmrt.io', '_blank')}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        Explore XMRT DAO
      </Button>
      <Button 
        variant="orange-outline"
        onClick={() => window.open('https://mobilemonero.com', '_blank')}
      >
        <ExternalLink className="h-4 w-4 mr-2" />
        MobileMonero Engine
      </Button>
    </div>
  </div>
);