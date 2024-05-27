// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {Test, console} from "forge-std/Test.sol";
import {Token} from "../contracts/Token.sol";


contract BounceChemistryTest is Test {
    Token public token;

    uint256 internal PrivKeyOwner = 0xAB;

    address internal owner;

    function setUp() public {
        owner = vm.addr(PrivKeyOwner);

        token = new Token("Mock Token", "MTK");
    }

    function testBalance() public {
        assertEq(token.balanceOf(address(this)), 10000e18);

        token.transfer(address(0xdEaD), 10000e18);
        assertEq(token.balanceOf(address(this)), 0);
        assertEq(token.balanceOf(address(0xdEaD)), 10000e18);
    }

}