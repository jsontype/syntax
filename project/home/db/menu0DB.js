// 아이템 엔티티

// 소개 컨텐츠 어레이리스트
const itemTitleList = []
const item0IconList = []
const item0NameList = []
const item0HrefList = []
const item1NameList = []
const item1ContentList = []
const item2NameList = []
const item2ContentList = []
const item3NameList = []
const item3ContentList = []
let today = null
let dateString = null
let dateArray = null
let dateObj = null
let betweenDay = null
const item4ContentList = []
const item4ImageList = []
const item9IconList = []
const item9NameList = []
const item9ContentList = []


// 한국어의 경우
if (language == 'ko') {
    // 아이템제목
    itemTitleList.push('개발자 주요링크')
    itemTitleList.push('개발자 소개')
    itemTitleList.push('메인언어')
    itemTitleList.push('자동 이정표')
    itemTitleList.push('스토리')
    // 아이템0 : icon.html 참조
    item0IconList.push('icon-smartphone')
    item0IconList.push('icon-play-button')
    item0IconList.push('icon-favorites')
    item0IconList.push('icon-cloud')
    item0NameList.push('연락처')
    item0NameList.push('유투브')
    item0NameList.push('깃허브')
    item0NameList.push('스킬시트')
    item0HrefList.push('menu3.html')
    item0HrefList.push('https://www.youtube.com/c/CodingCafe1')
    item0HrefList.push('https://github.com/azumaapp')
    item0HrefList.push('https://docs.google.com/spreadsheets/d/1K6zeowhIPLv2ZU4sfpQqwWXwOCbIJ1Z3/edit?rtpof=true#gid=214401444')
    // 아이템1: 아코디언 내용 텍스트
    item1NameList.push('Q. 자기소개?')
    item1NameList.push('Q. 왜 프로그래머입니까?')
    item1NameList.push('Q. 당신의 강점은 무엇입니까?')
    item1NameList.push('사이트 소개')
    item1NameList.push('소지 자격증')
    item1NameList.push('메인 언어')
    item1ContentList.push('안녕하세요! 웹 프로그래머로 활동하고 있는 필명 「Azuma」라고 합니다. 한국으로부터 왔습니다. 현재는 도쿄에서 개발자로 근무하고 있습니다.')
    item1ContentList.push('저는 어렸을 때부터 프로그래머가 되고 싶다는 꿈이 있었습니다. 또, 해외의 생활에도 동경을 계속 안고 있었습니다. 자신이 하고 싶은 것을 추구하면서도, 보다 더 사회에 공헌하는, 즉 인간을 이롭게 하는 프로그램을 만들고자 프로그래머에 대한 진로를 결정하였습니다.')
    item1ContentList.push('저의 강점은 다음과 같습니다. ・코딩 : EC, B2C, B2B Saas 솔루션 등 다양한 분야의 프로젝트 경험 ・어학 : 영어 수능 1등급, 무역영어 1급 외 어학자격증 4개 소지 ・교육 : 유명과외강사, 6년간 고교교사경력')
    item1ContentList.push('이 홈페이지의 주 목적은 저의 포트폴리오를 전시해 보여드리는 것입니다.')
    item1ContentList.push('TOEIC 955, 정보처리기사, 영어정교사, 스노우보드지도사, 영한번역사')
    item1ContentList.push('메인언어는 Javascript, VueJS, ReactJS  등 입니다.')
    // 아이템3: 마일스톤 레전드 텍스트
    item3NameList.push('년 기준')
    item3NameList.push('살')
    item3NameList.push('개발연차')
    item3NameList.push('개발개월')
    item3NameList.push('사이트 개설기간')
    item3NameList.push('추정 학습시간')
    // 아이템4: 스토리 텍스트와 이미지
    item4ContentList.push(`초등학생 때 나는 프로그래머가 되고 싶었다.
    학교에서 GW베이직을 공부했던 게 계기가 된 것이지만,
    당시에는 인터넷도, 유투브도 없었고, 직접 학원에 가는 게 유일한 방법이었으나, 촌동네의 어떤 컴퓨터 학원도 프로그래밍을 가르쳐주지 않았기 때문에 어쩔 수 없이 포기했었다.
    그렇게 영혼없이 중고등학교 때, 대충 공부하고, 군대를 다녀오고, 대학을 졸업하고, 공부못하는 사립학교에서 영어교사를 마지못해 6년,
    나는 한국에서의 삶이 좋지 않았다. 괴로운 일이 많았다. 일이 하고 싶지 않았다. 월요일이 두려웠다. 그리고, 내가 사회에 공헌하고 있다는 공헌감이 전~혀 없었다.
    그러다 어느날, 너무 괴로운 일이 있어, 몇개월간 늘 내가 좋아하는 우주, 양자역학 관련된 유투브만 계속 보게 되었다. 
    그러다 정말 우연히, 유투브에서, 개발자를 위해 가르치고 있는 무료 영상이 엄청나게 많다는 것을 알게 되었다.
    그리고, 한 유투버가 개발자를 하려면 미국이나 일본에서 하는 것이 대우가 좋다는 얘기를 하는 것을 듣고, 나는 무턱대고 일본어와 코딩을 동시에 공부해보기로 했다. 
    (영어 전공인데 미국을 안간 이유는... 미국은 우리나라와 너무 멀어 가면 가족들과 생이별을 할 것 같다는 이유에서였다.)
    그렇게 공부를 하기 위해 부모와 친구들의 반대를 뒤로하고, 일을 그만둬버리고, 6개월 실업급여를 받아가며, 독학을 했다. (혼자 공부하는 게 편해서, 국비지원 교육도 받지 않았다.)
    그렇게 일본에 여행비자로 와서 정사원 개발자로 취업에 성공했다. 꿈같은 취업을 했지만, 첫 월급은 끔찍하게 적었고 시작은 매우 미미했다.
    배울 것도 별로 없고 대우도 좋지 않아, 몇차례 회사를 옮겼는데, 회사를 옮길 때마다, 처음에 팀장이나 회사의 높은 분들로부터 늘 내게 하는 질문이 있었다.
    "네가 목표로 하는 꿈이 뭔가?"
    그럴 때마다, 나는 뭣도 모르고 늘 그냥 AI 엔지니어가 되고 싶다고 했었다.
    왠지 그게 멋져 보여서 였고, 흥미도 있었기 때문이다. 그러나 내심 이런 생각을 했었다.
    "내 주제에 그런 게 가능할 수가 없지 않나?"
    이제 막 일본어도 갓 떼서 도쿄에 온 하꼬가, 일본에서 100명도 안되는 AI엔지니어를 무슨 수로 하는가 말이다.
    그보다는 당장의 생활이 먼저 급급했었다. 일, 개발공부, 일본어공부, 한자공부, 과외 교습을 병행하면서, 
    초반에는 생활비와 한달에 80만원이나 하는 월세를 겨우 내며 생활했었다.
    그러다가, 늦게 시작한 이유로, 타 개발자들에 비해 내 시간이 너무 없음을 깨닫고, 이러한 시간문제를 효율적으로 해결할 수 있는 전략을 세웠다.
    이는 일을 하면서 개발과 일본어와 한자를 동시에 공부하고,
    돈 문제와 나의 부족한 복습시간 문제를 주말 과외수업를 통해서 해결해나갔다. 코딩 과외 수업을 하면서, 자연스럽게 개발도 복습하고, 돈 문제도 어느 정도 해결해나갔다.
    할일이 너무 많아지면, KPI를 따지면서, TV보기 등 불필요하게 시간을 버리는 것들을 점차 버려나갔고 이를 습관화했다.
    주변을 늘 정리하고, 효율성을 늘 따지고, 모든 일을 늘 계획하는 습관을 가지자, 나는 빠른 성장을 체감했다.
    그러던 중 여러 현장들을 돌아다니다가, 소프트뱅크에서 일본 전역에 있는 대형건물들의 5G 무선 안테나 설치 설계프로그램을 만들게 되었다.   
    `)
    item4ContentList.push(`
    그곳에서 2년간 프로그램을 만들고, 어느 순간, 한국에 가게 되었을 때, 게슈탈트의 효과 때문인지 석양이 지는 풍경에 내 눈에 들어온 것은 황혼과 집들의 풍경이 아닌, 그 옥상에 안테나들이 만들어내는 그림자였다.
    그 수많은 집들의 안테나들이 만들어내는 그림자들에, 나는 감동을 받게 되었다.
    이것은 대단한 경험이었다. 내 손 끝으로 일본에 5G가 들어오게 된 것이다.
    이 프로젝트에서 프로젝트 리더까지 경험을 해보고, 나는 프리랜서로 전향했다.
    `)
    // 프리랜서로 전향하면서 연봉은 1억을 넘게 되었고, 돈에 대한 문제는 이제 전혀 없어지게 되었다.
    // 그 뒤로, 신주쿠구에 역에서 도보 1분거리의 역세권 아파트를 구매하게 되었고, 1억원의 돈을 들여 리모델링도 하게 되었다.
    // 이것은 프리랜서로 전향하면서, 풀 재택근무가 되었기 때문에, 소프트뱅크에서 일할 때보다는 더 좋은 환경으로 집을 꾸미고 싶었기 때문이었다.
    // 결과적으로, 그리 크진 않지만 2LDK의 애플 홈킷이 풀 설치된 브루클린 스타일의 아파트를 원하게 되었다.
    // 이를 추진할 때, 계약과 공사까지 6개월이 걸렸다.
    // 그 기간동안에 나는 프리랜서로서 아직 원룸에서 월세를 내며 재택근무를 해 나갔다.
    // 그 기간동안 내가 한 일은, 더욱 대단한 일이었다.
    // 일본의 대기업 공장들에, AI를 도입해서, 인간이 체크함으로써 생기는 기존의 결함을 완전히 없애는 것이었다!
    // 이 무렵의 나는, 처음으로 고연봉을 받게 되었지만, 업무의 강도도 그만큼 상당히 강해졌다.
    // 그러나, 일본에 5G가 처음 도입됐을 때의 그 감동을 기억하며, 나는 마음에 사명감으로 가득차게 되었다.
    // 집안일을 하고, 회사 일을 하고, 끝나면 공부를 하고, 그 뒤에 자투리 시간에 유투브 채널을 운영하면서 하루에 남는 여유 시간은 자는 시간을 포함하여 7시간.
    // 내가 좋아하는 우주 다큐멘터리 유투브도 이 닦는 시간에만 볼 수 있었다.
    item4ContentList.push(
    // 처음에는 이런 것들에 하루하루 거의 "버틴다"는 느낌으로 살았고. 늘 멘탈이 나갈 것 같았지만,
    // 나는 소프트뱅크에서 일할 때 느꼈던 것을 경험으로 해서 일종의 자신감이 있었다.
    // 그것은 바로, "나는 계획을 세우는 습관"이 있다는 것이었다.
    // 그 계획을 세우는 습관은, 초반에는 아무것도 아닌 것처럼 보이지만, 장기간이 되면 엄청난 차이가 되는 것을 몸소 체험했고,
    // 나 자체를 근거없이 믿는게 아니라, 그 나의 "습관"을 믿었기에,
    // 그 뒤로 무슨 잊어버릴 일이 있어도, "아, 나라면 적어놨을 거야." "아 나라면 그거에 대한 대응책을 어딘가 계획해놨을꺼야" 이런 스스로 잊어버리면서도 스스로를 믿는 "자신감"을 획득할 수 있었다.
    // AI 프로젝트가 시작했을 때, 리액트라고 하는 언어, 그리고 파이썬과 텐서플로우를 다루게 되었는데,
    // 다시 정말 아무것도 모르는 분야로 들어와버렸고, 나는 절망할 시간에 엄청나게 세세하게 계획을 짜기 시작했다.
    // 그 계획중에는 "깨어있을 때 집중력을 위해서 늘 커피를 달고 살고, 잠을 잘 때는 수면유도제를 복용해서, 최대한 깊게 잔다"라는 것까지 있었다.
    // 그러면서도 월요일이 즐거웠다. 하루하루의 죽을 것 같은 일의 강도가 즐겁고, 일만 하는데도 하루하루가 너무 즐거웠다.
    // 옛날에 그렇게 일하기 싫었던 나를 돌이켜보면, 아무리 생각해도 나는 개발자가 되었어야할 운명이었다.
    // 그렇게 하다보니, 죽을 것 같으면서도 뒤돌아보니 수년만에 꿈에 그리던 AI 앱도 만들고 있었다.
    `나는 단 한번도 강하게 꿈을 이뤄야만 한다는 욕심을 낸 적이 없다. 
    나는 그냥, "살았"을 뿐이다. 꿈을 꾸지 않고, 꿈을 "살았다".
    이제는, 꿈의 크리크를 다시 조정해야 할 것 같다.
    메타버스를 할까? 전자화폐를 만들까? 다른 나라에 가서 그 나라를 발전시킬 수 있는 개발을 할까?
    어떤 것을 상상해도 너무너무 즐겁다.
    그러나, 내 생각에, 삶은 즐거워서 행복한 것은 아니다. 괴로운 것이 없을 때가 가장 행복한 것이라고 생각한다.
    지금의 나는 나는 행복하다. 부처처럼 괴로워하지 않을 성인군자라서가 아니고, 괴로운 것이 없기 때문이 아니라,
    이렇게 중요한 일을 하고 있는데 쓸데없는 것을 곱씹으며 괴로울 "시간"이 없기 때문이다.
    나는 시간이 없기 때문에 지금 행복하다.`)
}

