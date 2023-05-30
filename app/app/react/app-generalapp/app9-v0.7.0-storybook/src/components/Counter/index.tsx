import { memo } from "react"
import styles from "./style.module.scss"
import { useTranslation } from "react-i18next"

type Counterprops = {
  count: number
  onIncrease : (count: number) => void
  onDecrease : (count: number) => void
}

const Counter = memo(({ 
  count,
  onIncrease,
  onDecrease,
 }: Counterprops) => {
  const { t } = useTranslation()
  return (
    <>
      <div className={styles.countLabel}>{String(t("counter:counterLabel"))}: {count}</div>
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
    </>
  )
})

export default Counter
