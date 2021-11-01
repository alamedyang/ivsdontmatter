var app = new Vue({
	el: '#app',
	data: function () {
		return {
			currentApp: "stat-explorer",
			showPokeModal: false,
			infoShown: false,
			menuItems: {
				'stat-explorer': 'STAT EXPLORER',
				'info': 'INFO',
			}
		};
	},
	methods: {
		toggleShowInfo: function (event) {
			event.preventDefault();
			this.infoShown = !this.infoShown;
		},
		setPokeModalState: function (value) {
			this.showPokeModal = value;
		},
		setCurrentApp: function (newData) {
			this.currentApp = newData;
		},
	},
	watch: {
		showPokeModal: function (newValue, oldValue) {
			var methodName = newValue ? 'add' : 'remove';
			document.body.classList[methodName]('modal-showing');
		},
	},
	template: /*html*/`
		<div class="container">
			<h1 class="title-flex flat_top">
				<span>IVs Don't Matter </span>
			</h1>
			<nav>
				<button
					v-for="(label, key) in menuItems"
					class="nav-button"
					:class="{
						'active': currentApp === key
					}"
					@click="setCurrentApp(key)"
				>{{label}}</button>
			</nav>
			<stat-explorer-app
				v-show="currentApp==='stat-explorer'"
				:show-poke-modal="showPokeModal"
				@poke-modal-false="setPokeModalState(false)"
				@poke-modal-true="setPokeModalState(true)"
			>
			</stat-explorer-app>
			<info-words
				v-show="currentApp==='info'"
			>
			</info-words>
		</div>
	`
});