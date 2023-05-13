import { useEffect } from "react"
import Link from "next/link"
import { useStateContext } from "../config/context"
import { auth } from "../config/firebase"
import { VscSignOut, VscAccount, VscHome, VscInfo } from "react-icons/vsc"
import styles from "../styles/Nav.module.scss"

export default function EmailSet({ email }: any) {
  const { setEmail } = useStateContext()

  useEffect(() => {
    setEmail(email)
  }, [email])

  return (
    <ul>
      {/* <li>
        <Link href="/homepage">
          <VscAccount />
          {email}
        </Link>
      </li> */}
      <li>
        <Link href="/homepage">
          <VscHome />
          Domů
        </Link>
      </li>
      <li>
        <Link href="/info">
          <VscInfo /> Informace
        </Link>
      </li>
      <li className={styles.logoutButton}>
        <span onClick={() => auth.signOut()}>
          <VscSignOut /> Odhlásit
        </span>
      </li>
    </ul>
  )
}
