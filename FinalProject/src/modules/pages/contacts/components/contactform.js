import React from "react"


export class ContactForm extends React.PureComponent{

    render(){
        return(
                <form class="contacts-form-inputs">
                    <label>Your Name</label>
                    <input className="contacts-input"type="text" name="name" placeholder="First and last name" required/>
                    <label>Your Email Address</label>
                    <input className="contacts-input"type="email" name="email" placeholder="Enter your email" required/>
                    <label>Subject</label>
                    <input className="contacts-input"type="text" name="subject" placeholder="Enter the subject" required/>
                    <label>Message</label>
                    <textarea className="contacts-input"placeholder="Enter your message" required></textarea>
                    <button className='contacts-submit-btn' type="submit">Send Message</button>
                </form>
        )
    }
}
