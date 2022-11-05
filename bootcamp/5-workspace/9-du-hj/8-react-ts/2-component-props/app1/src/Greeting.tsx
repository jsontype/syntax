type GreetingProps = {
    name: string
    lang: 'ko' | 'en'
    onClick: (name: string) => void
}

export default function Greeting({ name, lang, onClick }: GreetingProps) {
    const hi = lang === 'ko' ? '안녕' : 'Hello'
    const handleClick = () => onClick(name)

    return (
        <>
            <div onClick={handleClick}>{name}, {hi}!</div>
        </>
    )    
}

// 컴포넌트가 받는 프롭스의 값이 없을 때의 기본값
Greeting.defaultProps = {
    name: 'stranger'
}
