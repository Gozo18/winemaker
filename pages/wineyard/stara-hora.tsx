import Link from "next/link"
import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../../styles/Wine.module.scss"

export default function staraHora() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Loading</p>

  if (!user) router.push("/login")

  if (user)
    return (
      <div className={styles.wineBox}>
        <h2>Stará hora - Pavlov</h2>

        <h3>postřiky</h3>
        <div className={styles.notes}>
          <div className={styles.note}>
            <div>
              <div className={styles.noteDate}>Datum: 25.10.2022</div>
              <div>Postřik: Kumulus</div>
              <div>Množství: 200g</div>
            </div>
            <div className={styles.noteIcons}>
              <VscEdit /> <VscTrash />
            </div>
          </div>
        </div>
        <h3>hnojení</h3>
        <div className={styles.notes}>
          <div className={styles.note}>
            <div>
              <div className={styles.noteDate}>Datum: 27.10.2022</div>
              <div>Hnojivo: hnůj</div>
              <div>Množství: 2000kg</div>
            </div>
            <div className={styles.noteIcons}>
              <VscEdit /> <VscTrash />
            </div>
          </div>
        </div>
      </div>
    )
}
