import styles from "./style.module.scss"
import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <header className={styles.navBar}>
      <Link to="/" className={styles.navBarItem}>
        Home
      </Link>
      <Link to="/movies" className={styles.navBarItem}>
        Movies
      </Link>
      <Link to="/todos" className={styles.navBarItem}>
        Todos
      </Link>
    </header>
  )
}
