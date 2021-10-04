Vue.component('stat-explorer-pokemon', {
	mixins: [
		sprimkles,
	],
	props: {
		pokemon: {
			type: Object,
			require: true,
		},
		statBarGridOn: {
			type: Boolean,
			require: true,
		},
		verboseOn: {
			type: Boolean,
			require: true,
		},
		pokemonMap: {
			type: Object,
			require: true,
		},
		pokemonList: {
			type: Array,
			require: true,
		}
	},
	data: function () {
		return {
			isWeatherBoosted: false,
		}
	},
	computed: {},
	methods: {
		removePokemon: function (id) {
			var index = this.getPokemonListIndexFromId(id);
			this.pokemonList.splice(index, 1);
		},
	},
	template: 
	/* html */
	`
	<div class="stat-explorer-pokemon">
		<h3>
			<span>{{pokemon.name}}</span>
			<span class="hint">(CP: {{calculateCP(pokemon)}})</span>
			<span class="hint">{{IVStarEval(pokemon.ivs).stars}}*</span>
			<label class="controls-checkbox hint">
				<span>[Expand:</span>
				<input
					type="checkbox"
					v-model="pokemon.expanded"
				/>
				<span>]</span>
			</label>
			<button
				class="minus"
				@click="$emit('delete')"
			>
				x
			</button>
		</h3>
		<div>
			<stat-bar
				v-for="(stat, propertyName, statBarIndex) in pokemon.ivs"
				:key="propertyName"
				:label="propertyName"
				:stat-name="propertyName"
				:pokemon="pokemon"
				:stat-bar-grid-on="statBarGridOn"
			></stat-bar>
		</div>
		<pokemon-stat-controls
			v-if="pokemon.expanded"
			:pokemon="pokemon"
			:pokemon-map="pokemonMap"
			:verbose-on="verboseOn"
			@changes="$emit('changes', $event)"
		></pokemon-stat-controls>
	</div>
	`



});