import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { ethers } from "hardhat";

const deployFunction: DeployFunction = async function ({
   deployments,
   getNamedAccounts,
   network,
}: HardhatRuntimeEnvironment) {
    console.log('Running Burn Token script')

    // const { execute } = deployments
    const { deployer } = await getNamedAccounts()


    const { transactionHash } = (await deployments.execute(
        'Token',
        {from: deployer, log: true},
        'burn',
        ethers.parseEther('1')
    ))
    console.log('Burn Token at', transactionHash)
}

export default deployFunction

deployFunction.dependencies = []

deployFunction.tags = ['Burn']
