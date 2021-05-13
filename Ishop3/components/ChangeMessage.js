'use strict'

import React from "react"
import PropTypes from 'prop-types';

import './changeMessage.css';


class ChangeMessage extends React.Component {

  static propTypes = {
    itemHash: PropTypes.object.isRequired,
    mode: PropTypes.number.isRequired,
    saveButtonValid: PropTypes.bool.isRequired,
    productData: PropTypes.object.isRequired,
    checkFormValidation: PropTypes.func.isRequired,
    addNewRowMessage: PropTypes.func.isRequired,
    showItemCard: PropTypes.func.isRequired,
  }

  state = {
    itemName: this.props.itemHash.itemName,
    price: this.props.itemHash.price,
    url: this.props.itemHash.url,
    rest: this.props.itemHash.rest,
    itemNameValid: true,
    priceValid: true,
    urlValid: true,
    restValid: true,
    saveValid: this.props.saveButtonValid,
  }


  validateInput = (e) => {
    const formElements = e.target.form.elements;
    let valid = true;
    const obj = {};
    for (let el of formElements) {
      if (el.value === "") {
        valid = false;
        obj[`${el.name}Valid`] = false;
        continue;
      }
      obj[`${el.name}Valid`] = true;
    }
    this.setState({
      [e.target.name]: e.target.value,
      itemNameValid: obj.itemNameValid,
      priceValid: obj.priceValid,
      urlValid: obj.urlValid,
      restValid: obj.restValid,
      saveValid: valid
    })
  }

  checkFormValidation = (e) => {
    const formElements = e.currentTarget.elements;
    const itemObj = {
      code: this.props.itemHash.code,
      itemName: formElements.itemName.value,
      price: formElements.price.value,
      url: formElements.url.value,
      rest: formElements.rest.value,
    }
    for (let el of formElements) {
      if (el.value !== this.state[el.name]) {
        return this.props.checkFormValidation(false, itemObj);
      }
    }
    if (formElements) {
      this.props.checkFormValidation(true);
    }
  }

  resetData = (e) => {
    this.props.checkFormValidation(true, {}, 0);
  }

  saveProduct = (e) => {
    const product = {
      itemName: this.state.itemName,
      price: this.state.price,
      rest: this.state.rest,
      url: this.state.url,
      code: this.props.itemHash.code,
    }

    this.props.addNewRowMessage(product, this.props.mode);
  }
  render() {

    if (this.props.mode === 3) {
      return (
        <div className="message">
          <h2 className="message__subheader">{this.props.itemHash.itemName}</h2>
          <label className="message__label_card">{`Price: ${this.props.itemHash.price}`}</label>
          <label className="message__label_card">{`URL: ${this.props.itemHash.url}`}</label>
          <label className="message__label_card">{`Quantity: ${this.props.itemHash.rest}`}</label>
        </div>
      )
    }
    return (
      <div className="message">
        <h2 className="message__subheader">
          {(this.props.mode === 2) ? "New Product" : "Edit Product"}
        </h2>
        <form className="message__form" onChange={this.checkFormValidation}>
          <label className="message__label">{`ID:${this.props.itemHash.code}`}</label>
          <div className="message__input-wrapper">
            <label className="message__label">{"Name"}</label><input className="message__input" type="text" name="itemName" onChange={this.validateInput} value={this.state.itemName} />
            {
              (!this.state.itemNameValid) &&
              <span className="invalid">Error</span>
            }
          </div>
          <div className="message__input-wrapper">
            <label className="message__label">{"Price"}</label><input className="message__input" type="text" name="price" onChange={this.validateInput} value={this.state.price} />
            {
              (!this.state.priceValid) &&
              <span className="invalid">Error</span>
            }
          </div>
          <div className="message__input-wrapper">
            <label className="message__label">{"URL"}</label><input className="message__input" type="text" name="url" onChange={this.validateInput} value={this.state.url} />
            {
              (!this.state.urlValid) &&
              <span className="invalid">Error</span>
            }
          </div>
          <div className="message__input-wrapper">
            <label className="message__label">{"Quantity"}</label><input className="message__input" type="text" name="rest" onChange={this.validateInput} value={this.state.rest} />
            {
              (!this.state.restValid) &&
              <span className="invalid">Error</span>
            }
          </div>
          <div className="message__button-wrapper">
            <input className="message__input" type="button" value={this.props.mode === 2 ? "Add" : "Save"} disabled={!this.state.saveValid} onClick={this.saveProduct} />
            <input className="message__input" type="button" value="Cancel" onClick={this.resetData} />
          </div>
        </form>
      </div>
    )
  }

}
export default ChangeMessage;