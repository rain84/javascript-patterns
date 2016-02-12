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
function singletonFabric( Class ) {
	return (function ( _Class ) {
		var instance = new _Class()
			;

		function Class() {
			throw new Error( 'Singleton class can not be executed.' );
		}

		Class.getInstance = function () {return instance;};
		Class.prototype   = _Class.prototype;

		return Class;
	}( Class ));
}
