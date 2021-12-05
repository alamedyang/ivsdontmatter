// Super messy and crazy but I'm kinda done looking through the raw GM and trying to parse all this...
// Refactor someday plz

var pokemonMapV3 = {};

var processGameMaster = function (data) {
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
			// why did I have this in here originally???
		) {
			pushRawStatData(usefulData);
		}
		if (usefulData.templateId.charAt(0) === 'V'
			&& splitTemplateId[1] === 'MOVE') {
			pushRawMoveDataPVE(usefulData);
		}
	});
	processRawStatData();
	// console.log('processedPokemonBaseStats finished! Results:',processedPokemonBaseStats);
	processRawFormData();
	// console.log('processedForms finished! Results:',processedForms);
	combineFormsAndRawStats();
	// console.log('pokemonMapV3 finished! Results:',pokemonMapV3);
	// console.log(
	// 	"rawForms", rawForms,
	// 	"processedForms", processedForms,
	// 	"rawPokemonBaseStats", rawPokemonBaseStats,
	// 	// "rawTypeData", rawTypeData,
	// 	// "rawMoveDataPVE", rawMoveDataPVE,
	// 	// "rawMoveDataPVP", rawMoveDataPVP,
	// 	// "rawCPM", rawCPM,
	// 	// "upgradeData", upgradeData
	// 	);
};

// IMPORTANT
// In the step where you are done processing the data and want to push it to the PokeMap or whatever it's called now, you need to do a gameData.pokeMap=Object.assign({}, gameData.pokeMap) or something
// alternatively gameData.pokeMap={} then gameData.pokeMap=pokemonMapV2 to trigger a new observability avalanche

//---------------------------------------------//
/*   LOCALIZATION (English is default)         */
//---------------------------------------------//

var localizationPokes = {
	'English': {},
	'English Mega': {}, // unfinished
};
var localizationTypes = {
	'English': {},
};
var processLocal = function (languageData, _languageName) {
	var languageName = _languageName || 'English';
	var array = languageData.data;
	var origin = array.indexOf('pokemon_name_0000');
	var language = localizationPokes[languageName] || {};
	var languageMega = localizationPokes[languageName + ' Mega'] || {};
	for (let index = (origin + 2); index < array.length; index += 2) {
		if (!array[index].includes('pokemon_name_')){
			break
		}
		var number = array[index].replace('pokemon_name_','');
		var name = array[index+1];
		if (number.includes('_')) {
			Object.assign(
				languageMega,
				{
					[number]: name
				}
			);
		} else {
			Object.assign(
				language,
				{
					[parseInt(number, 10)]: name
				}
			);
		}
	}
	// console.log(languageName + ' Pokémon names have been processed. Results:', localizationPokes.English);
	var originTypes = array.findIndex(function(value){
		return value.includes('pokemon_type_');
	});
	var types = localizationTypes[languageName] || {};
	for (let index = (originTypes); index < array.length; index += 2) {
		if (!array[index].includes('pokemon_type_')){
			break
		}
		var typeLongName = array[index];
		var typeName = array[index+1];
			Object.assign(
				types,
				{
					[typeLongName]: typeName
				}
			);
	}
	// console.log(languageName + ' element type names have been processed. Results:',localizationTypes.English)
};

//---------------------------------------------//
/*   ELEMENT TYPES                             */
//---------------------------------------------//

var rawTypeData = [];
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
	]; // unfinished

var getTypeNameFromLongName = function (_longName, _languageName) {
	var languageName = _languageName || 'English';
	var longName = _longName.toLocaleLowerCase();
	var localTypes = localizationTypes[languageName];
	var result = localTypes[longName];
	return result;
};

var pushRawTypeData = function (usefulData) {
	rawTypeData.push({
		"rawTemplateId": usefulData.templateId,
		"rawTypeData": usefulData.typeEffective,
	})
}; // unfinished

//---------------------------------------------//
/*   COMBAT (yet unused)                       */
//---------------------------------------------//

var rawMoveDataPVE = [];
var rawMoveDataPVP = [];
var rawCPM = [];
var upgradeData = {};

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

//---------------------------------------------//
/*   BASE STATS & FORMS INTERPRETATION         */
//---------------------------------------------//

var rawPokemonBaseStats = [];
var processedPokemonBaseStats = [];

var pushRawStatData = function (usefulData) {
	rawPokemonBaseStats.push({
		"rawTemplateId": usefulData.templateId,
		"rawStatData": usefulData.pokemonSettings,
	})
};

var rawForms = [];
var processedForms = {};

var pushRawFormData = function (usefulData) {
	rawForms.push({
		"rawTemplateId": usefulData.templateId,
		"rawFormData": usefulData.formSettings,
	});
};

var processRawStatData = function () {
	rawPokemonBaseStats.forEach(function (form){
		if (form.rawStatData){ // "V0001_POKEMON_BULBASAUR_FALL_2019"
			var splits = form.rawTemplateId.split('_'); // "V0001","POKEMON","BULBASAUR","FALL","2019"
			var rawNumber = parseInt(splits[0].replace('V',''),10); // 1
			var capitalNameMask = splits[0] + '_POKEMON_'; // "V0001_POKEMON_"
			var capitalName = form.rawTemplateId.replace(capitalNameMask,''); // "BULBASAUR_FALL_2019"
			var type1 = getTypeNameFromLongName(form.rawStatData.type);
			var types = [type1];
			if (form.rawStatData.type2) {
				var type2 = getTypeNameFromLongName(form.rawStatData.type2);
				types.push(type2);
			}; 
			Object.assign(processedPokemonBaseStats,{
				[capitalName]: {
					types: types,
					attack: form.rawStatData.stats.baseAttack,
					defense: form.rawStatData.stats.baseDefense,
					stamina: form.rawStatData.stats.baseStamina,
				}
			});
		}
	})
};

