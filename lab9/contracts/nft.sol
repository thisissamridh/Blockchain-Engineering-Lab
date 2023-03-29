// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract rockPaperScissors is ERC1155 {
    uint256 public constant Gilfoyle = 1;

    constructor() ERC1155("https://bafybeicoeew4tyhxplqqhknqhp4mtmqylcfftxpo4iyju66dvonz5xpq3q.ipfs.w3s.link/metadata.json" ) {
        _mint(msg.sender, Gilfoyle, 1, "");
        
    }

    function uri(uint256 _tokenid) override public pure returns (string memory) {
        return string(
            abi.encodePacked(
                "https://ipfs.io/ipfs/bafybeicoeew4tyhxplqqhknqhp4mtmqylcfftxpo4iyju66dvonz5xpq3q/",
                Strings.toString(_tokenid),".json"
            )
        );
    }
}