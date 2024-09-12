const people = 4;

const apple = 3;
const orange = 4;
const banana = 5;

// if (apple >= people) {
//   console.log("appleが足りる");
// }

// if (orange >= people) {
//   console.log("orangeが足りる");
// }

// if (banana >= people) {
//   console.log("bananaが足りる");
// }

apple >= people && console.log("appleが足りる");
// >
// >

// if (apple >= people) {
//   console.log("appleが足りる");
// } else {
//   console.log("appleが足りない");
// }

// if (orange >= people) {
//   console.log("orangeが足りる");
// } else {
//   console.log("orangeが足りない");
// }

// if (banana >= people) {
//   console.log("bananaが足りる");
// } else {
//   console.log("bananaが足りない");
// }

apple >= people ? console.log("appleが足りる") : console.log("appleが足りない");
// >
// >

// 問題（難易度2/3）:diceが"n"の場合"ダイスの結果：n"を出力してください。1~6以外の場合は"ダイスの結果：？"を出力してください。
const dice = 3;
// if (dice === 1) {
//   console.log("ダイスの結果：1");
// } else if (dice === 2) {
//   console.log("ダイスの結果：2");
// } else if (dice === 3) {
//   console.log("ダイスの結果：3");
// } else if (dice === 4) {
//   console.log("ダイスの結果：4");
// } else if (dice === 5) {
//   console.log("ダイスの結果：5");
// } else if (dice === 6) {
//   console.log("ダイスの結果：6");
// } else {
//   console.log("ダイスの結果：？");
// }

switch(dice) {
  case 1:
    console.log("ダイスの結果：1");
    break;
  // >
  default:
    console.log("ダイスの結果：？");
}

// 問題（難易度2/3）:参考演算子を使って、peopleが1の場合、"1人"を出力してください。2の場合、"2人"を出力してください。3以上の場合は"3人以上"を出力してください。
people === 1 ? console.log("1人") : people === 2 ? console.log("2人") : console.log("3人以上");

// 問題（難易度2/3）:参考演算子を使って、peopleが1の場合、"1人います"を出力してください。2の場合、"2人います"を出力してください。3以上の場合は"3人以上います"を出力してください。
// >
