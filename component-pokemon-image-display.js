Vue.component('pokemon-image-display', {
	imagePrefix: "https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Pokemon%20-%20256x256/",
	props: {
		dexNumber: {
			type: Number,
			required: false,
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
		},
		buddy: {
			type: Boolean,
			required: false,
		},
		lucky: {
			type: Boolean,
			required: false,
		},
		path: {
			type: String,
			required: false,
		},
	},
	computed: {
		computedPath: function () {
			var fileName = this.path;
			if (!fileName) {
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
				v-if="this.lucky"
				href="https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Images/Friends/ui_bg_lucky_pokemon.png"
				width="1"
				height="1"
			/>
			<image
				class="pokemon-image-display"
				:href="computedPath"
				width="1"
				height="1"
			/>
			<g
				v-show="this.shadow"
				transform="
					scale(0.33)
					translate(0,2)
					"
			>
				<use
					href="#rocket_overlay_flame"
					class="pokemon_image_icon_outline"
				/>
				<use
					href="#rocket_overlay_flame"
					class="pokemon_image_shadow_flame"
				/>

			</g>
			<g
				v-show="this.shiny"
				transform="
					scale(.5)
					translate(-.2,-.2)
					"
			>
				<use
					href="#icon_shiny"
					class="pokemon_image_icon_outline"
				/>
				<use
					href="#icon_shiny"
					class="pokemon_image_shiny"
				/>

			</g>
			<g
				transform="
					scale(0.18)
					translate(4.5,0.12)
					"
				v-if="this.buddy"
			>
				<g id="buddy_badge_color" transform="scale(0.013888888888889)">
					<polygon class="outline" points="65.3,36 70.1,25.8 54.7,28.4 66.2,20.2 55.6,16.4 51.8,5.8 43.6,17.3 46.2,1.9 36,6.7 25.8,1.9 
						28.4,17.3 20.2,5.8 16.4,16.4 5.8,20.2 17.3,28.4 1.9,25.8 6.7,36 1.9,46.2 17.3,43.6 5.8,51.8 16.4,55.6 20.2,66.2 28.4,54.7 
						25.8,70.1 36,65.3 46.2,70.1 43.6,54.7 51.8,66.2 55.6,55.6 66.2,51.8 54.7,43.6 70.1,46.2 	"/>
					<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="35.95" y1="18.5" x2="35.95" y2="3.152">
						<stop  offset="0" style="stop-color:#C9526F"/>
						<stop  offset="1" style="stop-color:#F27A8E"/>
					</linearGradient>
					<polyline class="dunno" points="42.6,18.5 45.2,3.2 36,7.5 26.7,3.2 29.3,18.5 	"/>
					<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="35.95" y1="53.5" x2="35.95" y2="68.8479">
						<stop  offset="0" style="stop-color:#C9526F"/>
						<stop  offset="1" style="stop-color:#F27A8E"/>
					</linearGradient>
					<polyline class="just" points="29.3,53.5 26.7,68.8 36,64.5 45.2,68.8 42.6,53.5 	"/>
					<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="18.4713" y1="36" x2="3.1234" y2="36">
						<stop  offset="0" style="stop-color:#C9526F"/>
						<stop  offset="1" style="stop-color:#F27A8E"/>
					</linearGradient>
					<polyline class="incase" points="18.5,29.3 3.1,26.8 7.4,36 3.1,45.2 18.5,42.7 	"/>
					<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="53.4485" y1="36" x2="68.7965" y2="36">
						<stop  offset="0" style="stop-color:#C9526F"/>
						<stop  offset="1" style="stop-color:#F27A8E"/>
					</linearGradient>
					<polyline class="st4" points="53.4,42.7 68.8,45.2 64.5,36 68.8,26.8 53.4,29.3 	"/>
					<linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="23.6838" y1="23.6837" x2="13.8529" y2="13.8529">
						<stop  offset="0" style="stop-color:#E35D24"/>
						<stop  offset="1" style="stop-color:#FA6E30"/>
					</linearGradient>
					<polygon class="st5" points="20.4,7.3 16.9,16.9 7.3,20.4 18.8,28.6 28.5,18.8 	"/>
					<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="48.2512" y1="48.3012" x2="58.082" y2="58.132">
						<stop  offset="0" style="stop-color:#E35D24"/>
						<stop  offset="1" style="stop-color:#FA6E30"/>
					</linearGradient>
					<polygon class="st6" points="53.1,43.4 43.4,53.2 51.6,64.7 55,55.1 64.6,51.6 	"/>
					<linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="23.6838" y1="48.3163" x2="13.8529" y2="58.1471">
						<stop  offset="0" style="stop-color:#E35D24"/>
						<stop  offset="1" style="stop-color:#FA6E30"/>
					</linearGradient>
					<polygon class="st7" points="18.8,43.4 7.3,51.6 16.9,55.1 20.4,64.7 28.5,53.2 	"/>
					<linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="48.2511" y1="23.6987" x2="58.0821" y2="13.8679">
						<stop  offset="0" style="stop-color:#E35D24"/>
						<stop  offset="1" style="stop-color:#FA6E30"/>
					</linearGradient>
					<polygon class="st8" points="55,16.9 51.6,7.3 43.4,18.8 53.1,28.6 64.6,20.4 	"/>
					
						<radialGradient id="SVGID_9_" cx="34.9525" cy="36.4037" r="27.1246" fx="23.3122" fy="23.0457" gradientTransform="matrix(-1 0 0 -1 72 72.2)" gradientUnits="userSpaceOnUse">
						<stop  offset="0.1462" style="stop-color:#FFD900"/>
						<stop  offset="0.5127" style="stop-color:#FFEE00"/>
						<stop  offset="0.6942" style="stop-color:#FFEE00"/>
						<stop  offset="0.7966" style="stop-color:#FFFFFF"/>
					</radialGradient>
					<circle class="st9" cx="36" cy="36.1" r="18.7"/>
					<radialGradient id="SVGID_10_" cx="35.183" cy="37.3676" r="15.6654" fx="28.4603" fy="29.6529" gradientUnits="userSpaceOnUse">
						<stop  offset="1.382223e-02" style="stop-color:#FFFFFF"/>
						<stop  offset="0.4583" style="stop-color:#FFEE00"/>
					</radialGradient>
					<path class="st10" d="M38.8,27.3c-2.2,0.7-3,1.7-3,1.7s-0.8-1-3-1.7s-4.9,0-7,2.6s-1.2,6-0.4,7.6c1,2.1,5.4,6.4,5.4,6.4
						c2.6,2.4,4.2,3.3,4.9,3.3s2.4-0.9,4.9-3.3c0,0,4.5-4.4,5.4-6.4c0.8-1.6,1.8-5-0.4-7.6S41.1,26.7,38.8,27.3z"/>
					<linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="27.9743" y1="26.5467" x2="43.6822" y2="42.2546">
						<stop  offset="0" style="stop-color:#995921"/>
						<stop  offset="1" style="stop-color:#7A370C"/>
					</linearGradient>
					<path class="st11" d="M35.8,48.2c-1.4,0-3.8-1.9-5.5-3.6l0,0c-0.2-0.2-4.6-4.5-5.6-6.7c-0.6-1.2-2.2-5.2,0.5-8.5
						c2.2-2.7,5.2-3.8,7.9-2.9c1.3,0.5,2.2,1,2.7,1.4c0.5-0.4,1.4-0.9,2.7-1.4h0.1c2.9-0.8,5.7,0.3,7.9,2.9c2.7,3.2,1,7.3,0.5,8.5
						c-1,2.2-5.4,6.5-5.6,6.7l0,0C39.6,46.2,37.2,48.2,35.8,48.2z M31.4,43.4c2.7,2.6,4.1,3.1,4.4,3.1s1.6-0.6,4.4-3.1
						c1.2-1.2,4.5-4.6,5.3-6.2c1.8-3.7,0.4-5.9-0.2-6.7c-2.3-2.8-4.9-2.7-6.2-2.4c-1.9,0.6-2.6,1.4-2.6,1.4l-0.6,0.7l-0.6-0.7
						c0,0-0.8-0.8-2.6-1.5c-2.1-0.7-4.3,0.2-6.1,2.4c-0.7,0.8-2,3.1-0.2,6.7C26.9,38.8,30.2,42.2,31.4,43.4z"/>
					<linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="36" y1="18.6314" x2="36" y2="1.9314">
						<stop  offset="0" style="stop-color:#8F3A48"/>
						<stop  offset="0.9975" style="stop-color:#B84A64"/>
					</linearGradient>
					<polygon class="st12" points="43.4,18.6 41.9,18.4 44.3,4.4 36,8.3 27.7,4.4 30.1,18.4 28.6,18.6 25.8,1.9 36,6.7 46.2,1.9 	"/>
					<linearGradient id="SVGID_13_" gradientUnits="userSpaceOnUse" x1="36" y1="53.3686" x2="36" y2="70.0686">
						<stop  offset="0" style="stop-color:#8F3A48"/>
						<stop  offset="0.9975" style="stop-color:#B84A64"/>
					</linearGradient>
					<polygon class="st13" points="46.2,70.1 36,65.3 25.8,70.1 28.6,53.4 30.1,53.6 27.7,67.6 36,63.7 44.3,67.6 41.9,53.6 43.4,53.4 	
						"/>
					<linearGradient id="SVGID_14_" gradientUnits="userSpaceOnUse" x1="18.6315" y1="36" x2="1.9315" y2="36">
						<stop  offset="0" style="stop-color:#8F3A48"/>
						<stop  offset="0.9975" style="stop-color:#B84A64"/>
					</linearGradient>
					<polygon class="st14" points="1.9,46.2 6.7,36 1.9,25.8 18.6,28.6 18.4,30.1 4.4,27.7 8.3,36 4.4,44.3 18.4,41.9 18.6,43.4 	"/>
					<linearGradient id="SVGID_15_" gradientUnits="userSpaceOnUse" x1="53.3685" y1="36" x2="70.0685" y2="36">
						<stop  offset="0" style="stop-color:#8F3A48"/>
						<stop  offset="0.9975" style="stop-color:#B84A64"/>
					</linearGradient>
					<polygon class="st15" points="70.1,46.2 53.4,43.4 53.6,41.9 67.6,44.3 63.7,36 67.6,27.7 53.6,30.1 53.4,28.6 70.1,25.8 65.3,36 	
						"/>
					<g>
						<linearGradient id="SVGID_16_" gradientUnits="userSpaceOnUse" x1="23.7887" y1="23.7887" x2="12.9887" y2="12.9887">
							<stop  offset="0" style="stop-color:#A34114"/>
							<stop  offset="0.9975" style="stop-color:#C75724"/>
						</linearGradient>
						<polygon class="st16" points="18.4,29.2 5.8,20.2 16.4,16.4 20.2,5.8 29.2,18.4 28,19.2 20.6,8.9 17.5,17.5 8.9,20.6 19.2,28 		
							"/>
					</g>
					<g>
						<linearGradient id="SVGID_17_" gradientUnits="userSpaceOnUse" x1="48.2113" y1="48.2114" x2="59.0114" y2="59.0114">
							<stop  offset="0" style="stop-color:#A34114"/>
							<stop  offset="0.9975" style="stop-color:#C75724"/>
						</linearGradient>
						<polygon class="st17" points="51.8,66.2 42.8,53.6 44,52.8 51.4,63.1 54.5,54.5 63.1,51.4 52.8,44 53.6,42.8 66.2,51.8 55.6,55.6 
									"/>
					</g>
					<linearGradient id="SVGID_18_" gradientUnits="userSpaceOnUse" x1="23.7887" y1="48.2113" x2="12.9887" y2="59.0113">
						<stop  offset="0" style="stop-color:#A34114"/>
						<stop  offset="0.9975" style="stop-color:#C75724"/>
					</linearGradient>
					<polygon class="st18" points="28,52.8 20.6,63.1 17.5,54.5 8.9,51.4 19.2,44 18.4,42.8 5.8,51.8 16.4,55.6 20.2,66.2 29.2,53.6 	
						"/>
					<g>
						<linearGradient id="SVGID_19_" gradientUnits="userSpaceOnUse" x1="48.2113" y1="23.7887" x2="59.0113" y2="12.9887">
							<stop  offset="0" style="stop-color:#A34114"/>
							<stop  offset="0.9975" style="stop-color:#C75724"/>
						</linearGradient>
						<polygon class="st19" points="53.6,29.2 52.8,28 63.1,20.6 54.5,17.5 51.4,8.9 44,19.2 42.8,18.4 51.8,5.8 55.6,16.4 66.2,20.2 		
							"/>
					</g>
					<linearGradient id="SVGID_20_" gradientUnits="userSpaceOnUse" x1="22.2187" y1="22.2188" x2="49.8184" y2="49.8184">
						<stop  offset="0" style="stop-color:#CC782B"/>
						<stop  offset="1" style="stop-color:#662200"/>
					</linearGradient>
					<path class="st20" d="M36,55.5c-10.8,0-19.5-8.8-19.5-19.5S25.2,16.5,36,16.5S55.5,25.3,55.5,36S46.8,55.5,36,55.5z M36,18.1
						c-9.9,0-17.9,8-17.9,17.9s8,17.9,17.9,17.9s17.9-8,17.9-17.9S45.9,18.1,36,18.1z"/>
				</g>
			</g>
		</svg>
	`
});
