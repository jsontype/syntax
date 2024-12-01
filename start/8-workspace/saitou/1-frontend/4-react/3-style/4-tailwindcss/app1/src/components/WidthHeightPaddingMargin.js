import React from "react"

export default function WidthHeightPaddingMargin() {
  return (
    <div>
      <div className="text-lg font-bold">width / height</div>
      <div className="w-[100px] bg-red-300">w-[100px]</div>
      <div className="w-[200px] bg-blue-300">w-[200px]</div>
      <div className="w-[300px] bg-yellow-300">w-[300px]</div>
      <div className="h-[100px] bg-red-300">h-[100px]</div>
      <div className="h-[200px] bg-blue-300">h-[200px]</div>
      <div className="h-[300px] bg-yellow-300">h-[300px]</div>

      <div className="text-lg font-bold mt-5">Padding / Margin</div>
      <div className="p-1 bg-red-300">p-1</div>
      <div className="p-2 bg-blue-300">p-2</div>
      <div className="p-3 bg-yellow-300">p-3</div>
      <div className="p-4 bg-red-300">p-4</div>
      <div className="p-5 bg-blue-300">p-5</div>
      <div className="p-6 bg-yellow-300">p-6</div>
      <div className="m-7 bg-gray-300">m-7</div>
      <div className="m-8 bg-gray-300">m-8</div>
      <div className="m-9 bg-gray-300">m-9</div>
      <div className="m-10 bg-gray-300">m-10</div>
      <div className="m-11 bg-gray-300">m-11</div>
      <div className="m-12 bg-gray-300">m-12</div>
      <div className="p-[100px] bg-gray-700">p-[100px]</div>
      <div className="m-[100px] bg-red-700">m-[100px]</div>

      <div className="text-red-500">
        * p, mは、pt, pb, pl, pr, px, pyで調節可能
      </div>

      <div className="text-lg font-bold mt-5">Border</div>
      <div className="border-red-500 border-[2px] bg-gray-300 w-[200px]">
        border-red-500 border-[2px]
      </div>
      <div className="border-blue-500 border-[2px] rounded-lg bg-gray-300 w-[200px]">
        border-blue-500 border-[2px] rounded-lg
      </div>
      <div className="border-blue-500 border-[2px] rounded-md bg-gray-300 w-[200px]">
        border-blue-500 border-[2px] rounded-md
      </div>
      <div className="border-blue-500 border-[2px] rounded-sm bg-gray-300 w-[200px]">
        border-blue-500 border-[2px] rounded-sm
      </div>
    </div>
  )
}
