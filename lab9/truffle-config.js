const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = 'cddcb01aea8b4c7a9390e9fa671305e9';
const InfuraApiKey = `https://goerli.infura.io/v3/${infuraKey}`;
const fs = require('fs');
const mnemonic =
  'case price climb solution roof bid bless square half stock mountain economy elite install soda';

module.exports = {


  networks: {

    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    matic: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc.ankr.com/polygon_mumbai`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, InfuraApiKey),
      network_id: '5', // This network is yours, in the cloud.
      production: 4465030, // Treats this network as if it was a public net. (default: false)
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: '0.8.4', // Fetch exact version from solc-bin (default: truffle's version)
   
    },
  },
};
