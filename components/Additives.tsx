import { useStateContext } from "../config/context"
import Additive from "./Additive"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styles from "../styles/Additives.module.scss"

export default function Additives({ email }: any) {
  const { additivesLoading } = useStateContext()

  let additivesStorage: any = localStorage.getItem("additives")

  let additivesJson: any = JSON.parse(additivesStorage)

  let cireni = additivesJson.filter(function (e: any) {
    return e.cat === "Čiření"
  })
  let enzymy = additivesJson.filter(function (e: any) {
    return e.cat === "Enzymy"
  })
  let kvasinky = additivesJson.filter(function (e: any) {
    return e.cat === "Kvasinky"
  })
  let vyziva = additivesJson.filter(function (e: any) {
    return e.cat === "Výživa"
  })
  let taniny = additivesJson.filter(function (e: any) {
    return e.cat === "Taniny"
  })
  let ostatni = additivesJson.filter(function (e: any) {
    return e.cat === "Ostatní"
  })

  return (
    <>
      {additivesStorage === undefined ? (
        <div>Načítám...</div>
      ) : (
        <div className={styles.notes}>
          <Tabs>
            <TabList>
              <Tab>
                <span>Čiření ({cireni.length})</span>
              </Tab>
              <Tab>
                <span>Enzymy ({enzymy.length})</span>
              </Tab>
              <Tab>
                <span>Kvasinky ({kvasinky.length})</span>
              </Tab>
              <Tab>
                <span>Výživa ({vyziva.length})</span>
              </Tab>
              <Tab>
                <span>Taniny ({taniny.length})</span>
              </Tab>
              <Tab>
                <span>Ostatní ({ostatni.length})</span>
              </Tab>
            </TabList>

            <TabPanel>
              <h3>Čiření</h3>
              {cireni.length > 0 ? (
                <>
                  {cireni.map((doc: any, i: any) => (
                    <div key={i}>
                      <Additive additive={doc} userEmail={email} />
                    </div>
                  ))}
                </>
              ) : (
                <div className={styles.emptyBox}>
                  <h4>Žádný přípravek!</h4>
                </div>
              )}
            </TabPanel>
            <TabPanel>
              <h3>Enzymy</h3>
              {enzymy.length > 0 ? (
                <>
                  {enzymy.map((doc: any, i: any) => (
                    <div key={i}>
                      <Additive additive={doc} userEmail={email} />
                    </div>
                  ))}
                </>
              ) : (
                <div className={styles.emptyBox}>
                  <h4>Žádný přípravek!</h4>
                </div>
              )}
            </TabPanel>
            <TabPanel>
              <h3>Kvasinky</h3>
              {kvasinky.length > 0 ? (
                <>
                  {kvasinky.map((doc: any, i: any) => (
                    <div key={i}>
                      <Additive additive={doc} userEmail={email} />
                    </div>
                  ))}
                </>
              ) : (
                <div className={styles.emptyBox}>
                  <h4>Žádný přípravek!</h4>
                </div>
              )}
            </TabPanel>
            <TabPanel>
              <h3>Výživa</h3>
              {vyziva.length > 0 ? (
                <>
                  {vyziva.map((doc: any, i: any) => (
                    <div key={i}>
                      <Additive additive={doc} userEmail={email} />
                    </div>
                  ))}
                </>
              ) : (
                <div className={styles.emptyBox}>
                  <h4>Žádný přípravek!</h4>
                </div>
              )}
            </TabPanel>
            <TabPanel>
              <h3>Taniny</h3>
              {taniny.length > 0 ? (
                <>
                  {taniny.map((doc: any, i: any) => (
                    <div key={i}>
                      <Additive additive={doc} userEmail={email} />
                    </div>
                  ))}
                </>
              ) : (
                <div className={styles.emptyBox}>
                  <h4>Žádný přípravek!</h4>
                </div>
              )}
            </TabPanel>
            <TabPanel>
              <h3>Ostatní</h3>
              {ostatni.length > 0 ? (
                <>
                  {ostatni.map((doc: any, i: any) => (
                    <div key={i}>
                      <Additive additive={doc} userEmail={email} />
                    </div>
                  ))}
                </>
              ) : (
                <div className={styles.emptyBox}>
                  <h4>Žádný přípravek!</h4>
                </div>
              )}
            </TabPanel>
          </Tabs>
        </div>
      )}
    </>
  )
}
