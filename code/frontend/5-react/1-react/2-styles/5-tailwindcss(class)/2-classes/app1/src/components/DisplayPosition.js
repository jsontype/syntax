import React from "react"

export default function TailwindcssClass() {
  return (
    <div>
      <h1 className="text-lg font-bold">Display</h1>
      <div className="inline">Div</div>
      <div className="inline">Div</div>
      <span className="block">Span</span>
      <span className="block">Span</span>
      <div className="flex mb-2">
        <div className="flex-1 bg-blue-500">Flex1</div>
        <div className="flex-1 bg-yellow-300">Flex2</div>
        <div className="flex-1 bg-red-400">Flex3</div>
      </div>
      <div className="flex flex-col">
        <div className="flex-1 bg-blue-500">Flex-col1</div>
        <div className="flex-1 bg-yellow-300">Flex-col2</div>
        <div className="flex-1 bg-red-400">Flex-col3</div>
      </div>

      <h1 className="text-lg font-bold mt-5">Position</h1>
      <div>Static</div>
      <div>Static</div>
      <div>Static</div>
      <div>Static</div>
      <div>Static</div>
      <div>Static</div>
      <div>Static</div>

      {/* offset : top, bottom, left, right */}
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>
      <div className="relative left-[50px]">Relative</div>

      <div className="absolute bottom-[50px]">Absolute</div>
      <div className="absolute bottom-[50px]">Absolute</div>
      <div className="absolute bottom-[50px]">Absolute</div>
      <div className="absolute bottom-[50px]">Absolute</div>
      <div className="absolute bottom-[50px]">Absolute</div>
      <div className="absolute bottom-[50px]">Absolute</div>
      <div className="absolute bottom-[50px]">Absolute</div>
      <div className="absolute bottom-[50px]">Absolute</div>

      <div className="fixed bottom-[50px]">Fixed</div>
      <div className="fixed bottom-[50px]">Fixed</div>
      <div className="fixed bottom-[50px]">Fixed</div>
      <div className="fixed bottom-[50px]">Fixed</div>
      <div className="fixed bottom-[50px]">Fixed</div>
      <div className="fixed bottom-[50px]">Fixed</div>
      <div className="fixed bottom-[50px]">Fixed</div>
      <div className="fixed bottom-[50px]">Fixed</div>
    </div>
  )
}
