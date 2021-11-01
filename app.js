var app = new Vue({
	el: '#app',
	data: function () {
		return {
			currentApp: "stat-explorer",
			showPokeModal: false,
			infoShown: false,
		};
	},
	methods: {
		toggleShowInfo: function (event) {
			event.preventDefault();
			this.infoShown = !this.infoShown;
		},
		setPokeModalState: function (value) {
			this.showPokeModal = value;
		}
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
				<button
					class="minihint blocky secret-button"
					@click="toggleShowInfo"
				>
					<em>What is this?</em>
				</button>
			</h1>
			<div
				v-show="infoShown"
				class="container_section"
			>
				<h4>
					IVs don't matter!
				</h4>
				<p>
					In Pok&eacute;mon Go, IVs don't matter. Here's why.
				</p>
				<h4>
					Well, okay... IVs matter sometimes.
				</h4>
				<p>
					But of all the things that matter, they matter the least.
				</p>
				<ul>
					<li>Level matters more.</li>
					<li>Species (base stats) matters more.</li>
					<li>Shadow boost matters more.</li>
					<li>Moveset matters more.</li>
				</ul>
				<h4>
					An interactive demonstration.
				</h4>
				<p>
					PoGo tells you almost nothing about your Pok&eacute;mon's stats,
					apart from its IVs (and CP), which on their own can be incredibly
					misleading.
				</p>
				<p>
					It's my hope that these interactive web toys will
					demonstrate what is actually happening in-game, including
					the exact role IVs play in a Pok&eacute;mon's performance.
				</p>
				<h4>
					A work in progress.
				</h4>
				<p>
					I am learning Vue.js to do this, and I work on it once in a while
					in my free time. While I have grand ambitions, progress will likely
					be piecemeal.
				</p>
				<button
					@click="toggleShowInfo"
					class="secret-button"
				>
					<strong class="hint">CLOSE</strong>
				</button>
			</div>
			<ul class="menu">
				<li class="menu-item">
					<a class=" menu-selection" href="#">
						Stat Explorer
					</a>
				</li>
				<!-- <li>
					<span class="menu-item">
						Game Data
					</span>
				</li>
				<li>
					<span class="menu-item">
						Info
					</span>
				</li> -->
			</ul>
			<stat-explorer-app
				:show-poke-modal="showPokeModal"
				@poke-modal-false="setPokeModalState(false)"
				@poke-modal-true="setPokeModalState(true)"
			>
			</stat-explorer-app>
		</div>
	`
});