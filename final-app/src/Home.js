import React from 'react';
import './App.css';

function Home() {
    return (
        <div>
            <main>
            <div class="section-center">
                <h1 class="mb-0">Welcome</h1>
                <h1 style={{ fontSize: '60px' }}>UK Info</h1>
                <img src="images/pngimg.com - england_PNG72.png" alt="" width="550px" />
                <div class="card">
                    <h2>United Kingdom</h2>
                    <p style={{ padding: '8px', fontSize: '22px', color: '#ececee' }}>United Kingdom, island country located off the northwestern coast of mainland Europe. The United Kingdom comprises the whole of the island of
                        Great Britain—which contains England, Wales, and Scotland—as well as the northern portion of the island of Ireland. The name Britain is sometimes used to refer to
                        the United Kingdom as a whole. The capital is London, which is among the world’s leading commercial, financial, and cultural centres. Other major cities include
                        Birmingham, Liverpool, and Manchester in England, Belfast and Londonderry in Northern Ireland, Edinburgh and Glasgow in Scotland, and Swansea and Cardiff in Wales.</p>
                </div>
                <div class="card">
                    <h2>Languages</h2>
                    <p style={{ padding: '8px', fontSize: '22px' }}>All the traditional languages spoken in the United Kingdom ultimately derive from a common Indo-European origin, a tongue so ancient that,
                        over the millennia, it has split into a variety of languages, each with its own peculiarities in sounds, grammar, and vocabulary. The distinct languages in what became
                        the United Kingdom originated when languages from the European continent developed independently in the British Isles, cut off from regular communication with their parent languages.</p>
                </div>
                <div class="card">
                    <h2>Daily life and social customs</h2>
                    <p style={{ padding: '8px', fontSize: '22px' }}>The United Kingdom’s cultural traditions are reflective of the country’s heterogeneity and its central importance in world affairs over the
                        past several centuries. Each constituent part of the United Kingdom—England, Scotland, Wales, and Northern Ireland—maintains its own unique customs, traditions, cuisine, and festivals.
                        Moreover, as Britain’s empire spanned the globe, it became a focal point of immigration, especially after the independence of its colonies, from its colonial possessions.
                        As a result, immigrants from all corners of the world have entered the United Kingdom and settled throughout the country, leaving indelible imprints on British culture.
                            Thus, at the beginning of the 21st century, age-old English, Irish, Scottish, and Welsh customs stood alongside the rich traditions of Afro-Caribbean, Asian,
                            and Muslim immigrants, placing the United Kingdom among the world’s most cosmopolitan and diverse countries.</p>
                </div>
            </div> 
        </main>
    </div>
    );
}

export default Home;