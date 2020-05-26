// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]];

const newArray = array.flat(2);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];

const newArray2 = greeting.join(", ").flat();

greeting.flatMap((x) => x.join(" "));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
greeting.flat().join(" ");
//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(50);
//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
userEmail3.trimStart().trimEnd();
//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Object.entries() 메서드는 for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다. (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다).
const users = { user1: 18273, user2: 92833, user3: 90315 };
const userArray = Object.entries(users).map((values) => {
  return values;
});

//#6 정답
const usersArray = Object.entries(users);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const userArray2 = Object.entries(users).map((values) => {
  return values[1] * 2;
});

//#7 정답
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2]);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const userArray3 = Object.fromEntries(userArray2).map((values) => {
  return values;
});

//#8 정답
const updatedUsers = Object.fromEntries(updatedUsersArray);
console.log(updatedUsers);
