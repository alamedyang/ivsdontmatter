Vue.component('workshop-test', {
	data: function () {
		return {
			gMProcessAttempted: false,
			gMProcessSucceeded: false,
			storedGMtime: localStorage.getItem('GMtime') || '0',
			timestampRequestStatus: null,
			timestampRequestFailed: false,
			timestampContentRaw: null,
			gMRequestStatus: null,
			gMRequestFailed: false,
			gMContentRaw: null,
			newGMImported: false,
			attemptingGMImport: false,
			processingGMImport: false,
		}
	},
	computed: {
		gMRelationshipToCached: function () {
			var timestampContentRaw = parseInt(this.timestampContentRaw, 10) || 0;
			var storedGMtime = parseInt(this.storedGMtime, 10) || 0;
			var result = 'broken. Something somewhere is broken, anyway';
			if (timestampContentRaw > storedGMtime) {
				result = 'newer';
			} else if (timestampContentRaw === storedGMtime) {
				result = 'identical';
			} else if (timestampContentRaw < storedGMtime) {
				result = 'older than what\'s in your cache! Are you a time traveler?';
			} else {
				result = 'BROKEN! Requested GM: {{timestampContentRaw}}, cached GM: {{storedGMtime}}';
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
		startGMProcessing: function () {
			processRawGameData(rawGMJSON);
		},
		startClearCachedGM: function () {
			this.storedGMtime = 0;
			clearCachedGM();
		},
		startLoadCachedGM: function () {
			loadCachedGM();
		},
		importGM: function () {
			var self = this;
			var path = "https://raw.githubusercontent.com/PokeMiners/game_masters/master/latest/latest.json";
			var fetchPromise = fetch(path);
			this.gMRequestFailed = false;
			this.attemptingGMImport = true;
			var responseHandler = function (response) {
				self.gMRequestStatus = response.ok;
				if (!response.ok) {
					throw new Error('Unable to find remote GM');
				}
				return response.text();
			};
			var textAcquired = function (text) {
				rawGMJSON = JSON.parse(text);
				self.importGMSuccess();
			};
			var ifFetchFailed = function (error) {
				console.error(error);
				self.gMRequestFailed = true;
			};
			fetchPromise
				.then(responseHandler)
				.then(textAcquired)
				.catch(ifFetchFailed);
		},
		importGMSuccess: function () {
			localStorage.setItem('GMtime', this.timestampContentRaw)
			localStorage.setItem('rawGMJSON', JSON.stringify(rawGMJSON))
			this.storedGMtime = this.timestampContentRaw;
			this.newGMImported = true;
			this.attemptingGMImport = false;
		},
		checkRealTimestamp: function () {
			var self = this;
			var path = "https://raw.githubusercontent.com/PokeMiners/game_masters/master/latest/timestamp.txt";
			var fetchPromise = fetch(path);
			this.timestampRequestFailed = false;
			var responseHandler = function (response) {
				self.timestampRequestStatus = response.ok;
				if (!response.ok) {
					throw new Error('Unable to find remote asset');
				}
				return response.text();
			};
			var textAcquired = function (stuff) {
				self.timestampContentRaw = stuff;
			};
			var ifFetchFailed = function (error) {
				console.error(error);
				self.timestampRequestFailed = true;
			};
			fetchPromise
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
			@click="startClearCachedGM"
		>Clear cached GM</button>
		<button
			class="real-button"
			@click="startLoadCachedGM"
		>Load cached GM</button>
		<button
			class="real-button"
			@click="startGMProcessing"
		>Process cached GM</button>
	</div>
	<div
		class="container_section"
	>
		<p>
			<span><strong>Cached GM (local storage):</strong></span><br/>
			<span>{{makeIntoDate(storedGMtime)}}</span>
		</p>
		<p>
			<span><strong>Most recent GM:</strong></span><br/>
			<span
				v-if="!timestampRequestStatus"
			>not checked</span>
			<span
				v-if="timestampRequestStatus"
			>{{makeIntoDate(timestampContentRaw)}}</span>
		</p>
		<div
			v-if="!newGMImported"
		>
			<button
				v-if="!timestampContentRaw"
				class="real-button"
				@click="checkRealTimestamp"
			>Check game master?</button>
			<p
				v-if="timestampContentRaw"
			>
				The fetched GM is {{gMRelationshipToCached}}!
			</p>
			<button
				v-if="timestampContentRaw"
				class="real-button"
				@click="importGM"
			>
				<span
					v-if="gMRelationshipToCached !== 'identical'"
				>Import new game master?</span>
				<span
					v-if="gMRelationshipToCached === 'identical'"
				>Import new game master anyway?</span>
			</button>
		</div>
		<div
			v-if="newGMImported"
		>
			<p>New game master imported!</p>
		</div>
		<div
			v-if="timestampRequestFailed"
		>
			<p class="error">Unable to find remote asset.</p>
		</div>
		<div
			v-if="attemptingGMImport"
		>
			<p>IMPORTING GM</p>
		</div>
		<div
			v-if="processingGMImport"
		>
			<p>PROCESSING GM</p>
		</div>
	</div>
</div>
	`
});