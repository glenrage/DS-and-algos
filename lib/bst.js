'use strict';

const BST = function() {
  this.root = null;
};

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function bstFromArray(nums) {
  function recurse(nums, start, end) {
    if(start > end) {
      return null;
    }
    let mid = Math.floor((end + start) / 2);
    let root = new Node(nums[mid]);
    root.left = recurse(nums, start, mid - 1);
    root.right = recurse(nums, mid + 1, end);
    return root;
  }
  return recurse(nums, 0, nums.length - 1);
}

BST.prototype.insertNode = function(data) {
  let node =  {
    data: data,
    left: null,
    right: null,
  };
  let currentNode;

  if(!this.root) {
    this.root = node;
  } else {
    currentNode = this.root;
    while(currentNode) {
      if(data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = node;
          break;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if(!currentNode.right) {
          currentNode.right = node;
          break;
        }
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
  }
};

BST.prototype.removeNode = function(data) {
  let that = this;
  let removeNode = function(node, data) {
    if(!node) {
      return null;
    }

    if(data === node.data) {
      if(!node.left && !node.right) {
        return null;
      }
      if(!node.left){
        return node.right;
      }
      if(!node.right) {
        return node.left;
      }
      let temp = that.getMin(node.right);
      node.data = temp;
      node.right = removeNode(node.right, temp);
      return node;
    } else if(data < node.data) {
      node.left = removeNode(node.left, data);
      return node;
    } else {
      node.right = removeNode(node.right, data);
      return node;
    }
  };
  this.root = removeNode(this.root, data);
};

BST.prototype.contains = function(data) {
  let current = this.root;
  while(current) {
    if(data === current.data) {
      return true;
    }
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return false;
};

BST.prototype.min = function(node) {
  if(!node) {
    node = this.root;
  }
  while(node.left) {
    node = node.left;
  }
  return node.data;
};

BST.prototype.max = function (node) {
  if(!node) {
    node = this.root;
  }
  while(node.right) {
    node = node.right;
  }
  return node.data;
};

BST.prototype.find = function (data) {
  let current = this.root;
  while(current.data != data) {
    if(data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
    if(current == null) {
      return null;
    }
  }
  return current;
};

BST.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(string.slice(0, -2).trim());
};


module.exports.BST = BST;
module.exports.bstFromArray = bstFromArray;
