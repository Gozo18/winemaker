import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useStateContext } from "../../config/context"
import WineInfo from "../../components/WineInfo"
import BackLink from "../../components/BackLink"
import PickupAdd from "../../components/PickupAdd"
import HarvestInfo from "../../components/HarvestInfo"
import AnalyticsAdd from "../../components/AnalyticsAdd"
import AnalyticsInfo from "../../components/AnalyticsInfo"
import {
  VscBeaker,
  VscDatabase,
  VscFilter,
  VscInfo,
  VscHistory,
  VscChecklist,
  VscVerified,
  VscSync,
} from "react-icons/vsc"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import styles from "../../styles/Wine.module.scss"

export default function wine() {
  const { winesLoading } = useStateContext()
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user) {
    const email = user.email
    const slug = router.query.slug

    let winesStorage: any = localStorage.getItem("wines")

    let winesJson: any = JSON.parse(winesStorage)

    let thisWine = winesJson.filter(function (e: any) {
      return e.slug === slug
    })

    const { name, sub, year, place, note, id } = thisWine[0]

    return (
      <div className={styles.wineBox}>
        <div className={styles.headerBox}>
          <BackLink />
          <h2>
            {name} {year} - {sub}
          </h2>

          <div></div>
        </div>

        <Tabs>
          <TabList>
            <Tab>
              <VscInfo />
              <span>O víně</span>
            </Tab>
            <Tab>
              <VscHistory />
              <span>Sběr</span>
            </Tab>
            <Tab>
              <VscChecklist />
              <span>Analytika</span>
            </Tab>
            <Tab>
              <VscBeaker />
              <span>Přípravky</span>
            </Tab>
            <Tab>
              <VscSync />
              <span>Stáčení</span>
            </Tab>
            <Tab>
              <VscFilter />
              <span>Filtrace</span>
            </Tab>
            <Tab>
              <VscDatabase />
              <span>Nádoba</span>
            </Tab>
            <Tab>
              <VscVerified />
              <span>Lahvování</span>
            </Tab>
          </TabList>

          <TabPanel>
            <div className={styles.headerBox}>
              <h3>O víně</h3>
            </div>
            <div className={styles.notes}>
              <WineInfo thisWine={thisWine} email={email} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Sběr</h3>
              <PickupAdd id={id} />
            </div>
            <HarvestInfo thisWine={thisWine} />
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Analytika</h3>
              <AnalyticsAdd id={id} />
            </div>
            <AnalyticsInfo thisWine={thisWine} />
          </TabPanel>
          <TabPanel>
            <h3>Přípravky</h3>
          </TabPanel>
          <TabPanel>
            <h3>Stáčení</h3>
          </TabPanel>
          <TabPanel>
            <h3>Filtrace</h3>
          </TabPanel>
          <TabPanel>
            <h3>Nádoba</h3>
          </TabPanel>
          <TabPanel>
            <h3>Lahvování</h3>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
