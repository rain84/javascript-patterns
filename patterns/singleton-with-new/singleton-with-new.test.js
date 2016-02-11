/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


window.test = function () {
	/*  test    */
	function Class() {
		console.log( 'Singleton should be inited only once' );

		this.moo = "some string";
		this.foo = 777;
	}

	//  TODO: This prop didn't inherit and singleton algorithm should be re-worked
	Class.prototype.protoClass = 'protoClass';


	Class = singletonFabric( Class );

	Class.prototype.protoFoo = 'protoFoo - val';
	var example1             = new Class();
	var example2             = new Class();
	Class.prototype.protoMoo = 'protoMoo - val';


	console.log( '(example1 === example2) : %s', example1 === example2 );
	console.log( 'example1 instanceof Class == %s', example1 instanceof Class );
	console.log( 'example1 : %O', example1 );

	console.log( '(example1.moo : %s, example1.protoMoo : %s, example1.protoClass : %s',
	             example1.moo,
	             example1.protoMoo,
	             example1.protoClass       //  TODO: This prop didn't inherit and singleton algorithm should be re-worked
	);

};
