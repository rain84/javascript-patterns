/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


/*  Singleton Fabric
*   Instance of singleton-cass is getting by "new ClassSingleton"
* */
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
