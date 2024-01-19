import Image from "next/image"
import { ImFacebook2 } from "react-icons/im"
import styles from "../styles/Wine.module.scss"

export default function Advertising() {
  return (
    <div className={styles.advBox}>
      <div className={styles.advImageBox}>
        <Image
          src="/winemaker.webp"
          alt="WineMaker history"
          fill
          style={{ objectFit: "contain" }}
          sizes="(min-width: 320px) 100vw"
          priority={true}
        />
      </div>
      <div className={styles.advProBox}>
        <div className={styles.advTextBox}>
          <p>Líbí se Vám naše aplikace?</p>
          <p>Prosím, sdílejte!</p>
        </div>
        <div className={styles.advButtonBox}>
          <span>Sdílet</span>
          <ImFacebook2 />
        </div>
      </div>
    </div>
  )
}
