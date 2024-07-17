import styles from "./style.module.scss"
import TodosContainer from "components/Todos/container"

type Counterprops = {
  count: number
  onIncrease: (count: number) => void
  onDecrease: (count: number) => void
}

export default function Counter({
  count,
  onIncrease,
  onDecrease,
}: Counterprops) {
  return (
    <>
      <div className={styles.count}>
        <div className={styles.countLabel}>{count}</div>
        <button
          className={styles.countBtn}
          onClick={(count: any) => onIncrease(count)}
        >
          +
        </button>
        <button
          className={styles.countBtn}
          onClick={(count: any) => onDecrease(count)}
        >
          -
        </button>
      </div>
      <TodosContainer />
    </>
  )
}
