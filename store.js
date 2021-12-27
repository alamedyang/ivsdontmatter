var store = new Vuex.Store({
	state: function () {
		var pokeMapSource = 'initial';
		var localization = jsonClone(fallbackLocalization);
		var assets = {
			timestamp: {
				path: "https://raw.githubusercontent.com/PokeMiners/game_masters/master/latest/timestamp.txt",
				fetchStatus: 'not attempted',
				loadedData: null,
				loaded: null,
				cached: null,
			},
			gameMaster: {
				path: "https://raw.githubusercontent.com/PokeMiners/game_masters/master/latest/latest.json",
				fetchStatus: 'not attempted',
				loadedData: null,
				loaded: null,
				cached: null,
				processAttempted: false,
				processFinished: false,
			},
			// localEnglish: {
			// 	path: "https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Texts/Latest%20APK/JSON/i18n_english.json",
			// 	fetchStatus: 'not attempted',
			// 	loadedData: null,
			// 	loaded: null,
			// 	cached: null,
			// 	processAttempted: false,
			// 	processFinished: false,
			// }, // now done more procedurally
		};

		Object.keys(localizationKeys).forEach(function(localName) {
			var language = localizationKeys[localName];
			var path = availableLocalizations[language];
			// console.log('localName: ' + localName);
			// console.log('path: ' + path);
			var languageAsset = {
				path: path,
				fetchStatus: 'not attempted',
				loadedData: JSON.parse(localStorage.getItem(localName) || 'null'),
				loaded: null,
				cached: null,
				processAttempted: false,
				processFinished: false,
			};
			if (languageAsset.loadedData) {
				languageAsset.loaded = true;
				languageAsset.cached = true;
				languageAsset.processAttempted = true;
				localization = processLocalV2(
					localization,
					languageAsset.loadedData,
					language,
				);
				languageAsset.processFinished = true;
			} else {
				console.log('No loaded ' + language + ' localization data found. Try to load from cache (local storage) or fetch from remote first.');
			}
			assets[localName] = languageAsset;
		});
		['gameMaster','timestamp'].forEach(function(key) {
			var cachedString = localStorage.getItem(key);
			if (cachedString) {
				var asset = assets[key];
				asset.loaded = true;
				asset.cached = true;
				asset.loadedData = JSON.parse(cachedString);
			}
		});

		var pokeMap = {};
		if (assets.gameMaster.loadedData) {
			pokeMapSource = 'localStorage';
			pokeMap = processGameMaster(assets.gameMaster.loadedData);
			assets.gameMaster.processFinished = true;
		} else {
			pokeMap = jsonClone(pokemonMapV2);
		}

		return {
			pokeMapSource: pokeMapSource,
			pokeMap: pokeMap,
			localization: localization,
			assets: assets
		};
	},
	mutations: {
		UPDATE_POKE_MAP: function (state, payload) {
			state.pokeMapSource = 'UPDATE_POKE_MAP';
			state.pokeMap = payload;
		},
		UPDATE_LOCALIZATION: function (state, payload) {
			state.localization = payload;
		},
		PATCH_ASSET: function (state, payload) {
			var newAsset = Object.assign(
				{},
				state.assets[payload.name],
				payload.value,
			);
			state.assets[payload.name] = newAsset;
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
		patchAsset: function (context, payload) {
			context.commit('PATCH_ASSET', payload);
		},
		fetchRemoteAsset: function (context, assetName) {
			var path = context.state.assets[assetName].path;
			context.commit('PATCH_ASSET', {
				name: assetName,
				value: {
					fetchStatus: 'attempting'
				}
			});
			var fetchPromise = fetch(path);
			var responseHandler = function (response) {
				context.commit('PATCH_ASSET', {
					name: assetName,
					value: {
						fetchStatus: response.ok ? 'success' : 'failed',
					}
				});
				if (!response.ok) {
					throw new Error('Unable to find remote asset "' + assetName + '"');
				}
				return response.json();
			};
			var jsonAcquired = function (data) {
				context.commit('PATCH_ASSET', {
					name: assetName,
					value: {
						loadedData: data,
						loaded: true,
					}
				});
			};
			var ifFetchFailed = function (error) {
				console.error(error);
				context.commit('PATCH_ASSET', {
					name: assetName,
					value: {
						fetchStatus: 'failed',
					}
				});
			};
			return fetchPromise
				.then(responseHandler)
				.then(jsonAcquired)
				.catch(ifFetchFailed);
		},
	}
})
