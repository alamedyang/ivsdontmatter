Vue.component('q-and-a', {
	data: function () {
		return {
			"drawerOpen": false
		};
	},
	props: {
		label: {
			type: String,
			require: true,
		},
		bullet: {
			type: Boolean,
			require: false,
		},
	},
	methods: {
		toggleAnswerDrawer: function() {
			this.drawerOpen = !this.drawerOpen;
		},
		closeAnswerDrawer: function() {
			this.drawerOpen = false;
		},
		openAnswerDrawer: function() {
			this.drawerOpen = true;
		},
	},
	template: /*html*/`
<div>
	<h4 class="sorta-spacious-top">
		<button
			class="secret-button left"
			@click="toggleAnswerDrawer"
		>
			<span
				v-if="bullet"
			>•</span>
			<span>{{label}}</span>
			<span
				class="hint"
				v-show="!drawerOpen"
			>[+]</span>
			<span
				class="hint"
				v-show="drawerOpen"
			>[–]</span>
		</button>
	</h4>
	<div
		v-show="drawerOpen"
	>
		<div class="container_section_inner">
			<slot>(placeholder)</slot>
			<button
				class="secret-button hint"
				@click="closeAnswerDrawer"
			>CLOSE</button>
		</div>
	</div>
</div>
	`
});