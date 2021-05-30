import React from 'react';
import SpriteImage from "../images/homepage/ILLUS.png";

const Sprite = () => {
    return (
        <div className="home__imgBox">
            <img src={SpriteImage} alt="" className="home__img" />
        </div>
    )
}

export default Sprite
