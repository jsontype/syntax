import React from "react"

export default function Width() {
  return (
    <>
      <div className="text-2xl">w-number</div>
      <div className="w-96 bg-pink-500">w-96</div>
      <div className="w-80 bg-pink-500">w-80</div>
      <div className="w-64 bg-pink-500">w-64</div>
      <div className="w-48 bg-pink-500">w-48</div>
      <div className="w-40 bg-pink-500">w-40</div>
      <div className="w-32 bg-pink-500">w-32</div>
      <div className="w-24 bg-pink-500">w-24</div>

      <div className="text-2xl">w-fraction</div>
      <div className="flex">
        <div className="w-1/2 bg-pink-500">w-1/2</div>
        <div className="w-1/2 bg-gray-500">w-1/2</div>
      </div>
      <div className="flex">
        <div className="w-2/5 bg-pink-500">w-2/5</div>
        <div className="w-3/5 bg-gray-500">w-3/5</div>
      </div>
      <div className="flex">
        <div className="w-1/3 bg-pink-500">w-1/3</div>
        <div className="w-2/3 bg-gray-500">w-2/3</div>
      </div>
      <div className="flex">
        <div className="w-1/4 bg-pink-500">w-1/4</div>
        <div className="w-3/4 bg-gray-500">w-3/4</div>
      </div>
      <div className="flex">
        <div className="w-1/5 bg-pink-500">w-1/5</div>
        <div className="w-4/5 bg-gray-500">w-4/5</div>
      </div>
      <div className="flex">
        <div className="w-1/6 bg-pink-500">w-1/6</div>
        <div className="w-5/6 bg-gray-500">w-5/6</div>
      </div>
      <div className="w-full bg-gray-500">w-full</div>
    </>
  )
}
