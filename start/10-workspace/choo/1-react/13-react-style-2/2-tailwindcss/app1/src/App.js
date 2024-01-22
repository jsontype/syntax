import React from "react"

export default function App() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="bg-blue-500 text-green-300">React</h1>
      <p>How to setting the project</p>
      <>
        <div className="columns-1">
          <p>Well, let me tell you something, ...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>

        <hr />
        <div className="columns-2">
          <p>Well, let me tell you something, ...</p>
          <p class="break-inside-avoid-column">
            열 나누기 방지된 태그 : 여기는 나눠져선 안된다.
          </p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>

        <hr />
        <div className="columns-3">
          <p>Well, let me tell you something, ...</p>
          <p className="break-inside-avoid-column">
            열 나누기 방지된 태그 : 여기는 나눠져선 안된다.
          </p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>

        <hr />
        <div className="columns-4">
          <p>Well, let me tell you something, ...</p>
          <p className="break-inside-avoid-column">
            열 나누기 방지된 태그 : 여기는 나눠져선 안된다.
          </p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
      </>
    </>
  )
}
