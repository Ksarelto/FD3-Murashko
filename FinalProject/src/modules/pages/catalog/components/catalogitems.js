import React from "react";
import PropTypes from 'prop-types';
import { CatalogItem } from './catalogitem';

export class CatalogItems extends React.PureComponent{
  static propTypes = {
    items: PropTypes.array,
    page: PropTypes.number,
  }
  sortItemsToPages = (arr) => {
    const lastElement = 50;
    const firstElement = (lastElement * this.props.page) - lastElement
    const data = arr.slice(firstElement, lastElement * this.props.page);
    return data;
  }
  createCatalogItems = (arr) => {
    const newArr = this.sortItemsToPages(arr);
    const items = newArr.map((el) => {
      return <CatalogItem key={el.id} id={el.id} itemColor={el.color} itemNameCatalog={el.name} itemPriceCatalog={el.price} itemSrcCatalog={el.src}></CatalogItem>
    })
    return items;
  }
  render(){
    return(
      <div class="watch_container_items">
					{this.createCatalogItems(this.props.items)}
			</div>
    )
  }
}
