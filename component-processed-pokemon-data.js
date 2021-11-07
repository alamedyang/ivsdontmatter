Vue.component('processed-pokemon-data', {
	mixins: [
		sprimkles,
	],
	data: function () {
		return {
			pokemonMapV2,
		};
	},
	methods: {
		findElementTypeCSSClass: function (type) {
			var result = 'type-bubble type-';
			result = result + type.toLocaleLowerCase();
			return result;
		},
		getFormQuantity: function (form) {
			return Object.keys(form).length;
		},
	},
	template: /*html*/`
<div>
	<p>Processed Pokémon data. ('PokemonMapV2')</p>
	<p>NOTE: Example data. Actual game master import coming soon.</p>
	<table class="normal-table smaller">
		<thead>
			<th>#</th>
			<th>Pokémon</th>
			<th>form</th>
			<th>type 1</th>
			<th>type 2</th>
			<th class="column-stats" title="attack">att</th>
			<th class="column-stats" title="defense">def</th>
			<th class="column-stats" title="stamina">sta</th>
			<th title="assetBundleValue">abv</th>
			<th title="assetBundleSuffix">abs</th>
			<th title="isCostume">ic</th>
		</thead>
		<tbody>
			<template
				v-for="(pokemon, pokemonName, pokeIndex) in pokemonMapV2"
			>
				<tr
					v-for="(form, formName, index) in pokemon.forms"
					:class="(pokeIndex % 2) ? 'even' : 'odd'"
				>
				<td
					class="center"
					v-if="index===0"
					:rowspan="getFormQuantity(pokemon.forms)"
				>#{{pokemon.number}}</td>
				<td
					v-if="index===0"
					:rowspan="getFormQuantity(pokemon.forms)"
				>{{pokemonName}}</td>
				<td>{{formName}}</td>
					<td>
						<span
							:class="findElementTypeCSSClass(form.types[0])"
						>{{form.types[0]}}
						</span>
					</td>
					<td>
						<span
							:class="form.types[1] ? findElementTypeCSSClass(form.types[1]) : ''"
						>{{form.types[1]}}
						</span>
					</td>
					<td class="column-stats" >{{form.attack}}</td>
					<td class="column-stats" >{{form.defense}}</td>
					<td class="column-stats" >{{form.stamina}}</td>
					<td class="center">{{form.assetBundleValue}}</td>
					<td>{{form.assetBundleSuffix}}</td>
					<td>{{form.isCostume}}</td>
				</tr>
			</template>
		</tbody>
	</table>
</div>
	`
});