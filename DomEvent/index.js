const button = document.getElementById("jsEnterBtn");
const input = document.getElementById("jsUserInput");
const ul = document.querySelector("ul");

let inputLength = () => {
  return input.value.length;
};

const createListElement = () => {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.append(li);
  input.value = "";
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

input.addEventListener("keypress", inputEvent);
