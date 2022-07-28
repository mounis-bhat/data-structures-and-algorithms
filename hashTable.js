class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
}

HashTable.prototype._hash = function (key) {
  let hash = 0;
  for (let index = 0; index < key.length; index++) {
    hash = (hash + key.charCodeAt(index) * 23) % this.dataMap.length;
  }
  return hash;
};

HashTable.prototype.set = function (key, value) {
  let index = this._hash(key);
  if (!this.dataMap[index]) {
    this.dataMap[index] = [];
  }
  this.dataMap[index].push([key, value]);
};

HashTable.prototype.get = function (key) {
  let index = this._hash(key);
  if (this.dataMap[index]) {
    for (let i = 0; i < this.dataMap[index].length; i++) {
      if (this.dataMap[index][i][0] === key) {
        return this.dataMap[index][i][1];
      }
    }
  }
  throw "Not found";
};

HashTable.prototype.keys = function () {
  let allKeys = [];
  for (let i = 0; i < this.dataMap.length; i++) {
    if (this.dataMap[i]) {
      for (let j = 0; j < this.dataMap[i].length; j++) {
        allKeys.push(this.dataMap[i][j][0]);
      }
    }
  }
  return allKeys;
};

let hashTable = new HashTable();

hashTable.set("lumber", 70);
hashTable.set("washers", 50);
hashTable.set("bolts", 1400);

console.log(hashTable);

console.log(hashTable.get("bolts"));
console.log(hashTable.keys());
