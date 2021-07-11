import React from "react";
import PropTypes from 'prop-types';

export class Review extends React.PureComponent{
  static propTypes = {
    starsNum: PropTypes.number,
    name: PropTypes.string,
    text: PropTypes.string

  }

  createStars = (num) => {
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
      <div class="review_card">
					<div class="card_image">
						{this.createStars(this.props.starsNum)}
					</div>
					<h3>{this.props.name}</h3>
					<div class="review_text">
						<div class="review_text_self">
							<p>
                {this.props.text}
              </p>
						</div>
					</div>
				</div>
    )
  }
}
