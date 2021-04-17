const IshopItem = React.createClass({

	displayName: 'Items',

	rowClicked: function(e){
		this.props.msRowSelected(this.props.code);
	},

	deleteRow: function(e){
		let answer = confirm('Удалить строку?');
		(answer) ? this.props.deleteAllRow(true,this.props.code) : this.props.deleteAllRow(false);
	},

	render: function(){

			return	React.DOM.div({className:"ishop__item  ishop-content" + " " + this.props.backgroundStyle, onClick: this.rowClicked},
						React.DOM.span({className: "ishop-content__items ishop-content__items_name"}, this.props.itemName),
						React.DOM.span({className: "ishop-content__items ishop-content__items_price"}, this.props.price),
						React.DOM.span({className: "ishop-content__items ishop-content__items_URL"}, this.props.url),
						React.DOM.span({className: "ishop-content__items ishop-content__items_rest"}, this.props.rest),
						React.DOM.input({className: "ishop-content__items ishop-content__items_button", value: 'Delete', type: 'button', onClick: this.deleteRow})
					);
	}
	
})
