{
	"id": "15815873-e1cf-49bb-a57e-b3cbf3cab4d6",
	"bpm": 120,
	"stepsPerBeat": 4,
	"beatsPerMeasure": 4,
	"name": "/u/Isvara - test",
	"duration": 48,
	"patterns": {
		"i1": { "name": "Bass", "type": "keys", "keys": "i2", "synth": "i0", "duration": 4, "order": 0 },
		"i2b": { "name": "chords", "type": "keys", "keys": "i2a", "synth": "i28", "duration": 8, "order": 1 },
		"i3a": { "name": "synth1", "type": "keys", "keys": "i39", "synth": "i37", "duration": 8, "order": 2 },
		"i63": { "name": "kick1", "type": "keys", "keys": "i62", "synth": "i60", "duration": 4, "order": 3 },
		"i6b": { "name": "kick2", "type": "keys", "keys": "i6a", "synth": "i60", "duration": 4, "order": 4 },
		"i82": { "name": "synth2", "type": "keys", "keys": "i81", "synth": "i37", "duration": 16, "order": 5 }
	},
	"synths": {
		"i0": {
			"name": "rythme",
			"oscillators": {
				"i18": { "order": 0, "type": "sine", "detune": -24, "pan": 0, "gain": 0.38 },
				"i19": { "order": 1, "type": "triangle", "detune": -12, "pan": -0.2, "gain": 0.75 },
				"i1a": { "order": 2, "type": "square", "detune": 12, "pan": 0.2, "gain": 0.33 }
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
		"i28": {
			"name": "chords",
			"oscillators": {
				"i29": { "order": 0, "type": "sine", "detune": 0, "pan": 0, "gain": 0.43 },
				"ia0": { "order": 1, "type": "sawtooth", "detune": 0, "gain": 0.28, "pan": 0 }
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
		"i37": {
			"name": "synth",
			"oscillators": {
				"i38": { "order": 0, "type": "sine", "detune": 0, "pan": 0, "gain": 1 }
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
		},
		"i60": {
			"name": "kick",
			"oscillators": {
				"i61": { "order": 0, "type": "square", "detune": 0, "pan": 0, "gain": 0.39 },
				"ia1": { "order": 1, "type": "square", "detune": 0, "gain": 0.39, "pan": -1 },
				"ia2": { "order": 2, "type": "square", "detune": 0, "gain": 0.39, "pan": 1 }
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
		"0": { "pattern": "i2b", "track": "i3", "when": 0, "duration": 8 },
		"1": { "pattern": "i1", "track": "i4", "when": 4, "duration": 4 },
		"2": { "pattern": "i2b", "track": "i3", "when": 8, "duration": 8 },
		"3": { "pattern": "i1", "track": "i4", "when": 12, "duration": 4 },
		"4": { "pattern": "i2b", "track": "i3", "when": 16, "duration": 8 },
		"5": { "pattern": "i63", "track": "i6", "when": 16, "duration": 4 },
		"6": { "pattern": "i3a", "track": "i5", "when": 16, "duration": 8 },
		"7": { "pattern": "i1", "track": "i4", "when": 16, "duration": 4 },
		"8": { "pattern": "i6b", "track": "i6", "when": 20, "duration": 4 },
		"9": { "pattern": "i1", "track": "i4", "when": 20, "duration": 4 },
		"10": { "pattern": "i3a", "track": "i5", "when": 24, "duration": 8 },
		"11": { "pattern": "i2b", "track": "i3", "when": 24, "duration": 8 },
		"12": { "pattern": "i63", "track": "i6", "when": 24, "duration": 4 },
		"13": { "pattern": "i1", "track": "i4", "when": 24, "duration": 4 },
		"14": { "pattern": "i1", "track": "i4", "when": 28, "duration": 4 },
		"15": { "pattern": "i6b", "track": "i6", "when": 28, "duration": 4 },
		"16": { "pattern": "i2b", "track": "i3", "when": 32, "duration": 8 },
		"17": { "pattern": "i63", "track": "i6", "when": 32, "duration": 4 },
		"18": { "pattern": "i1", "track": "i4", "when": 32, "duration": 4 },
		"19": { "pattern": "i82", "track": "i7", "when": 32, "duration": 16 },
		"20": { "pattern": "i3a", "track": "i5", "when": 32, "duration": 8 },
		"21": { "pattern": "i6b", "track": "i6", "when": 36, "duration": 4 },
		"22": { "pattern": "i1", "track": "i4", "when": 36, "duration": 4 },
		"23": { "pattern": "i1", "track": "i4", "when": 40, "duration": 4 },
		"24": { "pattern": "i3a", "track": "i5", "when": 40, "duration": 8 },
		"25": { "pattern": "i2b", "track": "i3", "when": 40, "duration": 8 },
		"26": { "pattern": "i63", "track": "i6", "when": 40, "duration": 4 },
		"27": { "pattern": "i1", "track": "i4", "when": 44, "duration": 4 },
		"28": { "pattern": "i6b", "track": "i6", "when": 44, "duration": 4 }
	},
	"keys": {
		"i2": {
			"0": { "key": 45, "when": 0, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 45, "when": 1, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"2": { "key": 33, "when": 1.5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 45, "when": 2, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 45, "when": 2.75, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 45, "when": 3.25, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"6": { "key": 33, "when": 3.5, "duration": 0.25, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i2a": {
			"0": { "key": 41, "when": 0, "duration": 2, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 45, "when": 0, "duration": 2, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"2": { "key": 48, "when": 0, "duration": 2, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 43, "when": 2, "duration": 2, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 47, "when": 2, "duration": 2, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 50, "when": 2, "duration": 2, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"6": { "key": 45, "when": 4, "duration": 4, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"7": { "key": 48, "when": 4, "duration": 4, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"8": { "key": 52, "when": 4, "duration": 4, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i39": {
			"0": { "key": 53, "when": 0, "duration": 1, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 60, "when": 1, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"2": { "key": 57, "when": 1.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 55, "when": 2, "duration": 1, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 59, "when": 3, "duration": 1, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 60, "when": 4, "duration": 1, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"6": { "key": 64, "when": 5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"7": { "key": 60, "when": 5.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"8": { "key": 57, "when": 6, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"9": { "key": 57, "when": 7, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i62": {
			"0": { "key": 17, "when": 0, "duration": 0.46875, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 17, "when": 0.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i6a": {
			"0": { "key": 21, "when": 0, "duration": 0.46875, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 21, "when": 0.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		},
		"i81": {
			"0": { "key": 72, "when": 0, "duration": 1, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"1": { "key": 72, "when": 1, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"2": { "key": 71, "when": 1.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"3": { "key": 72, "when": 2, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"4": { "key": 71, "when": 2.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"5": { "key": 71, "when": 3.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"6": { "key": 72, "when": 4, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"7": { "key": 76, "when": 4.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"8": { "key": 69, "when": 5.5, "duration": 1, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"9": { "key": 72, "when": 8, "duration": 1, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"10": { "key": 76, "when": 8, "duration": 1, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"11": { "key": 76, "when": 9, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"12": { "key": 72, "when": 9, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"13": { "key": 71, "when": 9.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"14": { "key": 74, "when": 9.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"15": { "key": 72, "when": 10, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"16": { "key": 76, "when": 10, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"17": { "key": 71, "when": 10.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"18": { "key": 79, "when": 10.5, "duration": 0.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"19": { "key": 76, "when": 11.5, "duration": 1.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 },
			"20": { "key": 69, "when": 11.5, "duration": 1.5, "pan": 0, "gain": 0.8, "attack": 0, "release": 0, "lowpass": 1, "highpass": 1 }
		}
	},
	"synthOpened": "i60",
	"savedAt": 1576464371,
	"loopA": 32,
	"loopB": 48,
	"patternKeysOpened": "i6b",
	"patternBufferOpened": null,
	"buffers": {},
	"channels": {
		"1": { "order": 2, "toggle": true, "name": "kick", "gain": 0.25, "pan": 0, "dest": "main" },
		"2": { "order": 1, "toggle": true, "name": "chords", "gain": 0.423, "pan": 0, "dest": "main" },
		"3": { "order": 3, "toggle": true, "name": "rythme", "gain": 0.404, "pan": 0, "dest": "main" },
		"4": { "order": 0, "toggle": true, "name": "synth", "gain": 0.404, "pan": 0, "dest": "main" },
		"main": { "toggle": true, "name": "main", "gain": 0.401, "pan": 0 }
	},
	"effects": {
		"0": {
			"dest": "1",
			"type": "filter",
			"toggle": true,
			"order": 0,
			"data": {
				"type": "lowpass",
				"Q": 0.001,
				"gain": -20,
				"detune": 0,
				"frequency": 10024.528668061948
			}
		}
	}
}
