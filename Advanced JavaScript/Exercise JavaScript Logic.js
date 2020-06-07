/*
질문 1 : 방 기능 정리 :의 입력이 주어지면, 그것들을  
[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
주문 된 개별 배열로 구성하는 기능을 만드십시오. 
예를 들어,  answer(ArrayFromAbove) 을 반환해야합니다  
[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
보너스 : 숫자 유형과 다르게 문자열을 구성하도록하십시오. 
즉  [1, "2", "3", 2] 돌아와야한다 [[1,2], ["2", "3"]]

1.명확한 문제이해
2.문제 이해 확인
3.문제 해결 단계별 계획 수립
4.문제 나누기
5.묻다
6.연습

문제: 방 기능 정리 : 입력이 주어지면 
그것들을 주문 된 개별 배열로 구성하는 기능 만들기

만들려고 하는 기능이 무엇인가?
=> 방 청소 기능
무엇을 하는 기능 인가?
=> 주문받은 방번호 arr를 인자로 받아 새로운 배열에 개별 배열로 저장하여 반환 하는 기능
입력은 타입은 arr 인가?
=> arr 이다.
입력되는 값은 방번호 인가?
=> 방번호를 담은 arr 
반환 타입은 무엇인가?
=> 반환 타입은 주문된 개별 배열(이중배열)

반환 값은 무엇인가?
=> 주문 된 개별 배열로 된 방번호 [[1,2,3],[1,1,1],[321,231,121]]

중복되는 방번호 끼리만 개별 배열로 묶기

1.중복값 검사하기 쉬운형태로 배열 요소 정렬 
2.중복 값 검사
3.중복 이라면 배열에 추가
[[],[],[]]

1.forEach, Reduce 이용
*/

function findDuplicateValue(list) {
  for (var i = 0; i < list.length; i++) {
    var str1 = list[i];

    for (var j = 0; j < list.length; j++) {
      if (i == j) continue;

      var str2 = list[j];

      if (str1 === str2) {
        console.log(`중복 =>  + ${i} + .  + ${str1}`);

        break;
      }
    }
  }
}

function hasDuplicates(array) {
  var valuesSoFar = [];
  for (value of array) {
    if (valuesSoFar.indexOf(value) !== -1) {
      // 지정된 요소가 없으면 -1
      //
      console.log(array[i] + " 는 중복된 값입니다.");
      return true;
    }
    valuesSoFar.push(value);
  }
  return false;
}

const cleanTheRoom = (arr) => {
  arr.reduce((accumulator, current) => {
    let newArray = [];
    if (current) {
      accumulator.push(current);
    }
  }, []);
};

const isOverlapValid = (arr) => {
  // 배열 요소중 중복 값 검사
  // 넘버, 문자열 포함
  // 중복값 배열에 저장

  // arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
  // 새로운 배열 선언
  // 반복문 배열 길이 만큼 반복
  // 변수 선언 arr 값 변수에 대입
  // 변수값과 현재 arr 요소 값이 같다면 푸쉬

  let overlapArray = [];
  let accumulator;
  for (value of arr) {
    accumulator = value;
    if (accumulator === value) {
      overlapArray.push(value);
    }
  }
  return overlapArray;
};

/*
질문 2 : 숫자 배열과 대상 숫자를 취하는 자바 스크립트 함수를 작성하십시오. 
이 함수는 배열에서 두 개의 다른 숫자를 찾아서 함께 추가 할 때 
대상 숫자를 제공해야합니다. 예를 들어  answer([1,2,3], 4)반환해야합니다 [1,3]



질문 3 : 16 진수를 RGB로 변환하는 함수를 작성하십시오. 
그런 다음 해당 함수가 형식을 자동으로 지정하여 
HEX 색상 형식을 입력하면 RGB가 반환되고 RGB 색상 형식을 입력하면 HEX가 반환됩니다.
*/
