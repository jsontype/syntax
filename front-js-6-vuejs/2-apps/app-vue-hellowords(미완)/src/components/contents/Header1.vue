<template>
    <header id="header" class="fixed-top ">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <h1 class="logo"><router-link to="/">단어암기</router-link></h1>
        <nav class="nav-menu d-lg-block">
          <ul>
            <!-- 데이터설정 드롭다운 -->
            <li class="drop-down"><a href="#">단어장설정</a>
              <ul>
                <li><a href="#" @click="loadSample()">샘플 열기</a></li>
                <li><a href="#" @click="loadTxt()">TXT파일 열기</a></li>
                <li><a href="#" @click="initWordList()">리스트 비우기</a></li>
                <!-- *** 쿠키에 저장할 부분 -->
                <!-- <li><a href="#" @click="saveListInCookie()">로컬에 저장</a></li> -->
                <!-- *** 로그인 기능 구현 후 저장할 부분 -->
                <!-- <li><a href="#" @click="saveListInDB()">DB에 저장</a></li> -->

                <!-- 기본제공 단어장 드롭다운 -->                
                <hr>
                <li><a href="#" id="wordsListDropDown0" @click="setThisCurrentWordsList(0)">📌단어장 없음</a></li>
                <li><a href="#" id="wordsListDropDown1" @click="setThisCurrentWordsList(1)"></a></li>
                <li><a href="#" id="wordsListDropDown2" @click="setThisCurrentWordsList(2)"></a></li>
              </ul>
            </li>

            <!-- 기본설정 드롭다운 -->
            <li class="drop-down"><a href="#">기본설정</a>            
              <ul>
                <li class="drop-down"><a href="#">{{ currentAuto }}</a>
                  <ul>
                    <li><a href="#" @click="setAuto(1)">자동</a></li>
                    <li><a href="#" @click="setAuto(2)">수동</a></li>
                  </ul>
                </li>
                <li class="drop-down"><a href="#">{{ currentDelay }}</a>
                  <ul>
                    <li><a href="#" @click="setDelay(2)">2초마다 변경(자동)</a></li>
                    <li><a href="#" @click="setDelay(3)">3초마다 변경(자동)</a></li>
                    <li><a href="#" @click="setDelay(4)">4초마다 변경(자동)</a></li>
                    <li><a href="#" @click="setDelay(5)">5초마다 변경(자동)</a></li>
                    <li><a href="#" @click="setDelay(6)">6초마다 변경(자동)</a></li>
                    <li><a href="#" @click="setDelay(7)">7초마다 변경(자동)</a></li>
                  </ul>
                </li>
                <li class="drop-down"><a href="#">{{ currentDelimiter }}</a>
                  <ul>
                    <li><a href="#" @click="setDelimiter(1)">";"로 구분</a></li>
                    <li><a href="#" @click="setDelimiter(2)">":"로 구분</a></li>
                    <li><a href="#" @click="setDelimiter(3)">","로 구분</a></li>
                    <li><a href="#" @click="setDelimiter(4)">"-"로 구분</a></li>
                    <li><a href="#" @click="setDelimiter(5)">"_"로 구분</a></li>
                  </ul>
                </li>
                <li><a href="#" @click="recordInit()">암기표시 초기화</a></li>
              </ul>
            </li>

            <!-- 화면설정 드롭다운 -->
            <li class="drop-down"><a href="#">화면설정</a>            
              <ul>
                <li class="drop-down"><a href="#">{{ currentTheme }}</a>
                  <ul>
                    <li><a href="#" @click="setTheme(1)">남색 단색</a></li>
                    <li><a href="#" @click="setTheme(2)">검정 단색</a></li>
                    <li><a href="#" @click="setTheme(3)">도시 배경</a></li>
                    <li><a href="#" @click="setTheme(4)">카페 배경</a></li>
                    <li><a href="#" @click="setTheme(5)">로비 배경</a></li>
                  </ul>
                </li>
                <li class="drop-down"><a href="#">{{ currentFontSize }}</a>
                  <ul>
                    <li><a href="#" @click="setFontSize(1)">200px</a></li>
                    <li><a href="#" @click="setFontSize(2)">150px</a></li>
                    <li><a href="#" @click="setFontSize(3)">120px</a></li>
                    <li><a href="#" @click="setFontSize(4)">100px</a></li>
                    <li><a href="#" @click="setFontSize(5)">80px</a></li>
                    <li><a href="#" @click="setFontSize(6)">60px</a></li>
                    <li><a href="#" @click="setFontSize(7)">40px</a></li>
                  </ul>
                </li>              
                <li class="drop-down"><a href="#">{{ currentFont }}</a>
                  <ul>
                    <li><a href="#" @click="setFont(1)">폰트셋1</a></li>
                    <li><a href="#" @click="setFont(2)">폰트셋2</a></li>
                  </ul>
                </li>              
                <li class="drop-down"><a href="#">{{ currentFontAColor }}</a>
                  <ul>
                    <li><a href="#" @click="setFontAColor(1)">A: 하얀 텍스트</a></li>
                    <li><a href="#" @click="setFontAColor(2)">A: 노란 텍스트</a></li>
                    <li><a href="#" @click="setFontAColor(3)">A: 빨간 텍스트</a></li>
                  </ul>
                </li>              
                <li class="drop-down"><a href="#">{{ currentFontBColor }}</a>
                  <ul>
                    <li><a href="#" @click="setFontBColor(1)">B: 하얀 텍스트</a></li>
                    <li><a href="#" @click="setFontBColor(2)">B: 노란 텍스트</a></li>
                    <li><a href="#" @click="setFontBColor(3)">B: 빨간 텍스트</a></li>
                  </ul>
                </li>              
              </ul>
            </li>

            <!-- 음성설정 드롭다운 -->
            <li class="drop-down"><a href="#">음성설정</a>            
              <ul>
                <li class="drop-down"><a href="#">{{ currentAVoice }}</a>
                  <ul>
                    <li><a href="#" @click="setAVoice(1)">A: 영어 음성</a></li>
                    <li><a href="#" @click="setAVoice(2)">A: 일본어 음성</a></li>
                    <li><a href="#" @click="setAVoice(3)">A: 한국어 음성</a></li>
                    <li><a href="#" @click="setAVoice(4)">A: 음소거</a></li>
                  </ul>
                </li>
                <li class="drop-down"><a href="#">{{ currentBVoice }}</a>
                  <ul>
                    <li><a href="#" @click="setBVoice(1)">B: 영어 음성</a></li>
                    <li><a href="#" @click="setBVoice(2)">B: 일본어 음성</a></li>
                    <li><a href="#" @click="setBVoice(3)">B: 한국어 음성</a></li>
                    <li><a href="#" @click="setBVoice(4)">B: 음소거</a></li>
                  </ul>
                </li>
                <li class="drop-down"><a href="#">{{ currentVoiceSpeed }}</a>
                  <ul>
                    <li><a href="#" @click="setVoiceSpeed(1)">매우 느린 속도</a></li>
                    <li><a href="#" @click="setVoiceSpeed(2)">느린 속도</a></li>
                    <li><a href="#" @click="setVoiceSpeed(3)">중간 속도</a></li>
                    <li><a href="#" @click="setVoiceSpeed(4)">빠른 속도</a></li>
                    <li><a href="#" @click="setVoiceSpeed(5)">매우 빠른 속도</a></li>
                  </ul>
                </li>
                <li class="drop-down"><a href="#">{{ currentVoiceTone }}</a>
                  <ul>
                    <li><a href="#" @click="setVoiceTone(1)">낮은 톤</a></li>
                    <li><a href="#" @click="setVoiceTone(2)">중간 톤</a></li>
                    <li><a href="#" @click="setVoiceTone(3)">높은 톤</a></li>
                  </ul>
                </li>
                <li><a href="#" @click="setVoiceMute(1)">음소거</a></li>
              </ul>
            </li>
            <!-- 튜토리얼 원래 위치 -->
            <!-- <li><a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"><i class="icofont-play-alt-2"></i> 튜토리얼</a></li> -->
          </ul>
        </nav>
        <!-- d-none nav : 모바일이 아닐 때 등장하는 메뉴 -->
        <div class="nav-menu d-lg-block">
           &nbsp; 
          <!-- <a href="#" class="get-started-btn scrollto">로그인</a> -->
          <!-- 튜토리얼 영상 -->
          <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"><i class="icofont-play-alt-2"></i> 튜토리얼</a>          
        </div>        
      </div>
    </header>
    <!-- End Header -->
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { WordsListModel } from '../models/WordsListModel'
// import { SettingsModel } from '../models/SettingsModel'
import EventBus from '../../lib/EventBus'
export default {
  data () {
    return {
      // 새 단어장 추가시 입력할 하꼬
      loadWordsListObj: null,
      // 현재 단어 목록 이름 *** 추후 여기를 아래에 표시가 아닌 아래 표시된 것들중 같은 이름을 빨간색으로 글씨 처리로 변경!
      currentWordsListName: null,
      // 현재 세팅 데이터 표시 : *** 초기데이터로 변경되도록 하기
      currentDelay: '3초마다 변경(자동)',
      currentTheme: '도시 배경',
      currentFontSize: '100px',
      currentFont: '폰트셋1',
      currentFontAColor: 'A: 하얀 텍스트',
      currentFontBColor: 'B: 노란 텍스트',
      currentDelimiter: '";"로 구분',
      currentAVoice: 'A: 일본어 음성',
      currentBVoice: 'B: 한국어 음성',
      currentVoiceSpeed: '중간 속도',
      currentVoiceTone: '중간 톤',
      currentAuto: '수동'
    }
  },
  watch: {
  },
  computed: {
    // 스토어데이터의 취득
    ...mapGetters('words', ['getWordsList', 'getWordsListItem', 'getCurrentWordsList', 'getCurrentWordsListItem']),
    ...mapGetters('settings', ['getSettingsList', 'getSettingsListItem']),
    wordsList () {
      return this.getWordsList
    },
    wordsListItem () {
      return this.getWordsListItem
    },
    currentWordsList () {
      return this.getCurrentWordsList
    },
    settingsList () {
      return this.getSettingsList
    },
    settingsDelay () {
      return this.getSettingsDelay
    },
    settingsTheme () {
      return this.getSettingsTheme
    },
    settingsFontSize () {
      return this.getSettingsFontSize
    },
    settingsFont () {
      return this.getSettingsFont
    },
    settingsFontAColor () {
      return this.getSettingsFontAColor
    },
    settingsFontBColor () {
      return this.getSettingsFontBColor
    },
    settingsDelimiter () {
      return this.getSettingsDelimiter
    },
    settingsVoice () {
      return this.getSettingsVoice
    },
    settingsAuto () {
      return this.getSettingsAuto
    },
  },
  methods: {
    // *** 단어장 전체삭제용 : 나중에 단어장 전체삭제 버튼 누를 경우 실행
    ...mapMutations('words', ['setWordsList']),
    // 현재 표시 단어장 변경용
    ...mapMutations('words', ['setCurrentWordsList']), 

    // 단어장리스트 제공개수만큼 화면에 드롭다운을 만든다.
    makeWordsListDropDown() {
      if(this.wordsList.length > 0) {
        for (let i = 0; i < this.wordsList.length; i++) {
          let aTag = document.getElementById('wordsListDropDown'+i)
          aTag.innerHTML = '🔑'+this.wordsList[i].wordsListName
        }
      }
      else {
        document.getElementById('wordsListDropDown0').innerHTML = '📌단어장 없음'
        document.getElementById('wordsListDropDown1').innerHTML = ''
        document.getElementById('wordsListDropDown2').innerHTML = ''
      }
    },

    /**
     * 샘플단어로 단어장을 세팅한다.
     */
    loadSample() {
      // *** 인풋을 받는 처리를 추가해야함! (TODO 게시판을 단어장목록으로 활용)
      this.currentWordsListName = '직접 입력한 단어장'
      // 단어장의 내용을 모델화한다.
      const model = new WordsListModel()

      model.wordsList = {
      // w.loadWordsListObj = {
        wordsListName: 'Sample.txt',
        wordsItem: [
          {
            wordsCurrentNumber: 0,
            wordsA: '合間',
            wordsB: '틈',
            isChecked: false,
          },
          {
            wordsCurrentNumber: 1,
            wordsA: '悪癖',
            wordsB: '나쁜 버릇',
            isChecked: false,
          },
          {
            wordsCurrentNumber: 2,
            wordsA: '鮮やか',
            wordsB: '선명함',
            isChecked: false,
          },
          {
            wordsCurrentNumber: 3,
            wordsA: '値する',
            wordsB: '~에 상당하다',
            isChecked: false,
          },
          {
            wordsCurrentNumber: 4,
            wordsA: '跡地',
            wordsB: '잔해',
            isChecked: false,
          }
        ]
      }

      // 잘못된 단어장리스트 등록을 제한
      if(!this.limitLoadList(model.wordsList.wordsListName)) {
        // 샘플 단어장을 단어장리스트에 추가, 적용한다. 
        this.storeWordsList(model.wordsList)
      }
    },

    // Txt파일을 통해서 단어장을 세팅한다.
    loadTxt2() {      
      // 구분자
      let delimiter = this.settingsList.settingsDelimiter.value        
      // Txt로부터 단어장 세팅
      let input = document.createElement("input");
      input.type = "file"
      input.accept = "text/plain" // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
      // <!-- ★ 비동기 처리 Start
      //    function method2() 안의 비동기 부분을,
      //    return new Promise(function(resolve) { } 안에 묶고,
      //    해당 비동기 함수 안에서,
      //    원하는 결과값에다가 resolve(result2)로 묶인 아이템을,
      //    다른 async method1() { let result1 = await method2 } 의 형태로 담으면
      //    method1 안에서 result1을 결과값으로 꺼내올 수 있다.
      //    이러면 콜백을 쓰지 않고 자바스크립트안에서 비동기를 동기처럼 쓸 수 있다.
      // -->
      return new Promise(function(resolve) {
        input.onchange = function (event) {
          let fileName = event.target.files[0]['name']
          let reader = new FileReader()
          reader.onload = function () {
            let txtArr1 = reader.result.split('\n')
            // console.log('txtArr1 ===>', txtArr1)
            // *** 인풋을 받는 처리를 추가해야함! (TODO 게시판을 단어장목록으로 활용)
            this.currentWordsListName = 'TXT파일 단어장'
            // 단어장의 내용을 모델화한다.
            const model = new WordsListModel()
            model.wordsList = {
              wordsListName: fileName+' ('+txtArr1.length+'개)',
              wordsItem: []
            }
            // 단어장의 내용을 단어장리스트 모델에 맞추어 담는다.            
            for(let i = 0; i < txtArr1.length; i++) {            
              model.wordsList['wordsItem'].push({
                wordsCurrentNumber: i+1, // 배열의 인덱스와 비례하는 값, 허나 1부터 시작
                wordsA: txtArr1[i].split(delimiter)[0], // 구분자로 잘랐을 때의 앞부분
                wordsB: txtArr1[i].split(delimiter)[1], // 구분자로 잘랐을 때의 뒷부분
                isChecked: false, // 기본값 : 비암기
              })
            }
            // 최종적 결과를 동기식으로 사용하기 위해 리졸브한다.
            // console.log('최종적 결과: ', model.wordsList)
            resolve(model.wordsList)
          }
          reader.readAsText(event.target.files[0], /* optional */ "utf-8");
        }
        input.click();
      })
      // <!-- ★ 비동기 처리 End -->
    },

    // TXT파일로 단어장리스트를 불러온다.
    async loadTxt() {
      // 비동기처리의 결과값을 로딩 => console.log('비동기처리의 결과값: ', result)
      var result = await this.loadTxt2()
      // 잘못된 단어장리스트 등록을 제한
      if(!this.limitLoadList(result.wordsListName)) {
        // 샘플 단어장을 단어장리스트에 추가, 적용 
        this.storeWordsList(result)
        // 기존의 암기체크를 초기화
        this.recordInit()
      }
    },

    // 잘못된 단어장리스트 등록을 제한한다.
    limitLoadList(wordsListName) {
      // 제한사항1 : 단어장 허용 개수를 초과해서 저장 금지
      if (this.wordsList.length >= 3) {
        alert('단어장 허용 개수를 초과하였습니다.')
        return true
      }
      // 제한사항2 : 중복된 이름으로 저장 금지      
      else if (this.wordsList) {
        for(let i = 0; i < this.wordsList.length; i++) {
          if(wordsListName === this.wordsList[i].wordsListName) {
            alert('이미 중복된 파일명이 있습니다.')
            return true
          }
        }
      }
      return false
    },

    // 단어장리스트를 초기화한다.
    initWordList() {
      // 데이터 삭제
      this.$store.commit('words/setWordsList', [])
      // 드롭다운 갱신
      console.log(this.wordsList)
      this.makeWordsListDropDown()
    },

    /**
     * 스토어에 단어리스트를 추가함과 동시에, 암기할 단어리스트로 적용한다.
     * @param {Array<Object>} words 추가 및 적용할 단어리스트
     */
    storeWordsList(words) {
      // 단어장을 추가한다. 
      this.$store.commit('words/addWordsList', words)
      // 단어장을 추가하면서 현재의 단어장으로도 즉시 적용한다.
      this.$store.commit('words/setCurrentWordsList', words)
      // 드롭다운 갱신
      this.makeWordsListDropDown()

      console.log('wordsList ===>', this.wordsList)
    },


    // *** TODO: 쿠키저장 구현
    saveListInCookie() {
      console.log('this.loadWordsListObj ===>', this.loadWordsListObj)
      alert('저장되었습니다!')
    },

    // *** TODO: 사용자 데이터 받게 되면 그때 구현할 부분! => 추후 여기다 DB API 불러와서 저장처리하는 것 넣기!
    saveListInDB() {
      console.log('this.loadWordsListObj ===>', this.loadWordsListObj)
      alert('저장되었습니다!')
    },

    // n번째의 단어장 목록(wordsList)로부터 불러온 정보를 currentWordsList에 담아서 현재 단어장을 설정한다.
    setThisCurrentWordsList(number) {
      // 단어장이 없는데 목록을 누른 경우
      if (!this.wordsList[number]) {
        alert('단어장 정보가 없습니다.')
        return
      }
      // 불러온 단어장을 스토어에 저장
      this.$store.commit('words/setCurrentWordsList', this.wordsList[number])
      // 콘솔로그 알림
      console.info(number+1, '번째의 단어장을 사용합니다.')
      // 암기체크를 초기화
      this.recordInit()
    },

    /**
     * 세팅 관련함수 : 이거 전부 스토어 세팅 데이터로 바꾸기 : words1.vue에서 watch로 스토어 변경시 즉시 각 값에 맞게 아래 로직 실행
     */
    setDelay(value) {
      let setDelayData = []
      if(value === 2) {setDelayData = { name: '2초마다 변경(자동)', value: 2 }}
      if(value === 3) {setDelayData = { name: '3초마다 변경(자동)', value: 3 }}
      if(value === 4) {setDelayData = { name: '4초마다 변경(자동)', value: 4 }}
      if(value === 5) {setDelayData = { name: '5초마다 변경(자동)', value: 5 }}
      if(value === 6) {setDelayData = { name: '6초마다 변경(자동)', value: 6 }}
      if(value === 7) {setDelayData = { name: '7초마다 변경(자동)', value: 7 }}
      this.currentDelay = setDelayData.name     
      this.$store.commit('settings/setSettingsDelay', setDelayData)
      // 몇초마다 변경(자동) 누를 경우 : 설정 자동으로 같이 변경
      this.setAuto(1)
    },
    setTheme(value) {
      let setThemeData = []
      if(value === 1) {setThemeData = { name: '남색 단색', value: 'hero1' }}
      if(value === 2) {setThemeData = { name: '검정 단색', value: 'hero2' }}
      if(value === 3) {setThemeData = { name: '도시 배경', value: 'hero3' }}
      if(value === 4) {setThemeData = { name: '카페 배경', value: 'hero4' }}
      if(value === 5) {setThemeData = { name: '로비 배경', value: 'hero5' }}
      this.currentTheme = setThemeData.name
      this.$store.commit('settings/setSettingsTheme', setThemeData) // mutations
      // document.getElementById(heroId).id="hero1";
      // heroId = "hero1"
      // let heroName = "네이비"
    },
    setFontSize(value) {
      let setFontSizeData = []
      if(value === 1) {setFontSizeData = { name: '200px', value: '200px' }}
      if(value === 2) {setFontSizeData = { name: '150px', value: '150px' }}
      if(value === 3) {setFontSizeData = { name: '120px', value: '120px' }}
      if(value === 4) {setFontSizeData = { name: '100px', value: '100px' }}
      if(value === 5) {setFontSizeData = { name: '80px', value: '80px' }}
      if(value === 6) {setFontSizeData = { name: '60px', value: '60px' }}
      if(value === 7) {setFontSizeData = { name: '40px', value: '40px' }}
      this.currentFontSize = setFontSizeData.name
      this.$store.commit('settings/setSettingsFontSize', setFontSizeData) // mutations
    },
    setFont(value) {
      let setFontData = []
      if(value === 1) {setFontData = { name: '폰트셋1', value: 'font1' }}
      if(value === 2) {setFontData = { name: '폰트셋2', value: 'font2' }}
      this.currentFont = setFontData.name
      this.$store.commit('settings/setSettingsFont', setFontData) // mutations
    },
    setFontAColor(value) {
      let setFontAColorData = []
      if(value === 1) {setFontAColorData = { name: 'A: 하얀 텍스트', value: 'white' }}
      if(value === 2) {setFontAColorData = { name: 'A: 노란 텍스트', value: 'yellow' }}
      if(value === 3) {setFontAColorData = { name: 'A: 빨간 텍스트', value: 'red' }}
      this.currentFontAColor = setFontAColorData.name
      this.$store.commit('settings/setSettingsFontAColor', setFontAColorData) // mutations
    },
    setFontBColor(value) {
      let setFontBColorData = []
      if(value === 1) {setFontBColorData = { name: 'B: 하얀 텍스트', value: 'white' }}
      if(value === 2) {setFontBColorData = { name: 'B: 노란 텍스트', value: 'yellow' }}
      if(value === 3) {setFontBColorData = { name: 'B: 빨간 텍스트', value: 'red' }}
      this.currentFontBColor = setFontBColorData.name
      this.$store.commit('settings/setSettingsFontBColor', setFontBColorData) // mutations
    },
    setDelimiter(value) {
      let setDelimiterData = []
      if(value === 1) {setDelimiterData = { name: '";"로 구분', value: ';' }}
      if(value === 2) {setDelimiterData = { name: '":"로 구분', value: ':' }}
      if(value === 3) {setDelimiterData = { name: '","로 구분', value: ',' }}
      if(value === 4) {setDelimiterData = { name: '"="로 구분', value: '=' }}
      if(value === 5) {setDelimiterData = { name: '"_"로 구분', value: '_' }}
      this.currentDelimiter = setDelimiterData.name      
      this.$store.commit('settings/setSettingsDelimiter', setDelimiterData) // mutations
      alert(setDelimiterData.name + '으로 바뀌었습니다. 단어장을 다시 로드해주십시오.')
    },
    setAVoice(value) {
      let setAVoiceData = []
      if(value === 1) {setAVoiceData = { name: 'A: 영어 음성', value: 'en-US' }}
      if(value === 2) {setAVoiceData = { name: 'A: 일본어 음성', value: 'ja-JP' }}
      if(value === 3) {setAVoiceData = { name: 'A: 한국어 음성', value: 'ko-KR' }}
      if(value === 4) {setAVoiceData = { name: 'A: 음소거', value: 'off' }}
      this.currentAVoice = setAVoiceData.name
      this.$store.commit('settings/setSettingsAVoice', setAVoiceData) // mutations
    },
    setBVoice(value) {
      let setBVoiceData = []
      if(value === 1) {setBVoiceData = { name: 'B: 영어 음성', value: 'en-US' }}
      if(value === 2) {setBVoiceData = { name: 'B: 일본어 음성', value: 'ja-JP' }}
      if(value === 3) {setBVoiceData = { name: 'B: 한국어 음성', value: 'ko-KR' }}
      if(value === 4) {setBVoiceData = { name: 'B: 음소거', value: 'off' }}
      this.currentBVoice = setBVoiceData.name
      this.$store.commit('settings/setSettingsBVoice', setBVoiceData) // mutations
    },    
    setVoiceSpeed(value) {
      let setVoiceSpeedData = []
      if(value === 1) {setVoiceSpeedData = { name: '매우 느린 속도', value: '0.5' }}
      if(value === 2) {setVoiceSpeedData = { name: '느린 속도', value: '0.75' }}
      if(value === 3) {setVoiceSpeedData = { name: '중간 속도', value: '1.0' }}
      if(value === 4) {setVoiceSpeedData = { name: '빠른 속도', value: '1.25' }}
      if(value === 5) {setVoiceSpeedData = { name: '매우 빠른 속도', value: '1.5' }}
      this.currentVoiceSpeed = setVoiceSpeedData.name
      this.$store.commit('settings/setSettingsVoiceSpeed', setVoiceSpeedData) // mutations
    },
    setVoiceTone(value) {
      let setVoiceToneData = []
      if(value === 1) {setVoiceToneData = { name: '낮은 톤', value: 0.9 }}
      if(value === 2) {setVoiceToneData = { name: '중간 톤', value: 1 }}
      if(value === 3) {setVoiceToneData = { name: '높은 톤', value: 1.1 }}
      this.currentVoiceTone = setVoiceToneData.name
      this.$store.commit('settings/setSettingsVoiceTone', setVoiceToneData) // mutations
    },
    setVoiceMute(value) {
      let setAVoiceData = []
      let setBVoiceData = []
      if(value === 1) {setAVoiceData = { name: 'A: 음소거', value: 'off' }}
      if(value === 1) {setBVoiceData = { name: 'B: 음소거', value: 'off' }}
      this.currentAVoice = setAVoiceData.name
      this.currentBVoice = setBVoiceData.name
      this.$store.commit('settings/setSettingsAVoice', setAVoiceData) // mutations
      this.$store.commit('settings/setSettingsBVoice', setBVoiceData) // mutations
    },
    setAuto(value) {
      let setAutoData = []
      if(value === 1) {setAutoData = { name: '자동', value: true }}
      if(value === 2) {setAutoData = { name: '수동', value: false }}
      this.currentAuto = setAutoData.name      
      this.$store.commit('settings/setSettingsAuto', setAutoData) // mutations
      EventBus.components.$emit('setAutoClicked')
    },
    // 초기화하는 메소드
    recordInit() {
      EventBus.components.$emit('setRecordInit')
    }

  },
  created() {
    // *** 껐다 켜야 실행됨 : initItem () 메소드로 모든 설정을 초기설정으로 세팅
    // this.initItem()
  },
  mounted() {
    // *** F5를 눌러야 실행됨 : 단어장 표시단어를 1부터 하지 않도록?
  },
  updated() {
    // console.log('updated')
    // *** 세팅 업데이트 되었을 때마다 실행 : 전체 세팅을 불러와서 words1.vue에 이벤트 에밋 명령을 통해 전체 설정을 다시 적용하기
  },
  destory() {
    alert('test!')
  }

}
</script>

<style scope>
  .d-none {
    padding:20px;
  }
</style>
