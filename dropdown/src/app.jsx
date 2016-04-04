var React = require('react');
var ReactDOM = require('react-dom');
var DropDown = require('./dropdown');

var options = {
	title: 'Choose a dessert',
	items: ['Apple Pie', 'Peace Cobbler', 'Coconut Cream Pie']
};

var element = React.createElement(DropDown, options);

ReactDOM.render(element, document.querySelector('.target'));