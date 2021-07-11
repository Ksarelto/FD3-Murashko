import React from "react";


export class Cards extends React.PureComponent{
  render(){
    return(
      <section class="cards">
        <div class="container">
          <div class="bought_flex">
            <div class="bought_flex_left">
              <p>бесплатная доставка от 180 р</p>
            </div>
            <div class="bought_flex_middle">
              <p>2 года гарантии</p>
            </div>
            <div class="bought_flex_right">
              <p>30 дней для возврата</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
