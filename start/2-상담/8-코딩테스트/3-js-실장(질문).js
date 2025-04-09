// [코딩테스트 실장형식: JS 기초 관련. 함수 채우기형 문제 (질문)]

// Q1: 할 일 객체의 완료 여부에 따라 문자열을 반환하는 함수를 작성하라.
const task01 = { title: "청소하기", done: true }

function formatTask01(task) {}

// Q2: 여러 개의 할 일 중 done이 false인 것만을 필터링하고 Q1의 함수를 활용해 문자열 배열로 변환하는 함수를 작성하라.
const tasks02 = [
  { title: "청소하기", done: false },
  { title: "공부하기", done: true },
  { title: "운동하기", done: false },
]

function listUndoneTasks02(items) {}

// Q3: 할 일 배열에 새 항목을 추가하는 함수를 작성하라.
const tasks03 = []

function appendTask03(task, list) {}

// Q4: 이름이 일치하는 할 일을 완료 상태로 바꾸는 함수를 작성하라.
const todos04 = [
  { name: "메일 확인", done: false },
  { name: "회의 참석", done: false },
]

function markDone04(name, items) {}

// Q5: 이름이 일치하는 할 일을 미완료 상태로 바꾸는 함수를 작성하라.
const todos05 = [
  { name: "과제 제출", done: true },
  { name: "발표 준비", done: false },
]

function markUndone05(name, items) {}

// Q6: 이름이 일치하는 할 일을 삭제하는 함수를 작성하라.
const todos06 = [
  { name: "쇼핑", done: false },
  { name: "청소", done: true },
]

function removeTask06(name, items) {}

// Q7: 우선순위 기준으로 내림차순, 우선순위가 같으면 제목(abc순) 기준으로 오름차순 정렬하는 함수 작성
const tasks07 = [
  { title: "A", done: false, priority: 2 },
  { title: "C", done: true, priority: 1 },
  { title: "B", done: true, priority: 2 },
]

function sortTasks07(tasks) {}

// Q8: 이름이 일치하는 항목의 상태를 토글하는 함수를 작성하라.
const todos08 = [
  { name: "책읽기", done: false },
  { name: "코딩", done: true },
]

function toggleStatus08(name, list) {}

// Q9: done이 true인 항목만 추출해서 새로운 배열로 만드는 함수 작성
const todos09 = [
  { name: "요리하기", done: true },
  { name: "설거지", done: false },
  { name: "빨래", done: true },
]

function extractDone09(items) {}

// Q10: 문자열이 포함된 제목을 가진 항목만 필터링하는 함수 작성
const todos10 = [
  { title: "자바스크립트 공부", done: false },
  { title: "HTML 과제", done: true },
]

function filterByKeyword10(keyword, items) {}

// Q11: 항목의 상태를 반대로 바꾸는 함수 작성
const todos11 = [{ name: "목표", done: false }]

function toggleTodo11(name, items) {}

// Q12: 항목 배열에서 모든 항목을 done: true로 설정하는 함수 작성
const todos12 = [
  { name: "숙제", done: false },
  { name: "보고서 작성", done: false },
]

function completeAll12(items) {}

// Q13: 항목 배열에서 done: true인 항목 개수 세는 함수 작성
const todos13 = [
  { name: "테스트", done: true },
  { name: "검토", done: true },
  { name: "제출", done: false },
]

function countCompleted13(items) {}

// Q14: 항목 배열에서 done: false인 항목 개수 세는 함수 작성
const todos14 = [
  { name: "로그인 기능", done: false },
  { name: "회원가입 기능", done: true },
]

function countUnfinished14(items) {}

// Q15: 항목 제목이 중복되지 않도록 추가하는 함수 작성
const todos15 = [{ name: "블로그 작성", done: false }]

function addUniqueTask15(newTask, items) {}

// Q16: 특정 항목을 리스트의 가장 앞으로 이동시키는 함수 작성
const todos16 = [
  { name: "정리", done: false },
  { name: "청소", done: false },
]

function moveToTop16(name, items) {}

// Q17: 배열 복사본을 반환하는 함수 작성 (얉은 복사)
const todos17 = [
  { name: "1일차", done: false },
  { name: "2일차", done: false },
]

function cloneTodos17(items) {}

// Q18: done이 false인 항목만 반환하는 함수 작성
const todos18 = [
  { name: "진행중", done: false },
  { name: "완료됨", done: true },
]

function getActiveTodos18(items) {}

// Q19: 항목 제목을 대문자로 변경하는 함수 작성
const todos19 = [{ name: "제출하기", done: false }]

function uppercaseNames19(items) {}

// Q20: done 상태에 따라 항목을 두 그룹으로 나누는 함수 작성
const todos20 = [
  { name: "A", done: true },
  { name: "B", done: false },
]

function groupByDone20(items) {}

// 최종확인: 아래의 콘솔로 답이 나와야 함
// console.log("1번: ", formatTask01(task01))
// console.log("2번: ", listUndoneTasks02(tasks02))
// appendTask03({ title: "휴식" }, tasks03)
// console.log("3번: ", tasks03)
// markDone04("메일 확인", todos04)
// console.log("4번: ", todos04)
// markUndone05("과제 제출", todos05)
// console.log("5번: ", todos05)
// removeTask06("청소", todos06)
// console.log("6번: ", todos06)
// console.log("7번: ", sortTasks07(tasks07))
// toggleStatus08("책읽기", todos08)
// console.log("8번: ", todos08)
// console.log("9번: ", extractDone09(todos09))
// console.log("10번: ", filterByKeyword10("HTML", todos10))
// toggleTodo11("목표", todos11)
// console.log("11번: ", todos11)
// completeAll12(todos12)
// console.log("12번: ", todos12)
// console.log("13번: ", countCompleted13(todos13))
// console.log("14번: ", countUnfinished14(todos14))
// addUniqueTask15({ name: "회의록 작성", done: false }, todos15)
// console.log("15번: ", todos15)
// moveToTop16("청소", todos16)
// console.log("16번: ", todos16)
// console.log("17번: ", cloneTodos17(todos17))
// console.log("18번: ", getActiveTodos18(todos18))
// console.log("19번: ", uppercaseNames19(todos19))
// console.log("20번: ", groupByDone20(todos20))
