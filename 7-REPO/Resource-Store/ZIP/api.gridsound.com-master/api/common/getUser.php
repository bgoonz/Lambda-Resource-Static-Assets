<?php

function getUser( &$mysqli, $idType, $id, $full = false ) {
	$fields = '`id`, `email`, `emailpublic`, `emailchecked`, `firstname`, `lastname`, `username`, `avatar`';
	if ( $full ) {
		$fields .= ', `pass`';
	}
	$id = $mysqli->real_escape_string( $id );
	$idType = $mysqli->real_escape_string( $idType );
	$cond = $idType === 'usernameEmail'
		? "`username` = '$id' OR `email` = '$id'"
		: "`$idType` = '$id'";
	$res = $mysqli->query( "SELECT $fields FROM `users` WHERE $cond" );
	$user = null;
	if ( $res ) {
		if ( $res->num_rows < 1 ) {
			$user = false;
		} else {
			$user = $res->fetch_object();
			if ( !$full ) {
				if ( $user->emailpublic === '0' || $user->emailchecked === '0' ) {
					unset( $user->email );
				}
				unset( $user->emailpublic );
				unset( $user->emailchecked );
			}
		}
		$res->free();
	}
	return $user;
}
