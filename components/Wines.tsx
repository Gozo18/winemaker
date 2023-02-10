import Link from "next/link"
import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import styles from "../styles/CurrentWines.module.scss"

export default function Wines({ email }: any) {
  const { winesLoading, setWinesLoading, winesData, setWinesData } =
    useStateContext()

  if (!winesLoading) {
    const querySnapshot = async () => {
      try {
        const winesData: any = await getDocs(
          collection(db, "winemakers", email, "wines")
        )
        const winesArray: any = []
        winesData.forEach((doc: any) => {
          const pushData = doc.data()
          pushData.id = doc.id
          pushData.timestamp = new Date(doc.data().date)
          winesArray.push(pushData)
        })
        winesArray.sort((a: any, b: any) => a.timestamp - b.timestamp).reverse()
        setWinesData(winesArray)
        localStorage.setItem("wines", JSON.stringify(winesArray))
        setWinesLoading(true)
      } catch (err) {
        toast.error("Něco se nepovedlo!")
      }
    }

    querySnapshot()
  }

  return (
    <>
      {winesData === undefined ? (
        <div>Načítám...</div>
      ) : (
        <div className={styles.gridBox}>
          {winesData.map((doc: any, i: any) => (
            <Link href={`/wine/${doc.slug}`} key={i}>
              <h3>{doc.name}</h3>
              <p>{doc.sub}</p>
              <p>{doc.year}</p>
              <p>{doc.place}</p>
              {doc.note != "" && <p>{doc.note}</p>}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
