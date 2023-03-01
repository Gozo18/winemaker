import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import BackLink from "../components/BackLink"
import SpraysAdd from "../components/SpraysAdd"
import Sprays from "../components/Sprays"
import styles from "../styles/Additives.module.scss"

export default function sprays() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user)
    return (
      <div className={styles.additivesBox}>
        <div className={styles.headerBox}>
          <BackLink />

          <h2>Postřiky</h2>

          <SpraysAdd email={user.email} />
        </div>

        <Sprays email={user.email} />
      </div>
    )
}
