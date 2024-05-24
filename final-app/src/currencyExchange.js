import React, { useState } from 'react';
import styles from './currencyExchange.module.css';

function CurrencyExchange() {
    const [sar, setSar] = useState('');
    const [currencies, setCurrencies] = useState({ AED: '', EUR: '', USD: '', GBP: '', KWD: '' });

    const handleExchange = () => {
        if (!sar) {
            alert("Please enter amount in SAR");
            return;
        }
        fetch("https://open.er-api.com/v6/latest/SAR")
            .then(response => response.json())
            .then(data => {
                setCurrencies({
                    AED: (sar * data.rates.AED).toFixed(2),
                    EUR: (sar * data.rates.EUR).toFixed(2),
                    USD: (sar * data.rates.USD).toFixed(2),
                    GBP: (sar * data.rates.GBP).toFixed(2),
                    KWD: (sar * data.rates.KWD).toFixed(2)
                });
            })
            .catch(error => {
                console.error('Error fetching currency data:', error);
            });
    };

    return (
        <div>
            <h1>Exchange</h1>
            <div className={styles.inputsContainer}>
                <input
                    type="number"
                    className={styles.inputs}
                    placeholder="SAR"
                    value={sar}
                    onChange={(e) => setSar(e.target.value)}
                />
                <button onClick={handleExchange}>Exchange</button>
            </div>
            {Object.entries(currencies).map(([key, value]) => (
                <div key={key} className={styles.widget}>
                    <div>
                        <h2 style={{ fontSize: '40px', textAlign: 'center' }}>{key}</h2>
                        <input type="text" className={styles.inputs} style={{ backgroundColor: '#1E2227' }} value={value} readOnly />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CurrencyExchange;