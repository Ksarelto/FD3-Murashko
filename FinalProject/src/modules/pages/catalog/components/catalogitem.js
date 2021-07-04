import React from "react";
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';
import { NavLink } from "react-router-dom";


export class CatalogItem extends React.PureComponent{
  static propTypes = {
    itemColor: PropTypes.string,
    itemNameCatalog: PropTypes.string,
    itemSrcCatalog: PropTypes.string,
    itemPriceCatalog: PropTypes.string,
    id: PropTypes.number
  }
  addItemToBasket = (e) => {
    e.preventDefault();
    const itemObject = {id: this.props.id, color: this.props.itemColor, name: this.props.itemNameCatalog, src: this.props.itemSrcCatalog, price: this.props.itemPriceCatalog};
    isoFetch(`http://localhost:3000/basket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemObject),
    })
    .then((response) => {
      if(response.status === 500){
        isoFetch(`http://localhost:3000/basket/${this.props.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
          },
            body: JSON.stringify(itemObject),
          });
      }
    })
  }

  render(){
    return(
      <div class="watch__item-wrapper">
        <NavLink to={`/item/${this.props.id}`} className='watch__link'></NavLink>
				<div class="watch__image-wrapper">
					<img src={this.props.itemSrcCatalog} alt="image" class="watch__image"/>
				</div>
				<div class="watch__discription">
					<p class="watch__name">{this.props.itemNameCatalog}</p>
					<p class="watch__price">{this.props.itemPriceCatalog} p</p>
				</div>
				<input type="button" class="watch__basket" value="В Корзину" name="basketbutton" onClick={this.addItemToBasket}/>
			</div>
    )
  }
}
