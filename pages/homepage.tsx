import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter, NextRouter } from "next/router"
import { FcHighBattery, FcCalendar, FcTodoList, FcBiomass, FcLandscape } from "react-icons/fc";
import styles from '../styles/Home.module.scss'

interface WithRouterProps {
    router: NextRouter
  }

export default function homepage() {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <h1>Loading</h1>;

    if (!user) router.push("/login");

    if (user)
      return (
        <div className={styles.homeBox}>
          <h2>Moje vína</h2>

          <div className={styles.homeNav}>
            <Link href="/current-wines"><FcHighBattery /> <span>Aktuální sklep</span></Link>
            <Link href="/history"><FcCalendar /> <span>Historie vín</span></Link>
            <Link href="/to-do"><FcTodoList /> <span>Poznámky</span></Link>
            <Link href="/additives"><FcBiomass /> <span>Přípravky</span></Link>
            <Link href="/wineyards"><FcLandscape /> <span>Vinohrady</span></Link>
          </div>


          
        </div>
      );
}