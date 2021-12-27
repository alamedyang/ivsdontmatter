Vue.component('data-localization', {
	mixins: [
		sprimkles,
	],
	data: function () {
		return {
			localization: fallbackLocalization,
		};
	},
	methods: {
		getTypeNameFromLongName: function (_longName, _languageName) {
			var languageName = _languageName || 'English';
			var longName = _longName.toLocaleLowerCase();
			var targetType = localization.types[longName];
			var result = targetType[languageName];
			return result;
		},
		switchToRealData: function () {
			this.localization = localization;
		}
	},
	template: /*html*/`
<div>
	<div>
	<button class="real-button" @click="switchToRealData()">REAL DATA</button>
	<table class="normal-table">
		<thead>
			<th>Pokémon Types</th>
			<th
				v-for="(languages, propertyName) in localization.types.pokemon_type_bug"
			>{{propertyName}}</th>
		</thead>
		<tbody>
		<tr
			v-for="(type, propertyName, index) in localization.types"
			>
			<td>{{propertyName}}</td>
			<td
				v-for="language in type"
			>
				<span
					:class="findElementTypeCSSClass(propertyName)"
				>{{language}}</span>
			</td>
		</tr>
		</tbody>
	</table>
	</div>
</div>
	`
});