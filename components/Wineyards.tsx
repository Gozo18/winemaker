import Link from "next/link"
import { useStateContext } from "../config/context"
import styles from "../styles/CurrentWines.module.scss"

export default function Wineyards() {
  const { wineyardsLoading } = useStateContext()

  let wineyardsStorage: any = localStorage.getItem("wineyards")

  let wineyardsJson: any = JSON.parse(wineyardsStorage)

  return (
    <>
      {wineyardsJson === undefined ? (
        <div>Načítám...</div>
      ) : (
        <>
          {wineyardsJson.length > 0 ? (
            <div className={styles.gridBox}>
              {wineyardsJson.map((doc: any, i: any) => (
                <Link href={`/wineyard/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
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
              <h4>Žádný vinohrad!</h4>
              <span>Přidejte ho.</span>
            </div>
          )}
        </>
      )}
    </>
  )
}
