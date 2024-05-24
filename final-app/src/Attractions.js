import React from 'react';
import styles from './Attractions.module.css';
import img1 from './images/att1.jpg';
import img2 from './images/att2.webp';
import img3 from './images/att3.webp';
import img4 from './images/att4.webp';


const attractions = [
    {
        title: "Athr Gallery",
        description: "For all the art lovers out there, this is the place for you to explorein Jeddah. Boasting off fine and intrinsic art pieces, Athr Gallery give a new frame to art in the country. It hosts exhibitions and events on a regular basiswith a display of great works like photographs, sculptures, sceneries and otherpieces of art from all over the world. Opened in the year 2009, the Athr Galleryhas been focusing on promoting contemporary art in the Arab nations",
        image: img1
    },
    {
        title: "Half Moon Bay",
        description: "Dammam is quite famous for its scenic beaches and one of the best places to visit in Saudi Arabia during summer is the Half Moon Bay in Dammam that offers tranquilenvirons to tourists along with enthralling views. There is an artificial reef which has madeit possible for the divers to enjoy a rich diving experience in terms of aquatic life.This white sandy beach with turquoise shades of water also boasts off an amusement parkfor some extra chill and thrill.",
        image: img2
    },
    {
        title: "Qaisariah Souq",
        description: "Dammam is quite famous for its scenic beaches and one of the best placesto visit in Saudi Arabia during summer is the Half Moon Bay in Dammam that offers tranquil environs to tourists along with enthralling views. There is an artificial reef which has made it possible for the divers to enjoy a rich diving experience in terms of aquatic life. This white sandy beach with turquoise shades of water also boasts off an amusement park for some extra chill and thrill.",
        image: img3
    },
    {
        title: "Old City of Saudi Arabia",
        description: "A traditional market that happens to be one of the oldest marketplaces to visit in the region, Qaisariah Souq was built from 1822 AD to 1238 AH and is one of the most popular places to visit in Al Hofuf. Be it local craft products, enchanting cafés, old Kout square, or the famous Ibrahim Castle, Qaisariah Souq is surrounded by many attractions today and offers a real treat to visitors.",
        image: img4
    }
];

const Attractions = () => {
    console.log("att");
    return (
        <div>
            <h1>Attractions</h1>
            {attractions.map((attraction, index) => (
                <div key={index} className={styles.card}>
                    <h2 className={styles.title}>{attraction.title}</h2>
                    <div className={styles.attContainer}>
                        <img src={attraction.image} alt="" className={styles.att} />
                        <p className={styles.para}>{attraction.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Attractions;