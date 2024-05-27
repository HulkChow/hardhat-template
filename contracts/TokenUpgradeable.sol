// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract TokenUpgradeable is ERC20Upgradeable {

    constructor() {
        _disableInitializers();
    }

    function initialize(string memory name, string memory symbol) public virtual initializer {
        __ERC20_init(name, symbol);
        _mint(msg.sender, 1_000_000 ether);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
