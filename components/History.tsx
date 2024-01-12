import Link from "next/link"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styles from "../styles/CurrentWines.module.scss"

export default function History() {
  let winesStorage: any = localStorage.getItem("wines")

  let winesJson: any = JSON.parse(winesStorage)

  const yearCheck = (wine: any, year: any) => {
    return wine.year === year
  }

  const olderCheck = (wine: any, year: any) => {
    return wine.year <= year
  }

  let result2023 = winesJson.filter((wine: any) => yearCheck(wine, "2023"))
  let result2022 = winesJson.filter((wine: any) => yearCheck(wine, "2022"))
  let result2021 = winesJson.filter((wine: any) => yearCheck(wine, "2021"))
  let result2020 = winesJson.filter((wine: any) => yearCheck(wine, "2020"))
  let result2019 = winesJson.filter((wine: any) => yearCheck(wine, "2019"))
  let result2018 = winesJson.filter((wine: any) => yearCheck(wine, "2018"))
  let result2017 = winesJson.filter((wine: any) => yearCheck(wine, "2017"))
  let resultOlder = winesJson.filter((wine: any) => olderCheck(wine, "2016"))

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>2023</Tab>
          <Tab>2022</Tab>
          <Tab>2021</Tab>
          <Tab>2020</Tab>
          <Tab>2019</Tab>
          <Tab>2018</Tab>
          <Tab>2017</Tab>
          <Tab>starší</Tab>
        </TabList>

        <TabPanel>
          <h3>2023</h3>
          {result2023.length > 0 ? (
            <div className={styles.gridBox}>
              {result2023.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && <p>{doc.note}</p>}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h3>2022</h3>
          {result2022.length > 0 ? (
            <div className={styles.gridBox}>
              {result2022.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && <p>{doc.note}</p>}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h3>2021</h3>
          {result2021.length > 0 ? (
            <div className={styles.gridBox}>
              {result2021.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && <p>{doc.note}</p>}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h3>2020</h3>
          {result2020.length > 0 ? (
            <div className={styles.gridBox}>
              {result2020.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && <p>{doc.note}</p>}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h3>2019</h3>
          {result2019.length > 0 ? (
            <div className={styles.gridBox}>
              {result2019.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && <p>{doc.note}</p>}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h3>2018</h3>
          {result2018.length > 0 ? (
            <div className={styles.gridBox}>
              {result2018.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && <p>{doc.note}</p>}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h3>2017</h3>
          {result2017.length > 0 ? (
            <div className={styles.gridBox}>
              {result2017.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && <p>{doc.note}</p>}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <h3>starší</h3>
          {resultOlder.length > 0 ? (
            <div className={styles.gridBox}>
              {resultOlder.map((doc: any, i: any) => (
                <Link href={`/wine/${doc.slug}`} key={i}>
                  <h3>{doc.name}</h3>
                  <p>{doc.sub}</p>
                  <p>{doc.year}</p>
                  <p>{doc.place}</p>
                  {doc.note != "" && <p>{doc.note}</p>}
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.emptyBox}>
              <h4>Žádné víno!</h4>
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  )
}
