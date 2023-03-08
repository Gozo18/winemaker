import { db } from "../config/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import { useRouter } from "next/router"
import { VscEdit, VscTrash } from "react-icons/vsc"
import WineyardInfoEdit from "./WineyardInfoEdit"
import styles from "../styles/Wine.module.scss"

export default function WineyardInfo({ thisWineyard }: any) {
  const { name, place, note, id } = thisWineyard[0]
  const router = useRouter()
  const { email, editWineyardInfo, setEditWineyardInfo, setWineyardsLoading } =
    useStateContext()

  const deleteNote = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      await deleteDoc(doc(db, "winemakers", email, "wineyards", id))
      toast.success("Smazáno!")
      setWineyardsLoading(false)
      router.push("/wineyards ")
    } catch (err) {
      toast.error("Něco se nepovedlo!")
      console.log(err)
    }
  }

  const editFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditWineyardInfo(true)
  }

  return (
    <>
      {editWineyardInfo ? (
        <WineyardInfoEdit thisWineyard={thisWineyard} />
      ) : (
        <>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Název:</strong> {name}
              </p>
              <p>
                <strong>Trať:</strong> {place}
              </p>
              <p>
                <strong>Poznámka:</strong> {note}
              </p>
            </div>
            <div className={styles.noteIcons}>
              <div
                onClick={(e: any) => {
                  if (window.confirm("Odstranit vinohrad?")) deleteNote(e, id)
                }}
              >
                <VscTrash />
              </div>
              <div onClick={(e: any) => editFunc(e)}>
                <VscEdit />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
