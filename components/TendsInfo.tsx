import TendsInfoItem from "./TendsInfoItem"
import styles from "../styles/Wine.module.scss"

export default function TendsInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].tends.length > 0 ? (
        <>
          {thisWine[0].tends.map((w: any, i: number) => (
            <TendsInfoItem w={w} wineId={thisWine[0].id} key={i} />
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
