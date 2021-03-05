import React from 'react'
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                    <CardItem 
                            src="images/people.jpg"
                            text="People who influence my thinking and decision-making."
                            label= "Influences"
                            path="/Influences"                      
                        />
                    <CardItem 
                            src="images/books.jpg"
                            text="My current book library."
                            label= "Books"
                            path="/books"                      
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                            src="images/perspective.jpg"
                            text="My random thoughts."
                            label= "Perspective"
                            path="Perspective"                      
                        />
                    <CardItem
                            src="images/coreyj2.png"
                            text="Learn more about me."
                            label= "About"
                            path="/about"
                            style="color:black;"           s       
                        />
                        <CardItem 
                            src="images/travel.jpg"
                            text="A few of my travel destinations."
                            label= "Travel"
                            path="/travel"                      
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
