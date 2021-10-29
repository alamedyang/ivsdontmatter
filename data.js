var levelMap = {
	"1": 0.094,
	"2": 0.16639787,
	"3": 0.21573247,
	"4": 0.25572005,
	"5": 0.29024988,
	"6": 0.3210876,
	"7": 0.34921268,
	"8": 0.3752356,
	"9": 0.39956728,
	"10": 0.4225,
	"11": 0.44310755,
	"12": 0.4627984,
	"13": 0.48168495,
	"14": 0.49985844,
	"15": 0.51739395,
	"16": 0.5343543,
	"17": 0.5507927,
	"18": 0.5667545,
	"19": 0.5822789,
	"20": 0.5974,
	"21": 0.6121573,
	"22": 0.6265671,
	"23": 0.64065295,
	"24": 0.65443563,
	"25": 0.667934,
	"26": 0.6811649,
	"27": 0.69414365,
	"28": 0.7068842,
	"29": 0.7193991,
	"30": 0.7317,
	"31": 0.7377695,
	"32": 0.74378943,
	"33": 0.74976104,
	"34": 0.7556855,
	"35": 0.76156384,
	"36": 0.76739717,
	"37": 0.7731865,
	"38": 0.77893275,
	"39": 0.784637,
	"40": 0.7903,
	"41": 0.79530001,
	"42": 0.8003,
	"43": 0.8053,
	"44": 0.81029999,
	"45": 0.81529999,
	"46": 0.82029999,
	"47": 0.82529999,
	"48": 0.83029999,
	"49": 0.83529999,
	"50": 0.84029999,
	"51": 0.84529999,
	"1.5": 0.1351374318,
	"2.5": 0.192650919,
	"3.5": 0.2365726613,
	"4.5": 0.2735303812,
	"5.5": 0.3060573775,
	"6.5": 0.3354450362,
	"7.5": 0.3624577511,
	"8.5": 0.387592416,
	"9.5": 0.4111935514,
	"10.5": 0.4329264091,
	"11.5": 0.4530599591,
	"12.5": 0.472336093,
	"13.5": 0.4908558003,
	"14.5": 0.508701765,
	"15.5": 0.5259425113,
	"16.5": 0.5426357375,
	"17.5": 0.5588305862,
	"18.5": 0.5745691333,
	"19.5": 0.5898879072,
	"20.5": 0.6048236651,
	"21.5": 0.6194041216,
	"22.5": 0.6336491432,
	"23.5": 0.6475809666,
	"24.5": 0.6612192524,
	"25.5": 0.6745818959,
	"26.5": 0.6876849038,
	"27.5": 0.70054287,
	"28.5": 0.7131691091,
	"29.5": 0.7255756136,
	"30.5": 0.7347410093,
	"31.5": 0.7407855938,
	"32.5": 0.7467812109,
	"33.5": 0.7527290867,
	"34.5": 0.7586303683,
	"35.5": 0.7644860647,
	"36.5": 0.7702972656,
	"37.5": 0.7760649616,
	"38.5": 0.7817900548,
	"39.5": 0.7874736075,
	"40.5": 0.792803968,
	"41.5": 0.797800015,
	"42.5": 0.802799995,
	"43.5": 0.8078,
	"44.5": 0.812799985,
	"45.5": 0.81779999,
	"46.5": 0.82279999,
	"47.5": 0.82779999,
	"48.5": 0.83279999,
	"49.5": 0.83779999,
	"50.5": 0.84279999
};

var pokemonMapV2 = {
	'Gengar': {
		number: 94,
		forms: {
			'Normal': {
				types: [
					'Ghost',
					'Poison',
				],
				attack: 261,
				defense: 149,
				stamina: 155,
			},
			'Costume 2020': {
				types: [
					'Ghost',
					'Poison',
				],
				attack: 261,
				defense: 149,
				stamina: 155,
				assetBundleValue: 26,
				isCostume: true,
			},
		},
	},
	'Mr. Mime': {
		number: 122,
		forms: {
			'Normal': {
				types: [
					'Psychic',
					'Fairy',
				],
				attack: 192,
				defense: 205,
				stamina: 120,
			},
			'Galarian': {
				types: [
					'Ice',
					'Psychic',
				],
				attack: 183,
				defense: 169,
				stamina: 127,
				assetBundleValue: 31,
			},
		},
	},
	'Magikarp': {
		number: 129,
		forms: {
			'Normal': {
				types: [
					'Water',
				],
				attack: 29,
				defense: 85,
				stamina: 85,
			},
		},
	},
	'Snorlax': {
		number: 143,
		forms: {
			'Normal': {
				types: [
					'Normal',
				],
				attack: 190,
				defense: 169,
				stamina: 330,
			},
		},
	},
	'Dragonite': {
		number: 149,
		forms: {
			'Normal': {
				types: [
					'Dragon',
					'Flying',
				],
				attack: 209,
				defense: 263,
				stamina: 198,
			},
		},
	},
	'Mewtwo': {
		number: 150,
		forms: {
			'Normal': {
				types: [
					'Psychic',
				],
				attack: 300,
				defense: 182,
				stamina: 214,
			},
			'Armored': {
				types: [
					'Psychic',
				],
				attack: 182,
				defense: 278,
				stamina: 214,
				assetBundleSuffix: 'pm0150_00_pgo_a',
				isCostume: true,
			},
		},
	},
	'Blissey': {
		number: 242,
		forms: {
			'Normal': {
				types: [
					'Normal',
				],
				attack: 129,
				defense: 169,
				stamina: 496,
			},
		},
	},
	'Rayquaza': {
		number: 384,
		forms: {
			'Normal': {
				types: [
					'Dragon',
					'Flying',
				],
				attack: 284,
				defense: 170,
				stamina: 213,
			},
		},
	},
	'Deoxys': {
		number: 386,
		forms: {
			'Normal': {
				types: [
					'Psychic',
				],
				attack: 345,
				defense: 115,
				stamina: 137,
				assetBundleValue: 11,
			},
			'Attack': {
				types: [
					'Psychic',
				],
				attack: 414,
				defense: 46,
				stamina: 137,
				assetBundleValue: 12,
			},
			'Defense': {
				types: [
					'Psychic',
				],
				attack: 144,
				defense: 330,
				stamina: 137,
				assetBundleValue: 13,
			},
			'Speed': {
				types: [
					'Psychic',
				],
				attack: 230,
				defense: 218,
				stamina: 137,
				assetBundleValue: 14,
			},
		},
	},
	'Garchomp': {
		number: 445,
		forms: {
			'Normal': {
				types: [
					'Dragon',
					'Ground',
				],
				attack: 261,
				defense: 193,
				stamina: 239,
			},
		},
	},
}

