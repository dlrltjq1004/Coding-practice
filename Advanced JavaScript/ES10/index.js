// 중첩 배열 풀기

const array = [1, 2, 3, 4, 5];
array.flat();

const array2 = [1, [2, 3], [4, 5]];
array2.flat();

const array3 = [1, 2, [3, 4, [5]]];
array3.flat();

const jurassicPark = [
  ["전갈", "모기"],
  "미생물",
  "거북이",
  ["뱀", "도마뱀"],
  [[[["티라노"]]], "브라키오"],
  ["문어", "오징어"],
];
jurassicPark.flat(50);

const entries = ["bop", "sally", , , , , , , "cindy"];
entries.flat();

const jurassicParkChaos = jurassicPark.flatMap(
  (creature) => creature + " 티라노"
);
// 공백 제거
// trimStart() 문자열 앞 공백제거
// trimEnd()   문자열 뒤 공백제거
const userEmail = "        eddytheeagle@gmailcom";
const userEmail = "jonnydangerous@gmail.com        ";
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

userProfiles = [
  ["commanderTom", 23],
  ["derekZlander", 40],
  ["hansel", 18],
];

// 배열을 객체 형식으로 변환
const obj = Object.fromEntries(userProfiles);
// 객체를 배열 형식으로 변환
Object.entries(obj);

try {
  bob + "hi";
} catch (error) {
  console.log("you messed up " + error);
}
