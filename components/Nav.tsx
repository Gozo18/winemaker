import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  VscSignIn,
  VscSignOut,
  VscSettingsGear,
  VscAccount,
  VscHome,
} from "react-icons/vsc"
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
        </ul>
      )}
      {user && (
        <ul>
          <li>
            <Link href="/homepage">
              <VscAccount />
              {user.email}
            </Link>
          </li>
          <li>
            <Link href="/homepage">
              <VscHome />
              Domů
            </Link>
          </li>
          <li className={styles.logoutButton}>
            <span onClick={() => auth.signOut()}>
              <VscSignOut /> Odhlásit
            </span>
          </li>
        </ul>
      )}
    </nav>
  )
}
