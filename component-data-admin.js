// UNFINISHED / HALFWAY REDONE

Vue.component('data-admin', {
	data: function () {
		return {
			evaluatingTimestamps: false,
			newDataFetched: false,
			cachedTimestamp: localStorage.getItem('timestamp') || '0',
		};
	},
	computed: {
		assets: function () {
			return this.$store.state.assets;
		},
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
		...Vuex.mapActions([
			'patchAsset',
			'fetchRemoteAsset',
		]),
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
				var newLocalizationData = processLocalV2(
					this.$store.state.localization,
					data.loadedData,
					language,
				);
				this.$store.dispatch(
					'updateLocalization',
					newLocalizationData
				);
				data.processFinished = true;
			} else {
				console.log('No loaded ' + language + ' localization data found. Try to load from cache (local storage) or fetch from remote first.');
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
			this.patchAsset({
				name: 'gameMaster',
				value: {
					processAttempted: true,
				}
			});
			if (this.assets.gameMaster.loadedData) {
				var processedV3 = processGameMaster(this.assets.gameMaster.loadedData);
				this.$store.dispatch(
					'updatePokeMap',
					processedV3
				);
				this.patchAsset({
					name: 'gameMaster',
					value: {
						processAttempted: true,
					}
				});	
				this.patchAsset({
					name: 'gameMaster',
					value: {
						processFinished: true,
					}
				});
			} else {
				console.log('No loaded GM found. Try to load from cache (local storage) or fetch from remote first.');
			}
		},
		clearAllCachedData: function () {
			var self = this;
			Object.keys(self.assets).forEach(function (key){
				localStorage.removeItem(key);
				self.patchAsset({
					name: key,
					value: {
						cached: false,
					}
				});
			});
			this.cachedTimestamp = 0;
		},
		cacheAllLoadedData: function () {
			var self = this;
			Object.keys(self.assets).forEach(function (key){
				var asset = self.assets[key];
				var data = asset.loadedData;
				if (data !== null) {
					localStorage.setItem(key, JSON.stringify(data));
					self.patchAsset({
						name: key,
						value: {
							cached: true,
						}
					});
				} else {
					console.log('Asset "' + key + '" not loaded; not cached.')
				}
			});
			self.cachedTimestamp = self.assets.timestamp.loadedData;
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
					// self.cacheAllLoadedData();
				})
				.catch(function (error) {
					console.error('Something broke loading remote assets.');
					console.error(error);
				});
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
	</div>
	<div class="container_section">
		<table class="normal-table">
			<thead>
				<th>Asset Name</th>
				<th>Fetch Remote</th>
				<th>Fetch Status</th>
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
							successbox: assetState.fetchStatus === 'success',
							errorbox: assetState.fetchStatus === 'failed',
						}"
					>{{assetState.fetchStatus}}</td>
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
						v-if="!assets.timestamp.fetchStatus"
					>not checked</span>
					<span
						v-if="assets.timestamp.fetchStatus"
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