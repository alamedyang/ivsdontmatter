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
		level: 20,
		pokemonList,
	},
	computed: {
		lookupFromMap: function () {
			return levelMap[this.level] || levelMap["1"];
		},
	},
	methods: {
		calculateCP: function (pokemon, cpm) {
			var stats = pokemon.stats;
			var attack = stats.attack.base + stats.attack.iv;
			var defense = stats.defense.base + stats.defense.iv;
			var stamina = stats.stamina.base + stats.stamina.iv;
			return Math.floor(Math.max(
				((attack * Math.sqrt(defense) * Math.sqrt(stamina) * Math.pow(cpm, 2))/10),
				10
			));
		}
	},
});