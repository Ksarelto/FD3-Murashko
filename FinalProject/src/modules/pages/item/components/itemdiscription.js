import React from "react";
import PropTypes from 'prop-types';

export class ItemDiscription extends React.PureComponent{
  static propTypes = {
		object: PropTypes.object,
	}


  createStarsRating = (num) => {
    const star = [];
    let sum = 0;
    for(let i = 0; i < 5; i++){
      if(sum <= num){
        star.push(<img src="../assets/img/Star_3.png"/>);
      }else{
        star.push(<img src="../assets/img/Star_5.png"/>);
      }
      sum++;
    }
    return star;
  }


  render(){
    return(
        <div class="container">
          <div class="description_wrapper">
            <div class="item_slider">
                  <div class="image__wrapper">
                    <img className="image__item" src={this.props.object.src}></img>
                  </div>
            </div>
            <div class="item_content">
              <h2>{this.props.object.name}</h2>
              <p class="star">
                {this.createStarsRating(this.props.object.rating)}
              </p>
              <div class='check_color'>
                <span className="input__color-text" >Цвет:</span>
                <span  className="input__color" style={{backgroundColor: this.props.object.color}}></span>
              </div>
              <div class="tab">
                <h2>Описание</h2>
                <input type="radio" name="tab" id="tab1"/>
                <label for="tab1">&#8249;</label>
                <div class="tab_content">
                  <div class="item_discription">
                    <p><span>Бренд:</span> {this.props.object.brend}</p>
                    <p><span>Тип часов:</span> {this.props.object.gender}</p>
                    <p><span>Механизм:</span> {this.props.object.meha}</p>
                    <p><span>Стекло:</span>{this.props.object.glass}</p>
                    <p><span>Корпус:</span> {this.props.object.box}</p>
                    <p><span>Водонепроницаемость</span>{this.props.object.waterproof}</p>
                    <p><span>Ремешок:</span> {this.props.object.belt}</p>
                    <p><span>Страна производитель:</span> {this.props.object.country}</p>
                  </div>
                </div>
                <input type="radio" name="tab" id="tab2"/>
                <label for="tab2">&#8250;</label>
              </div>
              <strong>{`${this.props.object.price} p`}</strong>
              <a href="../Basket/basket.html">В корзину</a>
              <div class="item_links">
                <p>Поделится</p>
                <a href="#"><img src="../assets/img/twitter_link.svg" alt=""/></a>
                <a href="#"><img src="../assets/img/instagram_link.svg" alt=""/></a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
