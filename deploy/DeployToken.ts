import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const deployFunction: DeployFunction = async function ({
   deployments,
   getNamedAccounts,
   network,
}: HardhatRuntimeEnvironment) {
    console.log('Running Token deploy script')

    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()


    const { address } = await deploy('Token', {
        from: deployer,
        log: true,
        deterministicDeployment: false,
        contract: 'Token',
        args: ["Mock Token", "MTK"],
    })

    console.log('Token deployed at', address)
}

export default deployFunction

deployFunction.dependencies = []

deployFunction.tags = ['Token']
