import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const deployFunction: DeployFunction = async function ({
   deployments,
   getNamedAccounts,
   network,
}: HardhatRuntimeEnvironment) {
    console.log('Running TokenUpgradeable deploy script')

    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()


    const { address } = await deploy('TokenUpgradeable', {
        from: deployer,
        log: true,
        deterministicDeployment: false,
        contract: 'TokenUpgradeable',
        args: [],
        proxy: {
            owner: deployer,
            proxyContract: 'OpenZeppelinTransparentProxy',
            execute: {
                init: {
                    methodName: 'initialize',
                    args: ["Mock Token", "MTK"],
                }
            }
        }
    })

    console.log('TokenUpgradeable deployed at', address)
}

export default deployFunction

deployFunction.dependencies = []

deployFunction.tags = ['TokenUpgradeable']
