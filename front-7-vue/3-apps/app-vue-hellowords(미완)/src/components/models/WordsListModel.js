/**
 * 단어장 관련 데이터 모델
 */

export class WordsListModel {
  constructor() {
    // 단어장
    this.wordsList = [
      {
        // 단어가 포함된 목록명
        wordsListName: String,
        // 단어
        wordsItem: {
          // 단어 번호 : 키
          wordsCurrentNumber: Number,
          // A패널에 표시될 단어
          wordsA: String,
          // B패널에 표시될 단어
          wordsB: String,
        },
      },
    ];
  }
}
