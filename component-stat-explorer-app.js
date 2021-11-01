Vue.component('stat-explorer-app', {
	mixins: [
		sprimkles,
	],
	props: {
		showPokeModal: {
			type: Boolean,
			require: true,
		},
	},
	data: function () {
		return {
			statBarGridOn: false,
			verboseOn: false,
			statSummaryOn: false,
			level: 20,
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
			selectedPokemon: {
				name: "Mewtwo",
				form: "Normal",
				shiny: false,
			},
			selectedPokemonIndex: null,
		};
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
		openSpeciesModal: function (pokemonIndex) {
			var pokemon = this.pokemonList[pokemonIndex];
			this.selectedPokemonIndex = pokemonIndex;
			this.selectedPokemon = jsonClone(pokemon);
			this.$emit('poke-modal-true');
			// this.showPokeModal = true;
		},
		cancelPokeModal: function () {
			this.$emit('poke-modal-false');
			// this.showPokeModal = false;
		},
		selectPokeModal: function () {
			// do the thing where we save
			var pokemonIndex = this.selectedPokemonIndex;
			var pokemon = this.pokemonList[pokemonIndex];
			Object.assign(
				pokemon,
				this.selectedPokemon
			);
			// this.showPokeModal = false;
			this.$emit('poke-modal-false');
		},
		resetSelectedPokemonForm: function () {
			this.selectedPokemon.form = "Normal";
		}
	},
	template: /*html*/`
<div>
	<div>
		<div>
			<label class="input_padding_right blocky">
				<span id="verbose-mode">Stat Summary:</span>
				<input
					type="checkbox"
					v-model="statSummaryOn"
				/>
			</label>
			<label class="input_padding_right blocky">
				<span id="verbose-mode">Extra Details:</span>
				<input
					type="checkbox"
					v-model="verboseOn"
				/>
			</label>
		</div>
		<svg-defs></svg-defs>
		<div>
			<div class="pokemon-list">
				<stat-explorer-pokemon
					v-for="(pokemon, pokemonIndex) in pokemonList"
					:key="pokemon.id"
					:pokemon="pokemon"
					:stat-bar-grid-on="statBarGridOn"
					:pokemon-list="pokemonList"
					:verbose-on="verboseOn"
					:stat-summary-on="statSummaryOn"
					@update:pokemon="replacePokemonByIndex(pokemonIndex, $event)"
					@open-species-modal="openSpeciesModal(pokemonIndex)"
					@delete="removePokemonByIndex(pokemonIndex)"
				>
				</stat-explorer-pokemon>
			</div>
		</div>
		<h3 class="making-room-for-image">
			<span class="middle">Add Pok&eacute;mon</span>
			<span name="add pokemon button"
				class="small_button middle"
			>
				<svg
					viewBox="0 0 1 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g name="edit buton"
						cursor="pointer"
						@click="addPokemon"
					>
						<use href="#rounded_rect_button_base"
							class="button-yes"
						/>
						<use href="#icon_plus"/>
					</g>
				</svg>
			</span>
		</h3>
	</div>
	<form-selector
		v-if="showPokeModal"
		:pokemon="selectedPokemon"
		@close-species-modal="cancelPokeModal"
		@confirm-species-modal="selectPokeModal"
	>
	</form-selector>
</div>
`
});