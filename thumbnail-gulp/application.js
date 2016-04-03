var options = {
	thumbnailData: [{
		title: 'See Tutorials',
		number: 32,
		header: 'Learn React',
		description: 'React is fantastic! React is fantastic! React is fantastic! React is fantastic! React is fantastic!',
		imageUrl: 'http://formatjs.io/img/react.svg'
	}, {
		title: 'Show Courses',
		number: 25,
		header: 'Learn Gulp',
		description: 'Gul will speed up your development workflow',
		imageUrl: 'http://brunch.io/images/others/gulp.png'
	}]
};

var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element, document.querySelector('.target'));
var Badge = React.createClass({displayName: "Badge",
	render: function() {
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
				this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
		)
	}
});


var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function() {
		var list = this.props.thumbnailData.map(function(thumbnailProps) {
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});

		return React.createElement("div", null, 
			list
		)
	}
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function() {
		return React.createElement("div", {className: "thumbnail"}, 
		    React.createElement("img", {src: this.props.imageUrl}), 
		    React.createElement("div", {className: "caption"}, 
		       	React.createElement("h3", null, this.props.header), 
		       	React.createElement("p", null, this.props.description), 
		       	React.createElement("p", null, 
		       	React.createElement(Badge, {title: this.props.title, number: this.props.number})
		       	)
		    )
		)
	}
});