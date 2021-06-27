const { expect } = require('chai');
const truffleAssert = require('truffle-assertions');


const { deployProxy,upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const pok = artifacts.require('Pokemon');

let name = "Pokemon";
let symbol = "POK";
let baseTokenURI = "https://my-json-server.typicode.com/sidharth28/truffle-upgrade-openZepline-template/pokemons/";
const firstTokenId = 0;

  contract('Pokemon721Token', function ([_, minter, other]) {

  
  
    beforeEach(async function () {
      this.p = await deployProxy(pok,[name,symbol,baseTokenURI],{  initializer: 'initialize' });
    })
  
    it('name should be equal to '+name, async function () {
      expect((await this.p.name()).toString()).to.equal(name);
    })


    it('symbol should be equal to '+symbol, async function () {
      expect((await this.p.symbol()).toString()).to.equal(symbol);
    })

  
    it('should mint i.e create unique pokemon ', async function () {

      
      await this.p.mint(other);
      expect((await this.p.ownerOf(firstTokenId)).toString()).to.equal(other);

    });

    it('only owner of the contract can mint unique pokemon ', async function () {
        
      await truffleAssert.reverts(this.p.mint(other, {
        'from': other
      }));
      
    });


    it('owner of tokenId : 0 , should be : ' + other, async function () {

      await this.p.mint(other);
      expect((await this.p.ownerOf(firstTokenId)).toString()).to.equal(other);

    })


    it('Pokemon cannot be minted if contract is paused ' , async function () {
     
      await this.p.pause();

      await truffleAssert.reverts(this.p.mint(other));

    })



  })