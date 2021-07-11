import React from "react";
import { ContactForm } from "./contactform";

export class ContactsMain extends React.PureComponent{
    render(){
        return(
            <section class="contacts">
            <div class="container">
                <div class="contacts-image">
                </div>
                <div class="contacts-form">
                <div class="contacts-form-text">
                    <h2>Get in touch</h2>
                    <p>Whether you have a question, or would like to say hello, we're happy to hear from you. Please use the
                    form to send us a message and we'll get back to you as soon as we can. Whether you have a question, or
                    would like to say hello, we're happy to hear from you. Please use the form to send us a message and we'll
                    get back to you as soon as we can. </p>
                </div>
                <ContactForm></ContactForm>
                </div>
            </div>
            </section>
        )
    }
}
