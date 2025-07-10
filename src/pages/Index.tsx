
import React, { useState } from 'react';
import { Header } from '@/components/mining/Header';
import { PlatformCard } from '@/components/mining/PlatformCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Terminal, Smartphone, Monitor } from 'lucide-react';
import { Platform } from '@/components/mining/types';
import MiningTicker from '@/components/mining/MiningTicker';


const platforms: Platform[] = [
  {
    id: 'mobile',
    name: 'MobileMonero (XMRig) Mobile',
    icon: Smartphone,
    hashrate: 'Optimized for Mobile',
    requirements: ['Android 7.0+', '6GB RAM', 'ARM processor']
  },
  {
    id: 'pc',
    name: 'MobileMonero (XMRig) PC',
    icon: Monitor,
    hashrate: 'Full Desktop Performance',
    requirements: ['Windows/Linux/MacOS', '4GB RAM', 'ARM processor']
  }
];

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const handleStartProcess = () => {
    if (!selectedPlatform) return;
    
    if (selectedPlatform === 'mobile') {
      window.location.href = 'https://mobilemonero.com';
    } else if (selectedPlatform === 'pc') {
      window.location.href = 'https://xmrig.com/download';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 p-8 mb-6">
            {/* Background decorative elements */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse pointer-events-none" />
            
            {/* Content wrapper with proper z-index */}
            <div className="relative z-10 animate-fade-in">
              <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
                Mine Monero on Mobile
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Experience the power of MobileMonero - the premier mobile XMR mining solution by XMRT Solutions. Start mining cryptocurrency directly on your Android device.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center relative z-20">
                <Button 
                  size="lg"
                  variant="white-solid"
                  onClick={() => window.open('https://mobilemonero.com', '_blank')}
                >
                  <Smartphone className="h-5 w-5 mr-2" />
                  Download MobileMonero
                </Button>
                <Button 
                  size="lg"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-900 transition-all duration-200 font-medium"
                  onClick={() => window.open('https://xmrt.io', '_blank')}
                >
                  Learn More at XMRT.io
                </Button>
              </div>
            </div>
          </div>

          {/* MobileMonero Community & Stats */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">MobileMonero Community Stats</h2>
              <p className="text-gray-400">Real-time mining statistics from the MobileMonero network</p>
            </div>
            <div className="w-full">
              <MiningTicker />
            </div>
          </div>

          {/* Main Platform Selection */}
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
                    <div className="text-center mb-4">
                      <p className="text-sm text-purple-400 font-medium">Official MobileMonero Distribution</p>
                    </div>
                    <Button 
                      variant="purple-gradient"
                      className="w-full"
                      onClick={handleStartProcess}
                    >
                      <Terminal className="h-4 w-4 mr-2" />
                      Download MobileMonero
                    </Button>
                    <p className="text-xs text-gray-400 text-center">
                      Powered by XMRT Solutions • Visit XMRT.io
                    </p>
                  </CardContent>
                </Card>
              )}

              {!selectedPlatform && (
                <Alert className="bg-gray-900/80 border-purple-500">
                  <Terminal className="h-4 w-4 text-purple-500" />
                  <AlertDescription className="text-gray-300">
                    Select a platform above to download the official MobileMonero mining app. Start earning XMR on your device today!
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          {/* Chat Room Section */}
          <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-[600px]">
            <iframe
              src="https://mobilemonero.chatango.com/"
              width="100%"
              height="100%"
              className="border-0"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <Header />
        </div>
      </div>
    </div>
  );
};

export default Index;
