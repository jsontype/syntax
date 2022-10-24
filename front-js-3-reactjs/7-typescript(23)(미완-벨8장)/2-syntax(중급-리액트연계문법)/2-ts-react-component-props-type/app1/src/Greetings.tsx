// 컴포넌트가 받을 프롭스의 타입 정의
type GreetingsProps = {
    // props로 받아오는 변수의 타입 정의
    name: string
    mark: string
    optional?: string // ?는 컴포넌트에서 없어도 되는 props
    // props로 받아오는 함수의 타입 정의
    onClick: (name: string) => void // void는 아무것도 리턴하지 않는 함수
}

// 컴포넌트 선언
export default function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name)
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
}

// 컴포넌트가 받는 프롭스의 값이 없을 때의 기본값
Greetings.defaultProps = {
    mark: '!'
}
