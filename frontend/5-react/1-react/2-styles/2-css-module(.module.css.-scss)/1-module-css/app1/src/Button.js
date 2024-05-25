import React from 'react'
import styles from './Button.module.css'

export default function Button () {
  const onClick = () => {
    alert('Button이 클릭되었습니다.')
  }

  const isOpen = false

  return (
    <div className={`${styles.btn} ${styles.border}`} onClick={onClick}>
      <button className="primary">버튼</button>
    </div>
  )
}
