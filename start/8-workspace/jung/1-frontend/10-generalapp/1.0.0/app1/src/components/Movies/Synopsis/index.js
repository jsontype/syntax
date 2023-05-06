import React, { useState } from "react"

export default function Synopsis({ story }) {
  const [open, setOpen] = useState(false)

  const storyPreview = story.substr(0, 500)

  return (
    <div onClick={() => setOpen(!open)}>
      {open ? `...닫기... ${story}` : `...더보기... ${storyPreview}`}
    </div>
  )
}
