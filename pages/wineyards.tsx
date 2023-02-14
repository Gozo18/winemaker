import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import styles from "../styles/Wineyards.module.scss"

export default function wineyards() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user)
    return (
      <div className={styles.wineyardsBox}>
        <h2>Vinohrady</h2>

        <div className={styles.gridBox}>
          <Link href="/wineyard/stara-hora">
            <h3>Stará hora</h3>
            <p>Pavlov</p>
          </Link>
          <Link href="/wineyard/stara-hora">
            <h3>Pod Pálavou</h3>
            <p>Pavlov</p>
          </Link>
          <Link href="/wineyard/stara-hora">
            <h3>Slunný vrch</h3>
            <p>Pavlov</p>
          </Link>
        </div>
      </div>
    )
}
