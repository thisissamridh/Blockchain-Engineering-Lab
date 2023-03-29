const MyToken = artifacts.require('MyToken');

module.exports = (deployer) => {
  deployer.deploy(MyToken, 'MyToken', 'MYT', 100000);
};
