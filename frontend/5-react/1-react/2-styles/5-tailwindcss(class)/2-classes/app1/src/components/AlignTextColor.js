import React from "react"

export default function AlignTextColor() {
  return (
    <div>
      <div className="text-lg font-bold">Div Align</div>
      <div className="text-center bg-red-300">text-center</div>
      <div className="text-left bg-blue-300">text-left</div>
      <div className="text-right bg-yellow-300">text-right</div>

      <div className="text-lg font-bold mt-5">Flex Align</div>
      <div className="flex items-center">
        <div className="text-center h-[50px] p-2 bg-red-300">items-center</div>
        <div className="text-center h-[70px] p-2 bg-blue-300">items-center</div>
        <div className="text-center h-[90px] p-2 bg-yellow-300">
          items-center
        </div>
      </div>

      <div className="flex items-start">
        <div className="text-center h-[50px] p-2 bg-red-300">items-start</div>
        <div className="text-center h-[70px] p-2 bg-blue-300">items-start</div>
        <div className="text-center h-[90px] p-2 bg-yellow-300">
          items-start
        </div>
      </div>

      <div className="flex items-end">
        <div className="text-center h-[50px] p-2 bg-red-300">items-end</div>
        <div className="text-center h-[70px] p-2 bg-blue-300">items-end</div>
        <div className="text-center h-[90px] p-2 bg-yellow-300">items-end</div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="w-[50px] p-2 bg-red-300">justify-between</div>
        <div className="w-[100px] p-2 bg-blue-300">justify-between</div>
        <div className="w-[200px] p-2 bg-yellow-300">justify-between</div>
      </div>

      <div className="flex justify-center mt-5">
        <div className="w-[50px] p-2 bg-red-300">justify-center</div>
        <div className="w-[100px] p-2 bg-blue-300">justify-center</div>
        <div className="w-[200px] p-2 bg-yellow-300">justify-center</div>
      </div>

      <div className="flex justify-start mt-5">
        <div className="w-[50px] p-2 bg-red-300">justify-start</div>
        <div className="w-[100px] p-2 bg-blue-300">justify-start</div>
        <div className="w-[200px] p-2 bg-yellow-300">justify-start</div>
      </div>

      <div className="flex justify-end mt-5">
        <div className="w-[50px] p-2 bg-red-300">justify-end</div>
        <div className="w-[100px] p-2 bg-blue-300">justify-end</div>
        <div className="w-[200px] p-2 bg-yellow-300">justify-end</div>
      </div>
    </div>
  )
}
