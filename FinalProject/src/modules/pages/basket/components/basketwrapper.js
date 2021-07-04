import React from "react";
import PropTypes from 'prop-types';
import { BasketItem } from "./basketitem";
import {Events} from '../../../events';

export class BasketWrapper extends React.PureComponent{
  static propTypes = {
    itemsInBasket: PropTypes.array
  }
  state = {
    itemsList: this.props.itemsInBasket,
    sum: this.props.itemsInBasket.length > 0 ? this.props.itemsInBasket.reduce((res,el) => res += el.price, 0) : 0,
  }
  componentDidMount = () => {
		Events.addListener('SetSum',this.setSumOfCosts);
		Events.addListener('DeleteRow',this.deleteAllRow);
	};

	  componentWillUnmount = () => {
		Events.removeListener('SetSum',this.setSumOfCosts);
		Events.removeListener('DeleteRow',this.deleteAllRow);
	};

  createBasketItems = (arr) => {
    const result = arr.map((el) => {
      return <BasketItem key={el.id} id={el.id} itemSrc={el.src} itemName={el.name} itemPrice={el.price} itemColor={el.color}></BasketItem>
    })
    return result
  }

  setSumOfCosts = (sum,mode) => {
    let newSum = this.state.sum;
    if(mode === 'plus'){
      newSum += sum;
    }else{
      newSum -= sum;
    }
    this.setState({sum: newSum})
  }

  deleteAllRow = (code) => {
    const list = this.state.itemsList.filter((el) => {
      return (el.id !== code);
    })
    this.setState({itemsList: list});
  }

  render(){
    return(
      <section class="basket">
        <div class="container">
          <h1>Корзина</h1>
          <div class="product-table">
                    <div class="product-table__header">
                        <span class="product-table__header-item header-item_product">Товар</span>
                        <span class="product-table__header-item header-item_price">Цена</span>
                        <span class="product-table__header-item header-item_amount">Количество</span>
                        <span class="product-table__header-item header-item_cost">Стоимость</span>
                        <span class="product-table__header-item header-item_empty"></span>
                    </div>
                    {this.createBasketItems(this.state.itemsList)}
                </div>
          <div class="basket_submit">
            <div class="basket_total_price">
              <p>Итого: <span>{this.state.sum}</span></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
