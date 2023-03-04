import styles from "./style.module.scss"

type Counterprops = {
  count: number
  setCount: (count: number) => void
}

export default function Counter({ count, setCount }: Counterprops) {
  const onIncrease = () => {
    setCount(count + 1)
  }

  const onDecrease = () => {
    setCount(count - 1)
  }

  return (
    <>
      <div className={styles.countLabel}>{count}</div>
      <button className={styles.countBtn} onClick={onIncrease}>
        +
      </button>
      <button className={styles.countBtn} onClick={onDecrease}>
        -
      </button>
    </>
  )
}
