import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';


class ShopItem extends React.Component {

	static propTypes = {
		itemName: PropTypes.string,
		code: PropTypes.number,
		price: PropTypes.string,
		url: PropTypes.string,
		checkedStyle: PropTypes.string,
		msRowSelected: PropTypes.func,
		deleteAllRow: PropTypes.func
	}

	state = {
		mode: 1,
	}


	rowClicked = (e) => {
		if (this.props.invalidButton) {
			return;
		}
		this.props.msRowSelected(this.props.code);
		this.props.showItemCard(this.props.code, 3);
	}

	deleteRow = (e) => {
		e.stopPropagation();
		let answer = confirm('Удалить строку?');
		(answer) ? this.props.deleteAllRow(true, this.props.code) : this.props.deleteAllRow(false);
	}

	showItemCard = (e) => {
		e.stopPropagation()
		this.props.showItemCard(this.props.code, this.state.mode);
	}

	render() {

		return (
			<div className={`ishop__item ishop-content  ${this.props.checkedStyle}`} onClick={this.rowClicked}>
				<span className="ishop-content__items ishop-content__items_name">{this.props.itemName}</span>
				<span className="ishop-content__items ishop-content__items_price">{this.props.price}</span>
				<span className="ishop-content__items ishop-content__items_url">{this.props.url}</span>
				<span className="ishop-content__items ishop-content__items_rest">{this.props.rest}</span>
				<form className="ishop-content__items ishop-content_form">
					<input className="ishop-content__items ishop-content__items_button" value="Edit" type="button" onClick={this.showItemCard} disabled={this.props.invalidButton} />
					<input className="ishop-content__items ishop-content__items_button" value="Delete" type="button" onClick={this.deleteRow} disabled={this.props.invalidButton} />
				</form>
			</div>
		)
	}

}
export default ShopItem;