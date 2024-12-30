import React, { useState } from 'react';
import { Header } from '@/components/mining/Header';
import { PlatformCard } from '@/components/mining/PlatformCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Terminal, Download, Laptop, Smartphone } from 'lucide-react';
import { Platform } from '@/components/mining/types';
import MiningTicker from '@/components/mining/MiningTicker';

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
  const [deviceId] = useState(`xmrt_${Math.random().toString(36).substring(7)}`);

  const getEmailSubject = () => {
    return encodeURIComponent('XMRT Mining Setup Request');
  };

  const getEmailBody = () => {
    const platform = selectedPlatform ? platforms.find(p => p.id === selectedPlatform)?.name : 'Not selected';
    return encodeURIComponent(`Hello XMRT Solutions,

I'm interested in setting up mining on my ${platform} device.
Device ID: ${deviceId}

Please assist me with the setup process.

Best regards`);
  };

  const handleStartMining = () => {
    if (!selectedPlatform) return;
    window.location.href = `mailto:xmrtsolutions@gmail.com?subject=${getEmailSubject()}&body=${getEmailBody()}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 mb-6">
            <div className="w-full mb-4">
              <MiningTicker />
            </div>
            <div className="relative z-10 animate-fade-in">
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                Join the Future of Asset Ownership
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Be part of the revolution in cryptocurrency mining. Start mining Monero directly from your mobile device or desktop computer.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse" />
          </div>

          <Header />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
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
                <Card className="bg-gray-900/90 border-purple-500 border-2">
                  <CardContent className="p-6 space-y-4">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-medium"
                      onClick={handleStartMining}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Start Mining
                    </Button>
                  </CardContent>
                </Card>
              )}

              {!selectedPlatform && (
                <Alert className="bg-gray-900/80 border-purple-500">
                  <Terminal className="h-4 w-4 text-purple-500" />
                  <AlertDescription className="text-gray-300">
                    Select your platform above to begin the setup process. We'll help you get started right away.
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-[800px]">
                <iframe
                  src="https://mobilemonero.chatango.com/"
                  width="100%"
                  height="100%"
                  className="border-0"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;