Vue.component('stat-bar', {
	mixins: [
		sprimkles,
	],
	props: {
		label: {
			type: String,
			required: true,
		},
		statName: {
			type: String,
			required: true,
		},
		pokemon: {
			type: Object,
			required: true,
		},
		statBarGridOn: {
			type: Boolean,
			required: true,
		},
	},
	computed: {
		blisseyScale: function () {
			return (496 + 15) * 0.85;
		},
		widthScale: function () {
			return 0.7;
		},
		ivBarHeight: function () {
			return 10;
		},
		iv: function () {
			return this.pokemon.ivs[this.statName];
		},
		basePokemon: function () {
			return this.getBasePokemon(this.pokemon);
		},
		baseStat: function () {
			return this.basePokemon[this.statName];
		},
		cpm: function () {
			return this.lookupCPMFromLevel(
				this.getPokemonLevel(this.pokemon)
			);
		},
		currentStat: function () {
			var raw_current_stat =
				(this.basePokemon[this.statName] +
				this.pokemon.ivs[this.statName]) *
				this.cpm;
			if (this.statName === "stamina") {
				var result = Math.floor(raw_current_stat);
			}
			else{
				var result = raw_current_stat;
			};
			return result;
		},
		currentStatPlusShadow: function () {
			var result = this.currentStat;
			if (this.statName === "attack" && this.pokemon.shadow === true) {
				var result = (this.currentStat * 1.2);
			};
			if (this.statName === "defense" && this.pokemon.shadow === true) {
				var result = (this.currentStat * (5/6) );
			};
			return result;
		},
		currentStatDisplay: function () {
			var result = this.currentStatPlusShadow.toFixed(1);
			if (this.statName === "stamina") {
				var result = this.currentStatPlusShadow.toFixed(0);
			};
			return result;
		},
		overlapOrMainPinkClasses: function () {
			var attack_bonus = this.statName === 'attack' && this.pokemon.shadow;
			var defense_bonus = this.statName === 'defense' && this.pokemon.shadow;
			return {
				stats_iv_max_overlap: attack_bonus,
				stats_iv_max_ghost: defense_bonus,
				stats_iv_max_main: !attack_bonus && !defense_bonus
			};
		},
		overlapOrMainRedClasses: function () {
			var attack_bonus = this.statName === 'attack' && this.pokemon.shadow;
			var defense_bonus = this.statName === 'defense' && this.pokemon.shadow;
			return {
				stats_iv_overlap: attack_bonus,
				stats_iv_ghost: defense_bonus,
				stats_iv_main: !attack_bonus && !defense_bonus
			};
		},
		overlapOrMainBlueClasses: function () {
			var attack_bonus = this.statName === 'attack' && this.pokemon.shadow;
			var defense_bonus = this.statName === 'defense' && this.pokemon.shadow;
			return {
				stats_base_overlap: attack_bonus,
				stats_base_ghost: defense_bonus,
				stats_base_main: !attack_bonus && !defense_bonus
			};
		}
	},
	template: 
	/* html */
	`
	<div class="stat-bar">
		<svg
		:viewBox=" '0 -1 ' + blisseyScale*widthScale + ' ' + (ivBarHeight + 2)"
		xmlns="http://www.w3.org/2000/svg"	
		>
		<defs>
			<g id="iv_display_divider">
				<line name="50 mark line"
					class="stats_full_range_line"
					x1="-50"
					y1="0"
					x2="-50"
					:y2="ivBarHeight"
					stroke-width="1"
					stroke-linecap="butt"
					opacity=".25"
					stroke-dasharray="1,0.5"
				/>
				<line name="100 mark line"
					class="stats_full_range_line"
					x1="0"
					y1="0"
					x2="0"
					:y2="ivBarHeight * 1"
					stroke-width="1"
					stroke-linecap="square"
					opacity=".75"
				/>
			</g>
		</defs>
		<g
			name="whole stat bar"
			:transform="'scale(' + widthScale + ',1)'"
		>
			<g name="stat bar range">
				<rect name="max gray bar"
					class="stats_full_range"
					:width="blisseyScale"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
			</g>
			<g name="shadow bonus (attack)"
				v-if="statName === 'attack' && pokemon.shadow"
			>
				<rect name="pink bar (shadow bonus)"
					class="stats_iv_max_main"
					:width="(((baseStat + 15) * cpm) * 1.2)"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
				<rect name="red bar (shadow bonus)"
					class="stats_iv_main"
					:width="(((baseStat + iv) * cpm) * 1.2)"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
				<rect name="blue bar (shadow bonus)"
					class="stats_base_main"
					:width="(((baseStat) * cpm) * 1.2)"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
			</g>
			<g name="total stat bar">
				<rect name="pink bar"
					:class="overlapOrMainPinkClasses"
					:width="((baseStat + 15) * cpm)"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
				<rect name="red bar"
					:class="overlapOrMainRedClasses"
					:width="((baseStat + iv) * cpm)"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
				<rect name="blue bar"
					:class="overlapOrMainBlueClasses"
					:width="((baseStat) * cpm)"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
			</g>
			<g name="shadow penalty (defense)"
				v-if="statName === 'defense' && pokemon.shadow"
			>
				<rect name="pink bar (shadow penalty)"
					class="stats_iv_max_main"
					:width="(((baseStat + 15) * cpm) * (5/6))"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
				<rect name="red bar (shadow penalty)"
					class="stats_iv_main"
					:width="(((baseStat + iv) * cpm) * (5/6))"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
				<rect name="blue bar (shadow penalty)"
					class="stats_base_main"
					:width="(((baseStat) * cpm) * (5/6))"
					:height="ivBarHeight"
					x="0"
					y="0"
				/>
			</g>
			<g v-if="statBarGridOn">
				<use href="#iv_display_divider" x="100"/>
				<use href="#iv_display_divider" x="200"/>
				<use href="#iv_display_divider" x="300"/>
				<use href="#iv_display_divider" x="400" />
				</g>
				<line name="iv red line marker"
					class="stats_iv_main_line"
					:x1="currentStatDisplay"
					y1="-1"
					:x2="currentStatDisplay"
					:y2="ivBarHeight + 3"
					stroke-width="0.5"
					stroke-linecap="square"
				/>
			</g>
			<text
				class="current_stat_label"
				x="1.5"
				y="8"
				stroke="#36f"
				stroke-width="1"
			>
			{{currentStatDisplay}}
			</text>
			<text
				class="current_stat_label"
				x="1.5"
				y="8"
				fill="#fff"
			>
			{{currentStatDisplay}}
			</text>
		</svg>
	</div>
	`,
});
