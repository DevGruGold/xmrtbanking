import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { mainnet, sepolia } from 'wagmi/chains'

// 1. Get projectId from environment or use provided one
const projectId = '6054bd6688c6860ed806775db1c24f15'

// 2. Create wagmiConfig
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
})