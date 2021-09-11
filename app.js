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
		statBarGridOn: {
			type: Boolean,
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
		},
		currentStat: function () {
			var raw_current_stat =
				(this.basePokemon[this.statName] +
				this.pokemon.ivs[this.statName]) *
				lookupCPMFromLevel(this.pokemon.level);
			if (this.statName === "stamina") {
				var result = Math.floor(raw_current_stat);
			}
			else{
				var result = raw_current_stat;
			};
			return result;
		},
		currentStatPlusShadow: function () {
			var result = this.currentStat;
			if (this.statName === "attack" && this.pokemon.shadow === true) {
				var result = (this.currentStat * 1.2);
			};
			if (this.statName === "defense" && this.pokemon.shadow === true) {
				var result = (this.currentStat * (5/6) );
			};
			return result;
		},
		currentStatDisplay: function () {
			var result = this.currentStatPlusShadow.toFixed(1);
			if (this.statName === "stamina") {
				var result = this.currentStatPlusShadow.toFixed(0);
			};
			return result;
		},
		overlapOrMainPinkClasses: function () {
			var attack_bonus = this.statName === 'attack' && this.pokemon.shadow;
			var defense_bonus = this.statName === 'defense' && this.pokemon.shadow;
			return {
				stats_iv_max_overlap: attack_bonus,
				stats_iv_max_ghost: defense_bonus,
				stats_iv_max_main: !attack_bonus && !defense_bonus
			};
		},
		overlapOrMainRedClasses: function () {
			var attack_bonus = this.statName === 'attack' && this.pokemon.shadow;
			var defense_bonus = this.statName === 'defense' && this.pokemon.shadow;
			return {
				stats_iv_overlap: attack_bonus,
				stats_iv_ghost: defense_bonus,
				stats_iv_main: !attack_bonus && !defense_bonus
			};
		},
		overlapOrMainBlueClasses: function () {
			var attack_bonus = this.statName === 'attack' && this.pokemon.shadow;
			var defense_bonus = this.statName === 'defense' && this.pokemon.shadow;
			return {
				stats_base_overlap: attack_bonus,
				stats_base_ghost: defense_bonus,
				stats_base_main: !attack_bonus && !defense_bonus
			};
		}
	},
	template: '#stat-bar',
});

var app = new Vue({
	el: '#stat-explorer',
	data:{
		level: 20,
		pokemonMap,
		isWeatherBoosted: false,
		statBarGridOn: false,
		pokemonList: [
			{
				name: 'Mewtwo',
				level: 20,
				ivs: {
					attack: 10,
					defense: 10,
					stamina: 10,
				},
				expanded: false,
				shadow: false,
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
			// console.log({
			// 	basePokemon,
			// 	cpm,
			// 	attack,
			// 	defense,
			// 	stamina
			// });
			return Math.floor(Math.max(
				((attack * Math.sqrt(defense) * Math.sqrt(stamina) * Math.pow(cpm, 2))/10),
				10
			));
		}
	},
});