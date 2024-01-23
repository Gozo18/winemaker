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
        <title>WineMaker beta - vinařův deník</title>
      </Head>
      <div>
        <div className={styles.heroBox}>
          <Image src="/hero.webp" alt="WineMaker" fill priority={true} />
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
            <FcFlowChart /> <span>Informace o víně a vinohradech</span>
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
            Přidej se k nám ZDARMA!
          </Link>
        </div>

        <div className={styles.blogBox}>
          <div className={styles.blogPost}>
            <div className={styles.blogImage}>
              <Image
                src="/responsive.webp"
                alt="WineMaker responsive"
                fill
                sizes="(min-width: 320px) 100vw"
                priority={true}
              />
            </div>
            <div className={styles.blogText}>
              <h3>Vinařské záznamy kdykoliv, kdekoliv a ZDARMA!</h3>
              <p>
                Procházejte, vkládejte a upravujte údaje o svých vínech a
                vinohradech kdykoliv a na jakémkoliv zařízení.
              </p>
            </div>
          </div>
          <div className={styles.blogPost}>
            <div className={styles.blogImage}>
              <Image
                src="/history.webp"
                alt="WineMaker history"
                fill
                sizes="(min-width: 320px) 100vw"
                priority={true}
              />
            </div>
            <div className={styles.blogText}>
              <h3>Kompletní historie vín a vinohradů ZDARMA!</h3>
              <p>
                Historie vinohradů, výrobních postupů, dodaných přípravků pro
                evidenci a zlepšení kvality vín.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
