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
    className={`bg-white/90 border-2 transition-all cursor-pointer hover:shadow-lg ${
      isSelected ? 'border-blue-400 shadow-blue-100' : 'border-gray-100 hover:border-gray-200'
    }`}
    onClick={onClick}
  >
    <CardContent className="p-6">
      <div className="flex flex-col items-center gap-4">
        <platform.icon className="h-12 w-12 text-blue-400" />
        <div className="text-center">
          <h3 className="font-bold text-xl text-gray-800">{platform.name}</h3>
          <p className="text-sm text-gray-600">{platform.hashrate}</p>
        </div>
        <div className="w-full">
          <div className="text-sm font-medium text-gray-700 mb-2">Requirements:</div>
          <div className="space-y-2">
            {platform.requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span className="text-gray-600">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);