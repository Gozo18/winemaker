import Link from "next/link"
import { useStateContext } from "../config/context"
import styles from "../styles/CurrentWines.module.scss"

export default function Wines() {
  const { winesLoading } = useStateContext()

  let winesStorage: any = localStorage.getItem("wines")

  let winesJson: any = JSON.parse(winesStorage)

  const bottledCheck = (wine: any) => {
    return wine.bottled != true
  }

  let result = winesJson.filter(bottledCheck)

  return (
    <>
      {winesJson === undefined ? (
        <div>Načítám...</div>
      ) : (
        <div className={styles.gridBox}>
          {result.map((doc: any, i: any) => (
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
