function favoriteColors(texts, ...values) {
    console.log(texts);
    console.log(values);
}

const red = '빨간색';
const blue = '파란색';

favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`

// [ '제가 좋아하는 색은 ', '과 ', '입니다.' ]
// [ '빨간색', '파란색' ]