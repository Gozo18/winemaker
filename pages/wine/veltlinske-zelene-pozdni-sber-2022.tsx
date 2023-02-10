import Link from "next/link"
import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../../styles/Wine.module.scss"

export default function currentWine() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Loading</p>

  if (!user) router.push("/login")

  if (user)
    return (
      <div className={styles.wineBox}>
        <h2>Veltlínské zelené - pozdní sběr - 2022</h2>

        <h3>sběr</h3>
        <div className={styles.notes}>
          <div className={styles.note}>
            <div>
              <div className={styles.noteDate}>Datum: 25.10.2022</div>
              <div>Trať: Železná, Perná</div>
              <div>Cukernatost: 22,5 °NM</div>
            </div>
            <div className={styles.noteIcons}>
              <VscEdit /> <VscTrash />
            </div>
          </div>
        </div>
        <h3>analytika</h3>
        <div className={styles.notes}>
          <div className={styles.note}>
            <div>
              <div className={styles.noteDate}>Datum: 27.10.2022</div>
              <div>Cukernatost: 22,5 °NM</div>
              <div>Kyselinky: 6,9 g</div>
              <div>pH: 3</div>
            </div>
            <div className={styles.noteIcons}>
              <VscEdit /> <VscTrash />
            </div>
          </div>
        </div>
        <h3>síra</h3>
        <div className={styles.notes}>
          <div className={styles.note}>
            <div>
              <div className={styles.noteDate}>Datum: 27.10.2022</div>
              <div>Síra: 30 g</div>
            </div>
            <div className={styles.noteIcons}>
              <VscEdit /> <VscTrash />
            </div>
          </div>
        </div>
        <h3>přípravky</h3>
        <div className={styles.notes}>
          <div className={styles.note}>
            <div>
              <div className={styles.noteDate}>Datum: 27.10.2022</div>
              <div>Kvasinky: VitiFerm Pinot</div>
              <div>Množství: 500 g</div>
            </div>
            <div className={styles.noteIcons}>
              <VscEdit /> <VscTrash />
            </div>
          </div>
        </div>
        <h3>stáčení</h3>
        <h3>filtrace</h3>
        <h3>lahvování</h3>
        <h3>nádoba</h3>
        <div className={styles.notes}>
          <div className={styles.note}>
            <div>
              <div className={styles.noteDate}>Datum: 27.10.2022</div>
              <div>Nádoba: Tank č. 1 - 1.000 l</div>
            </div>
            <div className={styles.noteIcons}>
              <VscEdit /> <VscTrash />
            </div>
          </div>
        </div>
      </div>
    )
}
