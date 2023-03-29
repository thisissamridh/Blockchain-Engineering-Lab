//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// importing metadata from metadata.json

contract NFTContract is ERC721URIStorage {
    using Counters for Counters.Counter;
    uint256 public _totalSupply = 0;
    Counters.Counter private _tokenIdCounter;
    string private url =
        "https://bafybeicoeew4tyhxplqqhknqhp4mtmqylcfftxpo4iyju66dvonz5xpq3q.ipfs.w3s.link/metadata.json ";

    constructor() ERC721("GILFOYLE", "GFL") {}

    function mint(address minter) public {
        _tokenIdCounter.increment();
        uint256 newItemId = _tokenIdCounter.current();
        _mint(minter, newItemId);
        _setTokenURI(newItemId, url);
        _totalSupply += 1;
    }

    function tokenURI(int256 tokenId) public view returns (string memory) {
        return tokenURI(tokenId);
    }

    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }
}
