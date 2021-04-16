const MainStore = React.createClass({

	displayName: 'Ishop',

	getDefaultProps: function(){
		return {shop: 'Ishop'}
	},

	getInitialState: function(){
		return{
			newItemsList: this.props.items,
			checkedRow: null,
			deletedRows: {},
		};
	},

	rowSelected: function(code) {
	    console.log('выбран ответ с кодом '+code);
	    this.setState( {checkedRow:code} );
	    console.log(this.state.newItemsList[0].code);
	 },

	 deleteAllRow: function(bul,code){
	 	if(bul){
	 		let result = [];
	 		this.state.newItemsList.forEach( (el) => {
	 			if(el.code !== code){
	 				result.push(el); 
	 			}
	 		} );

	 		this.state.newItemsList = result;
	 	}
		
	 },



	render: function(){

		const result = this.state.newItemsList.map( (el,ind) => {
				if(el.code in this.state.deletedRows){
					return;
				}
				if(el.code === this.state.checkedRow){
					return React.createElement(IshopItem, {key:el.code,
							itemName: el.itemName,code:el.code, price: el.price, rest: el.rest,
							url: el.url, backgroundStyle: "red", msRowSelected: this.rowSelected, deleteAllRow: this.deleteAllRow});
				}
				return React.createElement(IshopItem, {key:el.code,
					itemName: el.itemName, price: el.price,code:el.code, rest: el.rest,
					url: el.url, backgroundStyle: "", msRowSelected: this.rowSelected, deleteAllRow: this.deleteAllRow});
		})

		return React.DOM.div({className: 'ishop'},
				React.DOM.h1({className: 'ishop__header'}, this.props.shop),
				React.DOM.div({className: 'ishop__container'}, 
					React.DOM.div({className:"ishop__item table-header"},
						React.DOM.span({className: "table-header__items table-header__items_img"}, "Foto"),
						React.DOM.span({className: "table-header__items table-header__items_name"}, "Name"),
						React.DOM.span({className: "table-header__items table-header__items_price"}, "Price"),
						React.DOM.span({className: "table-header__items table-header__items_rest"}, "Left" ),
						React.DOM.span({className: "table-header__items table-header__items_button"}, "Control" )
					),
					React.DOM.div({className: "ishop__table"}, result)
				)
			)

	},
})
