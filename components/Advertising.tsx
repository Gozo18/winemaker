import Image from "next/image"
import Script from "next/script"
import Link from "next/link"
import { ImFacebook2 } from "react-icons/im"
import styles from "../styles/Wine.module.scss"

export default function Advertising() {
  return (
    <>
      <div id="fb-root"></div>
      <Script id="fb-share">
        {` (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `}
      </Script>
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
                <span>Sdílet</span>
                <ImFacebook2 />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
