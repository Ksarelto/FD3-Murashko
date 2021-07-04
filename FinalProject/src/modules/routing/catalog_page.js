import React from "react";
import isoFetch from 'isomorphic-fetch';
import { Catalog } from "../pages/catalog/catalog";

export class Catalog_Page extends React.PureComponent{

  componentDidMount() {
    this.loadData();
  }

  state = {
    dataReady: false,
    clients: [],
  };

  fetchError = (errorMessage) => {
    console.error(errorMessage);
  };

  fetchSuccess = (loadedData) => {
    this.setState({
      dataReady:true,
      clients: loadedData,
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
      return <div>Идет загрузка...</div>;
    }
    const catalogId = parseInt(this.props.match.params.clid);
    return(
      <Catalog page={catalogId} items={this.state.clients}></Catalog>
    )
  }
}
