import Head from "next/head"
import Link from "next/link"
import styles from "../styles/404.module.scss"

export default function fournullfour() {
  return (
    <>
      <Head>
        <title>WineMaker beta - stránka nenalezena</title>
      </Head>
      <div className={styles.notfoundBox}>
        <h2>404 - stránka nenalezena</h2>
        <p>
          <Link href="/homepage">zpět na hlavní stránku</Link>
        </p>
      </div>
    </>
  )
}
