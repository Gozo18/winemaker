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
        <>
          {result.length > 0 ? (
            <div className={styles.gridBox}>
              {result.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && (
                    <>
                      {doc.note.length < 20 ? (
                        <p>{doc.note}</p>
                      ) : (
                        <p>{doc.note.slice(0, 19)}...</p>
                      )}
                    </>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
              <span>Přidejte ho.</span>
            </div>
          )}
        </>
      )}
    </>
  )
}
