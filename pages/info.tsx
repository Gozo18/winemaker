import BackLink from "../components/BackLink"
import {
  VscBook,
  VscCompass,
  VscTypeHierarchy,
  VscShield,
} from "react-icons/vsc"
import styles from "../styles/Info.module.scss"

export default function info() {
  return (
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
                Všechny informace archivované na jednom místě a lehce najitelné.
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
            </ul>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <div className={styles.icon}>
              <VscCompass />
            </div>
          </div>
          <div className={styles.textBox}>
            <h3>Portál vinaře</h3>
            <ul>
              <li>
                Veškeré informace o vínech a vinohradech na dosah při
                ochutnávkách nebo poradenství.
              </li>
              <li>Jednoduchý nákup přípravků.</li>
              <li>Sklad přípravků.</li>
              <li>Analytická data pro prodejce přípravků a příslušenství.</li>
              <li>Doporučení a nenásilné reklamy.</li>
              <li>Odborné články.</li>
              <li>Podklady pro Český statistický úřad.</li>
            </ul>
          </div>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <div className={styles.icon}>
              <VscTypeHierarchy />
            </div>
          </div>
          <div className={styles.textBox}>
            <h3>Internet věcí</h3>
            <ul>
              <li>Monitorování teploty fermentace vín.</li>
              <li>Vzdálené ovládání chlazení.</li>
              <li>Aktuální data z vinic.</li>
              <li>Budoucí rozvoj dalších měřících čidel.</li>
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
                Autentifikace e-mailem nebo google účtem a řešená přes Firebase.
              </li>
              <li>Možnost stažení celé historie.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
