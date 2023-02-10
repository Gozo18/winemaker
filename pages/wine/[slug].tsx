import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../../styles/Wine.module.scss"

export default function wine() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Loading</p>

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
      <div className={styles.wineBox}>
        <h2>
          {name} {year} {sub}
        </h2>
        <div className={styles.notes}>
          <details open>
            <summary>
              <span>O víně</span>
            </summary>
            <hr />
            <div className={styles.note}>
              <div>
                <p>
                  <strong>Odrůda:</strong> {name}
                </p>
                <p>
                  <strong>Rok:</strong> {year}
                </p>
                <p>
                  <strong>Přívlastek:</strong> {sub}
                </p>
                <p>
                  <strong>Trať:</strong> {place}
                </p>
                <p>
                  <strong>Poznámka:</strong> {note}
                </p>
              </div>
              <div className={styles.noteIcons}>
                <VscEdit />
                <VscTrash />
              </div>
            </div>
          </details>
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
    )
  }
}
