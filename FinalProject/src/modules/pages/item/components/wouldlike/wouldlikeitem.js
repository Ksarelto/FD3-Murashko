import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";


export class WouldLikeItem extends React.PureComponent{

  static PropTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
    id: PropTypes.number
  }

  pageUp = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  render(){
    return(
      <div className="item_foto_wrapper">
					<div className="item_foto_image">
            <img src={this.props.src} alr='image'/>
					 	<div className="item_foto_modal" >
					 	 	<p>{this.props.name}</p>
					 	 	<NavLink to={`/item/${this.props.id}`} className="btn" onClick={this.pageUp}>Подробнее</NavLink>
					 	</div>
					</div>
			</div>
    )
  }


}
