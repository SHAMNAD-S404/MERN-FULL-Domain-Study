
//? Question: Explain how WeakSet can be useful for preventing memory leaks in long-running applications, such as event listeners attached to DOM elements.

const weakSet = new WeakSet();

// Add an element
let button = document.createElement('button');
weakSet.add(button);

// Remove the element from the DOM
button = null; // Now it's eligible for garbage collection