var pokemonMap = {
	'Mewtwo': {
		number: 150,
		types: [
			'Psychic'
		],
		attack: 300,
		defense: 182,
		stamina: 214,
	},
	'Mewtwo (Armored)': {
		number: 150,
		types: [
			'Psychic'
		],
		attack: 182,
		defense: 278,
		stamina: 214,
	},
	'Rayquaza': {
		number: 384,
		types: [
			'Dragon',
			'Flying'
		],
		attack: 284,
		defense: 170,
		stamina: 213,
	},
	'Garchomp': {
		number: 445,
		types: [
			'Dragon',
			'Ground'
		],
		attack: 261,
		defense: 193,
		stamina: 239,
	},
	'Snorlax': {
		number: 143,
		types: [
			'Normal'
		],
		attack: 190,
		defense: 169,
		stamina: 330,
	},
	'Magikarp': {
		number: 129,
		types: [
			'Water'
		],
		attack: 29,
		defense: 85,
		stamina: 85,
	},
	'Gengar': {
		number: 94,
		types: [
			'Ghost',
			'Poison'
		],
		attack: 261,
		defense: 149,
		stamina: 155,
	},
	'Mr. Mime (Galarian)': {
		number: 122,
		types: [
			'Ice',
			'Psychic'
		],
		attack: 183,
		defense: 169,
		stamina: 127,
	},
	'Mr. Mime': {
		number: 122,
		types: [
			'Psychic',
			'Fairy'
		],
		attack: 192,
		defense: 205,
		stamina: 120,
	},
	'Blissey': {
		number: 242,
		types: [
			'Normal'
		],
		attack: 129,
		defense: 169,
		stamina: 496,
	},
	'Dragonite': {
		number: 149,
		types: [
			'Dragon',
			'Flying'
		],
		attack: 209,
		defense: 263,
		stamina: 198,
	},
};

var presetLevels = {
	"Shadow": 8,
	"Shadow (WB)": 13,
	"Research": 15,
	"Egg": 20,
	"Raid": 20,
	"Raid (WB)": 25,
	"Wild Max": 30,
	"Wild Max (WB)": 35,
	"Maxed": 40,
	"Maxed (XL)": 50,
};

var weatherBoostElements = {
	"Grass": "Clear",
	"Bug": "Rain",
	"Poison": "Cloudy",
	"Fire": "Clear",
	"Water": "Rain",
	"Ice": "Snow",
	"Electric": "Rain",
	"Fighting": "Cloudy",
	"Rock": "Partly Cloudy",
	"Ground": "Clear",
	"Psychic": "Windy",
	"Ghost": "Fog",
	"Normal": "Partly Cloudy",
	"Flying": "Windy",
	"Dragon": "Windy",
	"Dark": "Fog",
	"Steel": "Snow",
	"Fairy": "Cloudy",
};

var weatherIconIdMap = {
	"Clear": "clear-sun",
	"Clear (Night)": "clear-moon",
	"Windy": "wind",
	"Partly Cloudy": "partcloud-sun",
	"Partly Cloudy (Night)": "partcloud-moon",
	"Fog": "fog",
	"Cloudy": "cloud",
	"Snow": "snow",
	"Rain": "rain",
};

var starBreakPoints = [
	{
		'stars': 0,
		'lowSum': 0,
		'highSum': 22,
	},
	{
		'stars': 1,
		'lowSum': 23,
		'highSum': 29,
	},
	{
		'stars': 2,
		'lowSum': 30,
		'highSum': 36,
	},
	{
		'stars': 3,
		'lowSum': 37,
		'highSum': 44,
	},
	{
		'stars': 4,
		'lowSum': 45,
		'highSum': 45,
	}
];

