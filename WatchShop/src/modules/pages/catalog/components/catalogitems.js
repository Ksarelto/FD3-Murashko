import React from "react";
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';
import { CatalogItem } from './catalogitem';
import {Events} from '../../../events';

export class CatalogItems extends React.PureComponent{
  static propTypes = {
    items: PropTypes.array,
    page: PropTypes.number,
  }


  componentDidMount = () => {
		Events.addListener('PutInBasket',this.putItemInBasket);
    this.setState({items: [...this.props.items]})
	};

	  componentWillUnmount = () => {
		Events.removeListener('PutInBasket',this.putItemInBasket);
	};


  sortItemsToPages = (arr) => {
    const lastElement = 50;
    const firstElement = (lastElement * this.props.page) - lastElement
    const data = arr.slice(firstElement, lastElement * this.props.page);
    return data;
  }
  createCatalogItems = (arr) => {
    const newArr = this.sortItemsToPages(arr);
    const items = newArr.map((el) => {
      return <CatalogItem key={el.id} id={el.id} itemColor={el.color} itemNameCatalog={el.name} itemPriceCatalog={el.price} itemSrcCatalog={el.src} itemInBasket={el.basketIn}></CatalogItem>
    })
    return items;
  }
  putItemInBasket =  (id) => {
    isoFetch(`http://localhost:3000/items`)
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      const items = [...res];
      const item = items.find((el) => el.id === id)
      const newItem = {...item, basketIn: true};
      const result = [...items.slice(0, id-1), newItem, ...items.slice(id, items.length)];
      isoFetch(`http://localhost:3000/items/${id}`, {
          method: 'PATCH',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
      });
      Events.emit('AddToBasket', result);
    })
  }


  render(){
    return(
      <div class="watch_container_items">
					{this.createCatalogItems(this.props.items)}
			</div>
    )
  }
}
