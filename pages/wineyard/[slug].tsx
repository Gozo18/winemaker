import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useStateContext } from "../../config/context"
import WineyardInfo from "../../components/WineyardInfo"
import BackLink from "../../components/BackLink"
import WineyardDoingsAdd from "../../components/WineyardDoingsAdd"
import WineyardDoings from "../../components/WineyardDoings"
import { VscInfo, VscChecklist } from "react-icons/vsc"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styles from "../../styles/Wine.module.scss"

export default function wineyard() {
  const { wineyardsLoading } = useStateContext()
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user) {
    const slug = router.query.slug

    let wineyardsStorage: any = localStorage.getItem("wineyards")

    let wineyardsJson: any = JSON.parse(wineyardsStorage)

    let thisWineyard = wineyardsJson.filter(function (e: any) {
      return e.slug === slug
    })

    const { name, place, note, id } = thisWineyard[0]

    return (
      <div className={styles.wineBox}>
        <div className={styles.headerBox}>
          <BackLink />
          <h2>
            {name} - {place}
          </h2>

          <div></div>
        </div>

        <Tabs>
          <TabList>
            <Tab>
              <VscInfo />
              <span>O vinohradu</span>
            </Tab>
            <Tab>
              <VscChecklist />
              <span>Činnosti</span>
            </Tab>
          </TabList>

          <TabPanel>
            <div className={styles.headerBox}>
              <h3>O vinohradu</h3>
            </div>
            <div className={styles.notes}>
              <WineyardInfo thisWineyard={thisWineyard} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Činnosti</h3>
              <WineyardDoingsAdd id={id} />
            </div>
            <div className={styles.notes}>
              <WineyardDoings thisWineyard={thisWineyard} />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
