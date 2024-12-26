// hashMapExercises.js

// Create an empty hash map
let hashMap = {};

// Exercise 1: Implement set function
// Add or update a key-value pair
function set(key, value) {
  hashMap[key] = value;
}

// Exercise 2: Implement get function
// Return value for a key, or null if doesn't exist
function get(key) {
  return hashMap[key] || null;
}

// Exercise 3: Implement remove function
// Remove a key-value pair, return true if removed, false if didn't exist
function remove(key) {
  if (!hashMap[key]) return false;

  delete hashMap[key]
  return true;

}

// Exercise 4: Implement has function
// Return true if key exists, false otherwise
function has(key) {
  return key in hashMap;
}

// Exercise 5: Implement size function
// Return number of key-value pairs
function size() {
  return Object.keys(hashMap).lenght;
}

// Exercise 6: Implement clear function
// Remove all key-value pairs
function clear() {
  Object.keys(hashMap).forEach(key => {
    delete hashMap[key];
  });
}

// Exercise 7: Implement getKeys function
// Return array of all keys
function getKeys() {
  return Object.keys(hashMap);
}

/*
Practice this sequence:

1. Basic Operations:
hashMap = {};
set("name", "John");
set("age", 25);
console.log(get("name")); // Should print: John
console.log(get("salary")); // Should print: null
console.log(has("age")); // Should print: true
remove("age");
console.log(has("age")); // Should print: false

2. Update Values:
set("score", 85);
set("score", 90);
console.log(get("score")); // Should print: 90

3. Size and Clear:
console.log(size()); // Should print: 2 (name and score)
clear();
console.log(size()); // Should print: 0

4. Working with Keys:
set("a", 1);
set("b", 2);
set("c", 3);
console.log(getKeys()); // Should print: ["a", "b", "c"]
*/


// Create an empty Map
let hashMap = new Map();

// Exercise 1: Implement set function
// Add or update a key-value pair
function set(key, value) {
  hashMap.set(key, value);
}

// Exercise 2: Implement get function
// Return value for a key, or null if doesn't exist
function get(key) {
  return hashMap.has(key) ? hashMap.get(key) : null;
}

// Exercise 3: Implement remove function
// Remove a key-value pair, return true if removed, false if didn't exist
function remove(key) {
  return hashMap.delete(key);
}

// Exercise 4: Implement has function
// Return true if key exists, false otherwise
function has(key) {
  return hashMap.has(key);
}

// Exercise 5: Implement size function
// Return number of key-value pairs
function size() {
  return hashMap.size;
}

// Exercise 6: Implement clear function
// Remove all key-value pairs
function clear() {
  hashMap.clear();
}

// Exercise 7: Implement getKeys function
// Return array of all keys
function getKeys() {
  return Array.from(hashMap.keys());
}
