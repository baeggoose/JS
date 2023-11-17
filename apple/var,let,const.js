// 변수, 사칙연산 실력향상 과제
// Q1. 변수를 만들어봅시다
// 내 나이와 출신지역을 자바스크립트 변수에 저장해봅시다.
// 나이는 맨날 변하니 재할당가능한 변수,
// 출신지역은 바뀌지 않으니 재할당불가능한 변수에 저장해보십시오.

let age = 28;
const hometown = "Incheon";

// Q2. 왜 이 변수는 동작하지 않죠?
var name = "park";
var id = 0;

function showName() {
  var name = "kim";
  var id = 1;
  console.log(name); //kim
}

showName(); //undefined
console.log(id); // 0
// 다음 코드를 실행했을 때 콘솔창에 무엇이 출력될까요?

// Q3. 이자율 계산하기
// 철수는 은행에 예금을 하러 갔는데 예금 금액에 따라 이율이 달라지는 것을 보고 크게 당황했습니다.
// 첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
// 첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.
// 그래서 민준이는
// (1) 변수에 예금액을 넣으면
// (2) 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능을 자바스크립트로 만들려고하는데
// 어떻게 코드를 짜면 될까요?
var 예금액 = 50000;
var 미래예금액 = 0;

if (예금액 < 50000) {
  미래예금액 = 예금액 * 1.15 * 1.15;
} else {
  미래예금액 = 예금액 * 1.2 * 1.2;
}

console.log(미래예금액);

// Q4. 커피 리필을 이상하게 해주는 곳이 있습니다. 최대한 마실 수 있는 커피양을 계산해봅시다.
// 방금 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페가 있습니다.
// 예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페입니다.
// 그럼 처음 주문한 커피 양에 따라서 최대한 마실 수 있는 커피를 콘솔창에 계산해주는 코드를 작성해봅시다.

var first = 360;
var firstRefill = first + (first * 2) / 3;
var secondRefill = firstRefill + (firstRefill * 2) / 3;
console.log(secondRefill);

// Q5. 간단한 퀴즈 UI를 만들어봅시다.
// <p>태조 이성계가 태어난 년도는?</p>
// <input type="text" id="answer" />
// <button id="send-answer">제출</button>

var count = 0;
$("#send-answer").on("click", function () {
  count++;
  if ($("#answer").val() == "1335") {
    alert("성공");
  } else if (count >= "3" && $("#answer").val() !== "1335") {
    alert("멍청아");
  }
});
// 유저가 <input>에 답을 적고 제출버튼을 누를 수 있는 퀴즈 UI 입니다.
// 1. 유저가 답을 맞추면 alert('성공');
// 2. 유저가 답을 3번 찍어서 못맞추면 alert('멍청아') 를 띄워봅시다.
// (위 문제의 답은 1335입니다)
