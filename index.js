// const arrayEmpty = new Array(2);

// console.log(arrayEmpty.length); // 2
// console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
// console.log(0 in arrayEmpty); // false
// console.log(1 in arrayEmpty); // false


// const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

// console.log(arrayOfOne.length); // 1
// console.log(arrayOfOne[0]); // "2"
//const fruits = new Array("Apple", "Banana");

//console.log(fruits.length); // 2
//console.log(fruits[0]); // "Apple"

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3

// fruits[5] = "mango";
//console.log(fruits[5]); // 'mango'
//console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
//console.log(fruits.length); // 6
//console.log(fruits)

// fruits.length = 10;
//console.log(fruits)

// console.log({
//     fruits,
//     keys: Object.keys(fruits),
//     length: fruits.length,
//     8: fruits[8]
// })

// fruits.length = 2

// console.log({
//   keys: Object.keys(fruits),
//   length: fruits.length
// })

// const colors = ['red', 'yellow', 'blue']

// colors[5] = 'purple'

// console.log({
//   colors,
//   // reverse: colors.reverse()
// })

// colors.forEach((item, index) => {
//   console.log(index + ': ' + item)
// })

const colors = ['red', 'yellow', 'blue']

colors[5] = 'purple'

const iterator = colors.keys()

for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`)
}

const newColors = colors.reverse()

console.log(newColors)
// Iterative methods iterate the array like the following (with a lot of technical details omitted):


/*
https://developer.mozilla.org/en-US/docs/Glossary/Primitive
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays
https://en.wikipedia.org/wiki/Zero-based_numbering
https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
https://en.wikipedia.org/wiki/Associative_array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#array_methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays
https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/en-US/docs/Glossary/Binding



/** */