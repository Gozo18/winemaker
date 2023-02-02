import Link from "next/link"
import { auth } from "../config/firebase"
import { setUser } from "../config/setUser"
import Weather from "../components/Weather"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { FcHighBattery, FcCalendar, FcTodoList, FcBiomass, FcLandscape, FcBiohazard } from "react-icons/fc";
import styles from '../styles/Home.module.scss'

export default function homepage() {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading</p>;

    if (!user) router.push("/login");

    if (user){

      const email: any = user.email;
      
      setUser(email);

      return (
        <div className={styles.homeBox}>
          <h2>Moje vinařství</h2>

          <div className={styles.homeNav}>
            <Link href="/current-wines"><FcHighBattery /> <span>Aktuální sklep</span></Link>
            <Link href="/history"><FcCalendar /> <span>Historie vín</span></Link>
            <Link href="/notes/"><FcTodoList /> <span>Poznámky</span></Link>
            <Link href="/additives"><FcBiomass /> <span>Přípravky</span></Link>
            <Link href="/wineyards"><FcLandscape /> <span>Vinohrady</span></Link>
            <Link href="/sprays"><FcBiohazard /> <span>Postřiky</span></Link>
          </div>

          <Weather />

        </div>
    )};
}