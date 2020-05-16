const button = document.getElementById("jsEnterBtn");
const input = document.getElementById("jsUserInput");
const ul = document.querySelector("ul");

let inputLength = () => {
  return input.value.length;
};

const createListElement = () => {
  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  const div = document.createElement("div");
  const del = document.createElement("del");
  removeBtn.appendChild(document.createTextNode("Delete"));

  li.appendChild(document.createTextNode(input.value));
  ul.append(div);
  div.append(li);
  div.append(removeBtn);
  div.classList.add("shoppingList_div");
  removeBtn.classList.add("removeBtn");
  input.value = "";

  // Sopping List - Text Cancel Event
  ShoppingTextToggle(li);

  // Shopping List - Remove Event
  ShoppingRemoveBtnEvent(removeBtn, div);
};

const ShoppingTextToggle = (li) => {
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
};

const ShoppingRemoveBtnEvent = (removeBtn, div) => {
  removeBtn.addEventListener("click", function () {
    div.remove();
  });
};

const addListAfterClick = (event) => {
  if (inputLength() > 0) {
    createListElement();
  }
};

const addListAfterKeypress = (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
