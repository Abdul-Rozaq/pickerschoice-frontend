import React from 'react';
import { Link } from 'react-router-dom';
import BuyButton from "../images/homepage/buybtn.png";
import TextImage from "../images/homepage/text.png";

const Hero = () => {
    return (
        <div className="home__hero">
            <img 
                src={TextImage}
                alt='A juicy man once said, "You are the apple of my eyes"' 
                className="text__img" 
            />
            <div className="home__cta">
                <Link to="/order" className="buyFruits links">
                    <img src={BuyButton} alt="buy fruit" className="home__btn" />
                </Link>
            </div>
        </div>
    )
}

export default Hero
