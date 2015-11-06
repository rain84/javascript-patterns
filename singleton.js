/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


/*  Singleton   */


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

var ClassSingleton = singletonFabric( function () {
    console.log( 'should Run only 1 time' );

    this.bang      = "Big";
    this.startTime = 0;
} );
