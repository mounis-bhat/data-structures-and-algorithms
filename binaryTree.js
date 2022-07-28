//$ Binary Tree

//* A data structure which has a parent and the parent contains two children, the children themselves can act and parents and have their own children.

//? In a full tree every parent points to either two children or none

//? A perfect tree has every parent pointing to two children, it's completely filled all the way across

//? A complete binary tree is a binary tree in which all the levels are completely filled except possibly the lowest one, which is filled from the left. A complete binary tree is just like a full binary tree, but with two major differences. All the leaf elements must lean towards the left.

//$ Binary Search Tree

//* In binary search tree whenever an item is added to the tree the value of the item is compared with the parent, if the value of new item is greater than the parent it goes to the right else it goes to the left.

//$ Binary search tree Big O

//* The worst case for insert, remove and lookup is actually O(n), however it's unlikely, this case occurs when we only have nodes extending to only one side, then it behaves like a linked list and exhibits O(n) complexity.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

BinarySearchTree.prototype.insert = function (value) {
  const node = new Node(value);
  if (!this.root) {
    this.root = node;
  } else {
    let temp = this.root;
    while (true) {
      if (node.value === temp.value) throw `Node ${value} already exists`;

      if (node.value < temp.value) {
        if (temp.left === null) {
          temp.left = node;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = node;
          return this;
        }
        temp = temp.right;
      }
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (!this.root) throw "Empty Tree";

  let temp = this.root;

  while (temp) {
    if (value < temp.value) {
      temp = temp.left;
    } else if (value > temp.value) {
      temp = temp.right;
    } else {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.min = function (tree) {
  while (tree.left !== null) {
    tree = tree.left;
  }

  return tree.value;
};

const bst = new BinarySearchTree();

bst.insert(47);
bst.insert(76);
bst.insert(21);
bst.insert(18);
bst.insert(52);
bst.insert(82);
bst.insert(27);

console.log(bst);

console.log(bst.min(bst.root.right));

console.log(bst.contains(27));
