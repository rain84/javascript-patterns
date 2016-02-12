/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


/*  test    */
window.test = function () {
	"use strict";


	var el1 = {},
	    el2 = {};

	el1.tap = el2.tap = function tap() {
		console.log( '\n' );
		return this;
	};


	observable( el1 );
	observable( el2 );


	function fireCb1( event ) { console.log( 'event "%s", fire1', event ); }

	function fireCb2( event ) { console.log( 'event "%s", fire2', event ); }

	function iceCb1( event ) { console.log( 'event "%s", ice1.', event ); }

	function iceCb2( event ) { console.log( 'event "%s", ice2.', event ); }

	function commonCb( event ) {console.log( 'event "%s", common', event );}

	el1
		.on( 'fire', fireCb1 )
		.on( 'fire', fireCb2 )
		.on( 'ice', iceCb1 )
		.on( 'ice', iceCb2 )
		.on( 'fire ice', commonCb )
	;

	el2
		.trigger( 'fire' )              //  checking el.trigger(event, arg1 … argN)
		.tap()

		.trigger( 'ice' )               //  checking el.trigger(event, arg1 … argN)
		.tap()

		.off( 'fire', fireCb1 )         //  checking el.off(events, fn)
		.off( '*', commonCb )           //  checking el.off(‘*’, fn)

		.trigger( 'fire' )
		.tap()

		.trigger( 'ice' )
		.tap()

		.off( '*' )                     //  checking el.off('*')

		.trigger( 'ice fire' )
		.tap()
	;


	el1
		.one( 'fire', fireCb1 )         //  el.one(event, callback)
		.one( 'ice', iceCb1 )
		.on( 'fire ice', commonCb )
	;

	el2
		.trigger( 'fire ice' )
		.tap()

		.trigger( 'fire ice' )
		.tap()
	;
};
