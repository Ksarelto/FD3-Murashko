import React from "react";
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';
import {Events} from '../../../events';
import { NavLink } from "react-router-dom";


export class CatalogItem extends React.PureComponent{
  static propTypes = {
    itemColor: PropTypes.string,
    itemNameCatalog: PropTypes.string,
    itemSrcCatalog: PropTypes.string,
    itemPriceCatalog: PropTypes.string,
    itemInBasket: PropTypes.bool,
    id: PropTypes.number
  }
  addItemToBasket = (e) => {
    e.preventDefault();
    const itemObject = {id: this.props.id, color: this.props.itemColor, name: this.props.itemNameCatalog, src: this.props.itemSrcCatalog, price: this.props.itemPriceCatalog};
    Events.emit('PutInBasket', this.props.id);
    isoFetch(`http://localhost:3000/basket/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemObject),
    })
  }

  render(){
    return(
      <div class={`watch__item-wrapper ${this.props.itemInBasket ? 'active-card' : ''} `}>
        <NavLink to={`/item/${this.props.id}`} className='watch__link'></NavLink>
				<div class="watch__image-wrapper">
					<img src={this.props.itemSrcCatalog} alt="image" class="watch__image"/>
				</div>
				<div class="watch__discription">
					<p class="watch__name">{this.props.itemNameCatalog}</p>
					<p class="watch__price">{this.props.itemPriceCatalog} p</p>
				</div>
				{!this.props.itemInBasket ? <input type="button" class="watch__basket" value="В Корзину" name="basketbutton" onClick={this.addItemToBasket}/> : <span className="watch-in-basket">В корзине</span>}
			</div>
    )
  }
}
