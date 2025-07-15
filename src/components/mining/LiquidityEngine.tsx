import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, Coins, TrendingUp, Users } from 'lucide-react';

const LiquidityEngine = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">MobileMonero Liquidity Engine</h2>
        <p className="text-gray-400">How mobile mining powers the XMRT DAO ecosystem</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/10 backdrop-blur-sm p-6 border-orange-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coins className="h-6 w-6 text-orange-primary" />
              <h3 className="text-lg font-semibold text-white">Mining Revenue</h3>
            </div>
            <p className="text-white/80 text-sm">
              MobileMonero generates XMR revenue through distributed mobile mining operations across thousands of devices worldwide.
            </p>
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm p-6 border-orange-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ArrowRight className="h-6 w-6 text-orange-primary" />
              <h3 className="text-lg font-semibold text-white">Liquidity Flow</h3>
            </div>
            <p className="text-white/80 text-sm">
              Mining profits are automatically channeled into the XMRT DAO treasury, providing consistent liquidity for ecosystem growth.
            </p>
          </div>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm p-6 border-orange-primary/20">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-orange-primary" />
              <h3 className="text-lg font-semibold text-white">DAO Funding</h3>
            </div>
            <p className="text-white/80 text-sm">
              The XMRT DAO uses this liquidity to fund development, governance incentives, and strategic ecosystem investments.
            </p>
          </div>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-orange-primary/50 to-orange-secondary/50 backdrop-blur-sm p-6 border-orange-primary/30">
        <div className="flex items-center space-x-4">
          <Users className="h-8 w-8 text-orange-primary" />
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-white">Community-Powered Ecosystem</h3>
            <p className="text-white/80">
              Every mobile miner contributes to the XMRT DAO's mission of advancing decentralized finance and privacy-focused blockchain solutions.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LiquidityEngine;