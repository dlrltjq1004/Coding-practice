// 숫자만 입력 받을 수 있고 문자열 입력 x
// 숫자를 입력 받아 두 수룰 계산해 주는 계산기 프로그램

// 프로그램 작동 프로세스
//  사용자에게 첫번째 번호를 입력하세요 텍스트 표시
//  첫 번째 번호 저장
//  사용자에게 두번째 번호를 입력하세요 텍스트 표시
//  해당 번호를 저장하고
//  입력 받은 첫번째 번호 + 선택한 계산 기호 + 두번째 번호 표시
//  SUM으로 응답

//  1. A 값을 입력받음  2. B 값을 입력 받음
//  3. A와 B의 값을 해당 하는 기호의 계산법으로 계산

// Input Box 1 hint = 첫번째 번호를 입력하세요
// 계산 기호 선택 ( +, X, /, % 등) 체크시 True
// Input Box 2 번호 입력
// 계산하기 버튼 클릭 Input Box 1, 2 / 계산기호 입력 값 체크
// 필수 입력사항 미 기재시 미 입력란 알림
// A B 선택 계산 기호로 계산 진행
// 산출 표시칸에 산출 값 표시

// 입력 받은 값 받아오기
const inputOne = document.getElementById("jsInputOne");
const inputTo = document.getElementById("jsinputTo");
const plusBtn = document.getElementById("jsPlusBtn");
const subtractBtn = document.getElementById("jsSubtractBtn");
const divisionBtn = document.getElementById("jsDivisionBtn");
const multiplyBtn = document.getElementById("jsMultiplyBtn");
const calculationBtn = document.getElementById("jsCalculationBtn");
const resultLi = document.getElementById("jsResultLi");

const plusClick = () => {
  plusBtn.value = true;
};

const subtractClick = () => {
  subtractBtn.value = true;
};

const divisionClick = () => {
  divisionBtn.value = true;
};

const multiplyClick = () => {
  multiplyBtn.value = true;
};

let firstNumber, secondNumber;
const plusCalculate = () => {
  firstNumber = Number(inputOne.value);
  secondNumber = Number(inputTo.value);
  const result = firstNumber + secondNumber;
  resultLi.textContent = "결과: " + result;

  plusBtn.value = "false";
  subtractBtn.value = "false";
  multiplyBtn.value = "false";
  divisionBtn.value = "false";
};

const subtractCalculate = () => {
  firstNumber = Number(inputOne.value);
  secondNumber = Number(inputTo.value);
  const result = firstNumber - secondNumber;
  resultLi.textContent = "결과: " + result;

  plusBtn.value = "false";
  subtractBtn.value = "false";
  multiplyBtn.value = "false";
  divisionBtn.value = "false";
};
const multiplyCalculate = () => {
  firstNumber = Number(inputOne.value);
  secondNumber = Number(inputTo.value);
  const result = firstNumber * secondNumber;
  resultLi.textContent = "결과: " + result;

  plusBtn.value = "false";
  subtractBtn.value = "false";
  multiplyBtn.value = "false";
  divisionBtn.value = "false";
};
const divisionCalculate = () => {
  const result = Number(inputOne.value) / Number(inputTo.value);
  resultLi.textContent = "결과: " + result;

  plusBtn.value = "false";
  subtractBtn.value = "false";
  multiplyBtn.value = "false";
  divisionBtn.value = "false";
};

const calculate = () => {
  if (inputOne.value === "" || inputTo.value === "") {
    alert("입력값을 입력해주세요");
    return;
  }

  if (plusBtn.value === "true") {
    plusCalculate();
  } else if (subtractBtn.value === "true") {
    subtractCalculate();
  } else if (multiplyBtn.value === "true") {
    multiplyCalculate();
  } else if (divisionBtn.value === "true") {
    divisionCalculate();
  } else {
    alert("부호를 선택해 주세요");
  }
};
