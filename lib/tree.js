const Tree = module.exports = exports = function(value) {
  let node = new Node(value)
  this._root = root
}

function Node(value){
  this.value = value
  this.parent = null
  this.children = []
}

Tree.prototype.addChild = function(value) {
  const child = new Tree(value)
  this.children = this.children.push(child)
  return child
}

Tree.prototype.appendChild = function() {

}

Tree.prototype.removeChild = function() {

}
