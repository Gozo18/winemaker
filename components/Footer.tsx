import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import styles from "../styles/Footer.module.scss"

export default function Footer() {
  const [user, loading] = useAuthState(auth)

  return (
    <div className={styles.footerBox}>
      <div className={styles.footerColumn}>
        <Link href="/info">Informace pro vinaře</Link>
        <Link href="/info-partners">Informace pro partnery</Link>
        {!user && (
          <>
            <Link href="/login">Přihlásit se</Link>
            <Link href="/register">Registrovat se</Link>
            <Link href="/forgot-password">Zapomenuté heslo</Link>
          </>
        )}
        {user && (
          <>
            <div className={styles.footerLogout}>
              <span onClick={() => auth.signOut()}>
                Odhlásit <sup>{user.email}</sup>
              </span>
            </div>
          </>
        )}
      </div>
      <div className={styles.footerOrg}>
        <Link href="/">
          <h4>
            WineMaker <sup>beta</sup>
          </h4>
        </Link>
      </div>
    </div>
  )
}
