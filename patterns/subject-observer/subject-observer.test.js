/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


/*  test    */
window.test = function () {

	function Observer() {
		"use strict";
		this.idx = Observer._idx++;
	}

	Observer._idx = 0;

	Observer.prototype.update = observerUpdate;
	Observer.prototype.update = observerUpdate;
	function observerUpdate( data ) {
		"use strict";
		console.log( 'Observer %s. Data : %O', this.idx, data );
	}

	var observer0 = new Observer(),
	    observer1 = new Observer(),
	    observer2 = new Observer(),
	    subject   = new Subject()
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

