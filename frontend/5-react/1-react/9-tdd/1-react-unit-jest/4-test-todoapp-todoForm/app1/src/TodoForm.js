import React, { useState, useCallback } from 'react'

export default function TodoForm () {
  const [value, setValue] = useState('')
  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, [])

  return (
    <form>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  )
}
