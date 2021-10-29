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
		statSummaryOn: {
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
		<h3 class="making-room-for-image making-room-for-x">
			<span>{{name}}</span>
			<span class="hint">CP {{calculateCP(pokemon)}}</span>
			<br v-show="statSummaryOn"/>
			<span class="blocky">
				<span class="hint" v-show="statSummaryOn">
					({{ivs.attack}}/{{ivs.defense}}/{{ivs.stamina}} {{shadow ? 'Shadow' : ''}} @ Lv{{getPokemonLevel(pokemon)}})
				</span>
				<label class="controls-checkbox hint blocky">
					<span id="expand-button">Edit:</span>
					<input
						type="checkbox"
						v-model="expanded"
					/>
				</label>
				<button
					class="minus"
					@click="$emit('delete')"
				>x</button>
			</span>
		</h3>
		<div class="bar-holder">
			<div class="bar-image">
				<pokemon-image-display
					:dex-number="getSyntheticForm(pokemon).number"
					:asset-bundle-suffix="getAssetBundleSuffix(pokemon.name,pokemon.form)"
					:asset-bundle-value="getAssetBundleValue(pokemon.name,pokemon.form)"
					:shiny="pokemon.shiny"
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
			@open-species-modal="$emit('open-species-modal')"
		></pokemon-stat-controls>
	</div>
	`
});
