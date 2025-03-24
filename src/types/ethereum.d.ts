
interface Window {
  ethereum?: {
    request: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (eventName: string, callback: (...args: any[]) => void) => void;
    removeListener: (eventName: string, callback: (...args: any[]) => void) => void;
    isMetaMask?: boolean;
  };
}

// Add Web3Modal types
declare module '@web3modal/ethereum';
declare module '@web3modal/react';
