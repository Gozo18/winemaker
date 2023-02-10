import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Index.module.scss"
import {
  FcGlobe,
  FcFlowChart,
  FcMultipleDevices,
  FcGoogle,
} from "react-icons/fc"

export default function Home() {
  return (
    <>
      <Head>
        <title>WineMaker beta</title>
        <meta name="description" content="Winemaker app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.heroBox}>
          <Image src="/hero.webp" alt="WineMaker" fill />
          <div className={styles.heroText}>
            <h2>
              WineMaker <sup>beta</sup> <span>- vinařův deník</span>
            </h2>
          </div>
        </div>

        <div className={styles.iconsBox}>
          <div className={styles.icon}>
            <FcGlobe /> <span>Vždy dostupné</span>
          </div>
          <div className={styles.icon}>
            <FcFlowChart /> <span>Detailní informace o víně</span>
          </div>
          <div className={styles.icon}>
            <FcMultipleDevices /> <span>Na jakémkoliv zařízení</span>
          </div>
          <div className={styles.icon}>
            <FcGoogle /> <span>Zabezpečené Googlem</span>
          </div>
        </div>

        <div className={styles.joinBox}>
          <Link href="/register" className={styles.joinLink}>
            Přidej se k nám!
          </Link>
        </div>

        <div className={styles.blogBox}>
          <div className={styles.blogPost}>
            <div className={styles.blogImage}>
              <Image src="/responsive.webp" alt="WineMaker responsive" fill />
            </div>
            <div className={styles.blogText}>
              <h3>Vinařské záznamy kdykoliv a kdekoliv</h3>
              <p>
                Procházejte, vkládejte a upravujte údaje o svých vínech kdykoliv
                a na jakémkoliv zařízení.
              </p>
            </div>
          </div>
          <div className={styles.blogPost}>
            <div className={styles.blogImage}>
              <Image src="/history.jpg" alt="WineMaker history" fill />
            </div>
            <div className={styles.blogText}>
              <h3>Kompletní historie vín</h3>
              <p>
                Historie výrobních postupů, dodaných přípravků pro evidenci a
                zlepšení kvality vín.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
