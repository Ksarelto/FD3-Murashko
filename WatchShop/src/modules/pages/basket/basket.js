import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { BasketWrapper } from "./components/basketwrapper";
import { BasketForm } from './components/basketform';
import './styles/main.css';
import './styles/media.css';


export class Basket extends React.PureComponent{
  static propTypes = {
    items: PropTypes.array
  }
  render(){
    return(
     <div>
        <Header></Header>
        <section class="description">
          <div class="container">
              <p><NavLink exact to="/" activeClassName='dotsLink'>Главная</NavLink> - <NavLink  to="/basket" activeClassName='dotsLink'>Корзина</NavLink></p>
          </div>
        </section>
        <BasketWrapper itemsInBasket={this.props.items}></BasketWrapper>
        <BasketForm></BasketForm>
        <Footer></Footer>
     </div>
    )
  }
}

