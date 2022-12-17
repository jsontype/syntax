import React from "react";

export default function CharacterCount() {
  const charCountState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(textState)
      return text.length
    },
  })
  const count = useRecoilValue(charCountState)

  return <>Character Count: {count}</>
}
