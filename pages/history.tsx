import Head from "next/head"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import History from "../components/History"
import BackLink from "../components/BackLink"
import styles from "../styles/History.module.scss"

export default function history() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user)
    return (
      <>
        <Head>
          <title>WineMaker beta - historie vín</title>
        </Head>
        <div className={styles.historyBox}>
          <div className={styles.headerBox}>
            <BackLink />

            <h2>Historie vín</h2>

            <div></div>
          </div>

          <History />
        </div>
      </>
    )
}
