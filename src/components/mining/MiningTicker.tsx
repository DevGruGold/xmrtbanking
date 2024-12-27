import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

const MiningTicker = () => {
  const [earnings, setEarnings] = useState(0);
  const hashRate = 5000; // 5,000 H/s
  const xmrPerHashPerDay = 0.000000001; // Approximate XMR per hash per day
  
  useEffect(() => {
    const calculateEarnings = () => {
      // Calculate earnings per second based on hash rate
      const earningsPerSecond = (hashRate * xmrPerHashPerDay) / (24 * 60 * 60);
      setEarnings(prev => prev + earningsPerSecond);
    };

    const timer = setInterval(calculateEarnings, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-white/10 backdrop-blur-sm p-6 w-full">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-white/80">Hash Rate:</span>
          <span className="text-white font-mono">{hashRate.toLocaleString()} H/s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/80">Estimated XMR:</span>
          <span className="text-white font-mono animate-pulse">
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