// 일본어의 경우
if (language == 'ja') {
    // 아이템제목
    itemTitleList.push('リンク')
    itemTitleList.push('開発者について')
    itemTitleList.push('メイン言語')
    itemTitleList.push('自動マイルストーン')
    itemTitleList.push('ストーリー')
    // 아이템0 : icon.html 참조
    item0IconList.push('icon-smartphone')
    item0IconList.push('icon-play-button')
    item0IconList.push('icon-favorites')
    item0IconList.push('icon-cloud')
    item0NameList.push('連絡先')
    item0NameList.push('Youtube')
    item0NameList.push('Github')
    item0NameList.push('スキルシート')
    item0HrefList.push('menu3.html')
    item0HrefList.push('https://www.youtube.com/c/CodingCafe1')
    item0HrefList.push('https://github.com/azumaapp')
    item0HrefList.push('https://docs.google.com/spreadsheets/d/1K6zeowhIPLv2ZU4sfpQqwWXwOCbIJ1Z3/edit?rtpof=true#gid=214401444')
    // 아이템1: 아코디언 내용 텍스트
    item1NameList.push('Q. 自己紹介？')
    item1NameList.push('Q. なぜプログラマーですか？')
    item1NameList.push('Q. 強みは何ですか？')
    item1NameList.push('サイト紹介')
    item1NameList.push('資格証')
    item1NameList.push('メイン言語')
    item1ContentList.push('こんにちは！Webプログラマーの「Azuma」です。韓国から来ました。東京で開発者として働いています。')
    item1ContentList.push('私は幼い頃からプログラマーになりたいという夢がありました。また、海外の生活にも憧れを抱いていました。自分がやりたいことを追求しながらも、より社会に貢献し、つまり人間の生活を便利にするプログラムを作ろうと思っております。')
    item1ContentList.push('私の強みは次のとおりです。・コーディング：EC、B2C、B2B Saasソリューションなど多様な分野のプロジェクト経験')
    item1ContentList.push('このホームページの主な目的は私のポートフォリオを展示してお見せする為に作っております。')
    item1ContentList.push('TOEIC 955・情報処理記事・英語精教師・スノーボードマップ・英訳')
    item1ContentList.push('メイン言語はJavascript, VueJS, ReactJSなどです。')
    // 아이템3: 마일스톤 레전드 텍스트
    item3NameList.push('年基準')
    item3NameList.push('歳')
    item3NameList.push('開発年次')
    item3NameList.push('開発月次')
    item3NameList.push('サイト開設期間')
    item3NameList.push('推定学習時間')    
    // 아이템4: 스토리 텍스트와 이미지
    item4ContentList.push(`小学生の時、私はプログラマーになりたかった。
    学校でGWベーシックを勉強したのがきっかけになったのだが、
    当時はインターネットもYouTubeもなく、プログラミングスクールに行くのが唯一の方法だったが、村近所のどのパソコン教室もプログラミングを教えてくれなかったのでやむを得ず諦めた。
    その後中高校で学年トップになるほど勉強し、軍隊へ行き、大学を卒業して、就職した学校で英語教師を6年務めていた。
    私は韓国での生活が良くなかった。苦しいことが多かった。仕事がしたくなかった。月曜日が怖かった。そして、私が社会に貢献しているという実感が全然なかった。
    それからある日、あまりにもつらい出来事があり、反動で数ヶ月間いつも私の好きな宇宙、量子力学関連のYouTubeだけ見続けた。
    そこで偶然、YouTubeで開発者のために教えている無料映像がものすごく多いことがわかった。
    そして、あるYouTuberが開発者をするには、米国や日本でするのが待遇が良いという話をするのを聞き、私はそこから日本語とコーディングを同時に勉強してみることにした。
    （英語専攻なのにアメリカを選択しなかった理由は…アメリカは韓国と離れすぎて行けば家族と生き別れをしそうだという理由からだった。）
    そう勉強するために親と友人の反対を後にして、仕事をやめてしまい、6ヶ月独学した。
    準備をして日本で正社員開発者として就職に成功した。夢のような就職をしたが、最初の職場は待遇が悪くスタートは非常に微妙だった。
    日本での生活も家賃と生活費で最初はギリギリだった。
    それから、遅れ始めた理由で、他の開発者に比べて私の時間があまりないことに気づき、時間を効率的に使う戦略を立てた。
    これは仕事をやりながら開発と日本語と漢字を同時に勉強するのだった。
    お金問題と私の足りない時間は、コーディング講師をやりながら、開発の復習も、お金の問題も解決していった。
    やるべきのことが多すぎると、テレビ見る時間など不要なことをやめるのを少しづつ習慣化した。
    周りをいつも整理し、常に効率性を考え、すべてのことをいつも計画する習慣を持ち、私は急速に成長した。
    そんな中、いくつかの現場を巡り、SB社の日本全域の大型建物の5G無線アンテナ設計プログラムを作ることになった。     
    `)
    item4ContentList.push(`  
    そこで2年間プログラムを作って、ある瞬間、韓国に行くようになった時、ゲシュタルトの効果のせいか夕日が沈む風景に私の目に入ったのは夕暮れと家の風景ではなく、その屋上にアンテナが作り出す影だった。   
    その多くの家の屋上のアンテナが作り出す影に、私は感動を受けました。
    これはすごい経験だった。私の手で日本に5Gが導入されたようだ。
    このプロジェクトからプロジェクトリーダーまで経験をしてみて、私はフリーランサーに転向した。`)
    item4ContentList.push(`私はそこで働いたときに感じたことを経験することによって一種の自信ができた。
    それは、「私は計画を立てる習慣」があるということでした。
    その計画を立てる習慣は、序盤には何もないように見えるが、長期間になると途方もない違いになることを体素体験した。
    自分自身を根拠なく信じるのではなく、私の「習慣」を信じたので、その後、何を忘れることがあっても、「ああ、私なら書いておきます」 「わたしなら、それに対する対応策をどこか計画しておかなければ」 このような自ら忘れてしまいながらも自らを信じる「自信感」を獲得することができた。
    月曜日が楽しかった。仕事だけするのに一日一日がとても楽しかった。
    昔にそのように働きたくなかった私を振り返ってみると、いくら考えても私は開発者になったはずの運命だった。
    いつの間にか、小学生のごろ夢を叶えたようだ。
    しかし、一度も強く夢を叶えなければならないという欲を出したことがあった。私はただ、「生きた」だけ、夢を見ず、夢を「生きた」。
    今は、夢のクリークを再調整する必要があるようだ。
    メタバースをしょうか？電子マネーを作るか？他の国に行ってその国を発展させることができる開発をするか？
    どんなことを想像してもとても楽しいのだ。`) 
}

