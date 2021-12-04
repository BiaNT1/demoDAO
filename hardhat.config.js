require("@nomiclabs/hardhat-waffle");
require("hardhat-typechain");
require("@nomiclabs/hardhat-web3");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.4",
  paths: {
    artifacts: "./ethereum/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/b9757157fcc44f8bb15ef5862439c626",
      accounts: [
        "0x5211429a23930d5e33a3fd0f33901625f80fdb98381e5c1b90cb7285f336ca36",
      ],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/b9757157fcc44f8bb15ef5862439c626`,
      accounts: [
        "0x5211429a23930d5e33a3fd0f33901625f80fdb98381e5c1b90cb7285f336ca36",
      ],
    },
  },
};
