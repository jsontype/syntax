// 공통엔티티로서의 전역변수들

// ★★ 표시언어설정 ★★
// 지역정보 추출 : KR, JP, UA
const region = navigator.language.split('-')[1]
// 기본값
let language = 'ja'
// 접속자의 지역에 따라 자동 변경 
if (region == 'JP') { language = 'ja' } 
else if (region == 'KR') { language = 'ko' }
// 접속자의 지역에 상관없이 강제로 변경
// language = 'ja' // * 주석 토글

// 탭명
let tabName = ''
// 네비게이션바
let menuList = []
// 레터 서브타이틀
let commonContactSubTitle = ''
// 레터 타이틀
let commonContactTitle = ''

// 인덱스화면

// 한국어의 경우
if (language == 'ko') {
    // 탭명
    tabName = 'Coding_Cafe'
    // 네비게이션바
    menuList.push('소개')
    menuList.push('유투브')
    menuList.push('광고')
    menuList.push('명함')
    menuList.push('관리자')
    // 레터 서브타이틀
    commonContactSubTitle = 'GET IN TOUCH'
    // 레터 타이틀
    commonContactTitle = '개발자에게 메일'
}

// 일본어의 경우
if (language == 'ja') {
    // 탭명
    tabName = 'Coding_Cafe'
    // 네비게이션바
    menuList.push('紹介')
    menuList.push('Youtube')
    menuList.push('広告')
    menuList.push('コンタクト')
    menuList.push('設定')
    // 레터 서브타이틀
    commonContactSubTitle = '連絡先'
    // 레터 타이틀
    commonContactTitle = '開発者へメール'
}