import React from 'react';
import PropTypes from 'prop-types';
import {Events} from './events';
import './style.css';


class ShopItem extends React.PureComponent {

	static propTypes = {
		personName: PropTypes.string,
		code: PropTypes.number,
		surename: PropTypes.string,
		patrinymic: PropTypes.string,
		clientsActivity: PropTypes.string,
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
		Events.emit('RowClick',this.props.code);
		Events.emit('ShowCard',this.props.code, 3);
	}

	deleteRow = (e) => {
		e.stopPropagation();
		Events.emit('DeleteRow',true,this.props.code)
	}

	showItemCard = (e) => {
		e.stopPropagation()
		Events.emit('ShowCard',this.props.code, this.state.mode);
	}

	render() {
		return (
			<div className={`ishop__item ishop-content  ${this.props.checkedStyle}`} onClick={this.rowClicked}>
				<span className="ishop-content__items ishop-content__items_name">{this.props.personName}</span>
				<span className="ishop-content__items ishop-content__items_price">{this.props.surename}</span>
				<span className="ishop-content__items ishop-content__items_url">{this.props.patrinymic}</span>
				<span className="ishop-content__items ishop-content__items_rest">{this.props.balance}</span>
				<span className= {`ishop-content__items ishop-content__items_price ${this.props.clientsActivity}`}>{this.props.clientsActivity === 'active' ? "active" : "blocked"}</span>
				<input className="ishop-content__items ishop-content__items_button ishop-content_edit" value="Редакторовать" type="button" onClick={this.showItemCard} disabled={this.props.invalidButton} />
				<input className="ishop-content__items ishop-content__items_button ishop-content_delete" value="Удалить" type="button" onClick={this.deleteRow} disabled={this.props.invalidButton} />
			</div>
		)
	}

}
export default ShopItem;
