import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import ShopItem from './ShopItem';
import ChangedMessage from './ChangeMessage';
import {Events} from './events';

class MainStore extends React.PureComponent {

	static propTypes = {
		shopName: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired,
	};

	state = {
		newItemsList: this.props.items,
		checkedProductData: null,
		checkedRow: null,
		message: null,
		itemHash: null,
		mode: 0,
		invalid: false,
		sortMode: "Все",
		companyName: 'Velcome',
	}

	componentDidMount = () => {
		Events.addListener('RowClick',this.rowSelected);
		Events.addListener('DeleteRow',this.deleteAllRow);
		Events.addListener('AddRow',this.addNewRow);
		Events.addListener('ShowCard',this.showCard);
		Events.addListener('FormValidation',this.checkFormValidation);
	  };

	  componentWillUnmount = () => {
		Events.removeListener('RowClicked',this.rowSelected);
		Events.removeListener('DeleteRow',this.deleteAllRow);
		Events.removeListener('AddRow',this.addNewRow);
		Events.removeListener('ShowCard',this.showCard);
		Events.removeListener('FormValidation',this.checkFormValidation);
	  };

	showCard = (code, mode = 2) => {
		let item;
		this.state.newItemsList.filter((el) => {
			if (code === el.code) {
				item = el;
				return
			}
		})

		if (mode === 2) {
			let emptyItem = {...this.state.newItemsList[0]};
			for (let el in emptyItem) {
				if (el === 'code') {
					emptyItem[el] = this.state.newItemsList[this.state.newItemsList.length - 1].code + 1;
					continue;
				}
				emptyItem[el] = "";
			}
			this.setState({ checkedRow: null, itemHash: emptyItem, mode: mode, checkedProductData: emptyItem, invalid: true })
		} else {
			this.setState({ checkedRow: code, itemHash: item, mode: mode, checkedProductData: item })
		}

	}

	rowSelected = (code) => {
		this.setState({ checkedRow: code });
	}

	deleteAllRow = (bul, code) => {
		if (bul) {
			const result = this.state.newItemsList.filter((el) => {
				return (el.code !== code);
			});
			this.setState({ newItemsList: result, mode: 0 });
		}
	}

	addNewRow = (obj, mode) => {
		const mid = [...this.state.newItemsList];
		if (mode === 1) {
			let index = 0;
			mid.forEach((el,ind) => {
				if(el.code === obj.code){
					index = ind;
				}
			})
			mid[index] = obj;
		} else {
			mid.push(obj);
		}
		this.setState({ newItemsList: mid, mode: 0, invalid: false })
	}

	checkFormValidation = (valid, elementsData, mode) => {
		if (mode === 0) {
			this.setState({ invalid: false, checkedRow: null, mode: mode })
			return;
		}
		if (!valid) {
			this.setState({ invalid: true, itemHash: elementsData });
		} else {
			this.setState({ invalid: false });
		}
	}

	setCompanyName = (e) => {
		this.setState({companyName: e.target.value});
	}

	setSortMode = (e) => [
		this.setState({sortMode: e.target.value})
	]

	sortPersons = () => {
		const result = [];
		this.state.newItemsList.forEach((el) => {
			if(this.state.sortMode === 'Активные'){
				if(el.balance >= 0){
					result.push(el)
				}
				return;
			}else{
				if(el.balance < 0){
					result.push(el)
				}
				return;
			}
		})
		return result;
	}

	render() {
		let personsData;
		if(this.state.sortMode !== "Все"){
			personsData = this.sortPersons()
		}else{
			personsData = [...this.state.newItemsList];
		}
		const result = personsData.map((el) => {
			if (el.code === this.state.checkedRow) {

				return (
					<ShopItem key={el.code}
						personName={el.personName} code={el.code} surename={el.surename} balance={el.balance}
						patrinymic={el.patrinymic} checkedStyle="red"  showItemCard={this.showCard} invalidButton={this.state.invalid} clientsActivity={el.balance >= 0 ? "active" : "blocked"}/>
				);
			}
			return (
				<ShopItem key={el.code}
					personName={el.personName} code={el.code} surename={el.surename} balance={el.balance}
					patrinymic={el.patrinymic} checkedStyle=""  showItemCard={this.showCard} invalidButton={this.state.invalid} clientsActivity={el.balance >= 0 ? "active" : "blocked"}/>
			);
		})



		return (
			<div className="ishop">
				<h1 className="ishop__header">{this.props.shopName}</h1>
				<div className="ishop-form">
				  <input type="button" className="ishop-form__input ishop-form__input_velcome" value="Velcome" onClick={this.setCompanyName}/>
					<input type="button" className="ishop-form__input ishop-form__input_mts" value="MTS" onClick={this.setCompanyName}/>
					<span className="ishop-form__text">{`Компания: ${this.state.companyName}`}</span>
				</div>
				<div className="ishop-form">
					<input type="button" className="ishop-form__input ishop-form__input_all" value="Все" onClick={this.setSortMode}/>
					<input type="button" className="ishop-form__input ishop-form__input_active" value="Активные" onClick={this.setSortMode}/>
					<input type="button" className="ishop-form__input ishop-form__input_blocked" value="Заблокированные" onClick={this.setSortMode}/>
				</div>
				<div className="ishop__container">
					<div className="ishop__item table-header">
						<span className="table-header__items table-header__items_img">"Фамилия"</span>
						<span className="table-header__items table-header__items_name">"Имя"</span>
						<span className="table-header__items table-header__items_price">"Отчество"</span>
						<span className="table-header__items table-header__items_rest">"Баланс"</span>
						<span className="table-header__items table-header__items_button">"Статус"</span>
						<span className="table-header__items table-header__items_rest">"Редактировать"</span>
						<span className="table-header__items table-header__items_button">"Удалить"</span>
					</div>
					<div className="ishop__table">
						{result}
					</div>
				</div>
				<input className="ishop-content__items ishop-content__items_button new-btn" value="Добавить клиента" type="button" onClick={this.showCard} disabled={this.state.invalid} />
				<div className="ChangedMessage">
					{
						(this.state.mode > 0) &&
						<ChangedMessage key={this.state.checkedRow} itemHash={this.state.itemHash} productData={this.state.checkedProductData} mode={this.state.mode}  saveButtonValid={this.state.mode === 2 ? false : true} />
					}
				</div>
			</div>
		)
	}
}
export default MainStore;
