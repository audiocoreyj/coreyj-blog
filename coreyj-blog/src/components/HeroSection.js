import React from 'react'
import '../App.css'
import './HeroSection.css'

export const HeroSection = () => {
    return (
        <div className="hero-container">
            <video src="/videos/Earth_Zoom_Out.mov" autoPlay loop muted />
            <h1>CoreyJ</h1>
        </div>
    )
}

export default HeroSection