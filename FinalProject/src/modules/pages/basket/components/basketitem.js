import React from "react";
import PropTypes from 'prop-types';
import isoFetch from 'isomorphic-fetch';
import {Events} from '../../../events';


export class BasketItem extends React.PureComponent{
  static PropTypes = {
    itemSrc: PropTypes.string,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemColor: PropTypes.string,
    id: PropTypes.number,
  }
  state = {
    sum: 1,
    cost: this.props.itemPrice,
  }

changeSum = (e) => {
  if(this.state.sum <= 1 && e.target.name === 'minus'){
    return;
  }
  let newSum = this.state.sum;
  let newCost = 0;
  const cost = this.props.itemPrice;
  if(e.target.name === 'plus'){
    newSum++
    Events.emit('SetSum',this.props.itemPrice, 'plus');
  }else{
    newSum--
    Events.emit('SetSum',this.props.itemPrice, 'minus');
  }
  newCost = cost * newSum;
  this.setState({sum: newSum, cost: newCost});
}

removeItem = (e) => {
  e.target.closest('.table-items').classList.add('table-items_close');
  setTimeout(() => {
    Events.emit('DeleteRow', this.props.id);
    isoFetch(`http://localhost:3000/basket/${this.props.id}`, {
        method: 'DELETE',
    });
  }, 700);
}
    render(){
        return(
          <div class="product-table__items table-items">
            <div class="table-items__product">
                <div class="table-items__image-wrapper">
                    <img src={this.props.itemSrc} alt="" class="table-items__image"/>
                </div>
              <div class="table-items__discription">
                <p>{this.props.itemName}</p>
                <div class="table-items__color-wrapper">
                    <div class="table-items__color" style={{backgroundColor: this.props.itemColor}}></div>
                </div>
              </div>
            </div>
            <p class="product-table__item table-items__price">{this.props.itemPrice}</p>
            <div class="product-table__item table-items__count">
                <input type="button" value="&minus;" name="minus" class="table-items__btn" onClick={this.changeSum}/>
                <span class="table-items_amount">{this.state.sum}</span>
                <input type="button" value="+" name="plus" class="table-items__btn" onClick={this.changeSum}/>
            </div>
            <p class="product-table__item table-items__cost">{this.state.cost}</p>
            <div class="product-table__item table-items__delete">
                <input type="button" class="table-items__btn" value="&#10008;" onClick={this.removeItem}/>
            </div>
        </div>
        )
    }
}
