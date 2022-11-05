type GreetingProps = {
    name: string,
    language: string
}

export default function Greeting({ name, language }: GreetingProps) {
    const hi = language === 'ko' ? '안녕하세요' : 'Hello'    
    return (
        <>
            <div>{name}, {hi}!</div>
        </>
    )
}
