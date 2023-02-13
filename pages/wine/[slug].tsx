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
            <details>
              <summary>
                <span>Sběr</span>
              </summary>
              <hr />
              <div>wineinfo</div>
            </details>
            <details>
              <summary>
                <span>Analytika</span>
              </summary>
              <hr />
              <div>wineinfo</div>
            </details>
            <details>
              <summary>
                <span>Síra</span>
              </summary>
              <hr />
              <div>wineinfo</div>
            </details>
            <details>
              <summary>
                <span>Přípravky</span>
              </summary>
              <hr />
              <div>wineinfo</div>
            </details>
            <details>
              <summary>
                <span>Stáčení</span>
              </summary>
              <hr />
              <div>wineinfo</div>
            </details>
            <details>
              <summary>
                <span>Filtrace</span>
              </summary>
              <hr />
              <div>wineinfo</div>
            </details>
            <details>
              <summary>
                <span>Lahvování</span>
              </summary>
              <hr />
              <div>wineinfo</div>
            </details>
            <details>
              <summary>
                <span>Nádoba</span>
              </summary>
              <hr />
              <div>wineinfo</div>
            </details>
          </div>
        </div>
      </>
    )
  }
}
