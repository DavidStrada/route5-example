// Router Imports

import Router5, { RouteNode, errCodes, transitionPath, loggerPlugin } from 'router5';
import historyPlugin   from 'router5-history';
import listenersPlugin from 'router5-listeners';

// Fetch api
import "fetch";

// Jquery
import $ from "jquery";

// Navigation Clicks

$('#main-navbar').on({

	click(evt) {

		let href = $(this).attr('href').replace('#\/', "");

		// console.log(href);
		evt.preventDefault();

		router.navigate('section', {section: href }, { reload: true });

	}
}, 'a');


// Fetch Templates

let fetchTemplates = (templateURL) => {
let template = `src/templates/${templateURL}.html`;

fetch(template)
	.then( ( response ) => {
		return response.text();
	})
	.then( (content) => {
		$('#main-container').html( content );
	});
};


// Routes
const router = new Router5([
new RouteNode('home', '/'),
new RouteNode('section', '/:section')
],{
	useHash: true,
	// hashPrefix: '!',
	defaultRoute: 'home',
	defaultParams: { section : ''},
	base: '',
	trailingSlash: false,
	autoCleanUp: true,
	strictQueryParams: true
})
.usePlugin(loggerPlugin())
.usePlugin(listenersPlugin())
.usePlugin(historyPlugin({ forceDeactivate: false }));


router.addListener( ( toState, fromState ) => {

//   if(fromState === null ) return;

	let state_path = (toState.path === "/") ? "index" : toState.path;

// 	fetchTemplates( loadPath );

	// router.navigate('section', {section: href }, { reload: true });

	console.log('state_path', state_path);

	fetchTemplates( state_path );

  console.log( "TO_STATE" , toState );
  console.log( "FROM_STATE" , fromState  );
});


router.start( (err, state) => {
	if (err) console.error('error ', err);

	let loadPath = (state.path === "/") ? "index" : state.path;

	console.log('START_state ', state);

	fetchTemplates( loadPath );
});
