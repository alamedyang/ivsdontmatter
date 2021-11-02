Vue.component('data-viewer', {
	data: function () {
		return {
			currentData: 'pokemon-data',
			loadImageList: false,
			dataMenuItems: {
				'pokemon-data': 'Pokémon Data',
				'image-data': 'Image Data',
			},
		};
	},
	methods: {
		setCurrentData: function (newData) {
			this.currentData = newData;
		},
	},
	template: /*html*/`
<div>
	<nav>
		<button
			v-for="(label, key) in dataMenuItems"
			class="nav-button big_nav"
			:class="{
				'active': currentData === key
			}"
			@click="setCurrentData(key)"
		>{{label}}</button>
	</nav>
	<processed-pokemon-data
		v-show="currentData==='pokemon-data'"
	>
	</processed-pokemon-data>
	<full-image-list
		v-show="currentData==='image-data'"
		:load-image-list="loadImageList"
		@confirm-load-images="loadImageList=true"
	>
	</full-image-list>
</div>
	`
});