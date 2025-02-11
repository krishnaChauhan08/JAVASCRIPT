// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
const input = document.querySelector("input");

// console.log(a.href);
// console.log(input.value);
// console.log(input.type);

// Setting attributes
// console.log((input.value = "Bye"));
// console.log((input.value = "password"));
// console.log((input.placeholder = "please provide a strong password"));

// getAttributes(attrnames)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttributes(attrname,value)
input.setAttribute("placeholder", "password");
input.setAttribute("type", "password");
