function sample(texts, ...fns) {
    const mockProps = {
        title: '안녕하세요',
        body: '내용은 내용내용 입니다.'
    };
    const result = texts.reduce((result, text, i) => `${result}${text}${fns[i] ? fns[i](mockProps) : ''}`, '');
    console.log(result)
}
sample`
    제목: ${props => props.title}
    내용: ${props => props.body}
`

// "
//     제목: 안녕하세요
//     내용: 내용은 내용내용 입니다.
// "
