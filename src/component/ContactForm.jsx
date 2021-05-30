import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact">
            <h3 className="about__title">Our <span>cont</span>act</h3>

            <form action="">
                <input type="text" className="contact__name" placeholder="your name" />
                
                <input type="email" className="contact__email" placeholder="your email" />
                
                <textarea name="contact" id="" cols="30" rows="10" className="contact__msg" placeholder="your message"></textarea>
                
                <input type="submit" value="Submit" className="contact__submit" />
            </form>
        </div>
    )
}

export default ContactForm
