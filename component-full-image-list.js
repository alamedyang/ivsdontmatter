Vue.component('full-image-list', {
	props: {
		loadImageList: {
			type: Boolean,
			require: true,
		}
	},
	data: function () {
		return {
			imageListByDexNumber,
			showShiny: true,
		};
	},
	methods: {
		findTitle: function (form) {
			var assetBundleValue = form.assetBundleValue;
			var assetBundleValueExtra = form.assetBundleValueExtra;
			var assetBundleSuffix = form.assetBundleSuffix;
			var title = 'something broke';
			if (!assetBundleValue) {
				assetBundleValue = 0;
			}
			if (!assetBundleValueExtra) {
				assetBundleValueExtra = 0;
			}
			title = assetBundleValue;
			if (assetBundleValueExtra) {
				title = title +
					' (variant ' +
					assetBundleValueExtra +
					')';
			}
			if (assetBundleSuffix) {
				title = title +
				' (suffix: ' +
					assetBundleSuffix +
				')';
		}
			return title;
		},
		determineShinyExistance: function (fileName) {
			var shinyTestName = fileName.replace('.png','_shiny.png');
			var hasAShiny = true;
			if (totalImages.indexOf(shinyTestName) !== -1) {
				hasAShiny = false;
			}
			return hasAShiny;
		},
		isFemale: function (num) {
			if (num === 1) {
				return true;
			}
		},
	},
	template: /*html*/`
<div>
	<p>Detangling Pokémon forms based on info extracted from the asset file names!</p>
	<p>Red outline means there is no shiny sprite available.
	Pink background means female (probably).
	(NOTE: Image list is updated manually — data may not be current.)</p>
	<p
		v-show="!loadImageList"
	>
		<button
			@click="$emit('confirm-load-images')"
			class="real-button"
		>
			<strong>LOAD IMAGES INSTEAD (this may take a while)</strong>
		</button>
	</p>
	<div
		v-if="loadImageList"
		v-for="(values,dexNumber) in imageListByDexNumber"
		:key="dexNumber"
	>
		<span
			v-for="form in values"
			class="blocky"
			:class="{
				no_shiny: determineShinyExistance(form.fileName),
				pink: isFemale(form.assetBundleValue),
			}"
			:title="findTitle(form)"
		>
			<pokemon-image-display
				:path="form.fileName"
				width="128"
				height="128"
			></pokemon-image-display>
		</span>
	</div>
	<div
		v-show="!loadImageList"
	>
		<div
			v-for="species in imageListByDexNumber"
		><table class="image-table">
			<thead>
				<th>{{species[0].dexNumber}}</th>
			</thead>
			<tbody>
				<tr>
					<td
						v-for="form in species"
						class="image-table-cell"
						:class="{
							no_shiny: determineShinyExistance(form.fileName),
							pink: isFemale(form.assetBundleValue),
						}"
					>
						<span
							class="blocky"
						>
							{{form.assetBundleValue}}
						</span><br/>
						<span class="blocky">
							{{form.assetBundleValueExtra ? 'var: ' + form.assetBundleValueExtra : ''}}
						</span><br/>
						<span class="blocky">
							{{form.assetBundleSuffix}}
						</span>
					</td>
				</tr>
			</tbody></table>
		</div>
	</div>
</div>
	`
});