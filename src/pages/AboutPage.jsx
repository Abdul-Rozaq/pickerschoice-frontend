import React from 'react'
import AboutInfo from '../component/AboutInfo'
import ContactForm from '../component/ContactForm'
import Header from '../component/Header'

const AboutPage = () => {
    return (
        <>
            <Header linkTo="/order" label="Make order" />
            <div className="about__container">
                <div className="about__info">
                    <AboutInfo />
                </div>
                <section className="about__wrapper">
                    <ContactForm />
                </section>
            </div>
        </>
    )
}

export default AboutPage
