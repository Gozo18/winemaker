import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "../styles/Weather.module.scss"

export default function Weather() {
  const [weather, setWeather]: any = useState()
  const [geo, setGeo]: any = useState()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(positionSuccess, positionError)

    navigator.permissions &&
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (PermissionStatus) {
          if (PermissionStatus.state == "granted") {
            //allowed
            setGeo("allowed")
          } else if (PermissionStatus.state == "prompt") {
            // prompt - not yet grated or denied
            setGeo("not yet")
          } else {
            //denied
            setGeo("denied")
          }
        })
  }, [])

  function positionSuccess({ coords }: any) {
    const options = { method: "GET" }
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&timezone=CET&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode,windspeed_10m_max`,
      options
    )
      .then((response) => response.json())
      .then((response) => setWeather(response))
      .catch((err) => console.error(err))
  }

  function positionError() {
    alert(
      "Pro zobrazení počasí ve vašem místě, prosím, povolte přístup k údajům o vaší poloze!"
    )
  }

  if (weather != undefined) {
    const code: number = weather.current_weather.weathercode

    const daily: any = weather.daily

    let days: any = []

    for (let i = 0; i < 7; i++) {
      const weekday = [
        "Pondělí",
        "Úterý",
        "Středa",
        "Čtvrtek",
        "Pátek",
        "Sobota",
        "Neděle",
      ]
      const d = new Date(daily.time[i])
      let day = weekday[d.getDay()]

      const code = daily.weathercode[i]
      let codeText = ""
      if (code === 0 || code === 1) {
        codeText = "./icons/sun.svg"
      } else if (code === 2) {
        codeText = "./icons/cloud-sun.svg"
      } else if (code === 3) {
        codeText = "./icons/cloud.svg"
      } else if (
        code === 51 ||
        code === 53 ||
        code === 55 ||
        code === 56 ||
        code === 57 ||
        code === 61 ||
        code === 63 ||
        code === 65 ||
        code === 66 ||
        code === 67 ||
        code === 80 ||
        code === 81 ||
        code === 82
      ) {
        codeText = "./icons/cloud-showers-heavy.svg"
      } else if (
        code === 71 ||
        code === 73 ||
        code === 75 ||
        code === 77 ||
        code === 85 ||
        code === 86
      ) {
        codeText = "./icons/snowflake.svg"
      } else if (code === 95 || code === 96 || code === 99) {
        codeText = "./icons/cloud-bolt.svg"
      } else if (code === 45 || code === 48) {
        codeText = "./icons/smog.svg"
      }

      days.push({
        date: day,
        min: daily.temperature_2m_min[i],
        max: daily.temperature_2m_max[i],
        code: codeText,
        sum: daily.precipitation_sum[i],
        wind: daily.windspeed_10m_max[i],
      })
    }

    return (
      <div className={styles.weatherBox}>
        <h3>Počasí</h3>
        <div className={styles.forecastBox}>
          <div className={styles.forecast}>
            <span>Dnes</span>
            {(code === 0 || code === 1) && (
              <span>
                <Image
                  src="./icons/sun.svg"
                  width={50}
                  height={50}
                  alt="sunny"
                />
              </span>
            )}
            {code === 2 && (
              <span>
                <Image
                  src="./icons/cloud-sun.svg"
                  width={50}
                  height={50}
                  alt="partly sunny"
                />
              </span>
            )}
            {code === 3 && (
              <span>
                <Image
                  src="./icons/cloud.svg"
                  width={50}
                  height={50}
                  alt="cloudy"
                />
              </span>
            )}
            {(code === 51 ||
              code === 53 ||
              code === 55 ||
              code === 56 ||
              code === 57 ||
              code === 61 ||
              code === 63 ||
              code === 65 ||
              code === 66 ||
              code === 67 ||
              code === 80 ||
              code === 81 ||
              code === 82) && (
              <span>
                <Image
                  src="./icons/cloud-showers-heavy.svg"
                  width={50}
                  height={50}
                  alt="showers"
                />
              </span>
            )}
            {(code === 71 ||
              code === 73 ||
              code === 75 ||
              code === 77 ||
              code === 85 ||
              code === 86) && (
              <span>
                <Image
                  src="./icons/snowflake.svg"
                  width={50}
                  height={50}
                  alt="snow"
                />
              </span>
            )}
            {(code === 95 || code === 96 || code === 99) && (
              <span>
                <Image
                  src="./icons/cloud-bolt.svg"
                  width={50}
                  height={50}
                  alt="storm"
                />
              </span>
            )}
            {(code === 45 || code === 48) && (
              <span>
                <Image
                  src="./icons/smog.svg"
                  width={50}
                  height={50}
                  alt="fog"
                />
              </span>
            )}
            <span>teplota: {weather.current_weather.temperature} °C</span>
            <span>vítr: {weather.current_weather.windspeed}km/h</span>
          </div>
          {days.map((day: any, i: number) => (
            <div key={i} className={styles.forecast}>
              <span>{day.date}</span>
              <span>
                <Image src={day.code} width={30} height={30} alt="weather" />
              </span>
              <span>
                {day.min}°C / {day.max}°C
              </span>
              <span>srážky: {day.sum}mm</span>
              <span>vítr: {day.wind}km/h</span>
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.weatherBox}>
        {geo === "denied" ? (
          <div className={styles.errorBox}>
            Pro zobrazení počasí ve vašem místě, prosím, povolte přístup k
            údajům o vaší poloze!
          </div>
        ) : (
          <>
            <h3>Načítám data o počasí...</h3>
            <div className={styles.forecastBox}>
              <div className={styles.forecast}>
                <div className={styles.loader}></div>
              </div>
              <div className={styles.forecast}>
                <div className={styles.loader}></div>
              </div>
              <div className={styles.forecast}>
                <div className={styles.loader}></div>
              </div>
              <div className={styles.forecast}>
                <div className={styles.loader}></div>
              </div>
              <div className={styles.forecast}>
                <div className={styles.loader}></div>
              </div>
              <div className={styles.forecast}>
                <div className={styles.loader}></div>
              </div>
              <div className={styles.forecast}>
                <div className={styles.loader}></div>
              </div>
              <div className={styles.forecast}>
                <div className={styles.loader}></div>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}
