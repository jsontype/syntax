import React from 'react'
import styles from './Header.module.scss'

export default function Header({ text }) {
  return (
      <div>
      <h1 className={styles.title}>{text}</h1>
      </div>
  )
}
