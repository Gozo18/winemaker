import { useEffect } from "react"
import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useStateContext } from "../../config/context"
import WineInfo from "../../components/WineInfo"
import styles from "../../styles/Wine.module.scss"

export default function wine() {
  const { winesLoading } = useStateContext()
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user) {
    const email = user.email
    const slug = router.query.slug

    let winesStorage: any = localStorage.getItem("wines")

    let winesJson: any = JSON.parse(winesStorage)

    let thisWine = winesJson.filter(function (e: any) {
      return e.slug === slug
    })

    const { name, sub, year, place, note } = thisWine[0]

    return (
      <>
        <div className={styles.wineBox}>
          <a onClick={() => router.back()} className="backLink">
            ⇽ zpět
          </a>
          <h2>
            {name} {year} <br /> {sub}
          </h2>
          <div className={styles.notes}>
            <WineInfo thisWine={thisWine} email={email} />
            <div className={styles.divider}>
              <hr />
              <h3>Sběr</h3>
            </div>
            <div className={styles.notes}>
              <div className={styles.note}>
                <div>
                  <div className={styles.noteDate}>Datum: 25.10.2022</div>
                  <div>Trať: Železná, Perná</div>
                  <div>Cukernatost: 22,5 °NM</div>
                </div>
                <div className={styles.noteIcons}>edit delete</div>
              </div>
            </div>
            <div className={styles.divider}>
              <hr />
              <h3>Analytika</h3>
            </div>
            <div className={styles.divider}>
              <hr />
              <h3>Síra</h3>
            </div>
            <div className={styles.divider}>
              <hr />
              <h3>Přípravky</h3>
            </div>
            <div className={styles.divider}>
              <hr />
              <h3>Stáčení</h3>
            </div>
            <div className={styles.divider}>
              <hr />
              <h3>Filtrace</h3>
            </div>
            <div className={styles.divider}>
              <hr />
              <h3>Lahvování</h3>
            </div>
            <div className={styles.divider}>
              <hr />
              <h3>Nádoba</h3>
            </div>
          </div>
        </div>
      </>
    )
  }
}
