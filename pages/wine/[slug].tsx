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
import AddonsAdd from "../../components/AddonsAdd"
import AddonsInfo from "../../components/AddonsInfo"
import TendsAdd from "../../components/TendsAdd"
import TendsInfo from "../../components/TendsInfo"
import FiltersAdd from "../../components/FiltersAdd"
import FiltersInfo from "../../components/FiltersInfo"
import JarsAdd from "../../components/JarsAdd"
import JarsInfo from "../../components/JarsInfo"
import BottlesAdd from "../../components/BottlesAdd"
import BottlesInfo from "../../components/BottlesInfo"
import BottlesFinish from "../../components/BottlesFinish"
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
            <div className={styles.notes}>
              <HarvestInfo thisWine={thisWine} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Analytika</h3>
              <AnalyticsAdd id={id} />
            </div>
            <div className={styles.notes}>
              <AnalyticsInfo thisWine={thisWine} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Přípravky</h3>
              <AddonsAdd id={id} />
            </div>
            <div className={styles.notes}>
              <AddonsInfo thisWine={thisWine} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Stáčení</h3>
              <TendsAdd id={id} />
            </div>
            <div className={styles.notes}>
              <TendsInfo thisWine={thisWine} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Filtrace</h3>
              <FiltersAdd id={id} />
            </div>
            <div className={styles.notes}>
              <FiltersInfo thisWine={thisWine} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Nádoba</h3>
              <JarsAdd id={id} />
            </div>
            <div className={styles.notes}>
              <JarsInfo thisWine={thisWine} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.headerBox}>
              <div className={styles.headerBoxEmpty}></div>
              <h3>Lahvování</h3>
              <BottlesAdd id={id} />
            </div>
            <div className={styles.notes}>
              <BottlesInfo thisWine={thisWine} />
            </div>
            <BottlesFinish thisWine={thisWine} />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
