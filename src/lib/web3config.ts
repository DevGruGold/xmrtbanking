
import { configureChains, createConfig } from '@web3modal/ethereum'
import { mainnet, sepolia } from '@web3modal/ethereum'
import { publicProvider } from '@web3modal/ethereum'

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
  projectId: '6054bd6688c6860ed806775db1c24f15', // Using the provided project ID
  theme: 'dark',
  accentColor: 'purple',
  ethereum: {
    appName: 'Asset Tokenization Platform',
  },
}
