import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const MiningTicker = () => {
  const [earnings, setEarnings] = useState(0);
  const poolConfig = {
    hashRate: 30000000,
    miners: 100000,
    xmrPerHashPerDay: 0.000000002, // 100% bonus
    animationSpeed: 'animate-[pulse_0.5s_cubic-bezier(0.4,0,0.6,1)_infinite]'
  };
  
  useEffect(() => {
    const calculateEarnings = () => {
      const earningsPerSecond = (poolConfig.hashRate * poolConfig.xmrPerHashPerDay) / (24 * 60 * 60);
      setEarnings(prev => prev + earningsPerSecond);
    };

    const timer = setInterval(calculateEarnings, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-white/10 backdrop-blur-sm p-6 w-full">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-white/80">Pool Size:</span>
          <div className="flex flex-wrap gap-2">
            <span className="text-white font-medium px-4 py-2 bg-blue-500 rounded">
              XLarge (100K)
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/80">Hash Rate:</span>
          <span className="text-white font-mono">{poolConfig.hashRate.toLocaleString()} H/s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/80">Active Miners:</span>
          <span className="text-white font-mono">{poolConfig.miners.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/80">Estimated XMR:</span>
          <span className={`text-white font-mono ${poolConfig.animationSpeed}`}>
            {earnings.toFixed(8)} XMR
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/80">USD Value:</span>
          <span className="text-white font-mono">
            ${(earnings * 140).toFixed(2)}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default MiningTicker;