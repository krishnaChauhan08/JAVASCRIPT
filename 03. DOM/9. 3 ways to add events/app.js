// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("krishna chauhan");
};

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
best.addEventListener("click", function () {
  console.log("hello world");
});

// ----------- Event (e) Object -----------
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});
