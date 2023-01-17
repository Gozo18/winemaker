import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import styles from '../styles/CurrentWines.module.scss'

export default function currentWines() {

    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading</p>;

    if (!user) router.push("/login");

    if (user)
      return (
        <div className={styles.currentBox}>
            <h2>Aktuální sklep</h2>

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
