// innerText
// textContent
// innerHTML

const p = document.querySelector("p");
console.log(p.innerText);
console.log(p.textContent);
console.log(p.innerHTML);

const h1 = document.querySelector("h1");
h1.innerText = "text changed";
h1.innerHTML = "<em>123</em>";
