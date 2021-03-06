import React from "react";
import PropTypes from 'prop-types';
import {Events} from '../../../events';

export class CatalogSidebar extends React.PureComponent{
  static propTypes = {
    items: PropTypes.array
  }
  componentDidMount(){
    this.checkCheckedItems();
    this.filterItems();
  }

  componentWillUnmount(){
    localStorage.setItem('checked',null);
    localStorage.setItem('number', null)
  }

  filterItems = () => {
    const form = document.forms.filters;
    const elements = [...form.elements]
    const formCheckbox = elements.filter((el) => el.type === 'checkbox');
    let data = [...this.props.items];
    if(form.elements.numberfrom.value !== '' && form.elements.numberto.value !== ''){
      data = data.filter((el) => {
        if(el.price > form.elements.numberfrom.value && el.price < form.elements.numberto.value){
          return el;
        }
      })
    }

    formCheckbox.forEach((el) => {
      if(el.checked && el.dataset.value){
        data = data.filter((elem) => elem[el.name] === el.dataset.value)
      }
    })
    Events.emit('FilterItems', data, 1);
    localStorage.setItem('filteredItems', JSON.stringify(data));
  }

  checkCheckedItems = () => {
    const data = localStorage.getItem('checked');
    const numberData = JSON.parse(localStorage.getItem('number'));
    const keys = numberData === null ? [] : Object.keys(numberData);
    const form = document.forms.filters;
    const elements = [...form.elements]

    if(data === null && numberData === null){
      return;
    }
    elements.forEach((el) => {
        if(el.dataset.value && data.includes(el.dataset.value)){
          el.setAttribute('checked', true);
      }
        if(keys.includes(el.name)){
          el.value = numberData[el.name];
        }
    })

  }

  addCheckItemsToStorage = () => {
    localStorage.setItem('checked',null);
    localStorage.setItem('number', null)
    const form = document.forms.filters;
    const checkedFilters = [];
    const numbers = {};
    const elements = [...form.elements];
    elements.forEach((el) => {
      if(el.type === 'checkbox' && el.checked && el.dataset.value){
        checkedFilters.push(el.dataset.value);
      }
      if(el.type === 'number' && el.value !== ''){
        numbers[el.name] = el.value;
      }
    })

    localStorage.setItem('checked', checkedFilters);
    localStorage.setItem( 'number', JSON.stringify(numbers) );
  }

  box = null;
  dropdown = null;

  setRef = (ref) => {
    if(ref === null) return;
    switch(ref.dataset.name){
      case 'box':
        this.box = ref;
        break;
      case 'dropdown':
        this.dropdown = ref;
        break;
    }
  }


    showSidebar = () => {
        this.box.classList.toggle("light");
        this.dropdown.classList.toggle("show")
    }

