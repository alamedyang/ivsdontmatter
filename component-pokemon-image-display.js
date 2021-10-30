Vue.component('pokemon-image-display', {
	imagePrefix: "https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon%20-%20256x256/",
	props: {
		dexNumber: {
			type: Number,
			required: true,
		},
		assetBundleValue: {
			type: String,
			required: false,
		},
		assetBundleSuffix: {
			type: String,
			required: false,
		},
		shiny: {
			type: Boolean,
			required: false,
		},
		shadow: {
			type: Boolean,
			required: false,
		}
	},
	computed: {
		path: function () {
			var dexNumberAdjusted = (''+this.dexNumber).padStart(3,'0');
			var variantNumber = '00';
			if (this.assetBundleValue) {
				variantNumber = this.assetBundleValue;
			}
			var fileName = 'pokemon_icon_' + dexNumberAdjusted + '_' + variantNumber + '.png';
			if (this.assetBundleSuffix) {
				fileName = 'pokemon_icon_' + this.assetBundleSuffix + '.png';
			}
			if (this.shiny) {
				fileName = fileName.replace('.png','_shiny.png')
			}
			var path = this.$options.imagePrefix + fileName;
			return path;
		},
	},
	template: 
	/* html */
	`
		<svg
			viewBox="0 0 1 1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<image
				class="pokemon-image-display"
				:href="path"
				width="1"
				height="1"
			/>
			<use
				v-show="this.shadow"
				href="#rocket_overlay_circle"
			/>
			<use
				v-show="this.shadow"
				href="#rocket_overlay_flame"
				class="common_levels_button_shadow"
			/>
		</svg>
	`
});
