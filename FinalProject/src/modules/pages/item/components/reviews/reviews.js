import React from "react";
import PropTypes from 'prop-types';
import { Review } from './review'

let data = require('../../../../../database/reviews.json');

export class Reviews extends React.PureComponent{
    static propTypes = {
        reviewsArray: PropTypes.array,
    }

    createReviewsContainer = (arr) => {
      const base = arr.map(el => {
        return(
          <Review name={el.name} starsNum={el.stars} text={el.text}/>
        )
      });

      return base;
    }

    render(){
      return(
        <section class="reviews">
          <div class="container">
          <h2>Отзывы</h2>
          <div class="box_reviews">
             {this.createReviewsContainer(data)}
          </div>
        </div>
      </section>
      )
    }
}
