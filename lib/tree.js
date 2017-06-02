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

Tree.prototype.add = function(val, parentVal) {
  let newNode = new Node(val)

  if(!this.root) {
    this,root = newNode
    return
  }
  this.preOrder(node => {
    if(node.val === parentVal) {
      node.children.push(newNode)
      return
    }
  })
}

Tree.prototype.preOrder = function(cb) {
  _walk(this.root)

  function _walk(node) {
    cb(node)
    node.children.forEach(_walk)
  }
}

Tree.prototype.appendChild = function() {

}

Tree.prototype.removeChild = function() {

}
