c20Instance = await C20.deployed();
vestingInstance = await C20Vesting.deployed()
fundWallet = await c20Instance.fundWallet.call()
c20Instance.setVestingContract(vestingInstance.address, {from: fundWallet})
await c20Instance.vestingContract.call()