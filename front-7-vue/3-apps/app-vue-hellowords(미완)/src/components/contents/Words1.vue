<template>
  <div class="word1">
    <!-- 단어 전광판 -->
    <section id="hero3">
      <div class="hero-container" data-aos="fade-up" data-aos-delay="150">
        <!-- 단어A : 암기대상 -->
        <h3 id="wordsA">{{ wordsA }}</h3>
        <!-- 단어B : 뜻 -->
        <h3 id="wordsB">{{ wordsB }}</h3>
        <!-- 푸터 -->
        <div class="d-flex">
          <!-- 사용자 버튼 -->
          <a href="#" class="btn-get-started scrollto" style="position: absolute; right: 50%; top: 80%;" @click="goNext()">다음 단어(Space)</a> <!-- (클릭 / Space키)로도 조작가능하게 하기 -->
          <a href="#" class="btn-get-started scrollto" style="position: absolute; left: 50%; top: 80%;" @click="checkBtnClicked()">암기 체크(Enter)</a> <!-- (우클릭 / ESC키)로도 조작가능하게 하기 -->
          <!-- 암기 스테이터스 -->
          <div style="position: absolute; left: 80%; top: 80%; color: white;">{{ this.wordsListName }}<br>인덱스: {{ currentWord }} <br>암기: {{ this.checkedList.length }} <br> {{ currentWord }}/ {{ allWords }}</div> <!-- (우클릭 / ESC키)로도 조작가능하게 하기 -->
        </div>
      </div>
    </section>

  </div>  
</template>

<script>
import { mapGetters } from 'vuex'
import EventBus from '../../lib/EventBus'

