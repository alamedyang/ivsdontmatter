Vue.component('stat-explorer-pokemon', {
	mixins: [
		sprimkles,
		pokemonMutationMixin,
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
	methods: {
	},
	template: 
	/* html */
	`
	<div class="stat-explorer-pokemon">
		<h3 class="making-room-for-image">
			<span>{{name}}</span>
			<span class="hint">(CP: {{calculateCP(pokemon)}})</span>
			<span class="hint">{{IVStarEval(ivs).stars}}*</span>
			<label class="controls-checkbox hint blocky">
				<span>Expand:</span>
				<input
					type="checkbox"
					v-model="expanded"
				/>
				<span></span>
			</label>
			<label class="controls-checkbox hint blocky">
		</label>
			<button
				class="minus"
				@click="$emit('delete')"
			>
				x
			</button>
		</h3>
		<div class="bar-holder">
			<div class="bar-image">
				<pokemon-image-display
					:dex-number="getBasePokemon(pokemon).number"
					:pokemon-name="pokemon.name"
				>
				</pokemon-image-display>
			</div>
			<div class="making-room-for-image">
				<stat-bar
					v-for="(stat, propertyName, statBarIndex) in ivs"
					:key="propertyName"
					:label="propertyName"
					:stat-name="propertyName"
					:pokemon="pokemon"
					:stat-bar-grid-on="statBarGridOn"
				></stat-bar>
			</div>
		
		</div>
		<pokemon-stat-controls
			v-if="expanded"
			:pokemon="pokemon"
			:pokemon-map="pokemonMap"
			:verbose-on="verboseOn"
			@update:pokemon="$emit('update:pokemon', $event)"
			@update:ivs="ivs = $event"
		></pokemon-stat-controls>
	</div>
	`
});
