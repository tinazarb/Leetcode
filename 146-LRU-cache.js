//146. LRU Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map(); //this stores the whole hash map

  //boundaries for double LL, creating two empty nodes
  this.head = {};
  this.tail = {};
  this.head.next = this.tail; //initialize double LL, linking nodes
  this.tail.prev = this.head;
};

/*
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    //remove node & re-insert at end

    //remove elem from current position
    let c = this.map.get(key);
    c.prev.next = c.next;
    c.next.prev = c.prev;

    this.tail.prev.next = c; //insert it after the last element (elem before tail) since we just used it
    c.prev = this.tail.prev; //update c.prev and next pointer
    c.next = this.tail;
    this.tail.prev = c; //update last element as tail
    return c.value;
  } else {
    return -1; //element does not exist
  }
};

/*
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.get(key) !== -1) {
    //key does exist, update last element value
    this.tail.prev.value = value;
  } else {
    //need to check if map size is at capacity
    if (this.map.size === this.capacity) {
      //delete LRU item both from map and DLL
      this.map.delete(this.head.next.key); //delete first element of list
      this.head.next = this.head.next.next; //update first element as next element
      this.head.next.prev = this.head;
    }

    let newNode = {
      value,
      key,
    }; //each node is a hashtable that stores key and value

    //When adding a new node, we need to update both map and DLL
    this.map.set(key, newNode); //add current node to map
    this.tail.prev.next = newNode; //add node to end of the list
    newNode.prev = this.tail.prev; //update prev and next pointers of newNode
    newNode.next = this.tail;
    this.tail.prev = newNode; //update last element
  }
};
