var app = new Vue({
	el: '#stat-explorer',
	mixins: [
		statMethodsMixin,
	],
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
	methods: {
		replacePokemonByIndex: function (index, updatedPokemon) {
			this.pokemonList.splice(index, 1, updatedPokemon);
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
	},
});