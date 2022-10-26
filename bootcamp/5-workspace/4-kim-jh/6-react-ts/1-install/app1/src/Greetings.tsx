type GreetingsProps = {
    name: string
    language: 'ko' | 'en'
}

export default function Greetings({ name, language }: GreetingsProps) {
    const hi = language === 'ko' ? '안녕' : 'Hello'

    return (
        <div>{name}, {hi}!</div>
    )
}

Greetings.defaultProps = {
    name: 'Stranger'
}
