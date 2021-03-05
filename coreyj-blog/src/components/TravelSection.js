import React from 'react'
import './TravelSection.css'

function TravelSection() {
    return (
        <body className="travel-body">
        <div>
            <ul className="state-city-containter">
            <li className="state-city"><u>Tokyo, Japan</u></li>
                <ul className="list-items">
                    <li>Tokyo Skytree</li>
                    <li>World’s Largest UNIQLO Store</li>
                    <li>Tsukiji Fish Market</li>
                    <li>Sensō-ji Temple</li>
                </ul>
            <li className="state-city"><u>New York, USA</u></li>
                <ul className="list-items">
                    <li>Brooklyn Heights Promenade</li>
                    <li>The Museum of Modern Art</li>
                    <li>Empire State Building</li>
                    <li>One World Observatory</li>
                </ul>
            <li className="state-city"><u>Illinois, USA</u></li>
                <ul className="list-items">
                    <li>The Art Institute of Chicago</li>
                    <li>Millennium Park</li>
                    <li>Navy Pier</li>
                    <li>360 CHICAGO</li>
                </ul>
            <li className="state-city"><u>Minnesota, USA</u></li>
                <ul className="list-items">
                    <li>Mall of America</li>
                    <li>Young Joni</li>
                    <li>Skyway System</li>
                </ul>
            <li className="state-city"><u>Florida, USA</u></li>
                <ul className="list-items">
                    <li>Universal Citywalk Orlando</li>
                    <li>Amway Center</li>
                    <li>KPMG Lakehouse</li>
                    <li>Epcot</li>

                </ul>
            <li className="state-city"><u>Nevada, USA</u></li>
                <ul className="list-items">
                    <li>OMNIA Nightclub</li>
                    <li>Container Park</li>
                    <li>minus5 ICEBAR</li>
                    <li>Eggworks</li>
                    <li>Pizza Rock</li>
                </ul>
            <li className="state-city"><u>California, USA</u></li>
                <ul className="list-items">
                    <li>California State Route 1</li>
                    <li>Six Flags Magic Mountain</li>
                    <li>Mammoth Mountain</li>
                    <li>The Broad</li>
                    <li>Santa Monica Pier</li>
                    <li>Terranea Resort</li>
                    <li>Hilltop Park</li>
                </ul>
        </ul> 
        </div>
    </body>
    )
}

export default TravelSection
