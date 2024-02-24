// 개발자에게 메일발송 서비스

function sendLetter() {
    // 인풋을 변수에 담기
    let name = document.querySelector('#domTextElement0').value
    let email = document.querySelector('#domTextElement1').value
    let subject = document.querySelector('#domTextElement2').value
    let message = document.querySelector('#domTextElement3').value

    // 이메일 보내기 (https://www.emailjs.com/ 서비스 이용)
    emailjs.send("azumaapp","template_ul3476n",{
        from_name: name + "(" + email + ")",
        to_name: "Azuma",
        message: "【" + subject + "】" + message,
        reply_to: email,
    })

    alert('메일을 송신하였습니다.')

    location.href='https://azumaapp.github.io/home1'
}