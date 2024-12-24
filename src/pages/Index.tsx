import React, { useState } from 'react';
import Iframe from 'react-iframe';
import { Header } from '@/components/mining/Header';
import { PlatformCard } from '@/components/mining/PlatformCard';
import { DeploymentStatus } from '@/components/mining/DeploymentStatus';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Terminal, Download, Laptop, Smartphone, MessageCircle } from 'lucide-react';
import { Platform } from '@/components/mining/types';

const platforms: Platform[] = [
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

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [deploymentStatus, setDeploymentStatus] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [deviceId, setDeviceId] = useState('');

  const handleDeploy = async () => {
    if (!selectedPlatform) return;

    setDeploymentStatus('deploying');
    setDeviceId(`xmrt_${Math.random().toString(36).substring(7)}`);

    for (let i = 0; i <= 100; i += 20) {
      setProgress(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setDeploymentStatus('complete');
  };

  const getEmailSubject = () => {
    return encodeURIComponent('XMRT Mining Setup Request');
  };

  const getEmailBody = () => {
    const platform = selectedPlatform ? platforms.find(p => p.id === selectedPlatform)?.name : 'Not selected';
    return encodeURIComponent(`Hello XMRT Solutions,

I'm interested in setting up mining on my ${platform} device.
Device ID (if generated): ${deviceId}

Please assist me with the setup process.

Note: If this email doesn't open automatically, please contact xmrtsolutions@gmail.com directly.

Best regards`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 text-gray-800 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platforms.map((platform) => (
                <PlatformCard
                  key={platform.id}
                  platform={platform}
                  isSelected={selectedPlatform === platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                />
              ))}
            </div>

            {selectedPlatform && (
              <Card className="bg-white/90 border-gray-100">
                <CardContent className="p-6 space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-90 text-white font-medium"
                    onClick={handleDeploy}
                    disabled={deploymentStatus === 'deploying'}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {deploymentStatus === 'deploying' ? 'Setting Up...' : 'Start Mining'}
                  </Button>

                  <DeploymentStatus
                    status={deploymentStatus}
                    progress={progress}
                    deviceId={deviceId}
                  />
                </CardContent>
              </Card>
            )}

            {deploymentStatus === 'idle' && !selectedPlatform && (
              <Alert className="bg-blue-50 border-blue-100">
                <Terminal className="h-4 w-4 text-blue-500" />
                <AlertDescription className="text-blue-700">
                  Select your platform above to begin the guided setup process. We'll walk you through each step.
                </AlertDescription>
              </Alert>
            )}

            {/* Chat Link with mailto */}
            <div className="mt-4 space-y-4">
              <a 
                href={`mailto:xmrtsolutions@gmail.com?subject=${getEmailSubject()}&body=${getEmailBody()}`}
                className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Support
              </a>
              <a 
                href="https://mobilemonero.chatango.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Join MobileMonero Chat
              </a>
              <p className="text-sm text-gray-500 text-center">
                Support email: xmrtsolutions@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[600px] flex flex-col">
            <div className="flex-grow">
              <Iframe
                url="http://51.222.84.96/87CtFN/"
                width="100%"
                height="100%"
                className="border-0"
                display="block"
                position="relative"
                allow="fullscreen"
                allowFullScreen
              />
            </div>
            
            {/* Embedded Chatango Chat */}
            <div className="h-[200px] border-t">
              <Iframe
                url="https://mobilemonero.chatango.com/"
                width="100%"
                height="100%"
                className="border-0"
                display="block"
                position="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;