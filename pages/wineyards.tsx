import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import BackLink from "../components/BackLink"
import WineyardAdd from "../components/WineyardAdd"
import Wineyards from "../components/Wineyards"
import styles from "../styles/Wineyards.module.scss"

export default function wineyards() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user)
    return (
      <div className={styles.wineyardsBox}>
        <div className={styles.headerBox}>
          <BackLink />

          <h2>Vinohrady</h2>

          <WineyardAdd />
        </div>

        <Wineyards />
      </div>
    )
}
