'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var abs = require( 'math-abs' );
var EPS = require( 'const-eps-float64' );
var CBRT_EPSILON = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof CBRT_EPSILON, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the cube root of the difference between one and the smallest value greater than one which is representable as a double (2**-52)', function test( t ) {
	var delta;
	var tol;
	var v;

	if ( typeof Math.cbrt === 'function' ) {
		v = Math.cbrt( pow( 2, -52 ) );

		delta = abs( v - CBRT_EPSILON );
		tol = EPS * v;

		t.ok( delta <= tol, 'equals cbrt(2**-52) within tolerance '+tol+'. v: '+v+'. CBRT_EPSILON: '+CBRT_EPSILON+'.' );
	} else {
		t.equal( CBRT_EPSILON, 6.0554544523933395e-6, 'equals 6.0554544523933395e-6' );
	}
	t.end();
});
