Vue.component('stat-bar', {
	props: {
		label: {
			type: String,
			required: true,
		},
		stat: {
			type: Object,
			required: true,
		},
		cpm: {
			type: Number,
			required: false,
			default: function () {
				return 0.85;
			},
		},
	},
	computed: {
		scale: function () {
			return (496 +15) * 0.85;
		},
	},
	template: '#stat-bar',
});

var app = new Vue({
	el: '#stat-explorer',
	data:{
		level: 5,
		pokemonList,
	},
	computed: {
		lookupFromMap: function () {
			return levelMap[this.level] || levelMap["1"];
		},
	},
	methods: {
		increaseStatName: function () {
			this.statName++;
		},
		decreaseStatName: function () {
			this.statName--;
		},
	},
});