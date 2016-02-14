/**
 * Created by Rain Summers on 11.02.2016.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


	//  While(i--) VS While(i++ < length)
(function () {
	"user strict";

	var length = 10,
	    idx,
	    iteratations,
	    start,
	    array,
	    arrayCopy,
	    performance1,
	    performance2
		;

	start        = performance.now();
	iteratations = 100000;
	while ( iteratations-- ) {
		array     = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
		arrayCopy = [];

		while ( idx-- ) {
			arrayCopy[idx] = array[idx];
		}
	}
	performance1 = performance.now() - start;
	console.log( 'While(i--) : %s', performance1 );


	start        = performance.now();
	iteratations = 100000;
	while ( iteratations-- ) {
		idx       = -1;
		array     = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
		arrayCopy = [];

		while ( ++idx < length ) {
			arrayCopy[idx] = array[idx];
		}
	}
	performance2 = performance.now() - start;
	console.log( 'While(i++) : %s', performance2 );


	console.log( 'While(i--) VS While(i++ < length) : %s', performance1 / performance2 );
});

//  Array copying. Array.slice() VS for(i++)-cycle VS for(i--)-cycle VS while(i--)-cycle
(function () {
	"user strict";

	var countInit = 10,
	    count,
	    iteratations,
	    start,
	    array,
	    arrayCopy,
	    performance1,
	    performance2,
	    length,
	    i
		;

	function Class() {}

	start        = performance.now();
	iteratations = 100000;
	while ( iteratations-- ) {
		count     = countInit;
		array     = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
		arrayCopy = array.slice();
	}
	performance1 = performance.now() - start;
	console.log( 'Array copying. Array.slice() : %s', performance1 );


	start        = performance.now();
	iteratations = 100000;
	while ( iteratations-- ) {
		count = countInit;
		array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

		for ( i = 0, length = array.length; i < length; i++ ) {
			arrayCopy[i] = array[i];
		}
	}
	performance2 = performance.now() - start;
	console.log( 'for(;;i++)-cycle : %s', performance2 );


	start        = performance.now();
	iteratations = 100000;
	while ( iteratations-- ) {
		count = countInit;
		array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

		for ( i = array.length; i; i-- ) {
			arrayCopy[i] = array[i];
		}
	}
	performance2 = performance.now() - start;
	console.log( 'for(;;i--)-cycle : %s', performance2 );


	start        = performance.now();
	iteratations = 100000;
	while ( iteratations-- ) {
		count = countInit;
		array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

		i = array.length;
		while ( i-- ) {
			arrayCopy[i] = array[i];
		}
	}
	performance2 = performance.now() - start;
	console.log( 'while(i--)-cycle : %s', performance2 );


	//console.log( 'Array.slice() VS for(;;i--)-cycle : %O', performance1 / performance2 );
});


//  Array.push() VS simple insertion by index
(function () {
	"user strict";
	
	var iteratations = 100000,
	    countInit    = 10,
	    count,
	    start,
	    array,
	    performance1,
	    performance2
		;

	function Class() {}

	start = performance.now();
	while ( iteratations-- ) {
		count = countInit;
		array = [];
		while ( count-- ) {
			array.push( new Class() );
		}
	}
	performance1 = performance.now() - start;
	console.log( 'Array.push() : %s', performance1 );

	start        = performance.now();
	iteratations = 100000;
	while ( iteratations-- ) {
		count = countInit;
		array = [];
		while ( count-- ) {
			array[count] = new Class();
		}
	}
	performance2 = performance.now() - start;
	console.log( 'simple insertion by index : %s', performance2 );


	console.log( 'Array.push() VS simple insertion by index : %O', performance1 / performance2 );
});


//  Object.defineProperty VS standart "var"
(function () {
	"user strict";

	function Obj() {}

	var count        = 5,
	    iteratations = 100000,
	    start,
	    obj,
	    performance1,
	    performance2
		;


	start = performance.now();
	while ( iteratations-- ) {
		count = 5;
		while ( count-- ) {
			obj = 'obj' + count;
			Object.defineProperty( window, obj, {
				value        : new Obj(),
				enumerable   : true,
				configurable : false,
				writable     : true,
			} );
		}
	}
	performance1 = performance.now() - start;
	console.log( 'Object.defineProperty performance : %s', performance1 );

	var observer0, observer1, observer2, observer3, observer4;
	start        = performance.now();
	iteratations = 100000;
	while ( iteratations-- ) {
		count = 5;
		while ( count-- ) {
			observer0 = new Obj();
			observer1 = new Obj();
			observer2 = new Obj();
			observer3 = new Obj();
			observer4 = new Obj();
		}
	}
	performance2 = performance.now() - start;
	console.log( 'standart "var" performance : %s', performance2 );


	console.log( 'Object.defineProperty VS standart "var" : %O', performance1 / performance2 );
});
