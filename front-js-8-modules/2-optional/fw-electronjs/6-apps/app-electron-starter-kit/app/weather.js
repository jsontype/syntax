// 변수

const weather = document.querySelector(".js-weather")
const COORDS = 'coords'
/* 
    날씨 API의 사용

    https://openweathermap.org에서 회원가입
    https://home.openweathermap.org/api_keys 에서 키를 취득
    https://openweathermap.org/current 에서 지리적 좌표로 날짜 얻는 방법을 취득
        api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    API 적용후에 확인은?
        개발자도구의 Network 탭에서 API 호출 리스트를 클릭
        리퀘스트 URL 복사해서 브라우져 주소창에 카피페
        확인 가능!

    기본값 화씨에서 섭씨로의 변경은?
        https://openweathermap.org/current 의 우측사이드바에서 Units format을 찾아보면,
        For temperature in Celsius use units=metric 이라는 문구가 있다.
        그러므로, units=metric 을 API 주소에 붙이자.
        api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} + units=metric
        최종결과값은,
        api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric
        이제 섭씨가 된다.

    API란? 
        Application Programming Interface의 약자로, 
        응용 프로그램에서 사용할 수 있도록, 
        운영 체제나 프로그래밍 언어가 제공하는 기능을 
        제어할 수 있게 만든 인터페이스를 뜻한다. 
        주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공한다.

    API key를 적는 이유?
        무료로 제공하지만, 자신들 서버에 무리가 갈 만큼 마냥 사용하게 해줄 수는 없기 때문에,
        빡세게 요청하지는 않는지 확인하고 감시하기 위해서 배정해주는 키이다.

*/
const api_key = 'b759bdcfc8a7aa64b169876182e7fbd6'





// 메소드

// API로부터 날씨를 가져옴
function getWeather(lat, lon) {
    /*
        ★fetch와 .then

        fetch(`https://api...`)가 하는 역할
        api로부터 데이터를 가져와서 그 레스폰스값을 리턴한다.
        동시에 .then 뒤의 함수의 파라미터에 "레스폰스값"을 인자(아무 이름 가능)로 넣어준다.

        .then(function(response)) {} 이 하는 역할
        데이터가 받아오는데 시간이 걸릴 때도 있으므로,
        위의 데이터가 우리에게 넘어왔을 때, 
        데이터가 완전히 들어온 다음에 함수를 호출한다.
    */
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    ).then(function(response) {
        // console.log(response) // *** API에 대한 레스폰스값(응답값) 가져오기
        // json 형태로 응답값 변경
        return response.json() 
    }).then(function(json) {
        // console.log(json) // ***  
        const temperature = json.main.temp
        const place = json.name
        weather.innerText = `${temperature}˚C @ ${place} City`
    })
}

// 내 위치를 로커스토리지에 저장
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

// 내 위치 확인 팝업을 허용할 경우
function handleGeoSuccess(position) {
    // console.log(position) // *** 현재 위치
    // 위도
    const latitude = position.coords.latitude
    // 경도
    const longitude = position.coords.longitude
    /*
        아래의 코드는 다음과 같다.
        const coordsObj = {
            latitude = latitude;
            longitude = longitude;
        };
    */
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj)
    getWeather(latitude, longitude)
}

// 내 위치 확인 팝업을 차단할 경우
function handleGeoError() {
    console.log('현재 위치에 접근할 수 없습니다.')
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS)
    if(loadedCoords === null) {
        askForCoords()
    } else {
        // 날짜 정보를 얻는다.
        const parsedCoords = JSON.parse(loadedCoords)       
        // console.log(parsedCoords) // ***
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
    }
}

function init() {
    loadCoords()
}

init()
