import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import styles from "../styles/Footer.module.scss"

export default function Footer() {
  const [user, loading] = useAuthState(auth)

  return (
    <div className={styles.footerBox}>
      <div className={styles.footerColumn}>
        {!user && (
          <>
            <Link href="/login">Přihlásit se</Link>
            <Link href="/register">Registrovat se</Link>
            <Link href="/forgot-password">Zapomenuté heslo</Link>
          </>
        )}
        {user && (
          <>
            <Link href="/homepage">{user.email}</Link>
            <div className={styles.footerLogout}>
              <span onClick={() => auth.signOut()}>Odhlásit</span>
            </div>
          </>
        )}
      </div>
      <div className={styles.footerOrg}>
        <Link href="/">
          <h5>
            WineMaker <sup>beta</sup>
          </h5>
        </Link>
      </div>
    </div>
  )
}
