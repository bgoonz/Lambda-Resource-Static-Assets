{
	"id": "ec5850d9-9dcb-45cc-afd6-ccb2b0c5dfad",
	"bpm": 120,
	"stepsPerBeat": 4,
	"beatsPerMeasure": 4,
	"name": "FireStone",
	"duration": 152,
	"patterns": {
		"i1c": { "name": "pat-2", "type": "keys", "keys": "i1b", "synth": "i0", "duration": 32, "order": 0 },
		"i20": { "name": "pat", "type": "keys", "keys": "i1f", "synth": "i19", "duration": 8, "order": 1 },
		"i24": { "name": "pat-3", "type": "keys", "keys": "i23", "synth": "i19", "duration": 4, "order": 2 },
		"i2e": { "name": "pat-4", "type": "keys", "keys": "i2d", "synth": "i27", "duration": 32, "order": 3 },
		"i34": { "name": "pat-5", "type": "keys", "keys": "i33", "synth": "i2f", "duration": 4, "order": 4 },
		"i36": { "name": "pat-6", "type": "keys", "keys": "i35", "synth": "i2f", "duration": 16, "order": 5 }
	},
	"synths": {
		"i0": {
			"name": "Chords",
			"oscillators": {
				"i18": { "order": 0, "type": "brass2", "detune": 0, "pan": -0.42, "gain": 0.34 },
				"i19": { "type": "bass4", "gain": 0.31, "pan": 0.42, "detune": 0, "order": 1 },
				"i1a": { "type": "bass", "gain": 0.35, "pan": 0, "detune": 0, "order": 2 }
			},
			"dest": "2",
			"lfo": {
				"toggle": false,
				"type": "sine",
				"delay": 0,
				"attack": 1,
				"speed": 1,
				"amp": 1
			}
		},
		"i19": {
			"name": "Arp",
			"oscillators": {
				"i1b": { "type": "triangle", "gain": 0.12, "pan": 0, "detune": 24, "order": 1 },
				"i1c": { "type": "square", "gain": 0.15, "pan": 0, "detune": 0, "order": 2 },
				"i1d": { "type": "sine", "gain": 0.16, "pan": 0, "detune": 0, "order": 3 }
			},
			"dest": "1",
			"lfo": {
				"toggle": false,
				"type": "sine",
				"delay": 0,
				"attack": 1,
				"speed": 1,
				"amp": 1
			}
		},
		"i27": {
			"name": "sub",
			"oscillators": {
				"i28": { "order": 0, "type": "sine", "detune": 0, "pan": -0.28, "gain": 1 },
				"i29": { "type": "sine", "gain": 1, "pan": 0.28, "detune": 0, "order": 1 },
				"i2a": { "type": "sine", "gain": 1, "pan": 0, "detune": 0, "order": 2 }
			},
			"dest": "3",
			"lfo": {
				"toggle": false,
				"type": "sine",
				"delay": 0,
				"attack": 1,
				"speed": 1,
				"amp": 1
			}
		},
		"i2f": {
			"name": "bell Organ",
			"oscillators": {
				"i30": { "order": 0, "type": "organ3", "detune": 0, "pan": 0, "gain": 0.9 },
				"i31": { "type": "organ3", "gain": 0.71, "pan": 0, "detune": 24, "order": 1 }
			},
			"dest": "4",
			"lfo": {
				"toggle": false,
				"type": "sine",
				"delay": 0,
				"attack": 1,
				"speed": 1,
				"amp": 1
			}
		}
	},
	"tracks": {
		"i3": { "order": 0 },
		"i4": { "order": 1 },
		"i5": { "order": 2 },
		"i6": { "order": 3 },
		"i7": { "order": 4 },
		"i8": { "order": 5 },
		"i9": { "order": 6 },
		"ia": { "order": 7 },
		"ib": { "order": 8 },
		"ic": { "order": 9 },
		"id": { "order": 10 },
		"ie": { "order": 11 },
		"if": { "order": 12 },
		"i10": { "order": 13 },
		"i11": { "order": 14 },
		"i12": { "order": 15 },
		"i13": { "order": 16 },
		"i14": { "order": 17 },
		"i15": { "order": 18 },
		"i16": { "order": 19 },
		"i17": { "order": 20 }
	},
	"blocks": {
		"0": { "pattern": "i1c", "duration": 32, "when": 0, "track": "i3" },
		"1": { "when": 32, "track": "i3", "pattern": "i1c", "duration": 32 },
		"2": { "when": 32, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"3": { "when": 40, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"4": { "when": 48, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"5": { "when": 56, "track": "i4", "pattern": "i24", "duration": 4 },
		"6": { "when": 60, "track": "i4", "pattern": "i24", "duration": 4 },
		"7": { "when": 64, "track": "i3", "pattern": "i1c", "duration": 32 },
		"8": { "when": 64, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"9": { "pattern": "i2e", "duration": 32, "when": 64, "track": "i5" },
		"10": { "pattern": "i34", "duration": 4, "when": 64, "track": "i6" },
		"11": { "when": 68, "track": "i6", "pattern": "i34", "duration": 4 },
		"12": { "when": 72, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"13": { "when": 72, "track": "i6", "pattern": "i34", "duration": 4 },
		"14": { "when": 76, "track": "i6", "pattern": "i34", "duration": 4 },
		"15": { "when": 80, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"16": { "when": 80, "track": "i6", "pattern": "i34", "duration": 4 },
		"17": { "when": 84, "track": "i6", "pattern": "i34", "duration": 4 },
		"18": { "when": 88, "track": "i4", "pattern": "i24", "duration": 4 },
		"19": { "when": 88, "track": "i6", "pattern": "i34", "duration": 4 },
		"20": { "when": 92, "track": "i4", "pattern": "i24", "duration": 4 },
		"21": { "when": 92, "track": "i6", "pattern": "i34", "duration": 4 },
		"22": { "when": 96, "track": "i3", "pattern": "i1c", "duration": 24, "durationEdited": true },
		"23": { "when": 96, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"24": { "when": 96, "track": "i5", "pattern": "i2e", "duration": 24, "durationEdited": true },
		"25": { "pattern": "i36", "duration": 16, "when": 96, "track": "i7" },
		"26": { "when": 104, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"27": { "when": 112, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"28": { "when": 112, "track": "i7", "pattern": "i36", "duration": 8, "durationEdited": true },
		"29": { "when": 120, "track": "i3", "pattern": "i1c", "duration": 4, "durationEdited": true },
		"30": { "when": 120, "track": "i5", "pattern": "i2e", "duration": 4, "durationEdited": true },
		"31": { "when": 120, "track": "i4", "pattern": "i20", "duration": 8, "durationEdited": true },
		"32": { "when": 120, "track": "i7", "pattern": "i36", "duration": 8, "durationEdited": true },
		"33": { "when": 124, "track": "i3", "offset": 24, "pattern": "i1c", "duration": 8, "durationEdited": true },
		"34": { "when": 124, "track": "i5", "offset": 24, "pattern": "i2e", "duration": 4, "durationEdited": true },
		"35": { "when": 128, "track": "i4", "pattern": "i20", "duration": 4, "durationEdited": true },
		"36": { "when": 132, "track": "i3", "offset": 24, "pattern": "i1c", "duration": 8, "durationEdited": true },
		"37": { "when": 140, "track": "i3", "pattern": "i1c", "duration": 8, "durationEdited": true },
		"38": { "when": 140, "track": "i5", "pattern": "i2e", "duration": 8, "durationEdited": true },
		"39": { "pattern": "i34", "duration": 1, "durationEdited": true, "when": 151, "track": "i4" }
	},
	"keys": {
		"i1b": {
			"0": { "key": 36, "pan": 0, "gain": 0.8, "duration": 8, "when": 0, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 39, "pan": 0, "gain": 0.8, "duration": 8, "when": 0, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"2": { "key": 43, "pan": 0, "gain": 0.8, "duration": 8, "when": 0, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 41, "when": 8, "duration": 8, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 44, "pan": 0, "gain": 0.8, "duration": 8, "when": 8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 36, "pan": 0, "gain": 0.8, "duration": 8, "when": 8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"6": { "key": 36, "when": 16, "duration": 8, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"7": { "key": 39, "when": 16, "duration": 8, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"8": { "key": 43, "when": 16, "duration": 8, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"9": { "key": 38, "pan": 0, "gain": 0.8, "duration": 8, "when": 24, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"10": { "key": 42, "pan": 0, "gain": 0.8, "duration": 8, "when": 24, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"11": { "key": 33, "pan": 0, "gain": 0.8, "duration": 8, "when": 24, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i1f": {
			"0": { "key": 55, "when": 0, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 51, "when": 0.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"2": { "key": 48, "when": 1, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 55, "pan": 0, "gain": 0.8, "duration": 0.5, "when": 2, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 51, "pan": 0, "gain": 0.8, "duration": 0.5, "when": 2.5, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 48, "pan": 0, "gain": 0.8, "duration": 0.5, "when": 3, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"6": { "key": 55, "when": 4, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"7": { "key": 51, "when": 4.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"8": { "key": 48, "when": 5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"9": { "key": 55, "when": 6, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"10": { "key": 51, "when": 6.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"11": { "key": 48, "when": 7, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i23": {
			"0": { "key": 53, "pan": 0, "gain": 0.8, "duration": 0.5, "when": 0, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 50, "pan": 0, "gain": 0.8, "duration": 0.5, "when": 0.5, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"2": { "key": 47, "pan": 0, "gain": 0.8, "duration": 0.5, "when": 1, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 53, "when": 2, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 50, "when": 2.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 47, "when": 3, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i2d": {
			"1": { "key": 24, "pan": 0, "gain": 0.8, "duration": 8, "when": 0, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"2": { "key": 29, "pan": 0, "gain": 0.8, "duration": 8, "when": 8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 27, "pan": 0, "gain": 0.8, "duration": 8, "when": 16, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 26, "pan": 0, "gain": 0.8, "duration": 8, "when": 24, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i33": {
			"2": { "key": 36, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 39, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.25, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 38, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.5, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 39, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.75, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"6": { "key": 38, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"7": { "key": 39, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.25, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"8": { "key": 38, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.5, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"9": { "key": 39, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.75, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"10": { "key": 36, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 3, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i35": {
			"2": { "key": 39, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 43, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.25, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 41, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.5, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 43, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 1.75, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"6": { "key": 41, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"7": { "key": 43, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.25, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"8": { "key": 41, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.5, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"9": { "key": 43, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 2.75, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"10": { "key": 39, "pan": 0, "gain": 0.8, "duration": 0.25, "when": 3, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"11": { "key": 39, "when": 5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"12": { "key": 43, "when": 5.25, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"13": { "key": 41, "when": 5.5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"14": { "key": 43, "when": 5.75, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"15": { "key": 41, "when": 6, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"16": { "key": 43, "when": 6.25, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"17": { "key": 41, "when": 6.5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"18": { "key": 43, "when": 6.75, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"19": { "key": 39, "when": 7, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"20": { "key": 41, "when": 9, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"21": { "key": 44, "when": 9.25, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"22": { "key": 43, "when": 9.5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"23": { "key": 44, "when": 9.75, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"24": { "key": 43, "when": 10, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"25": { "key": 44, "when": 10.25, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"26": { "key": 43, "when": 10.5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"27": { "key": 44, "when": 10.75, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"28": { "key": 41, "when": 11, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"29": { "key": 41, "when": 13, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"30": { "key": 44, "when": 13.25, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"31": { "key": 43, "when": 13.5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"32": { "key": 44, "when": 13.75, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"33": { "key": 43, "when": 14, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"34": { "key": 44, "when": 14.25, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"35": { "key": 43, "when": 14.5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"36": { "key": 44, "when": 14.75, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"37": { "key": 41, "when": 15, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		}
	},
	"synthOpened": "i2f",
	"savedAt": 1576465534,
	"loopB": 128,
	"loopA": 64,
	"patternKeysOpened": "i34",
	"patternBufferOpened": null,
	"buffers": {},
	"channels": {
		"1": { "order": 0, "toggle": true, "name": "arp", "gain": 0.5, "pan": 0, "dest": "main" },
		"2": { "order": 1, "toggle": true, "name": "chords", "gain": 0.423, "pan": 0, "dest": "main" },
		"3": { "order": 2, "toggle": true, "name": "sub", "gain": 0.269, "pan": 0, "dest": "main" },
		"4": { "order": 3, "toggle": true, "name": "bell organ", "gain": 0.48, "pan": 0, "dest": "main" },
		"main": { "toggle": true, "name": "main", "gain": 0.457, "pan": 0 }
	},
	"effects": {}
}
