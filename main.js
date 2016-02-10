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
			var $this   = $( this ),
			    url     = {
				    pattern     : '/patterns/<%= pattern %>/<%= pattern %>.js',
				    patternTest : '/patterns/<%= pattern %>/<%= pattern %>.test.js',
			    },
			    pattern = patterns[index],
			    script  = document.createElement( 'script' );


			script.src     = _.template( url.pattern )( { pattern : pattern } );
			script.async   = true;
			script.onload  = _.partial( addScripts.onLoad, script.src );
			script.onerror = _.partial( addScripts.onError, script.src );
			document.body.appendChild( script );


			script         = document.createElement( 'script' );
			script.src     = _.template( url.patternTest )( { pattern : pattern } );
			script.async   = true;
			script.onload  = _.compose(
				function () {
					$this.off( 'click.addScripts' );
					$this.click( window.test ).click();

					delete window.test;
				},
				_.partial( addScripts.onLoad, script.src )
			);
			script.onerror = _.partial( addScripts.onError, script.src );
			document.body.appendChild( script );
		}

		addScripts.onLoad  = function ( src ) {console.log( '"%s" loaded', src );};
		addScripts.onError = function ( src ) {console.log( 'error on load "%s"', src );};

	}
}( [
	   'singleton-with-new',
   ] ));
