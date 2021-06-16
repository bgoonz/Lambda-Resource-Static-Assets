<?php

function getComposition( &$mysqli, $idcmp ) {
	$cmp = null;
	$res = $mysqli->query( "SELECT `id`, `iduser`, `public`, `data` FROM `compositions` WHERE `id` = '$idcmp'" );
	if ( $res ) {
		$cmp = $res->fetch_object() ?? false;
		$res->free();
	}
	return $cmp;
}
