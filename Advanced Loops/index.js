const basket = ["apples", "oranges", "grapes"];
const detaildBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

basket.forEach((item) => {
  console.log(item);
});

// 열거형 반 복문

// of 배열 사이즈 만큼 반복
// of 왼쪽 변수에 value 값 담김
for (item of detaildBasket) {
  console.log(item);
}

// 객체
// of 왼쪽 변수에 value 값 담김
for (item in basket) {
  console.log(item);
}
