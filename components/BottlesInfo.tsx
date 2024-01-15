import BottleInfoItem from "./BottleInfoItem"
import styles from "../styles/Wine.module.scss"

export default function BottlesInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].bottles.length > 0 ? (
        <>
          {thisWine[0].bottles.map((w: any, i: number) => (
            <BottleInfoItem w={w} wineId={thisWine[0].id} key={i} />
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
