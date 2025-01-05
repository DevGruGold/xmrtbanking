import React, { useState } from 'react';
import { Header } from '@/components/mining/Header';
import { PlatformCard } from '@/components/mining/PlatformCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Terminal, Wallet, Coins } from 'lucide-react';
import { Platform } from '@/components/mining/types';
import MiningTicker from '@/components/mining/MiningTicker';
import TokenizationModule from '@/components/mining/TokenizationModule';

const platforms: Platform[] = [
  {
    id: 'contracts',
    name: 'Smart Contracts',
    icon: Terminal,
    hashrate: 'Automated',
    requirements: ['MetaMask Wallet', 'ETH for gas']
  },
  {
    id: 'payments',
    name: 'Payment Systems',
    icon: Wallet,
    hashrate: 'Instant',
    requirements: ['XMRT Account', 'KYC Verification']
  }
];

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [deviceId] = useState(`xmrt_${Math.random().toString(36).substring(7)}`);

  const getEmailSubject = () => {
    return encodeURIComponent('XMRT Platform Access Request');
  };

  const getEmailBody = () => {
    const platform = selectedPlatform ? platforms.find(p => p.id === selectedPlatform)?.name : 'Not selected';
    return encodeURIComponent(`Hello XMRT Solutions,

I'm interested in accessing the ${platform} platform.
Account ID: ${deviceId}

Please assist me with the setup process.

Best regards`);
  };

  const handleStartProcess = () => {
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
                Own Your Digital Future
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Create, tokenize, and manage your digital assets with XMRT's comprehensive suite of blockchain solutions.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse" />
          </div>

          <Header />

          {/* Tokenization Module */}
          <div className="w-full max-w-md mx-auto">
            <TokenizationModule />
          </div>

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
                      onClick={handleStartProcess}
                    >
                      <Coins className="h-4 w-4 mr-2" />
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              )}

              {!selectedPlatform && (
                <Alert className="bg-gray-900/80 border-purple-500">
                  <Terminal className="h-4 w-4 text-purple-500" />
                  <AlertDescription className="text-gray-300">
                    Select a platform above to begin your journey into digital asset ownership with XMRT Solutions.
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-[600px]">
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