import React from "react"
import styles from "./page.module.css"
import Cart from "../components/Cart"

export default function List() {
  const items = [
    { id: 1, name: "토마토", price: 50 },
    { id: 2, name: "감자", price: 100 },
    { id: 3, name: "고구마", price: 150 },
  ]

  const render = items.map((item) => {
    return (
      <div key={item.id} className={styles.item}>
        {item.name} ${item.price}
        <Cart price={item.price} />
      </div>
    )
  })

  return (
    <div>
      <h2 className={styles.title}>상품목록</h2>
      <div>{render}</div>
    </div>
  )
}
