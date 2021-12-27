// UNFINISHED / HALFWAY REDONE

Vue.component('data-admin', {
	data: function () {
		var result = {
			assets: {
				timestamp: {
					path: "https://raw.githubusercontent.com/PokeMiners/game_masters/master/latest/timestamp.txt",
					fetchStatus: 'not attempted',
					fetchSucceeded: null,
					loadedData: null,
					loaded: null,
					cached: null,
				},
				gameMaster: {
					path: "https://raw.githubusercontent.com/PokeMiners/game_masters/master/latest/latest.json",
					fetchStatus: 'not attempted',
					fetchSucceeded: null,
					loadedData: null,
					loaded: null,
					cached: null,
					processAttempted: false,
					processFinished: false,
				},
				// localEnglish: {
				// 	path: "https://raw.githubusercontent.com/PokeMiners/pogo_assets/master/Texts/Latest%20APK/JSON/i18n_english.json",
				// 	fetchStatus: 'not attempted',
				// 	fetchSucceeded: null,
				// 	loadedData: null,
				// 	loaded: null,
				// 	cached: null,
				// 	processAttempted: false,
				// 	processFinished: false,
				// }, // now done more procedurally
			},
			copiedAvailableLocalizations: availableLocalizations,
			shownDataStatus: "Remote not yet checked.",
			evaluatingTimestamps: false,
			newDataFetched: false,
			cachedTimestamp: localStorage.getItem('timestamp') || '0',
		};
		Object.getOwnPropertyNames(result.copiedAvailableLocalizations).forEach(function(language) {
			var localName = 'local' + language.replace(' ','');
			var path = result.copiedAvailableLocalizations[language];
			console.log('localName: ' + localName);
			console.log('path: ' + path);
			result.assets[localName] = {
				path: path,
				fetchStatus: 'not attempted',
				fetchSucceeded: null,
				loadedData: null,
				loaded: null,
				cached: null,
				processAttempted: false,
				processFinished: false,
			};
		})
		Object.keys(result.assets).forEach(function(key) {
			var cachedString = localStorage.getItem(key);
			if (cachedString) {
				var asset = result.assets[key];
				asset.loaded = true;
				asset.cached = true;
				asset.loadedData = JSON.parse(cachedString);
			}
		})
		return result;
	},
	computed: {
		timestampsRelationship: function () {
			var cachedTime = parseInt(this.cachedTimestamp, 10) || 0;;
			var fetchedTime = parseInt(this.assets.timestamp.loadedData, 10) || 0;;
			var result = 'broken. Something somewhere is broken, anyway';
			if (fetchedTime > cachedTime) {
				result = 'newer';
			} else if (fetchedTime === cachedTime) {
				result = 'the same age';
			} else if (fetchedTime < cachedTime) {
				result = 'older than what\'s in your cache! Are you a time traveler?';
			} else {
				result = 'BROKEN! Requested timestamp: {{fetchedTime}}, '
					+ 'cached timestamp: {{cachedTime}}';
			}
			return result;
		},
	},
	methods: {
		makeIntoDate: function (int) {
			var number = parseInt(int, 10) || 0;
			var result = 'the dawn of time';
			if (number > 0) {
				result = new Date(number);
			}
			return result;
		},
		evaluateTimestamps: function () {
			var self = this;
			this.fetchRemoteAsset('timestamp')
				.then(function(){
					self.evaluatingTimestamps = true;
				})
				.catch(function(){
					console.error('Something went wrong during timestamp evaluation!');
				});
		},
		processLocalLanguage: function (language) {
			var localLanguage = 'local' + language.replace(' ','');
			var data = this.assets[localLanguage];
			data.processAttempted = true;
			if (data.loadedData) {
				processLocalV2(data.loadedData, language);
				data.processFinished = true;
			} else {
				console.log('No loaded ' + language + 'localization data found. Try to load from cache (local storage) or fetch from remote first.');
			}
		},
		processData: function () {
			this.processLocalLanguage('English');
			this.processLocalLanguage('Japanese');
			this.processLocalLanguage('French');
			this.processLocalLanguage('German');
			this.processLocalLanguage('Italian');
			this.processLocalLanguage('TraditionalChinese');
			this.processLocalLanguage('BrazilianPortuguese');
			this.processLocalLanguage('Korean');
			this.processLocalLanguage('Russian');
			this.processLocalLanguage('Thai');
			this.processLocalLanguage('Spanish');
			this.assets.gameMaster.processAttempted = true;
			if (this.assets.gameMaster.loadedData) {
				processGameMaster(this.assets.gameMaster.loadedData);
				this.assets.gameMaster.processFinished = true;
			} else {
				console.log('No loaded GM found. Try to load from cache (local storage) or fetch from remote first.');
			}
		},
		clearAllCachedData: function () {
			var self = this;
			Object.keys(self.assets).forEach(function (key){
				var asset = self.assets[key];
				localStorage.removeItem(key);
				asset.cached = false;
			});
			this.cachedTimestamp = 0;
		},
		cacheAllLoadedData: function () {
			var self = this;
			Object.keys(self.assets).forEach(function (key){
				var asset = self.assets[key];
				var text = asset.loadedData;
				if (text !== null) {
					localStorage.setItem(key, JSON.stringify(text));
					asset.cached = true;
				} else {
					console.log('Asset "' + key + '" not loaded; not cached.')
				}
			});
			self.cachedTimestamp = self.assets.timestamp.loadedData;
		},
		loadAllCachedData: function () {
			var self = this;
			Object.keys(self.assets).forEach(function (key){
				var asset = self.assets[key];
				if (localStorage.getItem(key) !== null){
					asset.loadedData = localStorage.getItem(key);
					asset.loaded = true;
				} else {
					console.log('Asset "' + key + '" not found in cache.')
				}
			});
			self.cachedTimestamp = localStorage.getItem('timestamp') || '0';
		},
		fetchAllRemoteDataExceptTimestamp: function () {
			var self = this;
			var assetsPromises = Object.keys(self.assets)
				.filter(function(key){
					return key !== 'timestamp';
				})
				.map(function (key){
					return self.fetchRemoteAsset(key);
				});
			Promise.all(assetsPromises)
				.then(function () {
					self.evaluatingTimestamps = false;
					self.newDataFetched = true;
					self.cacheAllLoadedData();
				})
				.catch(function () {
					console.error('Something broke loading remote assets.');
				});
		},
		fetchRemoteAsset: function (assetName) {
			var self = this;
			var asset = self.assets[assetName];
			var path = asset.path;
			asset.fetchStatus = 'attempting';
			asset.fetchSucceeded = null;
			var fetchPromise = fetch(path);
			var responseHandler = function (response) {
				asset.fetchStatus = response.ok;
				if (!response.ok) {
					asset.fetchSucceeded = false;
					throw new Error('Unable to find remote asset "' + assetName + '"');
				}
				return response.json();
			};
			var textAcquired = function (data) {
				asset.loadedData = data;
				asset.loaded = true;
				asset.fetchSucceeded = true;
				return asset;
			};
			var ifFetchFailed = function (error) {
				console.error(error);
				asset.fetchStatus = 'failed';
			};
			return fetchPromise
				.then(responseHandler)
				.then(textAcquired)
				.catch(ifFetchFailed);
		},
	},
	template: /*html*/`
<div>
	<div class="container_section">
		<button
			class="real-button"
			@click="clearAllCachedData"
		>Clear cached data</button>
		<button
			class="real-button"
			@click="cacheAllLoadedData"
		>Cache loaded data</button>
		<button
			class="real-button"
			@click="loadAllCachedData"
		>Load cached data</button>
	</div>
	<div class="container_section">
		<table class="normal-table">
			<thead>
				<th>Asset Name</th>
				<th>Fetch Remote</th>
				<th>Fetch Status</th>
				<th>Fetch Succeeded</th>
				<th>Loaded</th>
				<th>Cached</th>
			</thead>
			<tbody>
				<tr
					v-for="(assetState, assetName) in assets"
				>
					<td>{{assetName}}</td>
					<td><button
						class="real-button"
						@click="fetchRemoteAsset(assetName)"
					>Fetch</button></td>
					<td
						:class="{
							successbox: assetState.fetchSucceeded
						}"
					>{{assetState.fetchStatus}}</td>
					<td
						:class="{
							successbox: assetState.fetchSucceeded
						}"
					>{{assetState.fetchSucceeded}}</td>
					<td
						:class="{
							successbox: assetState.loaded
						}"
					>{{assetState.loaded}}</td>
					<td
						:class="{
							successbox: assetState.cached
						}"
					>{{assetState.cached}}</td>
				</tr>
			</tbody>
		</table>
		<p>
			<span><strong>Cached game data (local storage):</strong></span><br/>
			<span>{{makeIntoDate(this.cachedTimestamp)}}</span>
		</p>
		<div
			v-if="newDataFetched"
		>
			<div>New game data loaded and cached!</div>
		</div>
		<div
			v-if="!newDataFetched"
		>
			<div
				v-if="!evaluatingTimestamps"
			>
				<button
					class="real-button"
					@click="evaluateTimestamps"
				>Evaluate cached data?</button>
			</div>
			<div
				v-if="evaluatingTimestamps"
			>
				<p>
					<span><strong>Most recent game data:</strong></span><br/>
					<span
						v-if="!assets.timestamp.fetchSucceeded"
					>not checked</span>
					<span
						v-if="assets.timestamp.fetchSucceeded"
					>{{makeIntoDate(assets.timestamp.loadedData)}}</span>
				</p>
				<p>The fetched game data is {{timestampsRelationship}}!</p>
				<button
					class="real-button"
					@click="fetchAllRemoteDataExceptTimestamp"
				>Fetch remote game data?</button>
			</div>
		</div>
	</div>
	<div class="container_section">
	<table class="normal-table">
			<thead>
				<th>Asset Name</th>
				<th>Loaded</th>
				<th>Processing Started</th>
				<th>Processing Finished</th>
			</thead>
			<tbody>
				<tr
					v-for="(assetState, assetName) in assets"
				>
					<td>{{assetName}}</td>
					<td
						:class="{
							successbox: assetState.loaded
						}"
					>{{assetState.loaded}}</td>
					<td
						:class="{
							successbox: assetState.processAttempted
						}"
					>{{assetState.processAttempted}}</td>
					<td
						:class="{
							successbox: assetState.processFinished
						}"
					>{{assetState.processFinished}}</td>
				</tr>
			</tbody>
		</table>
		<button
			class="real-button"
			@click="processData"
		>Process data?</button>
	</div>
</div>
	`
});