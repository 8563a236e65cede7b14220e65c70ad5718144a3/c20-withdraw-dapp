// NOTE:: if this doesn't work, use remix and the following in the arguments
// "address", 30000, 1, <blockenum>
// "address", "9007199254740991000"
const C20 = artifacts.require("./C20.sol");
const C20Vesting = artifacts.require("./C20Vesting.sol");
const config = require("../truffle.js")
const Promise = require("bluebird")
Promise.allNamed = require("../utils/sequentialPromiseNamed.js")

module.exports = (deployer, network, accounts) => {

    const fundingStartBlock = 0
    const fundingEndBlock = 50

    const fundWallet = accounts[0]
    const controlWallet = accounts[1]
    const user1 = accounts[2]
    const user2 = accounts[3]
    const user3 = accounts[4]
    const user4 = accounts[5]
    const user5 = accounts[6]
    const dummyVesting = accounts[9]

    deployer.deploy(C20, controlWallet, 300000, fundingStartBlock, fundingEndBlock, {from: fundWallet, gas: 5000000}).
    then(function(){
        console.log("1");
        return deployer.deploy(C20Vesting, C20.address, fundingEndBlock, {from: fundWallet});
    })
}