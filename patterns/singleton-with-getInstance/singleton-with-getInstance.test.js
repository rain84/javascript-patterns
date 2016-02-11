/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


/*  test    */
window.test = function () {
	function Class() {
		console.log( 'Singleton should be inited only once' );
		
		this.moo = "some string";
		this.foo = 777;
	}
	
	Class.prototype.protoClass = 'protoClass';


	Class = singletonFabric( Class );


	Class.prototype.protoFoo = 'protoFoo - val';
	var example1             = Class.getInstance();
	var example2             = Class.getInstance();
	Class.prototype.protoMoo = 'protoMoo - val';
	
	
	console.log( '(example1 === example2) : %s', example1 === example2 );
	console.log( '(example1 as object : %O', example1 );

};

