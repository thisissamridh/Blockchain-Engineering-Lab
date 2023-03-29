//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract TutorialToken is ERC20 {
    string public name = "TutorialToken";
    string public symbol = "TT";
    uint8 public decimals = 18;
    uint256 public INITIAL_SUPPLY = 10000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY * 10**uint256(decimals));
    }
}
