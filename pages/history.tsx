import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import History from "../components/History"
import styles from "../styles/History.module.scss"

export default function history() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user)
    return (
      <div className={styles.historyBox}>
        <h2>Historie vín</h2>

        <History />
      </div>
    )
}
