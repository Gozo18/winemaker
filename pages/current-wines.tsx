import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import WineAdd from "../components/WineAdd"
import Wines from "../components/Wines"
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

            <WineAdd email={user.email} />

            <Wines email={user.email} />
        </div>
    );
}
