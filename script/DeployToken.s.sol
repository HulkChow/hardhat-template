// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {Script, console} from "forge-std/Script.sol";
import {Token} from "../contracts/Token.sol";


// forge script --broadcast --rpc-url $localhost --private-key="ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" script/DeployToken.s.sol:DeployToken
contract DeployToken is Script {

    modifier broadcast() {
        vm.startBroadcast(msg.sender);
        _;
        vm.stopBroadcast();
    }

    function setUp() public {}

    function run() public {
        deployToken();
    }

    function deployToken() public broadcast {
        Token token = new Token("Mock Token", "MTK");
        console.log("Token deployed at %s", address(logic));
    }
}
