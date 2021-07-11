import React from "react";
import { WouldLikeItem } from "./wouldlikeitem";

export class WouldLikeItems extends React.PureComponent{
  render(){
    return(
      <section class="item_foto">
		<div class="container">
			<h2>Вам может понравится</h2>
			<div class="item_foto_container">
        <WouldLikeItem name='Perrier Lannier' src='../assets/items/perrierlannier.png' id={7}/>
        <WouldLikeItem name='Swiss Military Hannova' src='../assets/items/swissmilitary.png' id={8}/>
        <WouldLikeItem name='Q&Q' src='../assets/items/qq.png' id={9}/>
        <WouldLikeItem name='Tissot Sera' src='../assets/items/tissotsera.png' id={13}/>
			</div>
		</div>
	</section>
    )
  }
}
