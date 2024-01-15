import JarsInfoItem from "./JarsInfoItem"
import styles from "../styles/Wine.module.scss"

export default function JarsInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].jars.length > 0 ? (
        <>
          {thisWine[0].jars.map((w: any, i: number) => (
            <JarsInfoItem w={w} wineId={thisWine[0].id} key={i} />
          ))}
        </>
      ) : (
        <div className={styles.emptyBox}>
          <h4>Žádný záznam!</h4>
        </div>
      )}
    </>
  )
}
