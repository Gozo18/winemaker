import AddonsInfoItem from "./AddonsInfoItem"
import styles from "../styles/Wine.module.scss"

export default function AddonsInfo({ thisWine }: any) {
  let totalPrice = 0

  thisWine[0].addons.map(
    (w: any) => (totalPrice = totalPrice + Number(w.price))
  )
  return (
    <>
      <div className={styles.note}>
        <div className={styles.noteText}>
          <p>
            <strong>Celková cena:</strong> {totalPrice}
            <span>,- Kč</span>
          </p>
        </div>
      </div>
      {thisWine[0].addons.map((w: any, i: number) => (
        <AddonsInfoItem w={w} wineId={thisWine[0].id} key={i} />
      ))}
    </>
  )
}
