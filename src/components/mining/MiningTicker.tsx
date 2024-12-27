import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MiningTicker = () => {
  const [earnings, setEarnings] = useState(0);
  const [poolSize, setPoolSize] = useState<'small' | 'medium' | 'large'>('small');
  
  const poolConfigs = {
    small: {
      hashRate: 5000,
      miners: 10,
      xmrPerHashPerDay: 0.000000001,
      animationSpeed: 'animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]'
    },
    medium: {
      hashRate: 50000,
      miners: 100,
      xmrPerHashPerDay: 0.0000000012, // 20% bonus for pool size
      animationSpeed: 'animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite]'
    },
    large: {
      hashRate: 500000,
      miners: 1000,
      xmrPerHashPerDay: 0.0000000015, // 50% bonus for pool size
      animationSpeed: 'animate-[pulse_0.5s_cubic-bezier(0.4,0,0.6,1)_infinite]'
    }
  };
  
  useEffect(() => {
    const calculateEarnings = () => {
      const config = poolConfigs[poolSize];
      const earningsPerSecond = (config.hashRate * config.xmrPerHashPerDay) / (24 * 60 * 60);
      setEarnings(prev => prev + earningsPerSecond);
    };

    const timer = setInterval(calculateEarnings, 1000);
    return () => clearInterval(timer);
  }, [poolSize]);

  const handlePoolSizeChange = (size: 'small' | 'medium' | 'large') => {
    setPoolSize(size);
    setEarnings(0); // Reset earnings when changing pool size
  };

  const currentConfig = poolConfigs[poolSize];

  return (
    <Card className="bg-white/10 backdrop-blur-sm p-6 w-full">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-white/80">Pool Size:</span>
          <div className="flex gap-2">
            <Button 
              variant={poolSize === 'small' ? 'default' : 'secondary'}
              onClick={() => handlePoolSizeChange('small')}
              className="text-sm"
            >
              Small (10)
            </Button>
            <Button 
              variant={poolSize === 'medium' ? 'default' : 'secondary'}
              onClick={() => handlePoolSizeChange('medium')}
              className="text-sm"
            >
              Medium (100)
            </Button>
            <Button 
              variant={poolSize === 'large' ? 'default' : 'secondary'}
              onClick={() => handlePoolSizeChange('large')}
              className="text-sm"
            >
              Large (1000)
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/80">Hash Rate:</span>
          <span className="text-white font-mono">{currentConfig.hashRate.toLocaleString()} H/s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/80">Active Miners:</span>
          <span className="text-white font-mono">{currentConfig.miners}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/80">Estimated XMR:</span>
          <span className={`text-white font-mono ${currentConfig.animationSpeed}`}>
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