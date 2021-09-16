var getBasePokemon = function (pokemon) {
	return pokemonMap[pokemon.name];
};
var getPokemonLevel = function (pokemon) {
	var level = pokemon.level;
	if (pokemon.buddy) {
		level +=1
	};
	return level;
};
var lookupCPMFromLevel = function (level) {
	return levelMap[level] || levelMap["1"];
};

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
				expanded: true,
				shadow: false,
				buddy: false,
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
				buddy: false,
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
				buddy: false,
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
				buddy: false,
			},
		],
	},
	computed: {
		presetLevels: function () {
			return this.isWeatherBoosted
				? presetLevelsWB
				: presetLevels;
		},
	},
	methods: {
		clickWeatherBoostButton: function (mouseDownEvent) {
			mouseDownEvent.preventDefault();
			this.isWeatherBoosted = !this.isWeatherBoosted;
		},
		clickShadowButton: function (clicky, pokemon) {
			clicky.preventDefault();
			pokemon.shadow = !pokemon.shadow;
		},
		clickBuddyButton: function (clicky, pokemon) {
			pokemon.buddy = !pokemon.buddy;
			clicky.preventDefault();
		},
		setPokemonLevelFromEncounterType: function (encounterContext, poke) {
			levelFinalContextLookup =
				this.presetLevels[encounterContext] ||
				this.presetLevels[encounterContext + " (WB)"];
			poke.level = levelFinalContextLookup;
		},
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
		lookupCPMFromLevel: lookupCPMFromLevel,
		getPokemonLevel: getPokemonLevel,
		calculateCP: function (pokemon) {
			var basePokemon = getBasePokemon(pokemon);
			var level = getPokemonLevel(pokemon);
			var ivs = pokemon.ivs;
			var cpm = lookupCPMFromLevel(level);
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