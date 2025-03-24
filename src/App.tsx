
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Modal } from '@web3modal/react';
import { config, web3ModalConfig } from './lib/web3config';
import { WagmiConfig } from '@web3modal/ethereum';
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WagmiConfig config={config}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </WagmiConfig>
    <Web3Modal projectId={web3ModalConfig.projectId} ethereumClient={web3ModalConfig.ethereum} />
  </QueryClientProvider>
);

export default App;
