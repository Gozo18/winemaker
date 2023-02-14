import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useStateContext } from "../../config/context"
import WineInfo from "../../components/WineInfo"
import BackLink from "../../components/BackLink"
import PickupAdd from "../../components/PickupAdd"
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

    const { name, sub, year, place, note } = thisWine[0]

    return (
      <div className={styles.wineBox}>
        <BackLink />
        <h2>
          {name} {year} <br /> {sub}
        </h2>
        <PickupAdd />

        <Tabs>
          <TabList>
            <Tab>O víně</Tab>
            <Tab>Sběr</Tab>
            <Tab>Analytika</Tab>
            <Tab>Síra</Tab>
            <Tab>Přípravky</Tab>
            <Tab>Stáčení</Tab>
            <Tab>Filtrace</Tab>
            <Tab>Lahvování</Tab>
            <Tab>Nádoba</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.notes}>
              <WineInfo thisWine={thisWine} email={email} />
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}
