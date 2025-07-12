import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Platform } from './types';

interface PlatformCardProps {
  platform: Platform;
  isSelected: boolean;
  onClick: () => void;
}

export const PlatformCard = ({ platform, isSelected, onClick }: PlatformCardProps) => (
  <Card 
    className={`bg-card/95 backdrop-blur-sm border-2 cursor-pointer card-hover ${
      isSelected 
        ? 'border-purple-400 shadow-lg shadow-purple-500/20 bg-purple-50/10' 
        : 'border-border hover:border-purple-300'
    }`}
    onClick={onClick}
  >
    <CardContent className="p-6">
      <div className="flex flex-col items-center gap-4">
        <platform.icon className={`h-12 w-12 transition-colors ${
          isSelected ? 'text-purple-400' : 'text-muted-foreground hover:text-purple-400'
        }`} />
        <div className="text-center">
          <h3 className="font-bold text-xl text-foreground">{platform.name}</h3>
          <p className="text-sm text-muted-foreground">{platform.hashrate}</p>
        </div>
        <div className="w-full">
          <div className="text-sm font-medium text-foreground mb-2">Requirements:</div>
          <div className="space-y-2">
            {platform.requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-muted-foreground">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);