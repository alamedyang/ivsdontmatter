var getBasePokemon = function (pokemon) {
	return pokemonMap[pokemon.name];
};
var lookupCPMFromLevel = function (level) {
	return levelMap[level] || levelMap["1"];
};

Vue.component('stat-bar', {
	props: {
		label: {
			type: String,
			required: true,
		},
		statName: {
			type: String,
			required: true,
		},
		pokemon: {
			type: Object,
			required: true,
		},
	},
	computed: {
		scale: function () {
			return (496 + 15) * 0.85;
		},
		ivBarHeight: function () {
			return 10;
		},
		iv: function () {
			return this.pokemon.ivs[this.statName];
		},
		basePokemon: function () {
			return getBasePokemon(this.pokemon);
		},
		baseStat: function () {
			return this.basePokemon[this.statName];
		},
		cpm: function () {
			return lookupCPMFromLevel(this.pokemon.level);
		}
	},
	template: '#stat-bar',
});

var app = new Vue({
	el: '#stat-explorer',
	data:{
		level: 20,
		pokemonMap,
		pokemonList: [
			{
				name: 'Mewtwo',
				level: 20,
				ivs: {
					attack: 10,
					defense: 10,
					stamina: 10,
				},
				expanded: true,
				shadow: true,
			},
			{
				name: 'Gengar',
				level: 20,
				ivs: {
					attack: 10,
					defense: 15,
					stamina: 13,
				},
				expanded: false,
				shadow: false,
			},
			{
				name: 'Magikarp',
				level: 20,
				ivs: {
					attack: 6,
					defense: 3,
					stamina: 15,
				},
				expanded: false,
				shadow: false,
			},
			{
				name: 'Blissey',
				level: 20,
				ivs: {
					attack: 12,
					defense: 10,
					stamina: 13,
				},
				expanded: false,
				shadow: false,
			},
		],
		isWeatherBoosted: false,
	},
	computed: {
		presetLevels: function () {
			return this.isWeatherBoosted
				? presetLevelsWB
				: presetLevels;
		}
	},
	methods: {
		addPokemon: function () {
			this.pokemonList.push({
				name: 'Blissey',
				level: 20,
				ivs: {
					attack: 12,
					defense: 10,
					stamina: 13,
				},
				expanded: false,
				shadow: false,
			});
		},
		removePokemon: function (index) {
			this.pokemonList.splice(index, 1);
		},
		lookupCPMFromLevel,
		calculateCP: function (pokemon) {
			var basePokemon = getBasePokemon(pokemon);
			var ivs = pokemon.ivs;
			var cpm = lookupCPMFromLevel(pokemon.level);
			var attack = basePokemon.attack + ivs.attack;
			var defense = basePokemon.defense + ivs.defense;
			var stamina = basePokemon.stamina + ivs.stamina;
			console.log({
				basePokemon,
				cpm,
				attack,
				defense,
				stamina
			});
			return Math.floor(Math.max(
				((attack * Math.sqrt(defense) * Math.sqrt(stamina) * Math.pow(cpm, 2))/10),
				10
			));
		}
	},
});