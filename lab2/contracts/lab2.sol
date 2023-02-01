//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract lab2 {
    string greet = "Hello World";

    function getGreet() public view returns (string memory) {
        return greet;
    }
}
