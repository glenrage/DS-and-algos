'use strict';

const expect = require('chai').expect;

const BST = require('../lib/bst2.js');
let bst = new BST(30);

describe.only('Testing bst methods', function() {

  describe('Create a new tree', () => {
    it('should create a new tree', () => {
      expect(bst).to.exist;
    });

    it('should be an object', () => {
      expect(bst).to.be.an.instanceOf(Object);
    });

    it('should have a root of 30', () => {
      expect(bst.val).to.equal(30);
    });
  });

  it('should add nodes when the method is called', () => {
    bst.appendChild(18);
    bst.appendChild(35);
    bst.appendChild(32);
    bst.appendChild(14);
    bst.appendChild(1);
    bst.appendChild(6);
    bst.appendChild(19);
    bst.appendChild(8);
    console.log(bst);

    expect(bst).to.have.valueOf(18);
    expect(bst).to.have.valueOf(75);
    expect(bst).to.have.valueOf(32);
    expect(bst).to.have.valueOf(84);
  });

  it('should return hegiht ', () => {
    expect(bst.height(bst)).to.equal(6);
  });

  describe('array bst method', () => {
    let array = new BST(33);
    BST.fromArray(array, [3, 5, 10, 15, 23, 99]);
    console.log(array);

    it('should contains node of the array', () => {
      expect(array.contains(33)).to.be.true;
    })

    it('should find a value', () => {
      expect(bst.find(10)).to.have.valueOf(10)
    })


  });


});
