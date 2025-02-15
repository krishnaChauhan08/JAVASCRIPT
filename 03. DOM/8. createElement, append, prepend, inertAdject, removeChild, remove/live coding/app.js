// ------------------------------------
// createElement()
// appendChild()
// insertBefore()
// append()
// prepend()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// creating element
// const h1 = document.createElement("h1");
// const body = document.body;
// h1.textContent = "hello world";
// h1.classList.add("greetings");
// body.appendChild(h1);

// ---------------------
// const ul = document.querySelector("ul");

// const newli = document.createElement("li");
// newli.innerText = "I am li tag";
// ul.appendChild(newli);

// const firstLi = document.querySelector("li");
// // selector.insertBefore(what,where)
// ul.insertBefore(newli, firstLi);

// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "i am italic";
// i.style.color = "skyblue";
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterend", i);

let section = document.querySelector("section");
const i = document.createElement("i");
i.innerText = "i am italic";
i.style.color = "skyblue";

const span = document.createElement("span");
span.innerText = "krishna chauhan";
span.style.color = "blue";

section.append(i, span);
section.prepend(i, span);

const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");
newList.removeChild(fourth);
newList.remove()
