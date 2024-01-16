import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
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

  let totalPrice2020 = 0
  const result2020 = thisWineyard[0].doings.filter(checkYear2020)
  function checkYear2020(e: any) {
    const date = new Date(e.date)
    const year = date.getFullYear()
    return year == 2020
  }
  result2020.map(
    (w: any) => (totalPrice2020 = totalPrice2020 + Number(w.price))
  )
  totalPrice2020 = Math.round(totalPrice2020 * 100) / 100

  let totalPrice2019 = 0
  const result2019 = thisWineyard[0].doings.filter(checkYear2019)
  function checkYear2019(e: any) {
    const date = new Date(e.date)
    const year = date.getFullYear()
    return year == 2019
  }
  result2019.map(
    (w: any) => (totalPrice2019 = totalPrice2019 + Number(w.price))
  )
  totalPrice2019 = Math.round(totalPrice2019 * 100) / 100

  let totalPrice2018 = 0
  const result2018 = thisWineyard[0].doings.filter(checkYear2018)
  function checkYear2018(e: any) {
    const date = new Date(e.date)
    const year = date.getFullYear()
    return year == 2018
  }
  result2018.map(
    (w: any) => (totalPrice2018 = totalPrice2018 + Number(w.price))
  )
  totalPrice2018 = Math.round(totalPrice2018 * 100) / 100

  let totalPrice2017 = 0
  const result2017 = thisWineyard[0].doings.filter(checkYear2017)
  function checkYear2017(e: any) {
    const date = new Date(e.date)
    const year = date.getFullYear()
    return year == 2017
  }
  result2017.map(
    (w: any) => (totalPrice2017 = totalPrice2017 + Number(w.price))
  )
  totalPrice2017 = Math.round(totalPrice2017 * 100) / 100

  let totalPriceOlder = 0
  const resultOlder = thisWineyard[0].doings.filter(checkYearOlder)
  function checkYearOlder(e: any) {
    const date = new Date(e.date)
    const year = date.getFullYear()
    return year < 2017
  }
  resultOlder.map(
    (w: any) => (totalPriceOlder = totalPriceOlder + Number(w.price))
  )
  totalPriceOlder = Math.round(totalPriceOlder * 100) / 100
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>2023 ({result2023.length})</Tab>
          <Tab>2022 ({result2022.length})</Tab>
          <Tab>2021 ({result2021.length})</Tab>
          <Tab>2020 ({result2020.length})</Tab>
          <Tab>2019 ({result2019.length})</Tab>
          <Tab>2018 ({result2018.length})</Tab>
          <Tab>2017 ({result2017.length})</Tab>
          <Tab>starší ({resultOlder.length})</Tab>
        </TabList>

        <TabPanel>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Celková cena 2023:</strong> {totalPrice2023}
                <span>,- Kč</span>
              </p>
            </div>
          </div>
          {result2023.map((w: any, i: number) => (
            <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
          ))}
        </TabPanel>
        <TabPanel>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Celková cena 2022:</strong> {totalPrice2022}
                <span>,- Kč</span>
              </p>
            </div>
          </div>
          {result2022.map((w: any, i: number) => (
            <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
          ))}
        </TabPanel>
        <TabPanel>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Celková cena 2021:</strong> {totalPrice2021}
                <span>,- Kč</span>
              </p>
            </div>
          </div>
          {result2021.map((w: any, i: number) => (
            <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
          ))}
        </TabPanel>
        <TabPanel>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Celková cena 2020:</strong> {totalPrice2020}
                <span>,- Kč</span>
              </p>
            </div>
          </div>
          {result2020.map((w: any, i: number) => (
            <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
          ))}
        </TabPanel>
        <TabPanel>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Celková cena 2019:</strong> {totalPrice2019}
                <span>,- Kč</span>
              </p>
            </div>
          </div>
          {result2019.map((w: any, i: number) => (
            <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
          ))}
        </TabPanel>
        <TabPanel>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Celková cena 2018:</strong> {totalPrice2018}
                <span>,- Kč</span>
              </p>
            </div>
          </div>
          {result2018.map((w: any, i: number) => (
            <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
          ))}
        </TabPanel>
        <TabPanel>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Celková cena 2017:</strong> {totalPrice2017}
                <span>,- Kč</span>
              </p>
            </div>
          </div>
          {result2017.map((w: any, i: number) => (
            <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
          ))}
        </TabPanel>
        <TabPanel>
          <div className={styles.note}>
            <div className={styles.noteText}>
              <p>
                <strong>Celková cena starší:</strong> {totalPriceOlder}
                <span>,- Kč</span>
              </p>
            </div>
          </div>
          {resultOlder.map((w: any, i: number) => (
            <WineyardDoingsItem w={w} wineyardId={thisWineyard[0].id} key={i} />
          ))}
        </TabPanel>
      </Tabs>
    </>
  )
}
