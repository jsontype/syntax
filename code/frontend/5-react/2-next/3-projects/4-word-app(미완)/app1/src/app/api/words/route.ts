import { NextResponse } from "next/server"

const sampleWords = [
  {
    id: 1,
    a: "apple",
    b: "사과",
    memorized: false,
  },
  {
    id: 2,
    a: "book",
    b: "책",
    memorized: false,
  },
  {
    id: 3,
    a: "cat",
    b: "고양이",
    memorized: false,
  },
  {
    id: 4,
    a: "dog",
    b: "개",
    memorized: false,
  },
  {
    id: 5,
    a: "elephant",
    b: "코끼리",
    memorized: false,
  },
  {
    id: 6,
    a: "flower",
    b: "꽃",
    memorized: false,
  },
  {
    id: 7,
    a: "grape",
    b: "포도",
    memorized: false,
  },
  {
    id: 8,
    a: "house",
    b: "집",
    memorized: false,
  },
  {
    id: 9,
    a: "ice cream",
    b: "아이스크림",
    memorized: false,
  },
  {
    id: 10,
    a: "juice",
    b: "주스",
    memorized: false,
  },
]

export async function GET() {
  return NextResponse.json(sampleWords)
}
