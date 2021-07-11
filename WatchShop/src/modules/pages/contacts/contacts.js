import React from "react";
import { NavLink } from "react-router-dom";
import { ContactsMain } from "./components/contactmain";
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import './styles/main.css';
import './styles/media.css';


export class Contacts extends React.PureComponent{
    render(){
        return(
            <div>
                <Header></Header>
                <section class="description">
                  <div class="container">
                      <p><NavLink exact to="/" >Главная</NavLink> - <NavLink to="/contacts" activeClassName='dotsLink'>Контакты</NavLink>
                      </p>
                  </div>
                </section>
                <ContactsMain></ContactsMain>
                <Footer></Footer>
            </div>
        )
    }
}
