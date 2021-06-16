<?php

function addThingToVerify( &$mysqli, $iduser, $data ) {
	$code = bin2hex( random_bytes( 3 ) );
	$res = $mysqli->query( "UPDATE `thingsNotVerified` SET
		`code` = '$code',
		`expire` = NOW() + INTERVAL 3 DAY
		WHERE `data` = '$data'
	" );
	if ( $res && $mysqli->affected_rows > 0 ) {
		return $code;
	}
	$res = $mysqli->query( "INSERT INTO `thingsNotVerified`(
		`iduser`,  `data`,  `code`, `expire` ) VALUES (
		'$iduser', '$data', '$code', NOW() + INTERVAL 3 DAY )" );
	return $res ? $code : null;
}
