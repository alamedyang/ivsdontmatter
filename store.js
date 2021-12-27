var store = new Vuex.Store({
	state: {
		pokeMapSource: 'initial',
		pokeMap: jsonClone(pokemonMapV2),
		localization: jsonClone(fallbackLocalization),
	},
	mutations: {
		UPDATE_POKE_MAP: function (state, payload) {
			state.pokeMapSource = 'UPDATE_POKE_MAP';
			state.pokeMap = payload;
		},
		UPDATE_LOCALIZATION: function (state, payload) {
			state.localization = payload;
		},
	},
	actions: {
		updatePokeMap: function (context, payload) {
			context.commit(
				'UPDATE_POKE_MAP',
				payload
			);
		},
		updateLocalization: function (context, payload) {
			context.commit(
				'UPDATE_LOCALIZATION',
				payload
			);
		},
	}
})
