Vue.component('stat-bar', {
	props: {
		label: {
			type: String,
			required: true,
		},
		stat: {
			type: Object,
			required: true,
		}
	},
	computed: {
		scale: function () {
			return 500;
		},
	},
	template: '#stat-bar',
});

var app = new Vue({
	el: '#stat-explorer',
	data:{
		statName: 5,
		pokemonList: [
			{
				name: 'Mewtwo',
				stats: {
					attack: { base: 300, iv: 13 },
					defense: { base: 182, iv: 10 },
					stamina: { base: 214, iv: 15 },
				}
			},
			{
				name: 'Gengar',
				stats: {
					attack: { base: 261, iv: 4 },
					defense: { base: 149, iv: 6 },
					stamina: { base: 155, iv: 11 },
				}
			},
			{
				name: 'Magikarp',
				stats: {
					attack: { base: 29, iv: 15 },
					defense: { base: 85, iv: 14 },
					stamina: { base: 85, iv: 12 },
				}
			},
		],
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