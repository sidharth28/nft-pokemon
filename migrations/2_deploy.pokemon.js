const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Pokemon = artifacts.require('Pokemon');

module.exports = async function (deployer) {

    let name = "Pokemon";
    let symbol = "POK";
    let baseTokenURI = "https://my-json-server.typicode.com/sidharth28/truffle-upgrade-openZepline-template/pokemons/";

  let p = await deployProxy(Pokemon, [name,symbol,baseTokenURI], { deployer, initializer: 'initialize'});

  console.log(p.address);

};