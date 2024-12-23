import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Activity, CheckCircle } from 'lucide-react';

interface DeploymentStatusProps {
  status: string;
  progress: number;
  deviceId: string;
}

export const DeploymentStatus = ({ status, progress, deviceId }: DeploymentStatusProps) => {
  if (status === 'deploying') {
    return (
      <div className="space-y-4 bg-white/80 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Setting Up Your Environment</span>
          <span className="text-sm font-medium text-blue-500">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex items-center gap-2 text-sm text-blue-500">
          <Activity className="h-4 w-4 animate-pulse" />
          <span>Configuring your mining environment...</span>
        </div>
      </div>
    );
  }

  if (status === 'complete') {
    return (
      <Alert className="bg-green-50 border-green-100">
        <CheckCircle className="h-4 w-4 text-green-500" />
        <AlertDescription className="text-green-700 font-medium">
          Success! Your mining environment is ready. Your device ID is: <span className="font-mono bg-green-100 px-2 py-1 rounded">{deviceId}</span>
        </AlertDescription>
      </Alert>
    );
  }

  return null;
};