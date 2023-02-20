import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"
import { toast } from "react-toastify"
import { useStateContext } from "../config/context"
import Additive from "./Additive"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styles from "../styles/Additives.module.scss"

export default function Additives({ email }: any) {
  const {
    additivesLoading,
    setAdditivesLoading,
    additivesData,
    setAdditivesData,
  } = useStateContext()

  if (!additivesLoading) {
    const querySnapshot = async () => {
      try {
        const notesData: any = await getDocs(
          collection(db, "winemakers", email, "additives")
        )
        const notesArray: any = []
        notesData.forEach((doc: any) => {
          const pushData = doc.data()
          pushData.id = doc.id
          notesArray.push(pushData)
        })
        notesArray.sort((a: any, b: any) => a.timestamp - b.timestamp).reverse()
        setAdditivesData(notesArray)
        setAdditivesLoading(true)
      } catch (err) {
        toast.error("Něco se nepovedlo!")
      }
    }

    querySnapshot()
  }

  additivesData.sort((a: any, b: any) => a.name.localeCompare(b.name))

  let cireni = additivesData.filter(function (e: any) {
    return e.cat === "Čiření"
  })
  let enzymy = additivesData.filter(function (e: any) {
    return e.cat === "Enzymy"
  })
  let kvasinky = additivesData.filter(function (e: any) {
    return e.cat === "Kvasinky"
  })
  let vyziva = additivesData.filter(function (e: any) {
    return e.cat === "Výživa"
  })
  let taniny = additivesData.filter(function (e: any) {
    return e.cat === "Taniny"
  })
  let ostatni = additivesData.filter(function (e: any) {
    return e.cat === "Ostatní"
  })

  return (
    <>
      {additivesData === undefined ? (
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
              {cireni.map((doc: any, i: any) => (
                <div key={i}>
                  <Additive additive={doc} userEmail={email} />
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              <h3>Enzymy</h3>
              {enzymy.map((doc: any, i: any) => (
                <div key={i}>
                  <Additive additive={doc} userEmail={email} />
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              <h3>Kvasinky</h3>
              {kvasinky.map((doc: any, i: any) => (
                <div key={i}>
                  <Additive additive={doc} userEmail={email} />
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              <h3>Výživa</h3>
              {vyziva.map((doc: any, i: any) => (
                <div key={i}>
                  <Additive additive={doc} userEmail={email} />
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              <h3>Taniny</h3>
              {taniny.map((doc: any, i: any) => (
                <div key={i}>
                  <Additive additive={doc} userEmail={email} />
                </div>
              ))}
            </TabPanel>
            <TabPanel>
              <h3>Ostatní</h3>
              {ostatni.map((doc: any, i: any) => (
                <div key={i}>
                  <Additive additive={doc} userEmail={email} />
                </div>
              ))}
            </TabPanel>
          </Tabs>
        </div>
      )}
    </>
  )
}
