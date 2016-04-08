var React = require('react');

module.exports = React.createClass({
	render: function() {
		return <div>
			Comment
			{this.props.comments}
		</div>
	}
})