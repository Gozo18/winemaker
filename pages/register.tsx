import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify"
import Link from "next/link"
import { useRouter } from "next/router"
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase"
import { BsEye, BsArrowRightShort } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import styles from '../styles/Login.module.scss'

export default function register() {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formData;

    //Sign in with google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
        const result = await signInWithPopup(auth, googleProvider);
        router.push("/homepage");
        } catch (error) {
        console.log(error);
        }
    };

    const onChange = (e:any) => {
        setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
        }));
    };

    const onSubmit = async (e:any) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            toast.success("Zaregistrováno!");
            router.push("/login");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if (error.code === "auth/weak-password") {
                toast.error("Heslo musí mít minimálně 6 znaků!");
            } else if (error.code === "auth/email-already-in-use") {
                toast.error("E-mail je již zaregistrován!");
            } else {
                toast.error("Něco se pokazilo!");
            }
        });
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
            <h2>Registrace</h2>
            <form onSubmit={onSubmit}>
                <input
                type='email'
                className='emailInput'
                placeholder='E-mail'
                id='email'
                value={email}
                onChange={onChange}
                />

                <div className={styles.passBox}>
                    <input
                        type={showPassword ? "text" : "password"}
                        className='passwordInput'
                        placeholder='Heslo'
                        id='password'
                        value={password}
                        onChange={onChange}
                    />

                    <BsEye onClick={() => setShowPassword((prevState) => !prevState)} />
                </div>

                <button>
                    Zaregistrovat
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
            <div className={styles.googleButton}>
                <button onClick={GoogleLogin}>
                    <span><FcGoogle /></span> Přihlásit se přes Google
                </button>
            </div>
        </div>

    </div>
  )
}

