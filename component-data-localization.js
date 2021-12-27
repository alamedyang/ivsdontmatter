Vue.component('data-localization', {
	mixins: [
		sprimkles,
	],
	template: /*html*/`
<div>
	<div>
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