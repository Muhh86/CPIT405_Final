import React, { useState, useEffect } from 'react';
import styles from './Weather.module.css';

function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    const apiKey = "852e0b8950922b6f9b63ac5c7618c3cc";

    const fetchWeather = async (e) => {
        e.preventDefault();
        if (!city) {
            setError('Please enter a city name');
            return;
        }
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            if (data.cod !== 200) {
                throw new Error('Failed to fetch weather');
            }
            setWeather(data);
            setError('');
        } catch (error) {
            setError('Failed to fetch weather');
        }
    };

    return (
        <div>
            <header>
                {/* Header content goes here, if any */}
            </header>
            <section className={styles['top-banner']}>
                <div className={styles.container}>
                    <h1 className={styles.heading}>Weather App</h1>
                    <form onSubmit={fetchWeather} style={{ marginTop: '100px', display: 'flex', justifyContent: 'center' }}>
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Search for a city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            autoFocus
                        />
                        <button className={styles.button} type="submit">SUBMIT</button>
                    </form>
                    {error && <span className={styles.msg}>{error}</span>}
                </div>
            </section>
            <section className={styles['ajax-section']}>
                <div className={styles.container}>
                    <ul className={styles.cities}>
                        {weather && (
                            <li className={styles.city}>
                                <h2 className={styles['city-name']} data-name={`${weather.name},${weather.sys.country}`}>
                                    <span>{weather.name}</span>
                                    <sup>{weather.sys.country}</sup>
                                </h2>
                                <div className={styles['city-temp']}>{Math.round(weather.main.temp)}<sup>°C</sup></div>
                                <figure>
                                    <img className={styles['city-icon']} src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.weather[0].icon}.svg`} alt={weather.weather[0].description} />
                                    <figcaption>{weather.weather[0].description}</figcaption>
                                </figure>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Weather;