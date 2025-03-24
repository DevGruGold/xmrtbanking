
import { configureChains, createConfig } from '@web3modal/ethereum'
import { mainnet, sepolia } from '@web3modal/ethereum'

// Configure chains & providers
export const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [
    // We're using the environment variables that are already in place
    publicProvider()
  ]
)

// Create wagmi config
export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

// Create Web3Modal configuration
export const web3ModalConfig = {
  projectId: 'YOUR_PROJECT_ID', // This would be replaced by the actual env variable
  theme: 'dark',
  accentColor: 'purple',
  ethereum: {
    appName: 'Asset Tokenization Platform',
  },
}
