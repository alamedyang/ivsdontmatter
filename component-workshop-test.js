Vue.component('workshop-test', {
	data: function () {
		return {
			storedGMtime: localStorage.getItem('GMtime'),
			timestampRequestStatus: null,
			timestampRequestText: null,
			timestampRequestFailed: false,
			newGMImported: false,
		}
	},
	computed: {
		gMRelationshipToCached: function () {
			var timestampRequestText = parseInt(this.timestampRequestText, 10) || 0;
			var storedGMtime = parseInt(this.storedGMtime, 10) || 0;
			var result = 'broken. Something somewhere is broken, anyway';
			if (timestampRequestText > storedGMtime) {
				result = 'newer';
			} else if (timestampRequestText === storedGMtime) {
				result = 'identical';
			} else if (timestampRequestText < storedGMtime) {
				result = 'older than what\'s in your cache! Are you a time traveler?';
			} else {
				result = 'BROKEN! Requested GM: {{timestampRequestText}}, cached GM: {{storedGMtime}}';
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
		importGM: function () {
			localStorage.setItem('GMtime', this.timestampRequestText)
			this.storedGMtime = this.timestampRequestText;
			this.newGMImported = true;
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
				self.timestampRequestText = stuff;
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
		>{{makeIntoDate(timestampRequestText)}}</span>
	</p>
	<div
		v-if="!newGMImported"
	>
		<button
			v-if="!timestampRequestText"
			class="real-button"
			@click="checkRealTimestamp"
		>Check game master?</button>
		<p
			v-if="timestampRequestText"
		>
			The fetched GM is {{gMRelationshipToCached}}!
		</p>
		<button
			v-if="timestampRequestText"
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
		<p>New game master imported!<br/>
		(Not really! But the backbone is here at last, yesssss)</p>
	</div>
	<div
		v-if="timestampRequestFailed"
	>
		<p class="error">Unable to find remote asset.</p>
	</div>
</div>
	`
});