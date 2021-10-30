var app = new Vue({
	el: '#stat-explorer',
	// imageListByDexNumber: imageListByDexNumber,
	mixins: [
		sprimkles,
	],
	data:{
		level: 20,
		pokemonMap,
		pokemonMapV2,
		showPokeModal: false,
		infoShown: false,
		statBarGridOn: false,
		verboseOn: false,
		statSummaryOn: false,
		selectedPokemonIndex: null,
		selectedPokemon: {
			name: "Mewtwo",
			form: "Normal",
			shiny: false,
		},
		pokemonList: [
			{
				name: 'Mewtwo',
				form: 'Normal',
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
				shiny: false,
			},
			{
				name: 'Gengar',
				form: 'Normal',
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
				shiny: false,
			},
			{
				name: 'Magikarp',
				form: 'Normal',
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
				shiny: false,
			},
			{
				name: 'Blissey',
				form: 'Normal',
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
				shiny: false,
			},
		],
	},
	methods: {
		replacePokemonByIndex: function (index, updatedPokemon) {
			// console.log(`replacePokemonByIndex: index:${index}, updatedPokemon:`, updatedPokemon);
			this.pokemonList.splice(index, 1, updatedPokemon);
		},
		removePokemonByIndex: function (index) {
			this.pokemonList.splice(index, 1);
		},
		addPokemon: function () {
			this.pokemonList.push({
				name: 'Blissey',
				form: 'Normal',
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
				shiny: false,
			});
		},
		toggleShowInfo: function (event) {
			event.preventDefault();
			this.infoShown = !this.infoShown;
		},
		openSpeciesModal: function (pokemonIndex) {
			var pokemon = this.pokemonList[pokemonIndex];
			this.selectedPokemonIndex = pokemonIndex;
			this.selectedPokemon = jsonClone(pokemon);
			this.showPokeModal = true;
		},
		cancelPokeModal: function () {
			this.showPokeModal = false;
		},
		selectPokeModal: function () {
			// do the thing where we save
			var pokemonIndex = this.selectedPokemonIndex;
			var pokemon = this.pokemonList[pokemonIndex];
			Object.assign(
				pokemon,
				this.selectedPokemon
			);
			this.showPokeModal = false;
		},
		resetSelectedPokemonForm: function () {
			this.selectedPokemon.form = "Normal";
		}
	},
});