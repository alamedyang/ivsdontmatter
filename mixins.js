var statMethodsMixin = {
	methods: {
		getBasePokemon: function (pokemon) {
			return pokemonMap[pokemon.name];
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
		calculateCP: function (pokemon) {
			var basePokemon = this.getBasePokemon(pokemon);
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
		}
	}
};
