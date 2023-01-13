import { useState, useEffect } from "react"
import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../config/firebase"
import { toast } from "react-toastify";
import { BsArrowRightShort } from "react-icons/bs"
import styles from '../styles/Login.module.scss'

export default function forgotPassword() {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const [email, setEmail] = useState("");

    const onChange = (e:any) => setEmail(e.target.value);
  
    const onSubmit = async (e:any) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("E-mail odeslán!");
            router.push("/login");
        } catch (error) {
            toast.error("Nelze odeslat e-mail!");
        }
    };

    useEffect(() => {
        if (user) {
          router.push("/homepage");
        } else {
          /* console.log("login"); */
        }
    }, [user]);

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <h2>Zapomenuté heslo</h2>
                <form onSubmit={onSubmit}>
                <input
                    type='email'
                    className='emailInput'
                    placeholder='Email'
                    id='email'
                    value={email}
                    onChange={onChange}
                />

                    <button>
                        Poslat odkaz na reset hesla
                        <span>
                            <BsArrowRightShort />
                        </span>
                    </button>
                </form>
                <div className={styles.loginLinks}>
                    <Link href='/login'>
                        Přihlásit se
                    </Link>
                </div>
            </div>
        </div>
    );
}
