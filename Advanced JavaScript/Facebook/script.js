var database = [
  {
    username: "andrei",
    password: "supersecret",
  },
  {
    username: "boddy",
    password: "123",
  },
  {
    username: "키섭",
    password: "321",
  },
];

var newsfeed = [
  {
    username: "boddy",
    timeline: "So tired from all that learr",
  },
  {
    username: "Sally",
    timeline: "JavaScript is sooo cool!",
  },
];

var userNamePrompt = prompt("Waht`s yout username?");
var passwordPrompt = prompt("Waht`s yout password?");

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}
function singIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("아이디 또는 비밀번호를 확인하세요");
  }
}

singIn(userNamePrompt, passwordPrompt);
