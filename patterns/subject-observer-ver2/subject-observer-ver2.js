/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


var subjObserver = (function () {
	"use strict";

	var subjObserver = {
		subject  : subject,
		observer : observer
	};

	return subjObserver;


	function observer( obj ) {
		"use strict";
		obj.update = observer.prototype.update ? observer.prototype.update : observerUpdate;

		return obj;
	}

	function observerUpdate() {throw new Error( 'Function observerUpdate() should be implemented in the instance.' );}

	function subject( obj ) {
		"use strict";

		obj._observers = [];

		obj.add    = subjectAdd;
		obj.remove = subjectRemove;
		obj.notify = subjectNotify;

		return obj;
	}

	function subjectAdd( observer ) {
		"use strict";
		var idx = this._observers.indexOf( observer );

		!~idx && this._observers.push( observer );
		return this;
	}

	function subjectRemove( observer ) {
		"use strict";
		var idx = this._observers.indexOf( observer );

		~idx && this._observers.splice( idx, 1 );
		return this;
	}

	function subjectNotify() {
		"use strict";
		var length = this._observers.length,
		    idx    = -1,
		    observer;

		while ( ++idx < length ) {
			observer = this._observers[idx];
			observer.update.apply( observer, arguments );
		}
		return this;
	}

})();
