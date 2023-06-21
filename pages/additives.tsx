import Head from "next/head"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import AdditivesAdd from "../components/AdditivesAdd"
import Additives from "../components/Additives"
import BackLink from "../components/BackLink"
import styles from "../styles/Additives.module.scss"

export default function additives() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Načítám...</p>

  if (!user) router.push("/login")

  if (user) {
    return (
      <>
        <Head>
          <title>WineMaker beta - přípravky</title>
        </Head>
        <div className={styles.additivesBox}>
          <div className={styles.headerBox}>
            <BackLink />

            <h2>Přípravky</h2>

            <AdditivesAdd email={user.email} />
          </div>

          <Additives email={user.email} />
        </div>
      </>
    )
  }
}
