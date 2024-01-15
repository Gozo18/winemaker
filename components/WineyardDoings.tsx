import WineyardDoingsItem from "./WineyardDoingsItem"
import styles from "../styles/Wine.module.scss"

export default function WineyardDoings({ thisWineyard }: any) {
  let totalPrice2023 = 0
  const result2023 = thisWineyard[0].doings.filter(checkYear2023)
  function checkYear2023(e: any) {
    const date = new Date(e.date)
    const year = date.getFullYear()
    return year == 2023
  }
  result2023.map(
    (w: any) => (totalPrice2023 = totalPrice2023 + Number(w.price))
  )
  totalPrice2023 = Math.round(totalPrice2023 * 100) / 100

  let totalPrice2022 = 0
  const result2022 = thisWineyard[0].doings.filter(checkYear2022)
  function checkYear2022(e: any) {
    const date = new Date(e.date)
    const year = date.getFullYear()
    return year == 2022
  }
  result2022.map(
    (w: any) => (totalPrice2022 = totalPrice2022 + Number(w.price))
  )
  totalPrice2022 = Math.round(totalPrice2022 * 100) / 100

  let totalPrice2021 = 0
  const result2021 = thisWineyard[0].doings.filter(checkYear2021)
  function checkYear2021(e: any) {
    const date = new Date(e.date)
    const year = date.getFullYear()
    return year == 2021
  }
  result2021.map(
    (w: any) => (totalPrice2021 = totalPrice2021 + Number(w.price))
  )
  totalPrice2021 = Math.round(totalPrice2021 * 100) / 100
  return (
    <>
      <div className={styles.note}>
        <div className={styles.noteText}>
          <p>
            <strong>Celková cena 2023:</strong> {totalPrice2023}
            <span>,- Kč</span>
          </p>
          <p>
            <strong>Celková cena 2022:</strong> {totalPrice2022}
            <span>,- Kč</span>
          </p>
          <p>
            <strong>Celková cena 2021:</strong> {totalPrice2021}
            <span>,- Kč</span>
          </p>
        </div>
      </div>
      {thisWineyard[0].doings.map((w: any, i: number) => (
        <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
      ))}
    </>
  )
}
