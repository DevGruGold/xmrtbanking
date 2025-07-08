import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId
const projectId = '6054bd6688c6860ed806775db1c24f15'

// Create wagmiConfig
const metadata = {
  name: 'MobileMonero by XMRT Solutions',
  description: 'The premier mobile Monero mining solution',
  url: 'https://mobilemonero.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia],
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
})