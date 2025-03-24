import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, Copy, ExternalLink, Upload } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useConnect, useDisconnect } from '@web3modal/ethereum';

const TokenizationModule = () => {
  const [step, setStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenSupply, setTokenSupply] = useState('1000000');
  const [tokenDescription, setTokenDescription] = useState('');
  const [assetUrl, setAssetUrl] = useState('');
  const [tokenAddress, setTokenAddress] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  
  // Web3Modal hooks
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // Simulate file upload success
      const fileName = e.target.files[0].name;
      setAssetUrl(`https://example.com/assets/${fileName}`);
      toast({
        title: 'File Uploaded',
        description: `${fileName} has been uploaded successfully.`,
      });
    }
  };

  const validateForm = () => {
    if (!tokenName) {
      toast({
        title: 'Missing Information',
        description: 'Please enter a token name.',
        variant: 'destructive',
      });
      return false;
    }
    if (!tokenSymbol) {
      toast({
        title: 'Missing Information',
        description: 'Please enter a token symbol.',
        variant: 'destructive',
      });
      return false;
    }
    if (!tokenSupply || isNaN(Number(tokenSupply)) || Number(tokenSupply) <= 0) {
      toast({
        title: 'Invalid Supply',
        description: 'Please enter a valid token supply number greater than 0.',
        variant: 'destructive',
      });
      return false;
    }
    return true;
  };

  const createToken = async () => {
    if (!address || !validateForm()) return;

    try {
      setIsProcessing(true);
      toast({
        title: 'Creating Token',
        description: 'Your token is being created. Please wait...',
      });

      // Simulate blockchain delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Generate a fake token address
      const fakeAddress = `0x${Array(40).fill(0).map(() => 
        Math.floor(Math.random() * 16).toString(16)).join('')}`;
      
      setTokenAddress(fakeAddress);
      setStep(1);
      
      toast({
        title: 'Token Created',
        description: `Successfully created ${tokenName} (${tokenSymbol})`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create token.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAssetTokenization = async () => {
    if (!tokenAddress) return;
    
    try {
      setIsProcessing(true);
      toast({
        title: 'Linking Asset',
        description: 'Connecting your asset to the token...',
      });

      // Simulate blockchain delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStep(2);
      
      toast({
        title: 'Asset Tokenized',
        description: 'Your asset has been successfully tokenized!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to tokenize asset.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    setIsCopied(true);
    toast({
      title: 'Copied',
      description: 'Token address copied to clipboard.',
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const resetProcess = () => {
    setStep(0);
    setTokenName('');
    setTokenSymbol('');
    setTokenSupply('1000000');
    setTokenDescription('');
    setAssetUrl('');
    setTokenAddress('');
  };

  const connectWallet = async () => {
    try {
      await open();
      if (isConnected) {
        toast({
          title: 'Wallet Connected',
          description: 'Successfully connected to wallet.',
        });
      }
    } catch (error) {
      toast({
        title: 'Connection Failed',
        description: 'Failed to connect wallet.',
        variant: 'destructive',
      });
    }
  };

  const renderStep0 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="tokenName" className="text-white">Token Name</Label>
        <Input
          id="tokenName"
          placeholder="e.g. My Digital Asset Token"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tokenSymbol" className="text-white">Token Symbol</Label>
        <Input
          id="tokenSymbol"
          placeholder="e.g. MDAT (3-5 characters)"
          value={tokenSymbol}
          onChange={(e) => setTokenSymbol(e.target.value.toUpperCase().slice(0, 5))}
          className="bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tokenSupply" className="text-white">Initial Supply</Label>
        <Input
          id="tokenSupply"
          type="number"
          placeholder="e.g. 1000000"
          value={tokenSupply}
          onChange={(e) => setTokenSupply(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tokenDescription" className="text-white">Description (Optional)</Label>
        <Textarea
          id="tokenDescription"
          placeholder="Describe your token and its purpose"
          value={tokenDescription}
          onChange={(e) => setTokenDescription(e.target.value)}
          className="bg-gray-800 border-gray-700 text-white"
        />
      </div>
      <Button
        onClick={createToken}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
        disabled={isProcessing || !tokenName || !tokenSymbol}
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating Token...
          </>
        ) : (
          'Create Token'
        )}
      </Button>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="p-4 border border-green-500 rounded-lg bg-green-500/10 flex items-center space-x-2">
        <CheckCircle className="h-5 w-5 text-green-500" />
        <p className="text-green-400">Token created successfully!</p>
      </div>
      
      <div className="space-y-2">
        <Label className="text-white">Token Address</Label>
        <div className="flex">
          <Input
            value={tokenAddress}
            readOnly
            className="bg-gray-800 border-gray-700 rounded-r-none text-white"
          />
          <Button
            onClick={copyToClipboard}
            className="rounded-l-none"
            variant="outline"
          >
            {isCopied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label className="text-white">Upload Asset to Tokenize</Label>
        <div className="flex items-center justify-center border-2 border-dashed border-gray-700 bg-gray-800 p-4 rounded-lg">
          <label className="flex flex-col items-center justify-center w-full cursor-pointer">
            <Upload className="h-10 w-10 text-gray-500 mb-2" />
            <span className="text-sm text-gray-300">Click to upload or drag and drop</span>
            <span className="text-xs text-gray-400">PNG, JPG, PDF, MP3, MP4 (max 100MB)</span>
            <input 
              type="file" 
              className="hidden" 
              onChange={handleFileUpload} 
            />
          </label>
        </div>
      </div>
      
      {assetUrl && (
        <div className="space-y-2">
          <Label className="text-white">Asset URL</Label>
          <Input
            value={assetUrl}
            readOnly
            className="bg-gray-800 border-gray-700 text-white"
          />
        </div>
      )}
      
      <Button
        onClick={handleAssetTokenization}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
        disabled={isProcessing || !assetUrl}
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Tokenizing Asset...
          </>
        ) : (
          'Tokenize Asset'
        )}
      </Button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="p-4 border border-green-500 rounded-lg bg-green-500/10 text-center">
        <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
        <h3 className="text-lg font-medium text-green-400">Asset Successfully Tokenized!</h3>
        <p className="text-sm text-gray-300">Your digital asset is now tokenized on the blockchain</p>
      </div>
      
      <div className="space-y-2">
        <Label className="text-white">Token Details</Label>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-300">Name:</span>
            <span className="text-white">{tokenName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Symbol:</span>
            <span className="text-white">{tokenSymbol}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Supply:</span>
            <span className="text-white">{tokenSupply}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Address:</span>
            <div className="flex items-center">
              <span className="text-xs truncate max-w-[120px] text-white">{tokenAddress}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="ml-1 h-6 w-6 p-0" 
                onClick={copyToClipboard}
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2">
        <Button
          onClick={() => window.open(`https://etherscan.io/token/${tokenAddress}`, '_blank')}
          className="flex-1 bg-gray-800 hover:bg-gray-700 text-white"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View on Explorer
        </Button>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600">
              Manage Token
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 bg-gray-900 border-gray-700">
            <div className="space-y-2">
              <h4 className="font-medium text-center text-white">Token Management</h4>
              <p className="text-xs text-gray-300 text-center">Additional management features will be available in the full version.</p>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="text-xs h-8 text-gray-300" disabled>Transfer</Button>
                <Button variant="outline" className="text-xs h-8 text-gray-300" disabled>Mint</Button>
                <Button variant="outline" className="text-xs h-8 text-gray-300" disabled>Burn</Button>
                <Button variant="outline" className="text-xs h-8 text-gray-300" disabled>Trade</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      
      <Button
        onClick={resetProcess}
        variant="outline"
        className="w-full border-purple-600 text-purple-400 hover:bg-purple-900/20"
      >
        Create Another Token
      </Button>
    </div>
  );

  if (!isConnected) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gray-900/90 border-purple-500">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">Asset Tokenization</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-white text-sm text-center mb-4">
            Connect your wallet to create and manage tokenized digital assets on the blockchain.
          </p>
          <Button
            onClick={connectWallet}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            Connect Wallet
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-900/90 border-purple-500">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-white">Asset Tokenization</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-white text-center mb-2">
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => disconnect()} 
            className="ml-2 text-xs text-gray-400 hover:text-white"
          >
            Disconnect
          </Button>
        </div>
        
        {step === 0 && renderStep0()}
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
      </CardContent>
    </Card>
  );
};

export default TokenizationModule;
