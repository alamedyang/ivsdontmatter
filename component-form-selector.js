Vue.component('form-selector',{
	mixins: [
		sprimkles,
		pokemonMutationMixin,
	],
	props: {},
	computed: {
		syntheticPokemon: function () {
			return this.getSyntheticForm(this.pokemon);
		},
	},
	methods: {
		resetCurrentPokemonForm: function () {
			var formList = this.pokemonMapV2[this.pokemon.name].forms;
			var firstForm = formList[0];
			if (Object.keys(formList).includes('Normal')) {
				this.pokemon.form = "Normal";
			} else {
				this.pokemon.form = firstForm;
			}
		},
	},
	template: /*html*/`
<div class="modal-brackground-overlay">
	<div class="container">
		<div class="modal-contents">
			<div class="species_select-image">
				<pokemon-image-display
					:dex-number="pokemonMapV2[pokemon.name].number"
					:asset-bundle-suffix="getAssetBundleSuffix(pokemon.name,pokemon.form)"
					:asset-bundle-value="getAssetBundleValue(pokemon.name,pokemon.form)"
					:shiny="pokemon.shiny"
				></pokemon-image-display>
			</div>
			<p class="species_select-info">
				<span class="pretend-p">
					#{{syntheticPokemon.number}}
				</span>
				<span class="pretend-p">
					<span>Type(s):</span>
					<span
						:class="'type-bubble type-' + syntheticPokemon.types[0].toLocaleLowerCase()"
					>{{syntheticPokemon.types[0]}}</span><span v-if="syntheticPokemon.types[1]"> </span>
					<span
						v-if="syntheticPokemon.types[1]"
						:class="'type-bubble type-' + syntheticPokemon.types[1].toLocaleLowerCase()"
					>{{syntheticPokemon.types[1] ? syntheticPokemon.types[1] : ''}}</span>
				</span>
				<span class="pretend-p">
					Base attack: {{syntheticPokemon.attack}}<br />
					Base defense: {{syntheticPokemon.defense}}<br />
					Base stamina: {{syntheticPokemon.stamina}}
				</span>
				<svg
					viewBox="0 0 500 78"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect name="attack base"
						:width="syntheticPokemon.attack"
						height="20"
						x="0"
						y="0"
						fill="#47f"
					/>
					<rect name="defense base"
						:width="syntheticPokemon.defense"
						height="20"
						x="0"
						y="26"
						fill="#47f"
					/>
					<rect name="stamina base"
						:width="syntheticPokemon.stamina"
						height="20"
						x="0"
						y="52"
						fill="#47f"
					/>
				</svg>
			</p>
			<div>
				<label class="input_padding_right blocky">
					<span>Species:</span>
					<select
						v-model="pokemon.name"
						@change="resetCurrentPokemonForm"
					>
						<option
							v-for="(item, pokemonName, index) in pokemonMapV2"
							:key="item.number"
						>{{pokemonName}}</option>
					</select>
				</label>
				<label
					class="input_padding_right blocky"
					v-if="Object.keys(pokemonMapV2[pokemon.name].forms).length > 1"
				>
					<span>Form:</span>
					<select
						v-model="pokemon.form"
					>
						<option
							v-for="(item, formName, index) in pokemonMapV2[pokemon.name].forms"
							:key="formName"
						>{{formName}}</option>
					</select>
				</label>
				<label class="input_padding_right blocky">
					<span>Shiny:</span>
					<input
						type="checkbox"
						v-model="pokemon.shiny"
					/>
				</label>
			</div>
			<div class="spacious-top center">
				<span class="one_fifth">
					<svg
						viewBox="0 0 3 1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g name="no button"
							cursor="pointer"
							@mousedown="$emit('close-species-modal')"
						>
							<use href="#rounded_rect_button_base"
								class="button-no"
							/>
							<use href="#icon_x"/>
						</g>
							<g name="enter button"
								transform="translate(2,0)"
								cursor="pointer"
								@mousedown="$emit('confirm-species-modal')"
							>
							<use href="#rounded_rect_button_base"
								class="button-yes"
							/>
							<use href="#icon_check"/>
						</g>
					</svg>
				</span>
			</div>
		</div>
	</div>
</div>
`});