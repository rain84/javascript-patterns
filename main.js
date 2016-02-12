/**
 * Created by Rain Summers on 10.02.2016.
 *
 * You can ask me on 'into.the.rainy.sky@gmail.com'
 * if you have any questions about this code.
 *
 */


(function ( patterns ) {
	
	$( main );
	
	function main() {
		
		var $container = $( '.container' ),
		    template   = _.template( $( '#template' ).html() )
			;
		
		
		patterns.forEach( function ( pattern, index ) {
			pattern = (index + 1) + '. '
			          + pattern[0].toUpperCase() + pattern.slice( 1 );
			
			
			var content = template( { pattern : pattern, index : index } );
			
			$container.append(
				$( content )
					.find( 'button' )
					.on( 'click.addScripts', _.partial( addScripts, index ) )
					.end()
			);
		} );
		

		function addScripts( index ) {
			var $this      = $( this ),
			    url        = {
				    pattern     : '/patterns/<%= pattern %>/<%= pattern %>.js',
				    patternTest : '/patterns/<%= pattern %>/<%= pattern %>.test.js',
			    },
			    pattern    = patterns[index],
			    nodeScript = document.createElement( 'script' );
			
			
			nodeScript.src     = _.template( url.pattern )( { pattern : pattern } );
			nodeScript.async   = true;
			nodeScript.onload  = _.partial( addScripts.onLoad, nodeScript.src );
			nodeScript.onerror = _.partial( addScripts.onError, nodeScript.src );
			document.body.appendChild( nodeScript );
			
			
			nodeScript         = document.createElement( 'script' );
			nodeScript.src     = _.template( url.patternTest )( { pattern : pattern } );
			nodeScript.async   = true;
			nodeScript.onload  = _.compose(
				function () {
					var testFn = window.test;
					$this
						.off( 'click.addScripts' )
						.click( function () {
							console.clear();
							location.hash = '#' + pattern;
							testFn();
						} )
						.click()
					;
					
					delete window.test;
				},
				_.partial( addScripts.onLoad, nodeScript.src )
			);
			nodeScript.onerror = _.partial( addScripts.onError, nodeScript.src );
			document.body.appendChild( nodeScript );
		}
		
		//addScripts.onLoad  = function ( src ) { console.log( '"%s" loaded', src ); };
		//addScripts.onError = function ( src ) {console.log( 'error on load "%s"', src );};
		addScripts.onLoad  = function () {};
		addScripts.onError = function () {};

		var hashIndex = location.hash && patterns.indexOf( location.hash.slice( 1 ) );

		if ( typeof hashIndex === 'number' && !!~hashIndex ) {
			console.clear();
			$( 'button' )
				.get( hashIndex )
				.click()
			;
		}
	}
}( [
	   'singleton-with-new',
	   'singleton-with-getInstance',
	   'subject-observer',
	   'publish-subscribe',
   ] ));
