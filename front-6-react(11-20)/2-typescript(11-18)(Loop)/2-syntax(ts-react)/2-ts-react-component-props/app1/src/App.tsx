import Greetings from './Greetings'

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`)
    }

    // 모든 props를 제대로 입력해야 에디터에 오류가 뜨지 않는다. 아래는 오류가 뜰 것이다.
    // return <Greetings name="Hello" />

    // 어떤 props가 필요한지 보려면 커서를 올려보거나, Ctrl + Space 를 눌러보면 된다.
    return <Greetings name="Hello" onClick={onClick} />
}

export default App
