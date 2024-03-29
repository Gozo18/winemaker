import AddonsInfoItem from "./AddonsInfoItem"
import Advertising from "./Advertising"
import styles from "../styles/Wine.module.scss"

export default function AddonsInfo({ thisWine }: any) {
  let totalPrice = 0

  thisWine[0].addons.map(
    (w: any) => (totalPrice = totalPrice + Number(w.price))
  )
  return (
    <div className={styles.outputsBox}>
      <div className={styles.itemsBox}>
        <div className={styles.note}>
          <div className={styles.noteText}>
            <p>
              <strong>Celková cena:</strong> {totalPrice}
              <span>,- Kč</span>
            </p>
          </div>
        </div>

        {thisWine[0].addons.length > 0 ? (
          <>
            {thisWine[0].addons.map((w: any, i: number) => (
              <div key={i}>
                <AddonsInfoItem w={w} wineId={thisWine[0].id} />
              </div>
            ))}
          </>
        ) : (
          <div className={styles.emptyBox}>
            <h4>Žádný záznam!</h4>
          </div>
        )}
      </div>
      <Advertising />
    </div>
  )
}
