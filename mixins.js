// This mixin is so that "outside" JavaScript can do stuff and edit the GM "base" data while allowing all components that rely on it to not have to do anything weird.
var sprimkles = {
	computed: {
		// pokeMap: function () {
		// 	return this.$store.state.pokeMap;
		// },
		// OR...
		// these both do the same thing
		...Vuex.mapState([
			'pokeMap',
			'localization',
		])
	},
	methods: {
		getSyntheticForm: function (pokemon) {
			var name = pokemon.name;
			var formName = pokemon.form || 'Normal';
			var base = this.pokeMap[name] || {forms:{}};
			var form = base.forms[formName] || {};
			var synthetic = Object.assign(
				{},
				base,
				form
			);
			delete synthetic.forms;
			return synthetic;
		},
		getPokemonLevel: function (pokemon) {
			var level = pokemon.level;
			if (pokemon.buddy) {
				level +=1
			};
			return level;
		},
		lookupCPMFromLevel: function (level) {
			return levelMap[level] || levelMap["1"];
		},
		functionalHundo(pokemon) {
			var currentLevel = this.getPokemonLevel(pokemon);
			var cpm = this.lookupCPMFromLevel(currentLevel);
			var staminaIV = pokemon.ivs.stamina;
			var baseStamina = this.getSyntheticForm(pokemon).stamina;
			var currentHP = Math.floor( (baseStamina + staminaIV) * cpm );
			var maxHP = Math.floor( (baseStamina + 15) * cpm );
			if (
				(staminaIV !== 15 && currentHP === maxHP)
				&& pokemon.ivs.attack === 15
				&& pokemon.ivs.defense === 15
			) {
				return true;
			}
		},
		IVSum: function (ivs) {
			var sum =
				ivs.attack +
				ivs.defense +
				ivs.stamina;
			return sum;
		},
		IVPercentage: function (ivs) {
			var percentage =
				this.IVSum(ivs) / 0.45;
			percentage = Math.round(percentage * 10) / 10;
			return percentage;
		},
		IVStarEval: function (ivs) {
			var sum = this.IVSum(ivs);
			var getStarRating = function (starRange) {
				return (
					sum >= starRange.lowSum
					&& sum <= starRange.highSum
				);
			}
			var stars = starBreakPoints.find(getStarRating)
			return stars;
		},
		getAssetBundleSuffix: function (selectedSpecies, selectedForm) {
			var species = this.pokeMap[selectedSpecies] || {};
			var form = species.forms[selectedForm] || {};
			var result = form.assetBundleSuffix;
			return result;
		},
		getAssetBundleValue: function (selectedSpecies, selectedForm) {
			var result = '00';
			var species = this.pokeMap[selectedSpecies] || {};
			var form = species.forms[selectedForm] || {};
			var assetBundleValue = form.assetBundleValue
			if (assetBundleValue) {
				result = ''+assetBundleValue;
			}
			// console.log('assetBundleValue: ' + assetBundleValue);
			return result;
		},
		calculateCP: function (pokemon) {
			var basePokemon = this.getSyntheticForm(pokemon);
			var level = this.getPokemonLevel(pokemon);
			var ivs = pokemon.ivs;
			var cpm = this.lookupCPMFromLevel(level);
			var attack = basePokemon.attack + ivs.attack;
			var defense = basePokemon.defense + ivs.defense;
			var stamina = basePokemon.stamina + ivs.stamina;
			// console.log({
			// 	basePokemon,
			// 	cpm,
			// 	attack,
			// 	defense,
			// 	stamina
			// });
			return Math.floor(Math.max(
				((attack * Math.sqrt(defense) * Math.sqrt(stamina) * Math.pow(cpm, 2))/10),
				10
			));
		},
		getPokemonListIndexFromId: function (id) {
			var index = this.pokemonList.findIndex(
				function (pokemonListObjects) {
					return pokemonListObjects.id === id;
				}
			)
			return index;
		},
		findElementTypeCSSClass: function (type) {
			var shortType = (type || '').toLocaleLowerCase().replace('pokemon_type_','')
			var result = 'type-bubble type-';
			result = result + shortType;
			return result;
		},
	}
};


var makeGenericObjectComputedPropertiesSetter = function(dataPath, propertyNameList) {
	var computedObject = {};
	var mutatorMethodName = 'emitChangesFor-' + dataPath;
	var mutationEventName = 'update:' + dataPath;
	propertyNameList.forEach(function (propertyName) {
		computedObject[propertyName] = {
			get: function () {
				return this[dataPath][propertyName];
			},
			set: function (value) {
				// console.log(`dataPath:${dataPath}, propertyName:${propertyName}, value: ${value}`)
				this[mutatorMethodName](
					{
						[propertyName]: value
					}
				);
			},
		};
	});
	return {
		computed: computedObject,
		methods: {
			[mutatorMethodName](changes) {
				var newValue = Object.assign(
					{},
					this[dataPath],
					changes
				);
				this.$emit(mutationEventName, newValue);
			},
		}
	};
}

var makeGenericPropObjectComputedPropertiesSetter = function(
	propName,
	propertyNameList,
) {
	return Object.assign(
		{
			props: {
				[propName]: {
					type: Object,
					required: true,
				},
			},
		},
		makeGenericObjectComputedPropertiesSetter(
			propName,
			propertyNameList,
		),
	);
}

var pokemonMutationMixin = makeGenericPropObjectComputedPropertiesSetter(
	'pokemon',
	[
		'name',
		'form',
		'id',
		'level',
		'ivs',
		'expanded',
		'shadow',
		'buddy',
		'shiny',
	],
);

var ivsMutationMixin = makeGenericObjectComputedPropertiesSetter(
	'ivs',
	[
		'attack',
		'defense',
		'stamina',
	],
);

var jsonClone = function (object) {
	return JSON.parse(JSON.stringify(object));
};