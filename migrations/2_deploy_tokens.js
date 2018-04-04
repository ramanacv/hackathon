const EIP20 = artifacts.require('./EIP20.sol');

module.exports = (deployer) => {
  deployer.deploy(EIP20, 10000000, 'HackathonInABox', 0, 'HCK');
};
