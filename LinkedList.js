//* Linked list is a data structure which resembles most to an array, however linked lists don't have indexes, they don't take contiguous memory spaces unlike arrays. Linked list have a head that points to the first item and a tail which points to the last item, each items points to the next item in the list and the last one points to null.

//$ Big O

//? Inserting at the end
//* O(1), since we already have the address for the last element in the list

// ? Removing from the end
//* O(n) because we can't traverse backwards in a linked list, so we have to loop from the start.

//? Inserting at start
//* O(1), since we have access to the head and all we need to do is point the head to new node

// ? Removing from start
//* 0(1), since we only need to point the head to the next node

//? Inserting/removing at an index and finding a node.
//* O(n), since we need to traverse the whole list

//$ Creating a linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }
}

LinkedList.prototype.push = function (value) {
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
    this.length++;
  } else {
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }
};

LinkedList.prototype.pop = function () {
  if (!this.head) throw "Linked list empty";

  if (this.head === this.tail) {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
    return;
  }

  let current, previous;

  current = previous = this.head;

  while (current.next) {
    previous = current;
    current = current.next;
  }

  this.tail = previous;
  this.tail.next = null;
  this.length--;
};

LinkedList.prototype.unshift = function (value) {
  if (!this.head) {
    this.push(value);
  } else {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
};

LinkedList.prototype.shift = function () {
  if (!this.head) throw "Linked List empty";

  if (this.length === 1) return this.pop();

  let head = this.head;

  this.head = this.head.next;
  head.next = null;
  this.length--;
};

LinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) throw "Invalid index";

  let node = this.head;

  for (let i = 0; i < index; i++) {
    node = node.next;
  }

  return node;
};

LinkedList.prototype.set = function (index, value) {
  let node = this.get(index);

  node.value = value;
};

LinkedList.prototype.insert = function (index, value) {
  if (index < 0 || index >= this.length) throw "Invalid index";

  if (index === 0 || !this.head) return this.unshift(value);

  if (index === this.length) return this.push(value);

  const node = new Node(value);

  const previousIndex = this.get(index - 1);

  node.next = previousIndex.next;
  previousIndex.next = node;
  this.length++;
};

LinkedList.prototype.remove = function (index) {
  if (index < 0 || index >= this.length) throw "Invalid index";

  if (this.length - 1 === index) return this.pop();

  if (index === 0) return this.shift();

  const previous = this.get(index - 1);
  const current = previous.next;

  previous.next = current.next;
  current.next = null;
  this.length--;
};

LinkedList.prototype.reverse = function () {
  let temp = this.head;
  this.head = this.tail;
  this.tail = temp;

  let next = temp.next;

  let previous = null;

  for (let i = 0; i < this.length; i++) {
    next = temp.next;
    temp.next = previous;
    previous = temp;
    temp = next;
  }
};
