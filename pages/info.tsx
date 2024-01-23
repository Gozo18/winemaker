import Head from "next/head"
import BackLink from "../components/BackLink"
import { VscBook, VscTools, VscShield, VscMail } from "react-icons/vsc"
import styles from "../styles/Info.module.scss"

export default function info() {
  return (
    <>
      <Head>
        <title>WineMaker beta - informace</title>
      </Head>
      <div className={styles.infoBox}>
        <div className={styles.headerBox}>
          <BackLink />

          <h2>
            WineMaker <sup>beta</sup> <span>- vinařův deník</span>
          </h2>

          <div></div>
        </div>
        <div className={styles.itemsBox}>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <div className={styles.icon}>
                <VscBook />
              </div>
            </div>
            <div className={styles.textBox}>
              <h3>Informace o diáři</h3>
              <ul>
                <li>Už žádné papírové deníčky.</li>
                <li>
                  Všechny informace archivované na jednom místě a lehce
                  najitelné.
                </li>
                <li>
                  Informace o jednotlivých vínech, o přidaných přípravcích a o
                  vinohradech.
                </li>
                <li>
                  Analytické údaje, data sběru, síření, nádoby a celkové náklady
                  za přípravky.
                </li>
                <li>Přístupné ze všech zařízení.</li>
                <li>A je bez poplatků!</li>
              </ul>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <div className={styles.icon}>
                <VscShield />
              </div>
            </div>
            <div className={styles.textBox}>
              <h3>Zabezpečení</h3>
              <ul>
                <li>Data uložená na platformě Firebase od Google.</li>
                <li>
                  Autentifikace e-mailem nebo google účtem a řešená přes
                  Firebase.
                </li>
                <li>
                  Vaše data se nikam neodesílají a máte nad nimi plnou kontrolu.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <div className={styles.icon}>
                <VscTools />
              </div>
            </div>
            <div className={styles.textBox}>
              <h3>Ve spolupráci s vinaři</h3>
              <ul>
                <li>
                  Rozvržení a položky aplikace navrženy ve spolupráci s vinaři.
                </li>
                <li>
                  Neustálý rozvoj aplikace pro nejlepší servis vinařům a pro co
                  nejjednodušší ovládání.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <div className={styles.icon}>
                <VscMail />
              </div>
            </div>
            <div className={styles.textBox}>
              <h3>Kontakt</h3>
              <ul>
                <li>
                  Budeme rádi, pokud nás kontaktujete v případě jakýchkoliv
                  dotazů nebo návrhů rozvoje.
                </li>
                <li>
                  e-mail:{" "}
                  <a href="mailto:info@winemaker.cz">info@winemaker.cz</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
