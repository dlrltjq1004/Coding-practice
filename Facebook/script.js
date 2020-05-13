var database = [
  {
    username: "andrei",
    password: "supersecret",
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

function singIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("아이디 또는 비밀번호를 확인하세요");
  }
}

singIn(userNamePrompt, passwordPrompt);