// 한국어, 일본어 공통부분
// 아이템2: 파이차트 컨텐츠
item2NameList.push('Javasript')
item2NameList.push('VueJS')
item2NameList.push('ReactJS')
item2NameList.push('SSR・SEO')
item2ContentList.push('95%')
item2ContentList.push('82%')
item2ContentList.push('73%')
item2ContentList.push('64%')
document.querySelector('#circle').setAttribute('data-value', '0.95')
document.querySelector('#circle2').setAttribute('data-value', '0.82')
document.querySelector('#circle3').setAttribute('data-value', '0.73')
document.querySelector('#circle4').setAttribute('data-value', '0.64')
// 아이템3: 마일스톤 수치 데이터
item3ContentList.push(new Date().getFullYear() + 'y') // 기준연도
item3ContentList.push(new Date().getFullYear() - 1986 + 'y') // 나이 계산
item3ContentList.push(new Date().getFullYear() - 2012 + 'y') // 개발연차 계산    
today = new Date() // 개발개월 계산
dateString = "2012-10-01"
dateArray = dateString.split("-")
dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24/30.5
item3ContentList.push(Math.round(betweenDay) + 'm')
dateString = "2019-08-18" // 사이트개설기간 계산
dateArray = dateString.split("-")
dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/24
item3ContentList.push(Math.round(betweenDay) + 'd')
dateString = "2012-10-01" // 공부시간 계산
dateArray = dateString.split("-")
dateObj = new Date(dateArray[0], Number(dateArray[1])-1, dateArray[2])
betweenDay = (today.getTime() - dateObj.getTime())/1000/60/60/4 // 마지막 숫자가 일당 공부한 시간 (예: 하루 3시간 공부할 경우 24 나누기 3 = 8)
item3ContentList.push(Math.round(betweenDay) + 'h')
// 스토리 사진 : 길이는 
item4ImageList.push('./img/bg-img/story1.jpg')
item4ImageList.push('./img/bg-img/story2.jpg')
item4ImageList.push('./img/bg-img/story3.jpg')
