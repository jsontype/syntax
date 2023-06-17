import React from "react"
import styles from "./page.module.css"
import Cart from "components/Cart"

export default function List() {
  const items = [
    { id: 1, name: "토마토", price: 5 },
    { id: 2, name: "파스타", price: 30 },
    { id: 3, name: "코코넛", price: 7 },
  ]

  const render = items.map((item) => {
    return (
      <div key={item.id}>
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
