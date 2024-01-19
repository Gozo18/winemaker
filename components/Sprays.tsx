import { useStateContext } from "../config/context"
import Spray from "./Spray"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styles from "../styles/Additives.module.scss"
import Advertising from "./Advertising"

export default function Sprays({ email }: any) {
  const { additivesLoading } = useStateContext()

  let spraysStorage: any = localStorage.getItem("sprays")

  let spraysJson: any = JSON.parse(spraysStorage)

  let insekticidy = spraysJson.filter(function (e: any) {
    return e.cat === "Insekticidy"
  })
  let fungicidy = spraysJson.filter(function (e: any) {
    return e.cat === "Fungicidy"
  })
  let herbicidy = spraysJson.filter(function (e: any) {
    return e.cat === "Herbicidy"
  })
  let hnojiva = spraysJson.filter(function (e: any) {
    return e.cat === "Hnojiva"
  })
  let ostatni = spraysJson.filter(function (e: any) {
    return e.cat === "Ostatní"
  })

  return (
    <>
      {spraysStorage === undefined ? (
        <div>Načítám...</div>
      ) : (
        <div className={styles.notes}>
          <Tabs>
            <TabList>
              <Tab>
                <span>Insekticidy ({insekticidy.length})</span>
              </Tab>
              <Tab>
                <span>Fungicidy ({fungicidy.length})</span>
              </Tab>
              <Tab>
                <span>Herbicidy ({herbicidy.length})</span>
              </Tab>
              <Tab>
                <span>Hnojiva ({hnojiva.length})</span>
              </Tab>
              <Tab>
                <span>Ostatní ({ostatni.length})</span>
              </Tab>
            </TabList>

            <TabPanel>
              <h3>Insekticidy</h3>
              <div className={styles.outputsBox}>
                {insekticidy.length > 0 ? (
                  <div className={styles.itemsBox}>
                    {insekticidy.map((doc: any, i: any) => (
                      <div key={i}>
                        <Spray spray={doc} userEmail={email} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyBox}>
                    <h4>Žádný přípravek!</h4>
                  </div>
                )}
                <Advertising />
              </div>
            </TabPanel>
            <TabPanel>
              <h3>Fungicidy</h3>
              <div className={styles.outputsBox}>
                {fungicidy.length > 0 ? (
                  <div className={styles.itemsBox}>
                    {fungicidy.map((doc: any, i: any) => (
                      <div key={i}>
                        <Spray spray={doc} userEmail={email} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyBox}>
                    <h4>Žádný přípravek!</h4>
                  </div>
                )}
                <Advertising />
              </div>
            </TabPanel>
            <TabPanel>
              <h3>Herbicidy</h3>
              <div className={styles.outputsBox}>
                {herbicidy.length > 0 ? (
                  <div className={styles.itemsBox}>
                    {herbicidy.map((doc: any, i: any) => (
                      <div key={i}>
                        <Spray spray={doc} userEmail={email} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyBox}>
                    <h4>Žádný přípravek!</h4>
                  </div>
                )}
                <Advertising />
              </div>
            </TabPanel>
            <TabPanel>
              <h3>Hnojiva</h3>
              <div className={styles.outputsBox}>
                {hnojiva.length > 0 ? (
                  <div className={styles.itemsBox}>
                    {hnojiva.map((doc: any, i: any) => (
                      <div key={i}>
                        <Spray spray={doc} userEmail={email} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyBox}>
                    <h4>Žádný přípravek!</h4>
                  </div>
                )}
                <Advertising />
              </div>
            </TabPanel>
            <TabPanel>
              <h3>Ostatní</h3>
              <div className={styles.outputsBox}>
                {ostatni.length > 0 ? (
                  <div className={styles.itemsBox}>
                    {ostatni.map((doc: any, i: any) => (
                      <div key={i}>
                        <Spray spray={doc} userEmail={email} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyBox}>
                    <h4>Žádný přípravek!</h4>
                  </div>
                )}
                <Advertising />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      )}
    </>
  )
}
