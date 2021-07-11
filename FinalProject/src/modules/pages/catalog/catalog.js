import React from "react";
import PropTypes from 'prop-types';
import {Events} from '../../events';
import { NavLink } from "react-router-dom";
import { browserHistory } from 'react-router'
import { Header } from "../../shared/header/header";
import { Footer } from "../../shared/footer/footer";
import { CatalogSidebar } from './components/catalogsidebar';
import { CatalogItems } from './components/catalogitems';
import './styles/main.css';
import './styles/media.css';


export class Catalog extends React.PureComponent{
  static propTypes = {
    items: PropTypes.array,
    page: PropTypes.number,
  }
  state = {
    itemsOnPage: 50,
    sortedItems: this.props.items,
  }
  componentDidMount = () => {
		Events.addListener('FilterItems',this.filterItems);
    Events.addListener('AddToBasket', this.updatePage);
    this.selectRef.value = localStorage.getItem('selectedSort') ? localStorage.getItem('selectedSort') : 'empty';
    this.sortItems();
    this.filterItems(JSON.parse(localStorage.getItem('filteredItems')), 2 );
    localStorage.setItem('filteredItems', null);
	};

	  componentWillUnmount = () => {
		Events.removeListener('FilterItems',this.filterItems);
    Events.removeListener('AddToBasket', this.updatePage);
    localStorage.setItem('selectedSort','empty');
	};

  selectRef = null;
  setRef = (ref) => {
    this.selectRef = ref;
  }

  filterItems = (arr, mode) => {
    const array = [...arr];
    if(mode === 1)window.location.hash = '#/catalog/1';
    this.setState({sortedItems: array});
    this.moveToTop();
  }

  createPaginationLinks = () =>{
    const num = Math.ceil(this.state.sortedItems.length / this.state.itemsOnPage);
    const links = [];
    for(let i = 0; i < num; i++){
      links.push(<NavLink to={`/catalog/${i + 1}`} className='disabledLink' activeClassName='activeLink' onClick={this.moveToTop}>{i+1}</NavLink>)
    }
    return links;
  }
  moveToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }
  sortItems = () => {
    const value = this.selectRef.value;
    localStorage.setItem('selectedSort', value);
    const arr = [...this.state.sortedItems];
    if(value === 'priceup'){
      arr.sort((a,b) => a.price - b.price);
    }else if(value === 'pricedown'){
      arr.sort((a,b) => b.price - a.price);
    }else if(value === 'rating'){
      arr.sort((a,b) => b[value] - a[value]);
    }else{
      return;
    }
    this.setState({sortedItems: arr});
  }

  updatePage = (arr) => {
    this.setState({sortedItems: arr});
  }

  render(){
    return(
      <div>
        <Header></Header>
        <section class="watch-wrapper">
        <div class="container">
            <p><NavLink to="/" exact activeClassName='dotsLink'>Главная</NavLink> - <NavLink to="/catalog/1" activeClassName='dotsLink'>Каталог</NavLink></p>
            <h2>Каталог</h2>
            <div class="sort">
              <div class="sort-wrapper">
                <label for="sort">Сортировать по: </label>
                <select name="select" id="sort"	class="sort-items" onChange={this.sortItems} ref={this.setRef}>
                <option  value="empty" hidden></option>
                  <option  value="pricedown">по убыванию цены</option>
                  <option  value="priceup">по возрастанию цены</option>
                  <option value="rating">по рейтингу</option>
                </select>
              </div>
              <span>{this.props.items.length}</span>
            </div>
        </div>
        <div class="wrapper_aside">
          <img src="../assets/img/logo_side.jpg" alt="logo"/>
        </div>
        <div class="container">
          <div class="bags_container">
            <CatalogSidebar items={this.props.items}></CatalogSidebar>
            <CatalogItems page={this.props.page} items={this.state.sortedItems}></CatalogItems>
          </div>
          <div className="pagination">
            {this.createPaginationLinks()}
          </div>
        </div>
      </section>
        <Footer></Footer>
      </div>
    )
  }
}
