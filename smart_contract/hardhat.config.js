// https://eth-goerli.g.alchemy.com/v2/_NaLqvkLeBTHLVH1IH4L1hpkoXW0raCT
// https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv
// https://eth-rinkeby.alchemyapi.io/v2/SzXyeUDKBNqa7qM5ZFpZwoouoKwBgazs

require('@nomiclabs/hardhat-waffle');

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/_NaLqvkLeBTHLVH1IH4L1hpkoXW0raCT",
      accounts: ['1ef46a1953d39e168fbd474ffa43620617a183d6f7839bc19b6f1080bb98f684']
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
