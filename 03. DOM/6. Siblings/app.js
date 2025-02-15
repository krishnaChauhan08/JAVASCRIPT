let firstLi = document.querySelector("li");
console.log(firstLi.parentElement);
console.log(firstLi.parentElement.parentElement);
console.log(firstLi.parentElement.parentElement.parentElement);

console.log(firstLi.nextElementSibling.textContent)
console.log(firstLi.nextElementSibling.nextElementSibling.textContent)
console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent)

const fourthLi = document.querySelector(".fourth")
console.log(fourthLi.previousElementSibling.textContent);


let ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);
console.log((ul.children[0].innerText = "one"));
