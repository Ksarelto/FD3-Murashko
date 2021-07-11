import React from "react";
import isoFetch from 'isomorphic-fetch';
import { Basket } from "../pages/basket/basket";


export class Basket_Page extends React.PureComponent{
  componentDidMount() {
    this.loadData();
  }

  state = {
    dataReady: false,
    elemsInBasket: [],
  };

  fetchError = (errorMessage) => {
    console.error(showStr);
  };

  fetchSuccess = (loadedData) => {
    this.setState({
      dataReady:true,
      elemsInBasket: loadedData,
    });
  };

  loadData = () => {

    isoFetch("http://localhost:3000/basket")
        .then( response => {
            if (!response.ok)
                throw new Error("fetch error " + response.status);
            else
                return response.json();
        })
        .then( data => {
            this.fetchSuccess(data);
        })
        .catch( error => {
            this.fetchError(error.message);
        })
  }

  render(){
    if(!this.state.dataReady){
      return <div>Идет загрузка данных...</div>
    }
    return(
      <Basket items={this.state.elemsInBasket}></Basket>
    )
  }
}
