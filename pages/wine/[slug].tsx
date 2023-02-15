import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useStateContext } from "../../config/context"
import WineInfo from "../../components/WineInfo"
import BackLink from "../../components/BackLink"
import PickupAdd from "../../components/PickupAdd"
import HarvestInfo from "../../components/HarvestInfo"
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
        <BackLink />
        <h2>
          {name} {year} <br /> {sub}
        </h2>

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
              <VscVerified />
              <span>Lahvování</span>
            </Tab>
            <Tab>
              <VscDatabase />
              <span>Nádoba</span>
            </Tab>
          </TabList>

          <TabPanel>
            <h3>O víně</h3>
            <div className={styles.notes}>
              <WineInfo thisWine={thisWine} email={email} />
            </div>
          </TabPanel>
          <TabPanel>
            <h3>Sběr</h3>
            <PickupAdd id={id} />
            <HarvestInfo thisWine={thisWine} />
          </TabPanel>
          <TabPanel>
            <h3>Analytika</h3>
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
            <h3>Lahvování</h3>
          </TabPanel>
          <TabPanel>
            <h3>Nádoba</h3>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
