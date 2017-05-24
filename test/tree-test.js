const expect = require('chai').expect;
const Tree = require('../lib/tree');

describe('Tree function test', function() {
  it('Should create a new Tree', () => {
    let testTree = new Tree(5);
    expect(testTree).to.be.an.instanceOf(Object);
    expect(testTree.value).to.equal(5);
    expect(testTree).to.have.property('children');
  })
})

describe('Tree add child function', function() {
  it('Should append a child node to an existing tree', () => {
    let testTree = new Tree(5);
    testTree.addChild(8)
    testTree.addChild(1)
    console.log(testTree)
    expect(testTree).to.have.property('children').that.equals(8)
  })
})
