/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


function Observer() {
	"use strict";
}

Observer.prototype.update = observerUpdate;
function observerUpdate() {throw new Error( 'Function observerUpdate() should be implemented in the child class.' );}


function Subject() {
	"use strict";
	this.observers = [];
}

Subject.prototype.add    = subjectAdd;
Subject.prototype.remove = subjectRemove;
Subject.prototype.notify = subjectNotify;

function subjectAdd( observer ) {
	"use strict";
	var idx = this.observers.indexOf( observer );

	!~idx && this.observers.push( observer );
	return this;
}
function subjectRemove( observer ) {
	"use strict";
	var idx = this.observers.indexOf( observer );

	~idx && this.observers.splice( idx, 1 );
	return this;
}
function subjectNotify() {
	"use strict";
	var length = this.observers.length,
	    idx    = -1,
	    observer;

	while ( ++idx < length ) {
		observer = this.observers[idx];
		observer.update.apply( observer, arguments );
	}
	return this;
}
