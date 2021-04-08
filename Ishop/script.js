const IshopItemsContainer = React.createClass({

	displayName: 'Ishop',

	getDefaultProps: function(){
		return {shop: 'Ishop'}
	},

	render: function(){

		const result = this.props.items.map( (el,ind) => {
				let block =

				React.DOM.div({key:el.code, className:"ishop__item  ishop-content"},
					React.DOM.div({className: "ishop-content__items ishop-content__items_img-container"},
						React.DOM.img({className: "ishop-content__img", src: el.url, alt: 'Image'})
						),
					React.DOM.span({className: "ishop-content__items ishop-content__items_name"}, el.itemName),
					React.DOM.span({className: "ishop-content__items ishop-content__items_price"}, el.price),
					React.DOM.span({className: "ishop-content__items ishop-content__items_rest"}, el.rest)
				);

				return block;
		})

		return React.DOM.div({className: 'ishop'},
				React.DOM.h1({className: 'ishop__header'}, this.props.shop),
				React.DOM.div({className: 'ishop__container'}, 
					React.DOM.div({className:"ishop__item table-header"},
						React.DOM.span({className: "table-header__items table-header__items_img"}, "Foto"),
						React.DOM.span({className: "table-header__items table-header__items_name"}, "Name"),
						React.DOM.span({className: "table-header__items table-header__items_price"}, "Price"),
						React.DOM.span({className: "table-header__items table-header__items_rest"}, "Left" )
					),
					React.DOM.div({className: "ishop__table"}, result)
				)
			)

	},
})