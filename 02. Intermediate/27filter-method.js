// filter() method is a built-in array method in javascripts.
// this allows you to create a new array containing elements that pass a cerain condition.

// find() method is a built-in array method in javascripts.
// this allow you to find an element that pass a certain condition.
//  return only first elements that satisfies the given condition



const songs = [
  { name: "harry", duration: 4.34 },
  { name: "cinema", duration: 4.34 },
  { name: "hello", duration: 2.5 },
  { name: "rohina", duration: 3.5 },
];

console.log(songs.filter((song) => song.duration > 3));
