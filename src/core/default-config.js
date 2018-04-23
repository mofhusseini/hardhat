module.exports = {
  solc: {
    optimizer: {
      enabled: false,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545
    }
  }
};
