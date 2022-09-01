// 캐스팅 : 데이터타입을 변환 Number(), String(), Boolean()
function clicked() {
    let a = '150'
    a = Number(a)
    console.log(a + 150)

    let b = 150
    b = String(b)
    console.log(b + '개의 재고가 있습니다.')

    let c = 10
    let d = 20
    let e = Boolean(c > d)
    console.log(e)
}