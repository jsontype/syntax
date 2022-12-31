/*
    [호이스팅]
    
    1. 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미.
        var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화함. 
        반면 let과 const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않음.
*/

function clicked1() {
  // js보다 변수선언부터 먼저 실행되고(= 값) 으로 재할당된다.
  console.log("varHoisting ===>", varHoisting);
  var varHoisting = 1;
  // 따라서 var의 경우, 위의 콘솔로그 결과값은 undefined가 된다.
  // 아래처럼 선언되기 전인데도, 참조 에러가 안뜨고,
  // undefined가 뜨는 것으로 선언이 먼저 됐음을 알 수 있다.

  // 그러나 let이나 const의 경우, 호이스팅 시 변수를 undefined로 초기화하지 않으므로,
  // 변수를 없는 것으로 인식해 에러가 난다.
  console.log("letHoisting ===>", letHoisting);
  let letHoisting = 2;
}
