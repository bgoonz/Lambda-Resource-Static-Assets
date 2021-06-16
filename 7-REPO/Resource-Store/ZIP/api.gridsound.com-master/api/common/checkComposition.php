<?php

function validateComposition( $comp, $verbose = false ) {
	if ( !isset( $comp )) {
		$verbose && print "composition is missing in parameters";
		return 0;
	}

	/*
		 Composition definition
				Root keys
	*/
	$rootKeys = [
		"id",
		"name",
		"savedAt",
		"bpm",
		"stepsPerBeat",
		"beatsPerMeasure",
		"channels",
		"buffers",
		"patterns",
		"tracks",
		"blocks",
		"synths",
		"effects",
		"keys"
	];
	/*
				Deep keys
	*/
	$channelKeys = ["order", "toggle", "name", "pan", "gain"];
	$channelOptionalKeys = ["dest"];
	$bufferKeys = ["size", "duration", "name"];
	$patternKeys = ["type", "name", "duration"];
	$patternOptionalKeys = ["buffer", "synth", "keys"];
	$trackKeys = ["order", "name", "toggle"];
	$blockKeys = ["pattern", "track", "when", "offset", "duration"];
	$synthKeys = ["name", "oscillators"];
	$oscillatorKeys = ["gain", "pan", "detune", "type"];
	$effectKeys = ["toggle", "name", "gain", "data"];
	$keyKeys = ["when", "duration", "gain", "pan", "key"];
	$keyOptionalKeys = ["selected", "next", "prev"];

	// Checking if all mandatory keys are defined
	foreach ($rootKeys as $key) {
		if ( !isset( $comp[$key] ) ) {
			$verbose && print "$key is missing in the composition definition";
			return 0;
		}
	}
	// Checking if no extra keys have been added.
	foreach ($comp as $key => $val) {
		if ( !in_array( $key, $rootKeys )) {
			$verbose && print "$key is not an allowed key in the composition definition";
			return 0;
		}
	}

	// Verifying effects structure
	foreach ($comp["effects"] as $effect) {
		// Not allowed keys
		foreach ($effect as $key => $val) {
			if ( !in_array( $key, $effectKeys ) ) {
				$verbose && print "$key is not an allowed key in the effects definition";
				return 0;
			}
		}
		// Mandatory keys
		foreach ($effectKeys as $key) {
			if ( !isset( $effect[$key] ) ) {
				$verbose && print "$key is missing in a effect definition";
				return 0;
			}
		}
	}

	// Verifying channels structure
	foreach ($comp["channels"] as $channel) {
		// Not allowed keys
		foreach($channel as $key => $val) {
			if ( !in_array( $key, $channelKeys ) && !in_array( $key, $channelOptionalKeys )) {
				$verbose && print "$key is not an allowed key in the channels definition";
				return 0;
			}
		}
		// Mandatory keys
		foreach ($channelKeys as $key) {
			if ( !isset( $channel[$key] ) ) {
				$verbose && print "$key is missing in a channel definition";
				return 0;
			}
		}
	}

	// Verifying buffers structure
	foreach ($comp["buffers"] as $buffer) {
		// Not allowed keys
		foreach($buffer as $key => $val) {
			if ( !in_array( $key, $bufferKeys )) {
				$verbose && print "$key is not an allowed key in the buffers definition";
				return 0;
			}
		}
		// Mandatory keys
		foreach ($bufferKeys as $key) {
			if ( !isset( $buffer[$key] ) ) {
				$verbose && print "$key is missing in a buffer definition";
				return 0;
			}
		}
	}

	// Verifying patterns structure
	foreach ($comp["patterns"] as $pattern) {
		// Not allowed keys
		foreach($pattern as $key => $val) {
			if ( !in_array( $key, $patternKeys ) && !in_array( $key, $patternOptionalKeys )) {
				$verbose && print "$key is not an allowed key in the patterns definition";
				return 0;
			}
		}
		// Mandatory keys
		foreach ($patternKeys as $key) {
			if ( !isset( $pattern[$key] ) ) {
				$verbose && print "$key is missing in a pattern definition";
				return 0;
			}
		}
	}

	// Verifying tracks structure
	foreach ($comp["tracks"] as $track) {
		// Not allowed keys
		foreach($track as $key => $val) {
			if ( !in_array( $key, $trackKeys ) ) {
				$verbose && print "$key is not an allowed key in the tracks definition";
				return 0;
			}
		}
		// Mandatory keys
		foreach ($trackKeys as $key) {
			if ( !isset( $track[$key] ) ) {
				$verbose && print "$key is missing in a track definition";
				return 0;
			}
		}
	}

	// Verifying blocks structure
	foreach ($comp["blocks"] as $block) {
		// Not allowed keys
		foreach($block as $key => $val) {
			if ( !in_array( $key, $blockKeys ) ) {
				$verbose && print "$key is not an allowed key in the blocks definition";
				return 0;
			}
		}
		// Mandatory keys
		foreach ($blockKeys as $key) {
			if ( !isset( $block[$key] ) ) {
				$verbose && print "$key is missing in a block definition";
				return 0;
			}
		}
	}

	// Verifying synths structure
	foreach ($comp["synths"] as $synth) {
		// Not allowed keys
		foreach($synth as $key => $val) {
			if ( !in_array( $key, $synthKeys ) ) {
				$verbose && print "$key is not an allowed key in the synths definition";
				return 0;
			}
		}
		// Mandatory keys
		foreach ($synthKeys as $key) {
			if ( !isset( $synth[$key] ) ) {
				$verbose && print "$key is missing in a synth definition";
				return 0;
			}
		}

		// Verifying oscillators
		foreach ($synth['oscillators'] as $oscillator) {
			// Not allowed keys
			foreach($oscillator as $key => $val) {
				if ( !in_array( $key, $oscillatorKeys ) ) {
					$verbose && print "$key is not an allowed key in the oscillators definition";
					return 0;
				}
			}
			// Mandatory keys
			foreach ($oscillatorKeys as $key) {
				if ( !isset( $oscillator[$key] ) ) {
					$verbose && print "$key is missing in a oscillator definition";
					return 0;
				}
			}
		}
	}

	// Verifying keys structure
	foreach ($comp["keys"] as $keys) {
		foreach($keys as $keyStructure) {
			// Not allowed keys
			foreach($keyStructure as $key => $val) {
				if ( !in_array( $key, $keyKeys ) && !in_array( $key, $keyOptionalKeys ) ) {
					$verbose && print "$key is not an allowed key in the keys definition";
					return 0;
				}
			}
			// Mandatory keys
			foreach ($keyKeys as $key) {
				if ( !isset( $keyStructure[$key] ) ) {
					$verbose && print "$key is missing in a key definition";
					return 0;
				}
			}
		}
	}

	$keyKeys = ["when", "duration", "gain", "pan", "key"];
	$keyOptionalKeys = ["selected", "next", "prev"];

	$verbose && print "Composition is valid";
	return 1;
}
