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
		toggleExpandControls: function (event) {
			event.preventDefault();
			this.expanded = !this.expanded;
		},
	},
	template: 
	/* html */
	`
	<div class="stat-explorer-pokemon">
		<h3 class="making-room-for-image making-room-for-x small_button_div">
			<span>{{name}}</span>
			<span class="hint">CP {{calculateCP(pokemon)}}</span>
			<br v-show="statSummaryOn"/>
			<span class="blocky">
				<span class="hint" v-show="statSummaryOn">
					({{ivs.attack}}/{{ivs.defense}}/{{ivs.stamina}} @ Lv{{getPokemonLevel(pokemon)}})
				</span>
			</span>
			<span class="rightmost-button">
				<span name="edit pokemon button"
					class="small_button"
					@hover=""
				>
					<svg
						viewBox="0 0 1 1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g name="edit buton"
							cursor="pointer"
							@click="toggleExpandControls"
						>
							<use href="#rounded_rect_button_base"
							:class="{
								common_levels_button_noselect: !expanded,
								common_levels_button_select: expanded
							}"		
							/>
							<use href="#icon_edit"/>
						</g>
					</svg>
				</span>
				<span name="remove pokemon button"
					class="small_button"
					@click="$emit('delete')"
				>
					<svg
						viewBox="0 0 1 1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g name="x button"
							cursor="pointer"
							@mousedown="clickShadowButton($event)"
						>
							<use href="#rounded_rect_button_base"
								class="button-no"
							/>
							<use href="#icon_x"/>
						</g>
					</svg>
				</span>
			</span>
		</h3>
		<div class="bar-holder">
			<div class="bar-image">
				<pokemon-image-display
					:dex-number="getSyntheticForm(pokemon).number"
					:asset-bundle-suffix="getAssetBundleSuffix(pokemon.name,pokemon.form)"
					:asset-bundle-value="getAssetBundleValue(pokemon.name,pokemon.form)"
					:shiny="pokemon.shiny"
					:shadow="pokemon.shadow"
					:buddy="pokemon.buddy"
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
