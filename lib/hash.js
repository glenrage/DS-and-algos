'use strict';

const HashTable = module.exports = exports = function (size) {
  this.values = {}
  this.numberOfValues = 0
  this.size = size
}

HashTable.prototype.add = function(key, value) {
  var hash = this.calculateHash(key)
  if(!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {}
  }
  if(!this.values[hash].hasOwnProperty(key)) {
    this.numberOfValues++
  }
  this.values[hash][key] = value
}

HashTable.prototype.remove = function (key) {
  var hash = this.calculateHash(key)
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    delete this.values[hash][key]
    this.numberOfValues--
  }
}

HashTable.prototype.calculateHash = function(key) {
  return key.toString().length % this.size
}

HashTable.prototype.search = function(key) {
  var hash = this.calculateHash(key)
  if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key]
  } else {
    return null
  }
}

HashTable.prototype.length = function () {
  return this.numberOfValues
}

HashTable.prototype.print = function () {
  var string = ''
  for(var value in this.values) {
    for(var key in this.values[value]) {
      string += this.values[value][key] + ' '
    }
  }
  console.log(string.trim());
}
//
// var ht = new HashTable(10)
// ht.add('glen', 1)
// ht.add('paige', 2)
// ht.add('alex', 3)
// ht.add('lisa', 4)
// ht.add('chuck', 5)
// ht.print()
// console.log('length :', ht.length());
// console.log(ht.search('lisa'));
// ht.remove('paige')
// ht.print()
//
// console.log(ht);
