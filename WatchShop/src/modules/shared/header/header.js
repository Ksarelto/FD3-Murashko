import React from 'react';
import { NavLink } from 'react-router-dom';
import { BurgerMenu } from './birgermenu';


export class Header extends React.PureComponent{
    render(){
        return(
            <header className="header">
                <div className="head">
                    <div className="container">
                    <p>Бесплатная доставка для заказов от 180 р +</p>
                    </div>
                </div>
                <div className="container">
                    <div className="nav">
                        <BurgerMenu></BurgerMenu>
                        <div className="nav_logo">
                        </div>
                        <div className="nav_menu">
                          <div className="nav_img">
                            <NavLink to="/" exact className="nav_img__link go-to-main" activeClassName="active__link" tittle='Main'></NavLink>
                          </div>
                          <div className="nav_img">
                            <NavLink to="/basket"  className="nav_img__link go-to-basket" activeClassName="active__link" title='Basket'></NavLink>
                          </div>
                          <div className="nav_img">
                            <NavLink to="/catalog/1"  className="nav_img__link go-to-catalog" activeClassName="active__link" title='Catalog'></NavLink>
                          </div>
                          <div className="nav_img">
                            <NavLink to="/contacts"  className="nav_img__link go-to-contacts" activeClassName="active__link" title='Contacts'></NavLink>
                          </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
