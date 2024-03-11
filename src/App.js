import logo from './logo.svg';
import './App.css';

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import Connect from './Connect';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.PROJECT_ID

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: process.env.URL, // origin must match your domain & subdomain
  icons: [process.env.ICONS]
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId,
})

function App() {
  return (
    <div className="App">
      <Connect />
    </div>
  );
}

export default App;
