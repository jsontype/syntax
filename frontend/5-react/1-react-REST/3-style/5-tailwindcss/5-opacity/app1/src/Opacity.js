import React from "react"

export default function Opacity() {
  return (
    <>
      <div className="text-2xl">Opacity</div>
      <button className="m-2 bg-indigo-500 opacity-100">opacity-100</button>
      <button className="m-2 bg-indigo-500 opacity-75">opacity-75</button>
      <button className="m-2 bg-indigo-500 opacity-50">opacity-50</button>
      <button className="m-2 bg-indigo-500 opacity-25">opacity-25</button>

      <div className="text-2xl">Opacity with Hover, MD options </div>
      <button className="m-2 bg-indigo-500 hover:opacity-25">hover</button>
      <button className="m-2 bg-indigo-500 md:opacity-25 lg:opacity-100">
        md (브라우저 확대 200% 정도)
      </button>
    </>
  )
}
