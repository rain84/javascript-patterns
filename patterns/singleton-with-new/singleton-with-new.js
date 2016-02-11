/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


/*  Singleton Fabric
 *  Instance of singleton-cass is getting by "new ClassSingleton"
 *  TODO: Should be re-worked (look into the tests)
 */
function singletonFabric( Class ) {
	return (function () {
		var instance;

		return function () {
			if ( instance ) { return instance; }

			Class.apply( this );
			instance = this;
		};
	}());
}
