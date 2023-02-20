import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import WineAdd from "../components/WineAdd"
import Wines from "../components/Wines"
import { useStateContext } from "../config/context"
import BackLink from "../components/BackLink"
import styles from "../styles/CurrentWines.module.scss"

export default function currentWines() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  const { winesLoading } = useStateContext()

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user) {
    if (!winesLoading) {
      return <p>Načítám...</p>
    } else {
      return (
        <div className={styles.currentBox}>
          <div className={styles.headerBox}>
            <BackLink />

            <h2>Aktuální sklep</h2>

            <WineAdd email={user.email} />
          </div>

          <Wines email={user.email} />
        </div>
      )
    }
  }
}
