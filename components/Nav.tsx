import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import EmailSet from "./EmailSet"
import { VscSignIn, VscSettingsGear, VscInfo } from "react-icons/vsc"
import styles from "../styles/Nav.module.scss"

export default function Nav() {
  const [user, loading] = useAuthState(auth)

  return (
    <nav className={styles.navBox}>
      <Link href="/">
        <h1>
          WineMaker <sup>beta</sup>
        </h1>
      </Link>
      {!user && (
        <ul>
          <li>
            <Link href="/login">
              <VscSignIn /> Přihlásit
            </Link>
          </li>
          <li>
            <Link href="/register">
              <VscSettingsGear /> Registrovat
            </Link>
          </li>
          <li>
            <Link href="/info">
              <VscInfo /> Informace
            </Link>
          </li>
        </ul>
      )}
      {user && <EmailSet email={user.email} />}
    </nav>
  )
}
