import React from "react"

export default function Padding() {
  return (
    <>
      <div className="text-2xl">Padding</div>
      <div className="rounded-md border-4 border-sky-500 pt-6">pt-6</div>
      <div className="rounded-md border-4 border-sky-500 pr-4">pr-4</div>
      <div className="rounded-md border-4 border-sky-500 pb-8">pb-8</div>
      <div className="rounded-md border-4 border-sky-500 pl-2">pl-2</div>

      <div className="text-2xl">Margin</div>
      <div className="mt-6 rounded-md border-4 border-sky-500">mt-6</div>
      <div className="mr-4 rounded-md border-4 border-sky-500">mr-4</div>
      <div className="mb-8 rounded-md border-4 border-sky-500">mb-8</div>
      <div className="ml-2 rounded-md border-4 border-sky-500">ml-2</div>
    </>
  )
}
