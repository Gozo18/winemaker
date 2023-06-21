import Head from "next/head"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import WineAdd from "../components/WineAdd"
import Wines from "../components/Wines"
import { useStateContext } from "../config/context"
import BackLink from "../components/BackLink"
import styles from "../styles/CurrentWines.module.scss"

export default function currentWines() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)
  const { winesLoading } = useStateContext()

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user) {
    if (!winesLoading) {
      return (
        <>
          <Head>
            <title>WineMaker beta - aktuální sklep</title>
          </Head>
          <p>Načítám...</p>
        </>
      )
    } else {
      return (
        <>
          <Head>
            <title>WineMaker beta - aktuální sklep</title>
          </Head>
          <div className={styles.currentBox}>
            <div className={styles.headerBox}>
              <BackLink />

              <h2>Aktuální sklep</h2>

              <WineAdd email={user.email} />
            </div>

            <Wines />
          </div>
        </>
      )
    }
  }
}
