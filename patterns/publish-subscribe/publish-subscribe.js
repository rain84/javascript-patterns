/**
 * Created by Rain Summers on 06.11.2015.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */




/*  Pattern "Publish-Subscribe"
 API is identical to 'http://riotjs.com/api/observable/;
 
 el.on(event, callback);
 el.on(events, callback);
 el.one(event, callback)
 el.one(events, callback)
 el.off(events)
 el.off(events, fn)
 el.off(‘*’)
 el.off(‘*’, fn)
 el.trigger(events, arg1 … argN)
 el.trigger(event, arg1 … argN)
 */
var observable = (function () {
	"use strict";
	
	var eventContainer = {}, mixin;

	function observable( el ) {
		"use strict";
		for ( var key in mixin ) {
			//noinspection JSUnfilteredForInLoop
			el[key] = mixin[key];
		}
		return el;
	}

	mixin = {
		on      : observableOn,
		one     : observableOne,
		off     : observableOff,
		trigger : observableTrigger,
	};
	

	return observable;


	function observableOn( events, callback ) {
		"use strict";
		
		getEvents( events )
			.forEach( function ( event ) {
				eventContainer[event] || (eventContainer[event] = []);
				!~eventContainer[event].indexOf( callback ) && eventContainer[event].push( callback );
			} );
		
		return this;
	}
	
	function observableOne( events, callback ) {
		"use strict";
		var _callback = function () {
			callback.apply( this, arguments );
			observableOff( events, _callback );
		};


		observableOn( events, _callback );
		
		return this;
	}
	
	function observableOff( events, callback ) {
		"use strict";
		
		if ( events === '*' ) {
			if ( !callback ) {
				eventContainer = {};
				return this;
			}
			else {
				events = Object.keys( eventContainer ).join( ' ' );
			}
		}
		
		
		var args = [].slice.call( arguments, 1 ),
		    event;
		
		getEvents( events )
			.forEach( function ( event ) {
				if ( callback ) {
					var idx = eventContainer[event].indexOf( callback );
					~idx && eventContainer[event].splice( idx, 1 );
				}
				else {
					eventContainer[event] && delete eventContainer[event];
				}
			} );
		
		return this;
	}
	
	function observableTrigger( events ) {
		"use strict";
		var args = [].slice.call( arguments, 1 ),
		    event;
		
		events = events.split( /\W+/ );
		!events[events.length - 1] && (events.length--);
		
		events.forEach( function ( event ) {
			var eventHandlers = eventContainer[event];

			if ( !eventHandlers ) { return; }
			
			var idx = 0,
			    _args  = args.slice()
				;
			
			_args.unshift( event );
			
			while ( idx < eventHandlers.length ) {
				eventHandlers[idx].apply( null, _args );
				idx++;
			}
		} );
		
		return this;
	}
	
	function getEvents( events ) {
		events = events.split( /\W+/ );
		!events[events.length - 1] && (events.length--);
		return events;
	}
})();
