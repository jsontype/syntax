// 프로그램 엔티티

// 페이지 제목
let subtitle = '' 
let title = ''
// 아이템0
let longText = ``
const item0NameList = []
const item0ContentList = []
const item0StatusList = []
const item0TagList = []
// 사이드메뉴
const sideItemName0List = []
const sideItemName1List = []
const sideItemHref1List = []
const sideItemContent1List = []
const sideItemName2List = []
const sideItemHref2List = []
const sideItemContent2List = []
// 사이드배너
const sideBannerList = []
const sideBannerHrefList = []

// 한국어의 경우
if (language == 'ko') {
    // 페이지 제목
    subtitle = '광고・교육・제작의뢰・프로그램' 
    title = '광고'
    item0NameList.push('유료 과외')
    item0NameList.push('유료 제작')
    item0NameList.push('무료 과외(마감)')
    item0NameList.push('개발자 모집(상시)')
    item0TagList.push('요금')
    item0TagList.push('요금')
    item0TagList.push('요금')
    item0TagList.push('요금')
    item0StatusList.push('상담후 결정')
    item0StatusList.push('상담후 결정')
    item0StatusList.push('상담후 결정')
    item0StatusList.push('상담후 결정')
    // item0StatusList.push('2500￥/1h・4500￥/2h・6000￥/3h')
    // item0StatusList.push('3000￥/1h')

    // Post1
    longText = 
        `
        ☕대상: 코딩을 배우고자 하시는 분들 모두!
        - 수년간의 고교 교사 경력이 있는 현직 개발자로 남다른 수업력을 보여드립니다.
        - 다양한 커리큘럼으로 학생의 성향 맞춤형 학습이 가능합니다.
        - 첫 수업시 30분 무료상담/무료수업 있습니다.
        - 무언가를 창의적으로 만들기를 즐기시는 분 대환영입니다.        
        ☕웹개발자 되기 코스!
        취업반의 경우 요건정의, 기본설계, 상세설계, 제조, 테스트, 운용 등 공정 전반에 걸쳐 예시와 함께 자세히 설명해드립니다.
        수업이 진행되면 취업에 대해 최대한 도움드리고 진로상담 해드립니다.
        수업하면서 자신의 포트폴리오를 만들 수 있습니다.
        - 프론트엔드 : HTML/CSS/JS, VueJS, ReactJS를 중점으로 배웁니다.
        - 백엔드 : Java, Springboot, Mybatis, Batch순으로 배웁니다.
        - 데이터베이스 : SQL 문법을 익히고 다양한 DB를 사용해봅니다.
        - 인프라 : Server, OS, Hosting, Git, Azure, Aws, Terminal(Shell, Bash)등 기본적인 내용들을 배웁니다.
        ☕취미반 코스!
        - 포트폴리오 : 채팅앱, 투두앱, 메모앱, 업무자동화툴 등 다양한 포트폴리오를 스스로 만들수 있게 도와드립니다.
        - 파이썬머신러닝 : Python, Flask, Matplotlib, Pandas, TensorFlow 등의 라이브러리를 이용해 주가 예측과 같은 프로그램을 만들어봅니다.
        - 홈페이지제작 : Bootstrap, PHP, Domain, Hosting 등을 배우고 회원제 인터넷 사이트를 전문적으로 커스터마이징 하는 법을 배웁니다.
        ☕안내사항!
        - 취업 알선 : 웹개발자되기 수업은 수업 막바지에 진로 상담, 포트폴리오 작성, 서류작성, 면접 연습, 취업처 소개까지 도와드립니다.
        - 트라이얼 제도 : 처음에 1시간 수업료 지참하여 참여하실 경우, 30분 추가수업을 해드립니다.
        - 24시간 상담가능 : 기타 코스등에 대해서 자세히 상담 해드리니 부담없이 연락주세요. 단 가끔 답장이 늦어질 수도 있는 점 양해부탁드립니다.
        ☕문의처 및 수업장소!
        - 문의처 : 카카오톡ID "ubii" 또는 라인ID "ubii2" 로 연락주시기 바랍니다.
        - 수업장소 : 오쿠보 2-19-4 (신오쿠보역 도보 5분) * zoom 수업도 가능합니다.
        `
    longText = longText.replace(/니다./gi, '니다.<br>')
    longText = longText.replace(/☕/gi, '<br>☕')
    longText = longText.replace(/!/gi, '!<br>')
    item0ContentList.push(longText)

    // Post2
    longText = 
        `
        ☕의뢰자 님. 안녕하세요! 
        - 1인칭으로 개발이 가능한 수준의 웹앱 제작 청부를 받고 있습니다.

        ☕사전 협의 사항!
        - 평일 업무 관계로 토, 일 시간 정해서만 작업이 가능합니다.
        - 사양에 따라 완료까지 걸리는 기간이 달라집니다.
        - 작품에 대한 법적 책임과 라이센스는 전부 고객님께 양도합니다.
        - 호스팅 옵션에 따라 유지비용이 발생할 수 있습니다.
        - 사업자가 아니므로 세금처리는 하지 않으며, 시간당으로 계산해서 받습니다.
        - 유지보수에도 시간당 비용청구됩니다. 
        - 유지보수는 평균적으로 총 작업량의 20% 정도입니다.
        - 작업시간에 비례해서 돈을 받습니다.
        - 작업중엔 고정 줌 회의실 ID를 드립니다.
        - 작업시간내에 줌으로 작업화면을 열람하실 수 있습니다.
        - 또는 작업장으로 내방하셔서 함께 의논하며 제작하실 수도 있습니다.
        그럼 잘 부탁드립니다.

        ☕문의처 및 스튜디오!
        - 문의처 : 카카오톡ID "ubii" 또는 라인ID "ubii2" 로 연락주시기 바랍니다.
        - 스튜디오 : 오쿠보 2-19-4 (신오쿠보역 도보 5분)      
        `        
    longText = longText.replace(/니다./gi, '니다.<br>')
    longText = longText.replace(/☕/gi, '<br>☕')
    longText = longText.replace(/!/gi, '!<br>')
    item0ContentList.push(longText)

    // Post3
    longText = 
        `
        ☕현재는 마감된 이벤트입니다.
        `
    // 무료 과외 진행에 대해서 소개해드리겠습니다.
    // 평일 번개식으로 진행합니다.
    // 질문은 포스트잇으로 써주시면 됩니다.
    // 질문은 옆에서 적어두셨다가 수업 끝나고 한번에 받습니다.
    // 유투브로 영상녹화된건 다 나중에 실코딩해보시길 바랍니다.
    // 윈도우 OS가 설치된 랩톱이 필요합니다.
    // HTML, CSS, JS 파이썬 머신러닝, 파이썬 플라스크, 자바 스프링부트, PHP 등을 배웁니다.
    // ☕문의처 및 스튜디오!
    // - 문의처 : 카카오톡ID "ubii" 또는 라인ID "ubii2" 로 연락주시기 바랍니다.
    // - 스튜디오 : 오쿠보 2-19-4 (신오쿠보역 도보 5분)
      
    longText = longText.replace(/니다./gi, '니다.<br>')
    longText = longText.replace(/☕/gi, '<br>☕')
    longText = longText.replace(/!/gi, '!<br>')
    item0ContentList.push(longText)

    // Post4
    longText = 
        `
        ☕JAVA 경력 3년차 이상 경력모집!
        - JAVA 경력 개발자를 모십니다. 
        - 필수조건은 일본 경력 3년이상, 일본어 업무 가능자입니다.
                
        ☕사전 숙지 사항!
        - 1차 면접전 스킬시트, 이력서 등이 필요합니다.
        - 추가로 이직시기 및 프로젝트 투입 가능시기도 메일에 기재해주시기 바랍니다.
        - 추가로 희망급여가 있으면 메일에 기재해주십시오. 단 연봉(350~1000만엔)은 경력에 따라 책정됩니다.
        - 원하시는 근무 형태가 있으시면 기재해주시기 바랍니다.

        ☕지원방법!
        - 스킬시트 엑셀 파일, 이력서 엑셀 파일, 개인 연락처(카카오ID등)을 하기 메일로 보내주시면 됩니다.
        - 메일 송부처 : ydhvocal@gmail.com
        ` 
    longText = longText.replace(/니다./gi, '니다.<br>')
    longText = longText.replace(/☕/gi, '<br>☕')
    longText = longText.replace(/!/gi, '!<br>')
    item0ContentList.push(longText)

    // Side Item Name 0
    sideItemName0List.push("광고 목록")
    
    // Side Item Name 1
    sideItemName1List.push("자작 툴")
    sideItemContent1List.push("코드메모")
    sideItemContent1List.push("웹크롤러")
    sideItemContent1List.push("단어(제작중)")
    sideItemContent1List.push("주식(제작중)")
    sideItemContent1List.push("알람(제작중)")
    sideItemContent1List.push("조명(제작중)")
    sideItemContent1List.push("미완성")
    sideItemHref1List.push("http://codememo.jbhomelove.com")
    sideItemHref1List.push("https://ydhvocal.pythonanywhere.com/")
    sideItemHref1List.push("#")
    sideItemHref1List.push("#")
    sideItemHref1List.push("#")
    sideItemHref1List.push("#")
    sideItemHref1List.push("#")

    // Side Item Name 2
    sideItemName2List.push("유투브 재생목록")
    sideItemContent2List.push("웹기초")
    sideItemContent2List.push("프론트엔드")
    sideItemContent2List.push("백엔드(파이썬)")
    sideItemContent2List.push("백엔드(자바)")
    sideItemContent2List.push("프로젝트들")
    sideItemContent2List.push("번외수업")
    sideItemContent2List.push("미완성")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=1")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=2")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=3")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=4")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=5")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=6")
    sideItemHref2List.push("#")

    // Side Banner
    sideBannerList.push('채널 구독')
    sideBannerList.push('코드 메모')
    sideBannerHrefList.push('https://www.youtube.com/channel/UCt76J5CYnXL-uoJmQPG2Azw?sub_confirmation=1')
    sideBannerHrefList.push('http://codememo.jbhomelove.com')
}

