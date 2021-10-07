Vue.component('pokemon-image-display', {
	imagePrefix: "https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon%20-%20256x256/",
	props: {
		dexNumber: {
			type: Number,
			required: true,
		},
		pokemonName: {
			type: String,
			required: true,
		},
	},
	computed: {
		path: function () {
			var dexNumberAdjusted = (''+this.dexNumber).padStart(3,'0');
			var variantNumber = '00';
			if (this.pokemonName.includes('Alola')) {
				variantNumber = '61';
			}
			if (this.pokemonName.includes('Galar')) {
				variantNumber = '31';
			}
			var fileName = 'pokemon_icon_' + dexNumberAdjusted + '_' + variantNumber + '.png';
			if (this.pokemonName.includes('Mewtwo (Armored)')) {
				fileName = 'pokemon_icon_pm0150_00_pgo_a.png';
			}
			var path = this.$options.imagePrefix + fileName;
			if (this.shiny) {
				fileName = fileName.replace('.png','_shiny.png')
			}
			return path;
		},
	},
	template: 
	/* html */
	`
		<img
			class="pokemon-image-display"
			:src="path"
		/>
	`
});
