var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

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