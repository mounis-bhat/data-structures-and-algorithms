class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
}

Stack.prototype.push = function (value) {
  const node = new Node(value);
  if (!this.top) {
    this.top = node;
  } else {
    node.next = this.top;
    this.top = node;
  }
  this.length++;
};

Stack.prototype.pop = function () {
  if (!this.top) throw "Empty stack";

  let temp = this.top;

  this.top = this.top.next;
  temp.next = null;
  this.length--;
};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
}

Queue.prototype.enqueue = function (value) {
  const node = new Node(value);
  if (!this.first && !this.last) {
    this.first = node;
    this.last = node;
  } else {
    this.last.next = node;
    this.last = node;
  }
  this.length++;
};

Queue.prototype.dequeue = function () {
  if (!this.first && !this.last) throw "Empty Queue";

  if (this.first === this.last) {
    this.first = null;
    this.last = null;
  } else {
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
  }
  this.length--;
};
