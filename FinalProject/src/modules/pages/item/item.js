import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Header } from '../../shared/header/header'
import { Footer } from '../../shared/footer/footer'
import { ItemDiscription } from "./components/itemdiscription";
import { Cards } from './components/cards';
import { Reviews } from './components/reviews/reviews';
import { WouldLikeItems } from './components/wouldlike/wouldlikeitems'
import './styles/main.css';
import './styles/media.css';

export class Item extends React.PureComponent{
  static propTypes = {
    object: PropTypes.object
  }
  componentDidMount(){
    window.scrollTo(0,0);
  }
	render(){
		return(
			<div>
				<Header></Header>
			    <section class="description">
					<div class="container">
							<p><NavLink exact to="/" activeClassName='dotsLink'>Главная</NavLink> - <NavLink to="/catalog/1" activeClassName='dotsLink'>Каталог</NavLink> - <NavLink className="active_link" to={`/item/${this.props.object.id}`} activeClassName='dotsLink'>{this.props.object.name}</NavLink></p>
					</div>
					<ItemDiscription object={this.props.object} src='../assets/img/Logo.jpg'></ItemDiscription>
			    </section>
				<Cards></Cards>
				<Reviews></Reviews>
				<WouldLikeItems></WouldLikeItems>
				<Footer></Footer>
			</div>
		)
	}
}
