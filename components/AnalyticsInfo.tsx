import AnalyticsInfoItem from "./AnalyticsInfoItem"
import styles from "../styles/Wine.module.scss"

export default function AnalyticsInfo({ thisWine }: any) {
  return (
    <>
      {thisWine[0].analytics.length > 0 ? (
        <>
          {thisWine[0].analytics.map((w: any, i: number) => (
            <AnalyticsInfoItem w={w} wineId={thisWine[0].id} key={i} />
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