// 일본어의 경우
if (language == 'ja') {
    // 페이지 제목
    subtitle = '広告・教育・制作依頼・プログラム' 
    title = '広告'
    item0NameList.push('有料授業')
    item0NameList.push('製作依頼')
    item0NameList.push('無料授業')
    item0NameList.push('開発者求人')
    item0TagList.push('料金')
    item0TagList.push('料金')
    item0TagList.push('料金')
    item0TagList.push('料金')    
    item0StatusList.push('相談要')
    item0StatusList.push('相談要')
    item0StatusList.push('相談要')
    item0StatusList.push('相談要')
    // item0StatusList.push('2500￥/1h・4500￥/2h・6000￥/3h')
    // item0StatusList.push('3000￥/1h')

    // Post1
    longText = 
        `
        ☕日本語サービスは準備中です。
        `
    longText = longText.replace(/。/gi, '。<br>')
    longText = longText.replace(/☕/gi, '<br>☕')
    longText = longText.replace(/！/gi, '！<br>')
    item0ContentList.push(longText)

    // Post2
    longText = 
        `
        ☕日本語サービスは準備中です。
        `        
    longText = longText.replace(/。/gi, '。<br>')
    longText = longText.replace(/☕/gi, '<br>☕')
    longText = longText.replace(/！/gi, '！<br>')
    item0ContentList.push(longText)

    // Post3
    longText = 
        `
        ☕現在は締め切りのイベントです。
        `
    // 무료 과외 진행에 대해서 소개해드리겠습니다.
    // 평일 번개식으로 진행합니다.
    // 질문은 포스트잇으로 써주시면 됩니다.
    // 질문은 옆에서 적어두셨다가 수업 끝나고 한번에 받습니다.
    // 유투브로 영상녹화된건 다 나중에 실코딩해보시길 바랍니다.
    // 윈도우 OS가 설치된 랩톱이 필요합니다.
    // HTML, CSS, JS 파이썬 머신러닝, 파이썬 플라스크, 자바 스프링부트, PHP 등을 배웁니다.
    // ☕문의처 및 스튜디오!
    // - 문의처 : 카카오톡ID "ubii" 또는 라인ID "ubii2" 로 연락주시기 바랍니다.
    // - 스튜디오 : 오쿠보 2-19-4 (신오쿠보역 도보 5분)
      
    longText = longText.replace(/。/gi, '。<br>')
    longText = longText.replace(/☕/gi, '<br>☕')
    longText = longText.replace(/！/gi, '！<br>')
    item0ContentList.push(longText)

    // Post4
    longText = 
        `
        ☕日本語サービスは準備中です。
        ` 
    longText = longText.replace(/。/gi, '。<br>')
    longText = longText.replace(/☕/gi, '<br>☕')
    longText = longText.replace(/！/gi, '！<br>')
    item0ContentList.push(longText)

    // Side Item Name 0
    sideItemName0List.push("広告リスト")
    
    // Side Item Name 1
    sideItemName1List.push("自作ツール")
    sideItemContent1List.push("コードメモ")
    sideItemContent1List.push("ウェブクローラー")
    sideItemContent1List.push("単語（制作中）")
    sideItemContent1List.push("株式（製作中）")
    sideItemContent1List.push("アラーム（制作中）")
    sideItemContent1List.push("照明（製作中）")
    sideItemContent1List.push("作成中")
    sideItemHref1List.push("http://codememo.jbhomelove.com")
    sideItemHref1List.push("https://ydhvocal.pythonanywhere.com/")
    sideItemHref1List.push("#")
    sideItemHref1List.push("#")
    sideItemHref1List.push("#")
    sideItemHref1List.push("#")
    sideItemHref1List.push("#")

    // Side Item Name 2
    sideItemName2List.push("YouTubeのプレイリスト")
    sideItemContent2List.push("ウェブベース")
    sideItemContent2List.push("フロントエンド")
    sideItemContent2List.push("バックエンド（Python）")
    sideItemContent2List.push("バックエンド（Java）")
    sideItemContent2List.push("プロジェクト")
    sideItemContent2List.push("その他")
    sideItemContent2List.push("作成中")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=1")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=2")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=3")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=4")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=5")
    sideItemHref2List.push("https://www.youtube.com/c/CodingCafe1/playlists?view=50&sort=dd&shelf_id=6")
    sideItemHref2List.push("#")

    // Side Banner
    sideBannerList.push('チャンネル購読')
    sideBannerList.push('コードメモ')
    sideBannerHrefList.push('https://www.youtube.com/channel/UCt76J5CYnXL-uoJmQPG2Azw?sub_confirmation=1')
    sideBannerHrefList.push('http://codememo.jbhomelove.com')
}
