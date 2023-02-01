import { useState, useEffect } from "react"
import styles from '../styles/Weather.module.scss'

export default function Weather() {
    const [weather, setWeather] = useState();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(positionSuccess, positionError)
    }, []);

    function positionSuccess({ coords }) {
        const options = {method: 'GET'};
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&timezone=CET&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode`, options)
        .then(response => response.json())
        .then(response => setWeather(response))
        .catch(err => console.error(err));
        }

        function positionError() {
        alert(
            "There was an error getting your location. Please allow us to use your location and refresh the page."
        )
    }

    if (weather != undefined) {
    
        const code = weather.current_weather.weathercode;
        
        return (
            <div className={styles.weatherBox}>
                <h3>Aktuální počasí</h3>
                    <p>teplota: {weather.current_weather.temperature} °C, 
                        rychlost větru: {weather.current_weather.windspeed} km/h,  
                        {(code === 0 || code === 1) && (<span> jasno</span>)}
                        {(code === 2) && (<span> polojasno</span>)}
                        {(code === 3) && (<span> zataženo</span>)}
                        {(code === 51 || code === 53 || code === 55 || code === 56 || code === 57 || code === 61 || code === 63 || code === 65 || code === 66 || code === 67 || code === 80 || code === 81 || code === 82) && (<span> přeháňky</span>)}
                        {(code === 71 || code === 73 || code === 75 || code === 77 || code === 85 || code === 86) && (<span> sněžení</span>)}
                        {(code === 95 || code === 96 || code === 99) && (<span> bouřky</span>)}
                    </p>
            </div>
        )
    } else {
        return(<p>Načítám data...</p>)
    }

}
