import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import Addnote from "../../components/AddNote"
import Notes from "../../components/Notes"
import BackLink from "../../components/BackLink"
import styles from "../../styles/Notes.module.scss"

export default function notes() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if (loading) return <p>Loading</p>

  if (!user) router.push("/login")

  if (user) {
    return (
      <div className={styles.notesBox}>
        <div className={styles.headerBox}>
          <BackLink />

          <h2>Poznámky</h2>

          <Addnote email={user.email} />
        </div>

        <Notes email={user.email} />
      </div>
    )
  }
}
