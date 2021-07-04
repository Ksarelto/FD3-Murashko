import React from 'react';
import { NavLink } from 'react-router-dom';

export class BurgerMenu extends React.PureComponent{

  buttonRef = null;

  setRef = (ref) => {
    this.buttonRef = ref;
  }


    showBurger = () => {
        this.buttonRef.classList.toggle("showBurger");
    }

    render(){
       return ( <div className="nav_gender" ref={this.setRef}>
					<button onClick={this.showBurger}></button>
					<div id="burgerMenu" className="burger_menu">
						<NavLink exact to='/'>Главная</NavLink>
						<NavLink to='/catalog'>Каталог</NavLink>
						<NavLink to='/contacts'>Контакты</NavLink>
					</div>
				</div>
       )
    }
}
