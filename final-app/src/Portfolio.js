import React from 'react';
import resume from "./MyResume.pdf";

const Portfolio = () => {
    console.log("Rendering Portfolio");
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%'
    };

    const pdfContainerStyle = {
        width: '80%',
        height: '90vh',
        border: '1px solid #ccc',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden'
    };

    return (
        <div style={containerStyle}>
            <h1>Portfolio</h1>
            <div style={pdfContainerStyle}>
                <iframe
                    src= {resume}
                    title="My Resume"  // Title added here for accessibility
                    style={{ width: '100%', height: '100%', border: 'none' }}
                ></iframe>
            </div>
        </div>
    );
};

export default Portfolio;