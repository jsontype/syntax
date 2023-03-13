// 호이스팅 : 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
function clicked1() {
  console.log("varHoisting ===>", varHoisting)
  var varHoisting = 1 // 호이스팅시 변수 초기화가 일어남
  console.log("letHoisting ===>", letHoisting)
  let letHoisting = 2 // 호이스팅시 변수 초기화가 일어나지 않음
}