export default {
  data () {
    return {
      // 단어장 관련 변수
      wordsA: '단어장',
      wordsB: '입력해주세요',
      wordsAB: 'A',
      no: 0,
      // 암기 스테이터스 관련 변수
      wordsListName: '',
      isMemorized: false,
      leftWords: 0, // *** TODO: 나중에 {{allwords - leftwords}} / {{allwords - isMemorized.length}} 해서 남은 갯수 중에서 현재 진행중 개수 체크할것
      allWords: 0,
      currentWord: 0,
      checkedList: [], 
    }
  },
  watch: {
    // wordsA: function () {}
  },
  computed: {
    // 스토어데이터의 취득
    ...mapGetters('words', ['getCurrentWordsList', 'getCurrentWordsListItem']),
    ...mapGetters('settings', ['getSettingsList', 'getSettingsListItem']),

    currentWordsList() {
      return this.getCurrentWordsList
    },
    settingsList () {
      return this.getSettingsList
    },

  },
  methods: {

    // "다음 단어" 버튼을 클릭하는 경우
    goNext() {
      /**
       * ****** TODO:
       * 워즈1!
       * 2. (치명적)마지막 항목에 암기체크했을 때의 처리 수정하기 (무한루프 에러 안뜨도록)
       * 2. (치명적)단어암기를 연속으로 체크할 경우 this.no++가 두번 실행되는 문제 해결
       * 
       * 헤더1!
       * 1. (치명적)단어장설정1: 단어장리스트 쿠키저장/불러오기 + 암기체크리스트도 함께 저장(여기 어려우면 그냥 "미암기 TXT 출력" 기능으로 대체)
       * 1. 기본설정: 세팅 쿠키저장/불러오기/삭제/초기화
       * 
       * 마무리!
       * 3. 얼럿 전부 commonAlert으로 바꾸고 메시지큐 따로 운용(jp, en번역처리도), 콘솔로그, ***랑 TODO 정리 -> 주석 정리 (메소드 달기) -> 버전 관리 (깃헙)
       */

        let el1 = null
        let el2 = null
        let el3 = null
        let el4 = null
        let el5 = null

      // 단어장이 설정되어져 있는 경우
      if(this.currentWordsList) {
        // 테마 세팅
        if(document.getElementById('hero1')){el1 = document.getElementById('hero1')}
        if(document.getElementById('hero2')){el2 = document.getElementById('hero2')}
        if(document.getElementById('hero3')){el3 = document.getElementById('hero3')}
        if(document.getElementById('hero4')){el4 = document.getElementById('hero4')}
        if(document.getElementById('hero5')){el5 = document.getElementById('hero5')}
        if(this.settingsList.settingsTheme.value) {
          if(el1) {el1.id = this.settingsList.settingsTheme.value}
          if(el2) {el2.id = this.settingsList.settingsTheme.value}
          if(el3) {el3.id = this.settingsList.settingsTheme.value}
          if(el4) {el4.id = this.settingsList.settingsTheme.value}
          if(el5) {el5.id = this.settingsList.settingsTheme.value}
        }

        // 스타일 정의
        // 폰트A 컬러 세팅
        if(this.settingsList.settingsFontAColor.value) {
          let el1 = document.getElementById("wordsA")
          el1.style.color = this.settingsList.settingsFontAColor.value
        }
        // 폰트B 컬러 세팅
        if(this.settingsList.settingsFontBColor.value) {
          let el2 = document.getElementById("wordsB")
          el2.style.color = this.settingsList.settingsFontBColor.value
        }
        // 폰트사이즈 세팅
        if(this.settingsList.settingsFontSize.value) {
          let el1 = document.getElementById("wordsA")
          let el2 = document.getElementById("wordsB")
          el1.style.fontSize = this.settingsList.settingsFontSize.value
          el2.style.fontSize = this.settingsList.settingsFontSize.value
        }
        // 폰트셋 세팅
        if(this.settingsList.settingsFont.value) {
          let el1 = document.getElementById("wordsA")
          let el2 = document.getElementById("wordsB")
          switch(this.settingsList.settingsFont.value) {
            // 폰트셋1: 바탕체
            case 'font1':
              el1.style.fontFamily = 'Times, ＭＳ Ｐゴシック, MS PGothic, 바탕체, BatangChe, 바탕, Batang, sans-serif'
              el2.style.fontFamily = 'Times, ＭＳ Ｐゴシック, MS PGothic, 바탕체, BatangChe, 바탕, Batang, sans-serif'
            break
            // 폰트셋2: 돋움체
            case 'font2':
              el1.style.fontFamily = 'Apple, Meiryo, 맑은돋움, DotumChe, 돋움체, Dotum, sans-serif'
              el2.style.fontFamily = 'Apple, Meiryo, 맑은돋움, DotumChe, 돋움체, Dotum, sans-serif'              
            break
          }
        }

        // 단어장이 설정되어있지 않은 경우
        if(this.currentWordsList.wordsListName === undefined) {            
          alert('먼저 단어장을 설정해주시기 바랍니다.')
          return
        } else {
          // 암기 상황 새로고침
          this.refreshStatus()

          // *** 디버깅용
          console.log('현재단어: ', this.currentWord)
          console.log('암기체크리스트: ', this.checkedList)
          console.log(this.currentWord, '번 암기 여부?: ', this.currentWordsList.wordsItem[this.currentWord - 1].isChecked)

          // 암기한 단어일 경우
          // 단어 A가 나올 차례인 경우
          if(this.wordsAB === 'A') {
            // 단어A가 아직 미암기인 경우
            if(this.currentWordsList.wordsItem[this.currentWord - 1].isChecked === false) {
              // 암기 상황 새로고침
              this.refreshStatus()
              // 단어 출력
              this.wordsA = this.currentWordsList.wordsItem[this.no].wordsA
              this.speakA()
              this.wordsB = null
              // B로 이동
              this.wordsAB = 'B'                        
            }
            // 단어A가 암기 체크되어있는 경우
            else {
              // 암기 상황 새로고침
              this.refreshStatus()
              // 바로 다음 단어로 넘어간다.
              if(this.currentWordsList.wordsItem[this.currentWord - 1].isChecked === true) {                
                this.no++
                this.wordsAB = 'A'
              }                
              this.goNext()
            }
          }

          // 단어 B가 나올 차례인 경우
          else {
            // B 특수경우 1번째
            // 외울 항목이 없는 경우 return으로 걸러내기
            let howManyWordsLeft = 0
            for(let i = 0; i < this.currentWordsList.wordsItem.length; i++) {
              // 외울(체크안된) 단어 개수 파악
              if(this.currentWordsList.wordsItem[i].isChecked === false) {
                howManyWordsLeft++                          
              }            
            }
            // 외울(체크안된) 단어 개수가 0개 일 경우 
            if(howManyWordsLeft === 0) {            
              alert('더 이상은 외울 단어가 없습니다.')
              return
            }

            // B 일반경우
            // 단어B가 아직 미암기인 경우
            if(this.currentWordsList.wordsItem[this.currentWord - 1].isChecked === false) {
              // 암기 상황 새로고침
              this.refreshStatus()
              // 단어 출력
              this.wordsB = this.currentWordsList.wordsItem[this.no].wordsB
              this.speakB()
              this.wordsAB = 'A'
            }
            // 단어B가 암기 체크되어있는 경우
            else {
              // 암기 상황 새로고침
              this.refreshStatus()
              // 바로 다음 단어로 넘어간다.
              if(this.currentWordsList.wordsItem[this.currentWord - 1].isChecked === true) {
                this.no++
                this.wordsAB = 'A'
              }                
              this.goNext()
            }

            // B 특수경우 2번째
            // 마지막 단어의 경우: 첫번째 단어로 복귀
            if (this.no >= this.currentWordsList.wordsItem.length-1) {
              this.no = 0
            } 
            // 마지막 단어가 아닌 경우: 다음 단어로 이동 
            else {
              this.no = this.no + 1
            }
          }
        }
      }
    },

    // 암기 상황을 새로고침한다.
    refreshStatus() {
      this.wordsListName = this.currentWordsList.wordsListName
      // 남은 외울 횟수 
      let leftWordsNumber = this.currentWordsList.wordsItem.length - this.no
      this.leftWords = leftWordsNumber
      // 모든 외울 횟수
      this.allWords = this.currentWordsList.wordsItem.length
      // 현재 인덱스 (실제 인덱스는 0부터 이므로 +1)
      this.currentWord = this.no + 1
    },

    // A 단어를 지정된 음성으로 출력한다.
    speakA(){
      // 세팅에서 음성을 켠 경우
      if(this.settingsList.settingsAVoice.value !== undefined && this.settingsList.settingsAVoice.value !== 'off') {
        this.speak(this.wordsA, this.settingsList.settingsAVoice.value, this.settingsList.settingsVoiceSpeed.value, this.settingsList.settingsVoiceTone.value)
      }
    },

    // A 단어를 지정된 음성으로 출력한다.
    speakB(){
      // 세팅에서 음성을 켠 경우
      if(this.settingsList.settingsBVoice.value !== undefined && this.settingsList.settingsBVoice.value !== 'off') {
        this.speak(this.wordsB, this.settingsList.settingsBVoice.value, this.settingsList.settingsVoiceSpeed.value, this.settingsList.settingsVoiceTone.value)
      }
    },

    // 다음 단어 버튼을 자동으로 클릭할 경우1
    // *** 1초 2초 막 클릭할때 제멋대로 등장 세컨드가 바뀌는 부분 수정해야함
    // *** 중간에 수동으로 바꿨을 때 무시하는 것도 없애야함 (setTimeout 끄기) : 플래그 사용해서 끄는 방법 -> https://aljjabaegi.tistory.com/423
    autoNext(){
      if(this.currentWordsList) {
        // 세팅이 자동인 경우
        if(this.settingsList.settingsAuto.value === true) {
          // 단어가 checked 되어지지 않은(외울 단어의) 경우
          if(this.currentWordsList.wordsItem[this.currentWord - 1].isChecked === false) {
            // 세팅에서 설정한 딜레이 변수 시간만큼 기다린 다음 오토 실행
            setTimeout(() => {this.goNext()}, this.settingsList.settingsDelay.value * 1000)
            setTimeout(() => {this.autoNext2()}, this.settingsList.settingsDelay.value * 1000)
          // 단어가 checked 되어진 (외운 단어의) 경우
          } else {
            setTimeout(() => {this.goNext()}, 1)
            setTimeout(() => {this.autoNext2()}, 1)
          }
        }
        // 반복용 딜레이 초기화
        clearTimeout()
      }
    },

    // 다음 단어 버튼을 자동으로 클릭할 경우2
    autoNext2(){
      // 세팅이 자동인 경우
      if(this.settingsList.settingsAuto.value === true) {
        // 단어가 checked 되어지지 않은(외울 단어의) 경우
        if(this.currentWordsList.wordsItem[this.currentWord - 1].isChecked === false) {
          // 세팅에서 설정한 딜레이 변수 시간만큼 기다린 다음 오토 실행
          setTimeout(() => {this.goNext()}, this.settingsList.settingsDelay.value * 1000)
          setTimeout(() => {this.autoNext()}, this.settingsList.settingsDelay.value * 1000)
        // 단어가 checked 되어진 (외운 단어의) 경우 + 세팅이 모두 표시가 아닌 경우
        } else {
          setTimeout(() => {this.goNext()}, 1)
          setTimeout(() => {this.autoNext()}, 1)
        }
      }
      // 반복용 딜레이 초기화
      clearTimeout()
    },

    /**
     * 암기체크를 한다.
     */
    checkBtnClicked() {
      // 더블클릭 방지처리
      let doubleClicked = []
      for(let i = 0; i < this.checkList; i++) {
        if(this.checkedList[i] === this.currentWord) {
          doubleClicked.push(this.checkedList[i])          
        }
      }
      // 더블클릭이 아닐 경우
      if(!doubleClicked.length) {
        // 암기리스트를 업데이트한다. (총 암기단어개수 파악용)
        this.checkedList.push(this.currentWord)
        // 암기체크를 한다.
        this.currentWordsList.wordsItem[this.currentWord - 1].isChecked = true
      }
      // 더블클릭일 경우
      else {
        console.warn('이미 암기 체크된 항목입니다.')
      }
      if(this.wordsAB === 'B') {
        this.wordsAB === 'A'
        this.goNext()
      }
      if(this.wordsAB === 'A') {
        this.goNext()
      }
    },

    /**
     * 암기체크를 초기화한다.
     */
    recordInitBtnClicked() {
      // 암기체크 초기화
      for(let i = 0; i < this.currentWordsList.wordsItem.length; i++) {
        this.currentWordsList.wordsItem[i].isChecked = false
      }
      // 암기체크 리스트 초기화
      this.checkedList = []
      this.refreshStatus()
      // 초기화 알림
      this.speak('암기표시를 초기화하였습니다.', 'ko-KR', 1, 1)
      console.warn('암기표시가 초기화되었습니다!')
      // 첫 단어로 넘어간다.
      this.no = 0
    },

    /**
     * 음성을 재생한다.
     * 
     * @param {String} text 음성내용
     * @param {String} language 음성언어
     * @param {Number} speed 음성속도
     * @param {Number} tone 음성톤
     */
    speak(text, language, speed, tone) {
      // 지원하지 않는 브라우저 사용시 경고
      if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
          alert("이 브라우저는 음성 합성을 지원하지 않습니다.")
          return
      }      
      // 현재 읽고있다면 초기화
      window.speechSynthesis.cancel() 
      // 음성 설정
      const opt_prop = {
        rate: speed, // 속도: 0.1 ~ 10     
        pitch: tone, // 음높이: 0 ~ 2
        lang: language // 'en-US'
      }
      const prop = opt_prop || {}
      // 음성 설정에 따라 출력 변수 작성
      const speechMsg = new SpeechSynthesisUtterance()
      speechMsg.rate = prop.rate || 1.0 // 미설정시 기본값
      speechMsg.pitch = prop.pitch || 1 // 미설정시 기본값
      speechMsg.lang = prop.lang || "en-US" // 미설정시 기본값
      speechMsg.text = text      
      // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성 재생 실행
      window.speechSynthesis.speak(speechMsg)
    },

    /**
     * 키 조작을 초기 설정한다.
     */
    keyDownInit() {
      window.addEventListener("keydown", (e) => {
        // 스페이스의 휠다운기능 제지
        if(e.code === "Space") {
          e.preventDefault()
        }
        // 스페이스키 설정
        if(e.code === "Space") {
          this.goNext()
        }
        // 엔터키 설정
        if(e.code === "Enter") {
          this.checkBtnClicked()
        }
      })
    }

  },
    
  created () {
    // 키 조작 초기 설정
    this.keyDownInit()
  },
  mounted () {
    // 자동 버튼 클릭시의 이벤트버스
    EventBus.components.$on('setAutoClicked', function () { clearTimeout(), this.goNext(), this.autoNext() }.bind(this))
    // 모든 암기 초기화 버튼 클릭시의 이벤트버스
    EventBus.components.$on('setRecordInit', function () { this.recordInitBtnClicked() }.bind(this))
  },
  updated() {
    // if (this.modalFlg) {
    //   세팅 있을 때, n초마다 데이터변경
    // }
  },
  destroyed () {    
  }

}
</script>

<style scope>
  h2 {
    color: #fff; /*** 변수로 변경 가능하게 할 부분 */
    font-size: 160px; /*** 변수로 변경 가능하게 할 부분 : 최소 20~최대 160, 200, 260, 300*/
    font-weight: 700;
    margin-top: 100px; /*** NO TOUCH THIS DATA */
    margin-bottom: 20px; /*** NO TOUCH THIS DATA */
  }
  h1 {
    color: #eee; /*** 변수로 변경 가능하게 할 부분 */
    font-size: 160px; /*** 변수로 변경 가능하게 할 부분 : 최소 20~최대 160*/
    margin-top: 20px; /*** NO TOUCH THIS DATA */
    margin-bottom: 70px; /*** NO TOUCH THIS DATA */
  }
  .btn-get-started {
    margin: 5px;
    margin-bottom: 10px;
  }
</style>

