const Node = function(val) {
  this.value = val;
  this.children = [];
};

const Tree = function(){
  this.root = null;
};

Tree.prototype.add = function(val, parentVal) {
  let newNode = new Node(val);

  if(!this.root && !parentVal) {
    this.root = newNode;
    return;
  }

  this.preOrder(node => {
    if(node.value === parentVal) {
      node.children.push(newNode);
      return;
    }
  });
};

Tree.prototype.preOrder = function(cb) {
  _walk(this.root);

  function _walk(node) {
    node.children.forEach(_walk);
    cb(node);
  }
};

Tree.prototype.prune = function(val) {
  if(!val) return new Error('Needs a value');
  if(!root) return;
  let current = this.root;
  let parent, index;

  this.preOrder(node => {
    current.children.forEach((child, idx) => {
      if(child.value === val) {
        index = idx;
        parent = current;
        parent.children.splice(index, 1);
        return;
      }
      console.log('current', current);
      current = node;
    });
  });
};

Node.prototype.appendChild = function(node) {
  if(!(node instanceOf Node)) {
    throw new Error('node must be of tree type')
  }

  this.children.push(node)
}
