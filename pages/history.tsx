import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import styles from '../styles/History.module.scss'

export default function history() {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading</p>;

    if (!user) router.push("/login");

    if (user)
      return (
        <div className={styles.historyBox}>
            <h2>Historie vín</h2>

            <div className={styles.historySubmenu}>
                <h3 className={styles.activeYear}>2022</h3>
                <h3>2021</h3>
                <h3>2020</h3>
                <h3>2019</h3>
                <h3>2018</h3>
                <h3>2017</h3>
            </div>

            <div className={styles.gridBox}>
                <Link href="/wine/veltlinske-zelene-pozdni-sber-2022" className={styles.wineBox}>
                    <h3>Veltlínské zelené</h3>
                    <p>pozdní sběr</p>
                    <p>2022</p>
                </Link>
                <Link href="/wine/veltlinske-zelene-pozdni-sber-2022" className={styles.wineBox}>
                    <h3>Veltlínské zelené</h3>
                    <p>pozdní sběr</p>
                    <p>2022</p>
                </Link>
                <Link href="/wine/veltlinske-zelene-pozdni-sber-2022" className={styles.wineBox}>
                    <h3>Veltlínské zelené</h3>
                    <p>pozdní sběr</p>
                    <p>2022</p>
                </Link>
                <Link href="/wine/veltlinske-zelene-pozdni-sber-2022" className={styles.wineBox}>
                    <h3>Veltlínské zelené</h3>
                    <p>pozdní sběr</p>
                    <p>2022</p>
                </Link>
                <Link href="/wine/veltlinske-zelene-pozdni-sber-2022" className={styles.wineBox}>
                    <h3>Veltlínské zelené</h3>
                    <p>pozdní sběr</p>
                    <p>2022</p>
                </Link>
                <Link href="/wine/veltlinske-zelene-pozdni-sber-2022" className={styles.wineBox}>
                    <h3>Veltlínské zelené</h3>
                    <p>pozdní sběr</p>
                    <p>2022</p>
                </Link>
            </div>
        </div>
    );
}
