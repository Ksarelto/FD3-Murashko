'use strict'

import React from "react"
import PropTypes from 'prop-types';
import {Events} from './events';

import './changeMessage.css';


class ChangeMessage extends React.PureComponent {

  static propTypes = {
    itemHash: PropTypes.object.isRequired,
    mode: PropTypes.number.isRequired,
    saveButtonValid: PropTypes.bool.isRequired,
    productData: PropTypes.object.isRequired,
  }

  state = {
    personName: this.props.itemHash.personName,
    surename: this.props.itemHash.surename,
    patrinymic: this.props.itemHash.patrinymic,
    balance: this.props.itemHash.balance,
    personNameValid: true,
    surenameValid: true,
    patrinymicValid: true,
    balanceValid: true,
    saveValid: this.props.saveButtonValid,
  }

  personNameRef = null;
  surenameRef = null;
  patrinymicRef = null;
  balanceRef = null;

  setRefs = (ref) => {
    if(ref === null) return;
    switch(ref.name){
      case 'personName':
        this.personNameRef = ref;
        break;
      case 'surename':
        this.surenameRef = ref;
        break;
      case 'patrinymic':
        this.patrinymicRef = ref;
        break;
      case 'balance':
        this.balanceRef = ref;
        break;
    }
  }



  validateInput = (formElements) => {
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
      personNameValid: obj.personNameValid,
      surenameValid: obj.surenameValid,
      patrinymicValid: obj.patrinymicValid,
      balanceValid: obj.balanceValid,
      saveValid: valid
    })
  }

  checkFormValidation = (e) => {
    const formElements = e.currentTarget.elements;
    this.validateInput(formElements)
    const itemObj = {
      code: this.props.itemHash.code,
      personName: this.personNameRef.value,
      surename: this.surenameRef.value,
      patrinymic: this.patrinymicRef.value,
      balance: this.balanceRef.value,
    }
    for (let el of formElements) {
      if (el.value !== this.state[el.name]) {
        Events.emit('FormValidation',false, itemObj);
        return
      }
    }
    if (formElements) {
      Events.emit('FormValidation',true);
    }
  }

  resetData = (e) => {
    Events.emit('FormValidation',true, {}, 0);
  }

  saveProduct = (e) => {
    const product = {
      personName: this.personNameRef.value,
      surename: this.surenameRef.value,
      balance: this.balanceRef.value,
      patrinymic: this.patrinymicRef.value,
      code: this.props.itemHash.code,
    }
    Events.emit('AddRow',product, this.props.mode);
  }
  render() {
    if (this.props.mode === 3) {
      return (
        <div className="message">
          <label className="message__label_card">{`Фамилия: ${this.props.itemHash.surename}`}</label>
          <label className="message__label_card">{`Имя: ${this.props.itemHash.personName}`}</label>
          <label className="message__label_card">{`Отчество: ${this.props.itemHash.patrinymic}`}</label>
          <label className="message__label_card">{`Баланс: ${this.props.itemHash.balance}`}</label>
        </div>
      )
    }
    return (
      <div className="message">
        <h2 className="message__subheader">
          {(this.props.mode === 2) ? "Добавить клиента" : "Редактировать"}
        </h2>
        <form className="message__form" onChange={this.checkFormValidation}>
          <label className="message__label">{`ID:${this.props.itemHash.code}`}</label>
          <div className="message__input-wrapper">
            <label className="message__label">{"Фамилия"}</label><input className="message__input message__input_text" type="text" name="surename" ref = {this.setRefs} defaultValue={this.state.surename} />
            {
              (!this.state.surenameValid) &&
              <span className="invalid">Error</span>
            }
          </div>
          <div className="message__input-wrapper">
            <label className="message__label">{"Имя"}</label><input className="message__input  message__input_text" type="text" name="personName" ref = {this.setRefs} defaultValue={this.state.personName} />
            {
              (!this.state.personNameValid) &&
              <span className="invalid">Error</span>
            }
          </div>
          <div className="message__input-wrapper">
            <label className="message__label">{"Отчество"}</label><input className="message__input message__input_text" type="text" name="patrinymic" ref = {this.setRefs} defaultValue={this.state.patrinymic} />
            {
              (!this.state.patrinymicValid) &&
              <span className="invalid">Error</span>
            }
          </div>
          <div className="message__input-wrapper">
            <label className="message__label">{"Баланс"}</label><input className="message__input message__input_text" type="text" name="balance" ref = {this.setRefs} defaultValue={this.state.balance} />
            {
              (!this.state.balanceValid) &&
              <span className="invalid">Error</span>
            }
          </div>
          <div className="message__button-wrapper">
            <input className="message__input message__input_save" type="button" value={this.props.mode === 2 ? "Добавить" : "Сохранить"} disabled={!this.state.saveValid} onClick={this.saveProduct} />
            <input className="message__input message__input_cancel" type="button" value="Отмена" onClick={this.resetData} />
          </div>
        </form>
      </div>
    )
  }

}
export default ChangeMessage;
