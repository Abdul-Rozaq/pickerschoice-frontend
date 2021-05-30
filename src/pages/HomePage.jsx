import React from 'react'
import Header from '../component/Header'
import Hero from '../component/Hero'
import Sprite from '../component/Sprite'

const HomePage = () => {
    return (
        <div className="homePage">
            <Header label="About us" linkTo="/about" />

            <main>
                <section className="home">
                    <Hero />
                    <Sprite />
                </section>
            </main>
        </div>
    )
}

export default HomePage
