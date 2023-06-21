import Head from "next/head"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { BsEye, BsArrowRightShort } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import styles from "../styles/Login.module.scss"

export default function login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData
  const [user, loading] = useAuthState(auth)

  //Sign in with google
  const googleProvider = new GoogleAuthProvider()
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      router.push("/homepage")
    } catch (error) {
      console.log(error)
    }
  }

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        toast.success("Přihlášeno!")
        router.push("/homepage")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        if (error.code === "auth/wrong-password") {
          toast.error("Špatné heslo!")
        } else if (error.code === "auth/user-not-found") {
          toast.error("Uživatel nenalezen!")
        } else {
          toast.error("Něco se pokazilo!")
        }
      })
  }

  useEffect(() => {
    if (user) {
      router.push("/homepage")
    } else {
      /* console.log("login"); */
    }
  }, [user])

  return (
    <>
      <Head>
        <title>WineMaker beta - přihlášení</title>
      </Head>
      <div className={styles.loginPage}>
        <div className={styles.loginBox}>
          <h2>Přihlášení</h2>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="emailInput"
              placeholder="E-mail"
              id="email"
              value={email}
              onChange={onChange}
            />

            <div className={styles.passBox}>
              <input
                type={showPassword ? "text" : "password"}
                className="passwordInput"
                placeholder="Heslo"
                id="password"
                value={password}
                onChange={onChange}
              />

              <BsEye
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>

            <button>
              Přihlásit se
              <span>
                <BsArrowRightShort />
              </span>
            </button>
          </form>
          <div className={styles.loginLinks}>
            <Link href="/forgot-password">Zapomenuté heslo</Link>
            <Link href="/register">Registrovat</Link>
          </div>
          <div className={styles.googleButton}>
            <button onClick={GoogleLogin}>
              <span>
                <FcGoogle />
              </span>{" "}
              Přihlásit se přes Google
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
