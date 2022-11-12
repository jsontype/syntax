import React from 'react'

type HelloProps = {
    name: string,
    language: "ko" | "en"
}

export default function Hello({ name, language }: HelloProps) {
    const hi = language === "ko" ? "안녕하세요" : "Hello"

    return (
        <div>{hi}, {name}!</div>
    )
}
