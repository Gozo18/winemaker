import FiltersInfoItem from "./FiltersInfoItem"
import styles from "../styles/Wine.module.scss"

export default function FiltersInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].filters.length > 0 ? (
        <>
          {thisWine[0].filters.map((w: any, i: number) => (
            <FiltersInfoItem w={w} wineId={thisWine[0].id} key={i} />
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
