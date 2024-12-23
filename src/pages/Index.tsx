import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Laptop,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Download,
  Terminal,
  Activity,
  ExternalLink
} from 'lucide-react';

const UnifiedDeployment = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [deploymentStatus, setDeploymentStatus] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [deviceId, setDeviceId] = useState('');
  const [installStep, setInstallStep] = useState(0);

  const platforms = [
    {
      id: 'android',
      name: 'Android',
      icon: Smartphone,
      hashrate: '300-500 H/s',
      requirements: ['Termux from F-Droid', 'Android 7.0+']
    },
    {
      id: 'windows',
      name: 'Windows',
      icon: Laptop,
      hashrate: '500-900 H/s',
      requirements: ['Windows 10/11', '4GB+ RAM']
    }
  ];

  const androidSteps = [
    {
      title: "Install Termux",
      description: "First, download and install Termux from F-Droid store. Do not use the Play Store version as it's outdated.",
      action: "Download Termux",
      link: "https://f-droid.org/en/packages/com.termux/"
    },
    {
      title: "Install Python",
      description: "Open Termux and run the following command:",
      command: "pkg install python",
      action: "Next Step"
    },
    {
      title: "Ready to Deploy",
      description: "Python is installed. You can now proceed with the mining setup.",
      action: "Start Mining"
    }
  ];

  const handleDeploy = async () => {
    if (!selectedPlatform) return;

    if (selectedPlatform === 'android' && installStep < androidSteps.length - 1) {
      setInstallStep(prev => prev + 1);
      return;
    }

    setDeploymentStatus('deploying');
    setDeviceId(`xmrt_${Math.random().toString(36).substring(7)}`);

    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setDeploymentStatus('complete');
  };

  const renderAndroidSetup = () => {
    const currentStep = androidSteps[installStep];
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{currentStep.title}</h3>
            <p className="text-gray-400">{currentStep.description}</p>
            
            {currentStep.command && (
              <div className="bg-gray-900 p-3 rounded-md font-mono text-sm text-gray-300">
                $ {currentStep.command}
              </div>
            )}

            <Button 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
              onClick={currentStep.link ? () => window.open(currentStep.link, '_blank') : handleDeploy}
            >
              {currentStep.link ? <ExternalLink className="h-4 w-4 mr-2" /> : <Download className="h-4 w-4 mr-2" />}
              {currentStep.action}
            </Button>
          </div>

          <div className="flex justify-center space-x-2">
            {androidSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === installStep ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderStatus = () => {
    switch (deploymentStatus) {
      case 'deploying':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Deployment Progress</span>
              <span className="text-sm font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex items-center gap-2 text-sm text-blue-500">
              <Activity className="h-4 w-4 animate-pulse" />
              <span>Setting up your mining environment...</span>
            </div>
          </div>
        );
      case 'complete':
        return (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertDescription className="text-green-700">
              Deployment complete! Your device ID is: {deviceId}
            </AlertDescription>
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            XMRT Mining Setup
          </h1>
          <p className="mt-2 text-gray-400">Choose your platform to begin mining</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {platforms.map((platform) => (
            <Card 
              key={platform.id}
              className={`bg-gray-800 border-2 transition-all cursor-pointer ${
                selectedPlatform === platform.id 
                  ? 'border-blue-500' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => {
                setSelectedPlatform(platform.id);
                setInstallStep(0);
                setDeploymentStatus('idle');
              }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4">
                  <platform.icon className="h-12 w-12 text-blue-400" />
                  <div className="text-center">
                    <h3 className="font-bold text-lg">{platform.name}</h3>
                    <p className="text-sm text-gray-400">{platform.hashrate}</p>
                  </div>
                  <div className="w-full">
                    <div className="text-xs text-gray-500 mb-2">Requirements:</div>
                    <div className="space-y-1">
                      {platform.requirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPlatform && (
          selectedPlatform === 'android' ? (
            renderAndroidSetup()
          ) : (
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                  onClick={handleDeploy}
                  disabled={deploymentStatus === 'deploying'}
                >
                  <Download className="h-4 w-4 mr-2" />
                  {deploymentStatus === 'deploying' ? 'Deploying...' : 'Start Mining'}
                </Button>

                {renderStatus()}
              </CardContent>
            </Card>
          )
        )}

        {deploymentStatus === 'idle' && !selectedPlatform && (
          <Alert className="bg-blue-900/50 border-blue-800">
            <Terminal className="h-4 w-4 text-blue-400" />
            <AlertDescription className="text-blue-200">
              Select your platform above to begin the automated setup process.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default UnifiedDeployment;