var processRawFormData = function () {
	rawForms.forEach(function (species) { // "FORMS_V0001_POKEMON_BULBASAUR"
		var splits = species.rawTemplateId.split('_'); // "FORMS","V0001","POKEMON","BULBASAUR"
		var numberString = splits[1].replace('V',''); // '1'
		var number = parseInt(numberString, 10); // 1
		var engName = localizationPokes.English[number]; // "Bulbasaur"
		var tallNameMask = 'FORMS_' + splits[1] + '_POKEMON_';
		var maskedTallName = species.rawTemplateId.replace(tallNameMask,'');
		var uncleanForms = []; // array of objects
// species.rawFormData.forms = [
// 	{
// 	  "form": "BULBASAUR_NORMAL"
// 	},
// 	{
// 	  "form": "BULBASAUR_FALL_2019",
// 	  "assetBundleSuffix": "pm0001_00_pgo_fall2019",
// 	  "isCostume": true
// 	}
//   ]
		if (species.rawFormData.forms){
			uncleanForms = species.rawFormData.forms;
		} else {
			uncleanForms = [
				{ form: maskedTallName } // used to say "default"... maybe add "_NORMAL" though?
			]
		}
		// console.log("uncleanForms", maskedTallName, uncleanForms);
		var cleanForms = {};
		uncleanForms.forEach(function (form){
			cleanForms[form.form] = {
				assetBundleValue: form.assetBundleValue,
				assetBundleSuffix: form.assetBundleSuffix,
				isCostume: form.isCostume,
			};
			// console.log('cleanForms[form.form]',cleanForms[form.form]);
		})
		processedForms[engName] = {
			"number": number,
			"capitalName": maskedTallName,
			"forms": cleanForms,
		};
		// console.log(processedForms[engName]);
	})
};

var toProperNounCase = function (words) {
	var splits = words.split('_');
	var newSplits = [];
	splits.forEach(function(word){
		newSplits.push(capitalizeFirstCharOnly(word));
	})
	var newWords = newSplits.join(' ');
	return newWords;
};

var capitalizeFirstCharOnly = function (word) {
	var splits = word.split('');
	var newSplits = [];
	splits.forEach(function(char, index) {
		if (index === 0) {
			newSplits.push(char);
		} else {
			var newChar = char.toLocaleLowerCase();
			newSplits.push(newChar);
		}
	})
	var newWord = newSplits.join('');
	return newWord;
};

var getBaseStatsFromLongFormName = function (longFormName) {
	var formToLookUp = longFormName;
	if (longFormName.includes('UNOWN')) {
		formToLookUp = 'UNOWN';
	}
	if (longFormName.includes('SPINDA')) {
		formToLookUp = 'SPINDA';
	}
	return processedPokemonBaseStats[formToLookUp] ||
		processedPokemonBaseStats[formToLookUp.replace('_NORMAL','')] ||
		processedPokemonBaseStats[formToLookUp + '_NORMAL'];
};

var combineFormsAndRawStats = function () {
	Object.keys(processedForms).forEach(function (key) { // key = "Charizard"
		var species = processedForms[key];
		// number : 6,
		// capitalName:"CHARIZARD",
		// forms: {"CHARIZARD_NORMAL":{},"CHARIZARD_COPY_2019":{
		// 	"assetBundleSuffix":"pm0006_00_pgo_copy2019"
		// }
		var tallName = species.capitalName; // tallName = "CHARIZARD"
		var formNameMask = tallName + '_'; // formNameMask = "CHARIZARD_"
		var foundFormInfo = {};
		var formsArray = Object.keys(species.forms); // ["CHARIZARD_NORMAL","CHARIZARD_COPY_2019"]
		formsArray.forEach(function (form) { // "CHARIZARD_NORMAL" / "UNOWN_A"
			var formToLookUp = form; // formToLookUp = "CHARIZARD_NORMAL" / "UNOWN_A"
			var baseStats = getBaseStatsFromLongFormName(formToLookUp);
			var formLabel = toProperNounCase(formToLookUp.replace(formNameMask,''));
			if (formLabel === toProperNounCase(tallName)) {
				formLabel = "Normal";
			}
			foundFormInfo[formLabel] = baseStats;
			var optionals = species.forms[formToLookUp];
			if (optionals.assetBundleSuffix) {
				foundFormInfo[formLabel].assetBundleSuffix = optionals.assetBundleSuffix;
			}
			if (optionals.assetBundleValue) {
				foundFormInfo[formLabel].assetBundleValue = optionals.assetBundleValue;
			}
			if (optionals.isCostume) {
				foundFormInfo[formLabel].isCostume = optionals.isCostume;
			}
		})
		pokemonMapV3[key] = species;
		pokemonMapV3[key].forms = foundFormInfo;
	})
};


