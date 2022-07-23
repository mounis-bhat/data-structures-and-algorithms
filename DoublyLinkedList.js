class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }
}

DoublyLinkedList.prototype.push = function (value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
  this.length++;
};

DoublyLinkedList.prototype.pop = function () {
  if (!this.head) throw "Empty list";

  if (this.length === 1) {
    this.head = null;
    this.tail = this.head;
  } else {
    let temp = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    temp.previous = null;
  }
  this.length--;
};

DoublyLinkedList.prototype.unshift = function (value) {
  if (!this.head) return this.push(value);

  const node = new Node(value);

  this.head.previous = node;
  node.next = this.head;
  this.head = node;

  this.length++;
};

DoublyLinkedList.prototype.shift = function () {
  if (!this.head) throw "Empty list";

  if (this.length === 1) {
    this.head = this.tail = null;
  } else {
    let temp = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    temp.next = null;
  }
  this.length--;
};

DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) throw "Invalid index";
  if (index === 0) return this.head;
  if (index === this.length - 1) return this.tail;

  let condition = index < this.length / 2;

  let current = condition ? this.head : this.tail;

  let next = condition ? current.next : current.previous;

  for (let i = 0; i < index; i++) {
    current = next;
  }

  return current;
};

DoublyLinkedList.prototype.set = function (index, value) {
  const item = this.get(index);
  item.value = value;
};

DoublyLinkedList.prototype.insert = function (index, value) {
  if (index < 0 || index > this.length) throw "Invalid index";
  if (!this.head) return this.push(value);
  if (index === 0) return this.unshift(value);

  const item = this.get(index);

  let previousItem = item.previous;

  const node = new Node(value);

  previousItem.next = node;
  item.previous = node;
  node.previous = previousItem;
  node.next = item;

  this.length++;
};

DoublyLinkedList.prototype.remove = function (index) {
  if (index < 0 || index > this.length) throw "Invalid index";
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();

  const item = this.get(index);

  item.previous.next = item.next;
  item.next.previous = item.previous;

  item.next = null;
  item.previous = null;

  this.length--;
};
