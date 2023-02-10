import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/Additives.module.scss"
import Additive from "./Additive"

export default function Additives({ email }: any) {
  const {
    additivesLoading,
    setAdditivesLoading,
    additivesData,
    setAdditivesData,
  } = useStateContext()

  if (!additivesLoading) {
    const querySnapshot = async () => {
      try {
        const notesData: any = await getDocs(
          collection(db, "winemakers", email, "additives")
        )
        const notesArray: any = []
        notesData.forEach((doc: any) => {
          const pushData = doc.data()
          pushData.id = doc.id
          notesArray.push(pushData)
        })
        notesArray.sort((a: any, b: any) => a.timestamp - b.timestamp).reverse()
        setAdditivesData(notesArray)
        setAdditivesLoading(true)
      } catch (err) {
        toast.error("Něco se nepovedlo!")
      }
    }

    querySnapshot()
  }

  additivesData.sort((a: any, b: any) => a.name.localeCompare(b.name))

  let cireni = additivesData.filter(function (e: any) {
    return e.cat === "Čiření"
  })
  let enzymy = additivesData.filter(function (e: any) {
    return e.cat === "Enzymy"
  })
  let kvasinky = additivesData.filter(function (e: any) {
    return e.cat === "Kvasinky"
  })
  let vyziva = additivesData.filter(function (e: any) {
    return e.cat === "Výživa"
  })
  let taniny = additivesData.filter(function (e: any) {
    return e.cat === "Taniny"
  })
  let ostatni = additivesData.filter(function (e: any) {
    return e.cat === "Ostatní"
  })

  return (
    <>
      {additivesData === undefined ? (
        <div>Načítám...</div>
      ) : (
        <div className={styles.notes}>
          <details open>
            <summary>
              <span>Čiření ({cireni.length})</span>
            </summary>
            <hr />
            {cireni.map((doc: any, i: any) => (
              <div key={i}>
                <Additive additive={doc} userEmail={email} />
              </div>
            ))}
          </details>

          <details>
            <summary>
              <span>Enzymy ({enzymy.length})</span>
            </summary>
            <hr />
            {enzymy.map((doc: any, i: any) => (
              <div key={i}>
                <Additive additive={doc} userEmail={email} />
              </div>
            ))}
          </details>

          <details>
            <summary>
              <span>Kvasinky ({kvasinky.length})</span>
            </summary>
            <hr />
            {kvasinky.map((doc: any, i: any) => (
              <div key={i}>
                <Additive additive={doc} userEmail={email} />
              </div>
            ))}
          </details>

          <details>
            <summary>
              <span>Výživa ({vyziva.length})</span>
            </summary>
            <hr />
            {vyziva.map((doc: any, i: any) => (
              <div key={i}>
                <Additive additive={doc} userEmail={email} />
              </div>
            ))}
          </details>

          <details>
            <summary>
              <span>Taniny ({taniny.length})</span>
            </summary>
            <hr />
            {taniny.map((doc: any, i: any) => (
              <div key={i}>
                <Additive additive={doc} userEmail={email} />
              </div>
            ))}
          </details>

          <details>
            <summary>
              <span>Ostatní ({ostatni.length})</span>
            </summary>
            <hr />
            {ostatni.map((doc: any, i: any) => (
              <div key={i}>
                <Additive additive={doc} userEmail={email} />
              </div>
            ))}
          </details>
        </div>
      )}
    </>
  )
}
