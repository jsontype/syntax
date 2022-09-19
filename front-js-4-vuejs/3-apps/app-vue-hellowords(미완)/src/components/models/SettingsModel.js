/**
 * 세팅 관련 데이터 모델
 */

 export class SettingsModel {
     constructor () {
        // 딜레이 세팅
        this.settingsDelay = { name: String, value: Number }
        // 테마 세팅
        this.settingsTheme = { name: String, value: String }
        // 폰트 사이즈 세팅
        this.settingsFontSize = { name: String, value: String }
        // 폰트 세팅
        this.settingsFont = { name: String, value: String }
        // 폰트A 컬러 세팅
        this.settingsFontAColor = { name: String, value: String }
        // 폰트B 컬러 세팅
        this.settingsFontBColor = { name: String, value: String }
        // 구분자 세팅
        this.settingsDelimiter = { name: String, value: String }
        // 음성출력A 세팅
        this.settingsAVoice = { name: String, value: String }
        // 음성출력B 세팅
        this.settingsBVoice = { name: String, value: String }
        // 음성출력속도 세팅
        this.settingVoiceSpeed = { name: String, value: String }
        // 음성출력톤 세팅
        this.settingVoiceTone = { name: String, value: String }
        // 오토 세팅
        this.settingsAuto = { name: String, value: Boolean }
     }
 }