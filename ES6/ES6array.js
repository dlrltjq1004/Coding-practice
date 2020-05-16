// Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => double.push(num * 2));

console.log("forEach", double);

// map, filter, reduce

const mapArray = array.map((num) => num * 2);

console.log("map", mapArray);

// filter

// filter를 이용해 원하는 조건에 해당하는 값만 배열에 추가 하거나
// 원하지 않는 조건을 제거할 수 있다.

// return 1 > 5   false
// return 2 > 5   false
// return 10 > 5  true
// return 16 > 5  true
// resulte  10, 16

const filterArray = array.filter((num) => {
  return num > 5;
});

console.log("filter", filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log("reduce", reduceArray);