  render(){

    return(
      <div id="coverBox" class="bags_container_menu" data-name='box' ref={this.setRef}>
					<div id="myDropdown" class="dropdown_container" data-name='dropdown' ref={this.setRef}>
						<button onClick={this.showSidebar} class="dropBtn">????????????</button>
            <h3>??????????????</h3>
            <form name="filters" class="filters" onChange={this.addCheckItemsToStorage}>
              <label for="showprice"	class="filters__label">???????? </label>
							<input id="showprice" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__price-wrapper">
                <div class="filters__element">
                  <label for="from" >????:</label>
                  <input id="from"	type="number" name="numberfrom" class=" price-input"/>
                </div>
                <div class="filters__element">
                  <label for="to">????:</label>
                  <input id="to" type="number" name="numberto" class="price-input"/>
                </div>
              </div>
              <label for="showwatch" class="filters__label">?????? ??????????</label>
							<input id="showwatch" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__type-wrapper">
                <div class="filters__element">
									<input id="men" type="checkbox" name="gender" data-value="??????????????" class="filters__input type-input"/>
                  <label for="men" >??????????????</label>
                </div>
                <div class="filters__element">
									<input id="women" type="checkbox" name="gender" data-value="??????????????" class="filters__input type-input"/>
                  <label for="women" >??????????????</label>
                </div>
                <div class="filters__element">
									<input id="child" type="checkbox" name="gender" data-value="??????????????" class="filters__input type-input"/>
                  <label for="child" >??????????????</label>
                </div>
              </div>
              <label for="showmechanizm" class="filters__label">???????????????? ??????????</label>
							<input id="showmechanizm" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__mechanizm-wrapper">
                <div class="filters__element">
									<input id="qarz" type="checkbox" name="meha" data-value="??????????????????" class="filters__input mechanizm-input"/>
                  <label for="qarz" >??????????????????</label>
                </div>
                <div class="filters__element">
									<input id="meha"	type="checkbox" name="meha" data-value="????????????????????????" class="filters__input mechanizm-input"/>
                  <label for="meha" >????????????????????????</label>
                </div>
              </div>
              <label for="showglass"	class="filters__label">????????????</label>
							<input id="showglass" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__glass-wrapper">
                <div class="filters__element">
									<input id="mineral" type="checkbox" name="glass" data-value="??????????????????????" class="filters__input glass-input"/>
                  <label for="mineral">??????????????????????</label>
                </div>
                <div class="filters__element">
									<input id="saphir" type="checkbox" name="glass" data-value="????????????????????" class="filters__input glass-input"/>
                  <label for="saphir" >????????????????????</label>
                </div>
                <div class="filters__element">
									<input id="hegsalit" type="checkbox" name="glass" data-value="????????????????????????" class="filters__input glass-input"/>
                  <label for="hegsalit" >????????????????????</label>
                </div>
              </div>
              <label for="showmaterial" class="filters__label">???????????????? ??????????????</label>
							<input id="showmaterial" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__meterial-wrapper">
                <div class="filters__element">
									<input id="steel" type="checkbox" name="belt" data-value="?????????????????????? ??????????" class="filters__input material-input"/>
                  <label for="steel">?????????????????????? ??????????</label>
                </div>
                <div class="filters__element">
									<input id="leaser" type="checkbox" name="belt" data-value="?????????????????????? ????????" class="filters__input material-input"/>
                  <label for="leaser" >?????????????????????? ????????</label>
                </div>
                <div class="filters__element">
									<input id="keram" type="checkbox" name="belt" data-value="????????????????" class="filters__input material-input"/>
                  <label for="keram" >????????????????</label>
                </div>
                <div class="filters__element">
									<input id="textile" type="checkbox" name="belt" data-value="??????????????????" class="filters__input material-input"/>
                  <label for="textile" >??????????????????</label>
                </div>
              </div>
              <label for="showcountry" class="filters__label">???????????? ????????????????????????</label>
							<input id="showcountry" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__country-wrapper">
                <div class="filters__element">
									<input id="england" type="checkbox" name="country" data-value="??????????????" class="filters__input country-input"/>
                  <label for="england" >??????????????</label>
                </div>
                <div class="filters__element">
									<input id="germany" type="checkbox" name="country" data-value="????????????" class="filters__input country-input"/>
                  <label for="germany">????????????</label>
                </div>
                <div class="filters__element">
									<input id="switzerland" type="checkbox" name="country" data-value="??????????????????" class="filters__input country-input"/>
                  <label for="switzerland">??????????????????</label>
                </div>
                <div class="filters__element">
									<input id="swiden" type="checkbox" name="country" data-value="????????????" class="filters__input country-input"/>
                  <label for="swiden">????????????</label>
                </div>
                <div class="filters__element">
									<input id="italy" type="checkbox" name="country" data-value="????????????" class="filters__input country-input"/>
                  <label for="italy" >????????????</label>
                </div>
                <div class="filters__element">
									<input id="belgium" type="checkbox" name="country" data-value="??????????????" class="filters__input country-input"/>
                  <label for="belgium">??????????????</label>
                </div>
              </div>
              <input className="filters__submit" type='button' name='submit' value='??????????????????' onClick={this.filterItems}></input>
            </form>
					</div>
				</div>
    )
  }
}
