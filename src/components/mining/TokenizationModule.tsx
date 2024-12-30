import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const TokenizationModule = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Check if MetaMask is already connected
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error('Error checking connection:', error);
      }
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        setIsConnecting(true);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        toast({
          title: 'Wallet Connected',
          description: 'Successfully connected to MetaMask wallet.',
        });
      } catch (error) {
        toast({
          title: 'Connection Failed',
          description: 'Failed to connect to MetaMask wallet.',
          variant: 'destructive',
        });
      } finally {
        setIsConnecting(false);
      }
    } else {
      toast({
        title: 'MetaMask Not Found',
        description: 'Please install MetaMask to use this feature.',
        variant: 'destructive',
      });
    }
  };

  const createToken = async () => {
    if (!account || !tokenName || !tokenSymbol) return;

    try {
      toast({
        title: 'Creating Token',
        description: 'Please confirm the transaction in MetaMask.',
      });

      // Basic ERC20 token contract deployment would go here
      // This is a placeholder for actual contract deployment
      setTimeout(() => {
        toast({
          title: 'Token Created',
          description: `Successfully created ${tokenName} (${tokenSymbol})`,
        });
      }, 2000);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create token.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900/90 border-purple-500">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Asset Tokenization</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!account ? (
          <Button
            onClick={connectWallet}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
            disabled={isConnecting}
          >
            {isConnecting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              'Connect MetaMask'
            )}
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="text-sm text-gray-400">
              Connected: {account.slice(0, 6)}...{account.slice(-4)}
            </div>
            <Input
              placeholder="Token Name"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              className="bg-gray-800 border-gray-700"
            />
            <Input
              placeholder="Token Symbol"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              className="bg-gray-800 border-gray-700"
            />
            <Button
              onClick={createToken}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
              disabled={!tokenName || !tokenSymbol}
            >
              Create Token
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TokenizationModule;