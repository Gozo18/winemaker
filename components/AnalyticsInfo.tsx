import AnalyticsInfoItem from "./AnalyticsInfoItem"
import Advertising from "./Advertising"
import styles from "../styles/Wine.module.scss"

export default function AnalyticsInfo({ thisWine }: any) {
  return (
    <div className={styles.outputsBox}>
      {thisWine[0].analytics.length > 0 ? (
        <div className={styles.itemsBox}>
          {thisWine[0].analytics.map((w: any, i: number) => (
            <AnalyticsInfoItem w={w} wineId={thisWine[0].id} key={i} />
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
