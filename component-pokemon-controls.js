Vue.component('pokemon-controls', {
	mixins: [
		statMethodsMixin,
	],
	props: {
		pokemon: {
			type: Object,
			required: true,
		},
		pokemonMap: {
			type: Object,
			required: true,
		},
	},
	data: function () {
		return {
			isWeatherBoosted: false,
		};
	},
	computed: {
	},
	methods: {
		emitChanges(changes) {
			var updatedPokemon = Object.assign(
				{},
				this.pokemon,
				changes
			);
			this.$emit('changes', updatedPokemon);
		},
		clickShadowButton: function (clicky) {
			clicky.preventDefault();
			this.emitChanges(
				{
					shadow: !this.pokemon.shadow,
				}
			);
		},
		clickBuddyButton: function (clicky) {
			clicky.preventDefault();
			this.emitChanges(
				{
					buddy: !this.pokemon.buddy,
				}
			);
		},
		clickWeatherBoostButton: function (mouseDownEvent) {
			mouseDownEvent.preventDefault();
			this.isWeatherBoosted = !this.isWeatherBoosted;
		},
		setPokemonLevelFromEncounterType: function (rawEncounterContext) {
			var weatheredEncounterContext = rawEncounterContext;
			if (this.isWeatherBoosted) {
				weatheredEncounterContext += " (WB)";
			}
			var levelFinalContextLookup =
				presetLevels[weatheredEncounterContext] ||
				presetLevels[rawEncounterContext];
			this.emitChanges(
				{
					level: levelFinalContextLookup,
				}
			);
		},
	},
	template:
	/* html */
	`
	<div class="controls">
		<div class="container_section">
			<span class="four_fifths">
				<span>Pokémon:</span>
				<select
					v-model="pokemon.name"
				>
					<option
						v-for="(pokemon, pokemonName, index) in pokemonMap"
						:key="pokemonName"
					>{{pokemonName}}</option>
				</select>
			</span>
			<span class="one_fifth" name="pokemon toggles">
				<svg
					viewBox="0 0 2.1 1"
					xmlns="http://www.w3.org/2000/svg"	
				>
					<g name="shadow toggle"
						@mousedown="clickShadowButton($event)"
					>
						<use href="#circle_button_base"
							:class="{
								common_levels_button_noselect: !pokemon.shadow,
								common_levels_button_shadow: pokemon.shadow
							}"
						/>
						<use href="#icon_shadow"/>
					</g>
					<g name="buddy toggle"
						@mousedown="clickBuddyButton($event)"
					>
						<use href="#circle_button_base"
						:class="{
							common_levels_button_noselect: !pokemon.buddy,
							common_levels_button_buddy: pokemon.buddy
						}"
							transform="translate(1.1,0)"
						/>
						<use href="#icon_buddy"
						transform="translate(1.1,0)"/>
					</g>
				</svg>
			</span>
		</div>
		<div class="container_section">
			<div class="inputtydoo">
				<label>
					<span>
						<span>
							Level: {{pokemon.level}}
						</span>
						<span
							v-if="pokemon.buddy"
							class="common_levels_button_buddy"
						>
						<strong>
							+ 1
						</strong>
						</span>
						<span class="hint">(CPM: {{
							lookupCPMFromLevel(getPokemonLevel(pokemon))
						}})</span>
					</span>
					<input
						type="range"
						min="1"
						max="50"
						step="0.5"
						v-model.number="pokemon.level"
					/>
				</label>
			</div>
			<div>
				<div>Common levels:</div>
				<svg
				viewBox="-1.1 0 8.7 1"
				xmlns="http://www.w3.org/2000/svg"	
				>
				<g name="WB button"
					transform="translate(-1.1,0)"
					@mousedown="clickWeatherBoostButton"
					:is-weather-boosted="isWeatherBoosted"
				>
					<use href="#circle_button_base"
						:class="{
							common_levels_button_noselect: !isWeatherBoosted,
							common_levels_button_select: isWeatherBoosted
						}"
					/>
					<text
						font-size="0.4px"
						fill="#fff"
						y="0.65"
						x="0.5"
						text-anchor="middle"
					>WB</text>
				</g>
				<g id="encounter_context-shadow-button"
					transform="translate(0,0)"
					@click="setPokemonLevelFromEncounterType('Shadow')"
				>
					<use href="#rounded_rect_button_base"
						:class="{
							common_levels_button_gray: !isWeatherBoosted,
							common_levels_button_select: isWeatherBoosted
						}"
					/>
					<use href="#icon_shadow"/>
				</g>
				<g id="encounter_context-research-button"
					transform="translate(1.1,0)"
					@click="setPokemonLevelFromEncounterType('Research')"
				>
					<use href="#rounded_rect_button_base"
						class="common_levels_button_gray"
					/>
					<use href="#icon_research"/>
				</g>
				<g id="encounter_context-egg-button"
					transform="translate(2.2,0)"
					@click="setPokemonLevelFromEncounterType('Egg')"
				>
					<use href="#rounded_rect_button_base"
					class="common_levels_button_gray"
				/>
					<use href="#icon_egg"/>
				</g>
				<g id="encounter_context-raid-button"
					transform="translate(3.3,0)"
					@click="setPokemonLevelFromEncounterType('Raid')"
				>
					<use href="#rounded_rect_button_base"
						:class="{
							common_levels_button_gray: !isWeatherBoosted,
							common_levels_button_select: isWeatherBoosted
						}"
					/>
					<use href="#icon_raid"/>
				</g>
				<g id="encounter_context-wild-button"
					transform="translate(4.4,0)"
					@click="setPokemonLevelFromEncounterType('Wild Max')"
				>
					<use href="#rounded_rect_button_base"
						:class="{
							common_levels_button_gray: !isWeatherBoosted,
							common_levels_button_select: isWeatherBoosted
						}"
					/>
					<use href="#icon_wild"/>
				</g>
				<g id="encounter_context-max-button"
					transform="translate(5.5,0)"
					@click="setPokemonLevelFromEncounterType('Maxed')"
				>
					<use href="#rounded_rect_button_base"
					class="common_levels_button_gray"
				/>
					<use href="#icon_max"/>
				</g>
				<g id="encounter_context-max_xl-button"
					transform="translate(6.6,0)"
					@click="setPokemonLevelFromEncounterType('Maxed (XL)')"
				>
					<use href="#rounded_rect_button_base"
					class="common_levels_button_gray"
				/>
					<use href="#icon_max_xl"/>
				</g>
				</svg>
			</div>
		</div>
		<div class="container_section">
			<label>
				IVs:
			</label>
			<div
			v-for="(iv, key, index) in pokemon.ivs"
			>
				<svg
					viewBox="0.25 -0.75 21 1.75"
					xmlns="http://www.w3.org/2000/svg"
					class="iv_bar_width"
				>
					<defs>
						<g id="iv_slider_base">
							<line name="IV slider"
								class="iv_input_gray"
								x1="1"
								y1="0"
								x2="15"
								y2="0"
								stroke-linecap="round"
							/>
						</g>
						<g id="iv_input_dividers">
							<line name="divider"
								class="iv_input_divider"
								x1="5.55"
								y1="-0.625"
								x2="5.55"
								y2="0.625"
							/>
							<line name="divider"
								class="iv_input_divider"
								x1="10.55"
								y1="-0.625"
								x2="10.55"
								y2="0.625"
							/>
						</g>
					</defs>
					<text
						class="iv_input_label"
						x="16.25"
						y="0.32"
					>
						{{key.substring(0,3)}}: {{iv}}
					</text>
					<g id="iv_slider_base">
						<line name="IV slider"
							class="iv_input_white_bg"
							x1="1"
							y1="0"
							x2="15"
							y2="0"
							stroke-linecap="round"
						/>
					</g>
				<use href="#iv_slider_base"/>
					<g name="iv input bar"
						v-if="iv"
					>
						<line name="orange iv bar"
							:class="{
								iv_input_orange: iv < 15,
								iv_input_red: iv >= 15
							}"
							x1="1"
							y1="0"
							:x2="iv"
							y2="0"
							stroke-linecap="round"
						/>
					</g>
					<use href="#iv_input_dividers"/>
				</svg>
				<input
					type="range"
					style="width: 48%;"
					min="0"
					max="15"
					step="1"
					v-model.number="pokemon.ivs[key]"
				/>
			</div>
		</div>
	</div>
	`
});
