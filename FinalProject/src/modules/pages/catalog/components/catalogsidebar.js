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
						<button onClick={this.showSidebar} class="dropBtn">Фильтр</button>
            <h3>Фильтры</h3>
            <form name="filters" class="filters" onChange={this.addCheckItemsToStorage}>
              <label for="showprice"	class="filters__label">Цена </label>
							<input id="showprice" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__price-wrapper">
                <div class="filters__element">
                  <label for="from" >От:</label>
                  <input id="from"	type="number" name="numberfrom" class=" price-input"/>
                </div>
                <div class="filters__element">
                  <label for="to">До:</label>
                  <input id="to" type="number" name="numberto" class="price-input"/>
                </div>
              </div>
              <label for="showwatch" class="filters__label">Тип часов</label>
							<input id="showwatch" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__type-wrapper">
                <div class="filters__element">
									<input id="men" type="checkbox" name="gender" data-value="Мужские" class="filters__input type-input"/>
                  <label for="men" >Мужские</label>
                </div>
                <div class="filters__element">
									<input id="women" type="checkbox" name="gender" data-value="Женские" class="filters__input type-input"/>
                  <label for="women" >Женские</label>
                </div>
                <div class="filters__element">
									<input id="child" type="checkbox" name="gender" data-value="Детские" class="filters__input type-input"/>
                  <label for="child" >Детские</label>
                </div>
              </div>
              <label for="showmechanizm" class="filters__label">Механизм часов</label>
							<input id="showmechanizm" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__mechanizm-wrapper">
                <div class="filters__element">
									<input id="qarz" type="checkbox" name="meha" data-value="кварцевые" class="filters__input mechanizm-input"/>
                  <label for="qarz" >Кварцевые</label>
                </div>
                <div class="filters__element">
									<input id="meha"	type="checkbox" name="meha" data-value="Механические" class="filters__input mechanizm-input"/>
                  <label for="meha" >Механические</label>
                </div>
              </div>
              <label for="showglass"	class="filters__label">Стекло</label>
							<input id="showglass" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__glass-wrapper">
                <div class="filters__element">
									<input id="mineral" type="checkbox" name="glass" data-value="Минеральное" class="filters__input glass-input"/>
                  <label for="mineral">Минеральное</label>
                </div>
                <div class="filters__element">
									<input id="saphir" type="checkbox" name="glass" data-value="Сапфировое" class="filters__input glass-input"/>
                  <label for="saphir" >Сапфировое</label>
                </div>
                <div class="filters__element">
									<input id="hegsalit" type="checkbox" name="glass" data-value="Гексалитовое" class="filters__input glass-input"/>
                  <label for="hegsalit" >Гексалитое</label>
                </div>
              </div>
              <label for="showmaterial" class="filters__label">Материал ремешка</label>
							<input id="showmaterial" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__meterial-wrapper">
                <div class="filters__element">
									<input id="steel" type="checkbox" name="belt" data-value="Нержавеющая сталь" class="filters__input material-input"/>
                  <label for="steel">Нержавеющая сталь</label>
                </div>
                <div class="filters__element">
									<input id="leaser" type="checkbox" name="belt" data-value="Натуральная кожа" class="filters__input material-input"/>
                  <label for="leaser" >Натуральная кожа</label>
                </div>
                <div class="filters__element">
									<input id="keram" type="checkbox" name="belt" data-value="Керамика" class="filters__input material-input"/>
                  <label for="keram" >Керамика</label>
                </div>
                <div class="filters__element">
									<input id="textile" type="checkbox" name="belt" data-value="Акриловый" class="filters__input material-input"/>
                  <label for="textile" >Акриловый</label>
                </div>
              </div>
              <label for="showcountry" class="filters__label">Страна изготовитель</label>
							<input id="showcountry" type="checkbox" class="filters__checkbox-show"/>
              <div class="input-wrappers filters__country-wrapper">
                <div class="filters__element">
									<input id="england" type="checkbox" name="country" data-value="Бельгия" class="filters__input country-input"/>
                  <label for="england" >Бельгия</label>
                </div>
                <div class="filters__element">
									<input id="germany" type="checkbox" name="country" data-value="Япония" class="filters__input country-input"/>
                  <label for="germany">Япония</label>
                </div>
                <div class="filters__element">
									<input id="switzerland" type="checkbox" name="country" data-value="Швейцария" class="filters__input country-input"/>
                  <label for="switzerland">Швейцария</label>
                </div>
                <div class="filters__element">
									<input id="swiden" type="checkbox" name="country" data-value="Швеция" class="filters__input country-input"/>
                  <label for="swiden">Швеция</label>
                </div>
                <div class="filters__element">
									<input id="italy" type="checkbox" name="country" data-value="Англия" class="filters__input country-input"/>
                  <label for="italy" >Англия</label>
                </div>
                <div class="filters__element">
									<input id="belgium" type="checkbox" name="country" data-value="Франция" class="filters__input country-input"/>
                  <label for="belgium">Франция</label>
                </div>
              </div>
              <input className="filters__submit" type='button' name='submit' value='Подобрать' onClick={this.filterItems}></input>
            </form>
					</div>
				</div>
    )
  }
}
