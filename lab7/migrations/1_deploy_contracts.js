const lab7Contract = artifacts.require('NFTcontract');
module.exports = function (deployer) {
  deployer.deploy(lab7Contract);
};
