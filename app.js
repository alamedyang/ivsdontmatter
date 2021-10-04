var app = new Vue({
	el: '#stat-explorer',
	mixins: [
		sprimkles,
	],
	data:{
		level: 20,
		pokemonMap,
		infoShown: false,
		statBarGridOn: false,
		verboseOn: false,
		pokemonList: [
			{
				name: 'Mewtwo',
				id: Math.random(),
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
				id: Math.random(),
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
				id: Math.random(),
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
				id: Math.random(),
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
		removePokemonByIndex: function (index) {
			this.pokemonList.splice(index, 1);
		},
		addPokemon: function () {
			this.pokemonList.push({
				name: 'Blissey',
				id: Math.random(),
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
		toggleShowInfo: function (event) {
			event.preventDefault();
			this.infoShown = !this.infoShown;
		},
	},
});