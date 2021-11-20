var rawGMJSON = {};
var rawForms = [];
var rawPokemonBaseStats = [];
var rawTypeData = [];
var rawMoveDataPVE = [];
var rawMoveDataPVP = [];
var rawCPM = [];
var upgradeData = {};
var typeOrder = [
// Verify this again:
	"normal",
	"fighting",
	"flying",
	"poison",
	"ground",
	"rock",
	"bug",
	"ghost",
	"steel",
	"fire",
	"water",
	"grass",
	"electric",
	"psychic",
	"ice",
	"dragon",
	"dark",
	"fairy",
];

var pushRawFormData = function (usefulData) {
	rawForms.push({
		"rawTemplateId": usefulData.templateId,
		"rawFormData": usefulData.formSettings,
	})
};

var pushRawStatData = function (usefulData) {
	rawPokemonBaseStats.push({
		"rawTemplateId": usefulData.templateId,
		"rawStatData": usefulData.pokemonSettings,
	})
};

var pushRawTypeData = function (usefulData) {
	rawTypeData.push({
		"rawTemplateId": usefulData.templateId,
		"rawTypeData": usefulData.typeEffective,
	})
};

var pushRawMoveDataPVE = function (usefulData) {
	rawMoveDataPVE.push({
		"rawTemplateId": usefulData.templateId,
		"rawMoveDataPVE": usefulData.moveSettings,
	})
};

var pushRawMoveDataPVP = function (usefulData) {
	rawMoveDataPVP.push({
		"rawTemplateId": usefulData.templateId,
		"rawMoveDataPVP": usefulData.combatMove,
	})
};

var pushRawCPM = function (usefulData) {
	rawCPM = usefulData.playerLevel.cpMultiplier;
};

var pushUpgradeData = function (usefulData) {
	upgradeData = usefulData.pokemonUpgrades;
};

var clearCachedGM = function () {
	localStorage.removeItem('GMtime');
	localStorage.removeItem('rawGMJSON');
};
var loadCachedGM = function () {
	var cachedGM = localStorage.getItem('rawGMJSON');
	rawGMJSON = JSON.parse(cachedGM);
	console.log('Data string loaded from cache');
};

var processRawGameData = function (data) {
	if (Object.values(data).length === 0) {
		console.log('Cached data string not loaded! Attempting to load');
		loadCachedGM();
	}
	data.forEach(function (item) {
		var usefulData = item.data;
		if (usefulData.templateId.includes('FORMS_V')) {
			pushRawFormData(usefulData);
		}
		if (usefulData.templateId.includes('COMBAT_V')) {
			pushRawMoveDataPVP(usefulData);
		}
		if (usefulData.templateId.includes('POKEMON_UPGRADE_SETTINGS')) {
			pushUpgradeData(usefulData);
		}
		if (usefulData.templateId.includes('PLAYER_LEVEL_SETTINGS')) {
			pushRawCPM(usefulData);
		}
		var splitTemplateId = item.templateId.split("_");
		if (splitTemplateId[0] === 'POKEMON'
			&& splitTemplateId[1] === 'TYPE') {
			pushRawTypeData(usefulData);
		}
		if (splitTemplateId[1] === 'POKEMON'
			&& splitTemplateId[0].charAt(0) === 'V'
			// && usefulData.pokemonSettings.stats.baseAttack
			// why did I have this in here originally?
		) {
			pushRawStatData(usefulData);
		}
		if (usefulData.templateId.charAt(0) === 'V'
			&& splitTemplateId[1] === 'MOVE') {
			pushRawMoveDataPVE(usefulData);
		}
	});
	console.log('Data string processed');
	console.log(
		"rawForms", rawForms,
		"rawPokemonBaseStats", rawPokemonBaseStats,
		"rawTypeData", rawTypeData,
		"rawMoveDataPVE", rawMoveDataPVE,
		"rawMoveDataPVP", rawMoveDataPVP,
		"rawCPM", rawCPM,
		"upgradeData", upgradeData
		);
};

// IMPORTANT
// In the step where you are done processing the data and want to push it to the PokeMap or whatever it's called now, you need to do a gameData.pokeMap=Object.assign({}, gameData.pokeMap) or something
// alternatively gameData.pokeMap={} then gameData.pokeMap=pokemonMapV2 to trigger a new observability avalanche