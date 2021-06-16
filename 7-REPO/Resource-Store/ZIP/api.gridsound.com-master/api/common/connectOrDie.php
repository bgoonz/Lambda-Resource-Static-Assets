<?php

function connectOrDie() {
	require_once( 'dbIDs.php' );

	$mysqli = new mysqli( $HOST, $USER, $PASS, $DB );
	if ( $mysqli->connect_errno ) {
		http_response_code( 500 );
		die( $mysqli->error );
	}
	return $mysqli;
}
