import Image from "next/image"
import Link from "next/link"
import { ImFacebook2 } from "react-icons/im"
import styles from "../styles/Wine.module.scss"

export default function Advertising() {
  return (
    <>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/cs_CZ/sdk.js#xfbml=1&version=v18.0"
        nonce="HGgQb27u"
      ></script>
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
            <div
              className="fb-share-button"
              data-href="https://winemaker.cz"
              data-layout=""
              data-size=""
            >
              <Link
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwinemaker.cz%2F&amp;src=sdkpreparse"
                className="fb-xfbml-parse-ignore"
              >
                <ImFacebook2 />
                <span>Sdílet</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
