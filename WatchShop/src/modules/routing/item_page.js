import React from "react";
import isoFetch from 'isomorphic-fetch';
import { Item } from "../pages/item/item";

export class Item_Page extends React.PureComponent{
  componentDidMount() {
    this.loadData();
  }

  state = {
    dataReady: false,
    items: [],
  };

  fetchError = (errorMessage) => {
    console.error(showStr);
  };

  fetchSuccess = (loadedData) => {
    this.setState({
      dataReady:true,
      items: loadedData,
    });
  };

  loadData = () => {

    isoFetch(" http://localhost:3000/items")
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
    ;

  };
  render(){
    if(!this.state.dataReady){
      return <div>Загрузка данных...</div>
    }
    const elId = parseInt(this.props.match.params.clid);
    const clientData = this.state.items.find( el => el.id === elId );
    const newElement = {...clientData};
    return(
      <Item object={newElement}></Item>
    )
  }
}
