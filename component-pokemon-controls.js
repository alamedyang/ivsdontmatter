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
		verboseOn: {
			type: Boolean,
			required: true,
		},
	},
	data: function () {
		return {
			isWeatherBoosted: false,
			encounter_context_message: '',
		};
	},
	computed: {
		basePokemon: function () {
			return this.getBasePokemon(this.pokemon);
		},
		weatherBoostIcon: function () {
			var uniqueIconMap = {};
			var pokemonTypeNameIterationFunction = function(type) {
				var niceWeatherName = weatherBoostElements[type];
				var icon = weatherIconIdMap[niceWeatherName];
				uniqueIconMap[icon] = true;
			};
			this.basePokemon.types.forEach(pokemonTypeNameIterationFunction);
			var icons = Object.keys(uniqueIconMap);
			return icons;
		}
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
			if (this.isWeatherBoosted){
				this.encounter_context_message = 'Weather boost! Level +5 for certain encounters!';
			}else{
				this.encounter_context_message = 'Normal weather';
			}
		},
		setPokemonLevelFromEncounterType: function (rawEncounterContext) {
			var weatheredEncounterContext = rawEncounterContext;
			if (this.isWeatherBoosted) {
				weatheredEncounterContext += " (WB)";
			}
			var levelFinalContextLookup =
				presetLevels[weatheredEncounterContext] ||
				presetLevels[rawEncounterContext];
			var displayEncounterContext = rawEncounterContext;
			if (
				this.isWeatherBoosted &&
				presetLevels[weatheredEncounterContext]
			){
				displayEncounterContext += " (weather boosted)";
			}
			this.encounter_context_message = displayEncounterContext;
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
						@input="encounter_context_message = ''"
					/>
				</label>
			</div>
			<div>
				<svg
				viewBox="-1.1 -0.1 8.7 1.15"
				xmlns="http://www.w3.org/2000/svg"	
				>
				<clipPath id="aaaaaaaaa">
					<use href="#circle_button_base" />
				</clipPath>
				<g name="WB button"
					clip-path="url(#aaaaaaaaa)"
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
					<g
						v-if="weatherBoostIcon.length < 2"
					>
						<use
							:href="'#' + weatherBoostIcon[0]"
						/>
					</g>
					<g
						v-else
						transform="
							scale(0.7)
							translate(0.2,0.2)
						"
					>
						<use
							:href="'#' + weatherBoostIcon[0]"
							transform="
								translate(-0.27 -0.22)
							"
						/>
						<use
							:href="'#' + weatherBoostIcon[1]"
							transform="
								translate(0.27 0.22)
							"
						/>
						
					</g>
					<line
						v-if="weatherBoostIcon.length > 1"
						x1="0.1"
						y1="0.9"
						x2="0.9"
						y2="0.1"
						stroke-width="0.02"
						stroke="#fff"
					/>
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
				<div v-if="verboseOn">
					<span>Encounter context:</span>
					<em v-if="!encounter_context_message">Click a button!</em>
					<span v-else>{{encounter_context_message}}</span>
				</div>
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
			<div v-show="verboseOn">
				<span>
					{{pokemon.ivs.attack}}/{{pokemon.ivs.defense}}/{{pokemon.ivs.stamina}} =
					{{IVSum(pokemon.ivs)}}/45 ({{IVPercentage(pokemon.ivs)}}%)
				</span>
				<span v-if="IVPercentage(pokemon.ivs) >= 100">
					<strong>HUNDO!</strong>
				</span>
				<span v-if="functionalHundo(pokemon)">
					<strong>Functional Hundo!</strong>
				</span>
			</div>
		</div>
	</div>
	`
});
