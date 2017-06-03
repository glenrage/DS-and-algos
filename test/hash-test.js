// const expect = require('chai').expect
// const HashTable = require('../lib/hash')
//
// describe('Hash Table functionality', function () {
//   let ht;
//   before('create new hash table', function(done) {
//     ht = new HashTable(10)
//     ht.add('first', 1)
//     ht.add('second', 2)
//     ht.add('third', 3)
//     ht.add('fourth', 4)
//     ht.add('fifth', 5)
//     ht.print()
//     done()
//   })
//   it('should create a new hash table', () => {
//     expect(ht).to.be.instanceOf(Object)
//   })
//   it('should add a value', () => {
//     ht.add('sixth', 6)
//     expect(ht.values[5].sixth).to.equal(6)
//   })
//   it('should remove a value', ()=> {
//     ht.remove('sixth')
//     expect(ht.values[5].sixth).to.equal(undefined)
//   })
// })
