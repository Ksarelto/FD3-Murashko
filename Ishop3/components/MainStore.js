
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import ShopItem from './ShopItem';
import ChangedMessage from './ChangeMessage';

class MainStore extends React.Component {

	static propTypes = {
		shopName: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired,
	};

	state = {
		newItemsList: this.props.items,
		checkedProductData: null,
		checkedRow: null,
		deletedRows: {},
		message: null,
		itemHash: null,
		mode: 0,
		invalid: false,
	}

	showCard = (code, mode = 2) => {
		let item;
		this.state.newItemsList.filter((el) => {
			if (code === el.code) {
				item = el;
				return
			}
		})

		if (mode === 2) {
			let emptyItem = {};
			Object.assign(emptyItem, this.state.newItemsList[0]);
			for (let el in emptyItem) {
				if (el === 'code') {
					emptyItem[el] = this.state.newItemsList.length + 1;
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
		console.log('выбран ответ с кодом ' + code);
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
		const mid = this.state.newItemsList.slice();
		if (mode === 1) {
			mid[obj.code - 1] = obj;
		} else {
			mid.push(obj);
		}
		this.setState({ newItemsList: mid, mode: 0, invalid: false })
	}

	checkFormValidation = (valid, elementsData) => {
		if (!valid) {
			this.setState({ invalid: true, itemHash: elementsData });
		} else {
			this.setState({ invalid: false });
		}
	}

	render() {

		const result = this.state.newItemsList.map((el, ind) => {
			if (el.code in this.state.deletedRows) {
				return;
			}
			if (el.code === this.state.checkedRow) {

				return (
					<ShopItem key={el.code}
						itemName={el.itemName} code={el.code} price={el.price} rest={el.rest}
						url={el.url} backgroundStyle="red" msRowSelected={this.rowSelected} deleteAllRow={this.deleteAllRow} showItemCard={this.showCard} invalidButton={this.state.invalid} />
				);
			}
			return (
				<ShopItem key={el.code}
					itemName={el.itemName} code={el.code} price={el.price} rest={el.rest}
					url={el.url} backgroundStyle="" msRowSelected={this.rowSelected} deleteAllRow={this.deleteAllRow} showItemCard={this.showCard} invalidButton={this.state.invalid} />
			);
		})



		return (
			<div className="ishop">
				<h1 className="ishop__header">{this.props.shopName}</h1>
				<div className="ishop__container">
					<div className="ishop__item table-header">
						<span className="table-header__items table-header__items_img">"Foto"</span>
						<span className="table-header__items table-header__items_name">"Name"</span>
						<span className="table-header__items table-header__items_price">"Price"</span>
						<span className="table-header__items table-header__items_rest">"Left"</span>
						<span className="table-header__items table-header__items_button">"Control"</span>
					</div>
					<div className="ishop__table">
						{result}
					</div>
				</div>
				<input className="ishop-content__items ishop-content__items_button" value="New product" type="button" onClick={this.showCard} disabled={this.state.invalid} />
				<div className="ChangedMessage">
					{
						(this.state.mode > 0) &&
						<ChangedMessage key={this.state.checkedRow} itemHash={this.state.itemHash} productData={this.state.checkedProductData} mode={this.state.mode} itemHashLength={this.state.newItemsList.length} checkFormValidation={this.checkFormValidation} addNewRowMessage={this.addNewRow} saveButtonValid={this.state.mode === 2 ? false : true} />
					}
				</div>
			</div>
		)
	}
}
export default MainStore;