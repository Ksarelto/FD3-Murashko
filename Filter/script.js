const FilterBlock = React.createClass({

	displayName: 'Filter',

	getDefaultProps: function(){
		return {namesArr: ['пусто']}
	},

	getInitialState: function(){
		return {
			wordsArr: this.props.namesArr,
			currentWord: "",
			checkBoxChecked: false,
		}
	},

	checkWords: function(e){
		e = e || window.event;
		if(e.target.value === ''){
			this.setState({currentWord: ""});
			return;
		}
		this.setState({currentWord: e.target.value});
	},

	setChecked: function(e){
		e = e || window.event;

		if(this.state.checkBoxChecked){
			this.setState({checkBoxChecked: false});
			return
		}
		this.setState({checkBoxChecked: true});
	},

	resetSettings: function(e){
		e = e || window.event;
		/*let s = document.querySelector(".filter-form__input")
		s.value = "";*/
		this.setState({currentWord: "", checkBoxChecked: false});
	},

	render: function(){
		let sortedArr = this.state.wordsArr.slice();

		const newWordsArr = (this.state.checkBoxChecked) ? sortedArr.sort() : this.state.wordsArr;

		const paragraphText = newWordsArr.map( (el,ind) => {
			if(el.includes(this.state.currentWord) && this.state.currentWord !== ""){
				return;
			}
			let block = React.DOM.span({key:ind, className: "filter-paragraph__word"}, el)
				return block;
		})


		return React.DOM.div({className: 'filter-container'}, 
				React.DOM.div({className:"filter-form"},
					React.DOM.input({className: "filter-form__checkbox", checked: this.state.checkBoxChecked, type: "checkbox", onClick: this.setChecked}),
					React.DOM.input({className: "filter-form__input", value: this.state.currentWord, type:"text", onChange: this.checkWords}),
					React.DOM.input({className: "filter-form__button", type: "button", value: 'сброс', onClick: this.resetSettings}),
				),
				React.DOM.p({className: "filter-paragraph"}, paragraphText)
			)
	},
})