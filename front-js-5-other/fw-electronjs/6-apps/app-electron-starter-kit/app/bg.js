const body = document.querySelector("body")

const IMAGE_NUMBER = 4;

function handleImgLoad() {

}

function printImage(imageNumber) {
    const image = new Image()
    image.src = `images/${imageNumber}.jpg`
    image.classList.add('bgImage')
    body.appendChild(image)
}

function generateRandom() {
    // 0~4의 까지 정수를 가진 무한 소수점의 랜덤 실수를 만들어준다.(4.999...까지) 그 뒤 내림해준다. 그 뒤 +1 해준다.
    const number = (Math.floor(Math.random() * IMAGE_NUMBER)) + 1
    return number 
}

function init() {
    const randomNumber = generateRandom()
    printImage(randomNumber)
}

init()