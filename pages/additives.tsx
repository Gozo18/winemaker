import Link from "next/link"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import AdditivesAdd from "../components/AdditivesAdd"
import Additives from "../components/Additives"
import styles from '../styles/Additives.module.scss'

export default function additives() {
  const router = useRouter();
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading</p>;

    if (!user) router.push("/login");

    if (user) {

        return (
            <div className={styles.additivesBox}>
                <h2>Přípravky</h2>

                <AdditivesAdd email={user.email} />

                <Additives email={user.email} />
            </div>

        );
    }
}
