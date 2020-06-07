/*
질문 1 : 방 기능 정리 :의 입력이 주어지면, 그것들을  
[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
주문 된 개별 배열로 구성하는 기능을 만드십시오. 
예를 들어,  answer(ArrayFromAbove) 을 반환해야합니다  
[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
보너스 : 숫자 유형과 다르게 문자열을 구성하도록하십시오. 
즉  [1, "2", "3", 2] 돌아와야한다 [[1,2], ["2", "3"]]
*/

let roomNumbers = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// 중복 값 1,1,1,1  / 2,2,2 / 20,20
// 결과값 1,1,1 / 2,2 / 20,20
function hasDuplicates(arrRommNumbers) {
  let valuesSoFar = [];
  let overlapArray = [];
  for (value of array) {
    if (valuesSoFar.indexOf(value) !== -1) {
      // 지정된 요소가 없으면 -1
      //
      console.log(value + " 는 중복된 값입니다.");
      overlapArray.push(value);
    }
    valuesSoFar.push(value);
  }
  return overlapArray;
}

function hasIndex(arr) {
  for (value of arr) {
    console.log(arr.indexOf(value));
  }
}
1.[1] no
2.push 1 
3. 1

//  배열 요소중 중복 값을 배열로 묶음

// 1# 배열 내의 중복 값을 알아내야함
//   1.
// array = [1,2,3,2,4,2,1,1,1,5,20,20]
// 2# 알아낸 중복 값에 배열 씌우기 newArray [[1,1,1,1],[2,2,2],3,4,5[20,20]]
//  1.중복 값을 찾는다.
//    - 배열 요소를 순회 하며
//    - 현재 값과 다음값을 비교 같으면 중복
//  2.중복값에 배열을 씌운다.
//  3.새로운 배열로 반환한다.
//  


// 배열을 정렬 한 다음 실행하고 다음 (또는 이전) 색인이 현재 색인과 같은지 확인합니다. 정렬 알고리즘이 좋다고 가정하면이 값은 O보다 작아야합니다 (n2) :

var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
                                     // JS by default uses a crappy string compare.
                                     // (we use slice to clone the array so the
                                     // original array won't be modified)
var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.Push(sorted_arr[i]);
    }
}

console.log(results);

// 중복 된 항목을 제거하려면이 훌륭한 솔루션을 사용해보십시오.
function eliminateDuplicates(arr) {
    var i,
        len = arr.length,
        out = [],
        obj = {};
  
    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.Push(i);
    }
    return out;
  }