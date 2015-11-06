/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


/*  Singleton Fabric  */
function singletonFabric( classConstructor ) {
    return (function () {
        var instance;

        return function () {
            if ( instance ) { return instance; }

            classConstructor.apply( this );
            instance = this;
        };
    }());
}


/*  test    */
var ClassSingleton = singletonFabric( function () {
    console.log( 'Singleton should be inited only once' );

    this.moo = "some string";
    this.foo = 777;
} );


ClassSingleton.prototype.protoFoo = 'protoFoo - val';
var example1                      = new ClassSingleton();
var example2                      = new ClassSingleton();
ClassSingleton.prototype.protoMoo = 'protoMoo - val';


console.log( '(example1 === example2) : %s', example1 === example2 );
console.log( '(example1 as object : %O', example1 );
