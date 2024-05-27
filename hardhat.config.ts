import { HardhatUserConfig } from 'hardhat/config'
import "@nomicfoundation/hardhat-foundry";
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-verify'
import 'hardhat-contract-sizer'
import 'hardhat-deploy'
import * as dotenv from 'dotenv'
dotenv.config({ path: '.env' })


const accounts = [
  (process.env.MNEMONIC as string) || '0000000000000000000000000000000000000000000000000000000000000000',
]

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      bsc: process.env.BSCSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
    },
    customChains: [
      {
        network: 'polygon-zkevm',
        chainId: 1101,
        urls: {
          apiURL: 'https://api-zkevm.polygonscan.com/api',
          browserURL: 'https://zkevm.polygonscan.com/',
        },
      }
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
      forking: {
        enabled: process.env.FORKING === 'true',
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      },
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 1,
    },
    optimism: {
      url: `https://mainnet.optimism.io`,
      accounts,
      chainId: 10,
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts,
      chainId: 56,
    },
    okexchain: {
      url: `https://exchainrpc.okex.org/`,
      accounts,
      chainId: 66,
    },
    polygon: {
      url: `https://polygon-rpc.com`,
      accounts,
      chainId: 137,
    },
    fantom: {
      url: `https://rpc.ftm.tools/`,
      accounts,
      chainId: 250,
    },
    dogechain: {
      url: `https://rpc.dogechain.dog/`,
      accounts,
      chainId: 2000,
    },
    base: {
      url: `https://mainnet.base.org`,
      accounts,
      chainId: 8453,
    },
    linea: {
      url: `https://linea-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 59144,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      chainId: 11155111,
    },
    bouncebit: {
      url: `https://fullnode-mainnet.bouncebitapi.com`,
      accounts,
      chainId: 6001,
    },
    bouncebit_test: {
      url: `https://fullnode-testnet.bouncebitapi.com`,
      tags: ['mockWBB', 'mockLinkToken'],
      accounts,
      chainId: 6000,
    },
    localhost: {
      url: `http://localhost:8545`,
      tags: ['mockWBB', 'mockAggregator', 'mockLinkToken'],
      accounts,
      chainId: 31337,
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.8.23',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.4.18',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.7.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  // contractSizer: {
  //   alphaSort: true,
  //   disambiguatePaths: false,
  //   runOnCompile: true,
  //   strict: true,
  // },
}

export default config
