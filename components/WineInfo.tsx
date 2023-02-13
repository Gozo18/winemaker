import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import WineInfoEdit from "./WineInfoEdit"
import styles from "../styles/Wine.module.scss"

export default function WineInfo({ thisWine, email }: any) {
  const { name, sub, year, place, note, id } = thisWine[0]
  const router = useRouter()
  const { editWineInfo, setEditWineInfo, setWinesLoading } = useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(doc(db, "winemakers", email, "wines", id))
      toast.success("Smazáno!")
      setWinesLoading(false)
      router.push("/current-wines ")
    } catch (err) {
      toast.error("Něco se nepovedlo!")
      console.log(err)
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditWineInfo(true)
  }

  return (
    <>
      {editWineInfo ? (
        <WineInfoEdit thisWine={thisWine} email={email} />
      ) : (
        <details>
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
              <VscEdit onClick={(e: any) => editFunc(e)} />
              <VscTrash
                onClick={(e: any) => {
                  if (window.confirm("Odstranit víno?")) deleteNote(e, id)
                }}
              />
            </div>
          </div>
        </details>
      )}
    </>
  )
}
