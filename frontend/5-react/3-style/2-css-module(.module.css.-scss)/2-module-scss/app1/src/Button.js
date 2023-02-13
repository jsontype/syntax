import React from 'react'
import styles from './Button.module.scss'

export default function Button () {
  const onClick = () => {
    alert('Button이 클릭되었습니다.')
  }

  return (
    <div className={styles.btn} onClick={onClick}>
      <button className='primary'>버튼</button>
    </div>
  )
}
