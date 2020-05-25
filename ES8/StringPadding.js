// ES8 새로 추가 된 기능
// 문자열 시작 부분에 패딩 추가
// 문자열 끝 부분에 패딩 추가

// "Hello World".padStart(10)
//  => "          Hello World"
// "Hello World".padEnd(10)
// => "Hello World          "

// 두번째 기능
// 함수 매개 변수 목록을 호출 후 후행 쉼표
const fun = (a, b, c, d, e) => {
  console.log(a);
};

fun(1, 2, 3, 4);

Object.keys; // 객체의 key 열거 형태로 반환
// => (3) ["Santa", "Rudolf", "Mr.Grinch"]

Object.values; // 객체의 value  열거 형태로 반환
// => (3) ["Santa", "Rudolf", "Mr.Grinch"]

Object.entries; // 객체의 key, value 쌍으로 열거 형태로 반환
// => (2) ["username0", "Santa"]
//    (2) ["username1", "Rudolf"]
//    (2) ["username2", "Mr.Grinch"]

let obj = {
  username: "Santa",
  pass: "Rudolf",
  email: "Mr.Grinch",
  age: "red",
  img: "green",
  sex: "bleck",
};

const objArray = Object.values(obj).map((value, index) => {
  return value + index;
});

let objValue = [];
const getObj = () => {
  Object.keys(obj).forEach((key, index) => {
    objValue.push(obj[key]);
    console.log(key, obj[key]);
  });
};

/* 결과

objValue 

(3) ["Santa", "Rudolf", "Mr.Grinch"]

console.log

username0 Santa
username1 Rudolf
username2 Mr.Grinch

*/

Object.values(obj).forEach((value) => {
  console.log(value);
});

/* 결과
(3) ["Santa", "Rudolf", "Mr.Grinch"]
*/

Object.entries(obj).forEach((value) => {
  console.log(value);
});

/* 결과
(2) ["username0", "Santa"]
(2) ["username1", "Rudolf"]
(2) ["username2", "Mr.Grinch"]
*/

/* 
 Santa0, Rudolf1, Grinch2
 출력하기
 */

let objArray = [];
Object.values(obj).forEach((value, index) => {
  objArray.push(value + index);
  return objArray;
});

const objArray2 = Object.values(obj).map((value, index) => {
  return value + index;
});

// 답
Object.entries(obj).map((value) => {
  return value[1] + value[0].replace("username", "");
});

/* 결과
(3) ["Santa0", "Rudolf1", "Mr.Grinch2"]
*/
