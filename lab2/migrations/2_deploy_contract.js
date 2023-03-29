const labContract = artifacts.require('Lab2');
const TutorialToken = artifacts.require('TutorialToken');
module.exports = function (deployer) {
  deployer.deploy(labContract);
  deployer.deploy(TutorialToken);
};
