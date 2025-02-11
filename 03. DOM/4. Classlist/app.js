// classlist
// add()
// remove()
// toggle() if we have a class then it remove and if we don't have class then it add the class.

const h1 = document.querySelector("h1");
console.log(h1.classList);
h1.classList.add("secondClass");
console.log(h1.classList);
h1.classList.remove("secondClass");
console.log(h1.classList);
h1.classList.toggle("apple");
// h1.classList.toggle("apple");
