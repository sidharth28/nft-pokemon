pragma solidity ^0.8.0;


import "@openzeppelin/contracts-upgradeable/token/ERC721/presets/ERC721PresetMinterPauserAutoIdUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Pokemon is Initializable,ERC721PresetMinterPauserAutoIdUpgradeable {

    function initialize(string memory name,string memory symbol, string memory baseTokenURI) override initializer public {

        __ERC721PresetMinterPauserAutoId_init(name, symbol, baseTokenURI);

     }
     
   
}
