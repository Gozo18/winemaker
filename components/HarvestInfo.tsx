import HarvestInfoItem from "./HarvestInfoItem"
import styles from "../styles/Wine.module.scss"

export default function HarvestInfo({ thisWine }: any) {
  console.log(thisWine[0].harvest.length)
  return (
    <>
      {thisWine[0].harvest.length > 0 ? (
        <>
          {thisWine[0].harvest.map((w: any, i: number) => (
            <HarvestInfoItem w={w} wineId={thisWine[0].id} key={i} />
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
