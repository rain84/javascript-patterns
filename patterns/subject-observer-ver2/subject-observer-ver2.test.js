/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


/*  test    */
window.test = function () {

	subjObserver.observer.prototype.update = observerUpdate;
	function observerUpdate( notify ) {
		"use strict";
		console.log( 'Notify : %s', notify );
	}

	var observer0 = subjObserver.observer( {} ),
	    observer1 = subjObserver.observer( {} ),
	    observer2 = subjObserver.observer( {} ),
	    subject   = subjObserver.subject( {} )
		;

	subject
		.add( observer0 )
		.add( observer1 )
		.add( observer2 )
		.notify( 'Love' )
	;
	console.log( '\n' );

	subject
		.remove( observer2 )
		.notify( 'Suxx' )
	;
	console.log( '\n' );

	subject
		.remove( observer2 )
		.notify( 'Suxx' )
	;
	console.log( '\n' );

	subject
		.add( observer2 )
		.notify( 'Suxx' )
	;
	console.log( '\n' );

	subject
		.add( observer2 )
		.notify( 'Suxx' )
	;
};

