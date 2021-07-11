import React from 'react';
import { NavLink } from 'react-router-dom';

export class Slider extends React.PureComponent{

    render(){
        return(
            <div className="wrapper">
			 	<div className="slider">
            <div className='slide one'>
              <div className="container">
                <div className="slide_content">
                  <h1>Время для нее</h1>
                  <p>Наши часы стойкие</p>
                  <NavLink to='/catalog/1' className="btn" > В магазин</NavLink>
                </div>
              </div>
            </div>
			 	</div>
			 </div>
        )
    }
}
