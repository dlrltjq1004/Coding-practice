// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// it should look like this:
("     ||<- Start line");
("       🐢");
("       🐇");

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

const str = startLine.padStart(10) + turle.padStart(10) + rabbit.padStart(10);
console.log(str);

trutle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, "=");

("🐢         =");

("     ||<- Start line");
("🐢=======");
("       🐇");

// #3) Get the below object to go from:
let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
// to this:
("my name is Rudolf the raindeer");

Object.entries(obj).map((value) => {
  console.log(value[1]);
  return value[1];
});

// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

/*
console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

*/

Object.entries(obj)
  .map((value) => value.join(" "))
  .join(" ");
