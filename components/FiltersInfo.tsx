import FiltersInfoItem from "./FiltersInfoItem"
import styles from "../styles/Wine.module.scss"
import Advertising from "./Advertising"

export default function FiltersInfo({ thisWine }: any) {
  return (
    <div className={styles.outputsBox}>
      {thisWine[0].filters.length > 0 ? (
        <div className={styles.itemsBox}>
          {thisWine[0].filters.map((w: any, i: number) => (
            <FiltersInfoItem w={w} wineId={thisWine[0].id} key={i} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyBox}>
          <h4>Žádný záznam!</h4>
        </div>
      )}
      <Advertising />
    </div>
  )
}
