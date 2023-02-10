import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useStateContext } from "../../config/context"
import { toast } from "react-toastify"
import { db } from "../../config/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import { VscEdit, VscTrash } from "react-icons/vsc"
import styles from "../../styles/Wine.module.scss"

export default function wine() {
  const { wineLoading, setWineLoading, wineData, setWineData } =
    useStateContext()
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Loading</p>

  if (!user) router.push("/login")

  if (user) {
    const email = user.email
    const slug = router.query.slug

    if (!wineLoading) {
      const querySnapshot = async () => {
        try {
          const data: any = await getDocs(
            query(
              collection(db, "winemakers", email, "wines"),
              where("slug", "==", slug)
            )
          )
          const wineArray: any = []
          data.forEach((doc: any) => {
            const pushData = doc.data()
            pushData.id = doc.id
            wineArray.push(pushData)
          })
          setWineData(wineArray)
          setWineLoading(true)
        } catch (err) {
          toast.error("Něco se nepovedlo!")
        }
      }

      querySnapshot()
    }

    if (wineData.length > 0) {
      const { name, sub, year, place, note } = wineData[0]

      return (
        <div className={styles.wineBox}>
          <h2>
            {name} {year} {sub}
          </h2>
          <div className={styles.notes}>
            <details>
              <summary>
                <span>O víně</span>
              </summary>
              <hr />
              <div>wineinfo</div>
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
    } else {
      return <p>Načítám...</p>
    }
  }
}
