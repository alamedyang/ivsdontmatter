Vue.component('info-words', {
	data: function () {
		return {
			currentInfo: 'site-info',
			infoMenuItems: {
				'site-info': 'About Site',
				'game-help': 'PoGo FAQs',
				'pogo-resources': 'PoGo Links',
			},
			bullet: true,
		};
	},
	methods: {
		setCurrentInfo: function (newData) {
			this.currentInfo = newData;
		},
	},
	template: /*html*/`
<div>
	<nav>
		<button
			v-for="(label, key) in infoMenuItems"
			class="nav-button big_nav"
			:class="{
				'active': currentInfo === key
			}"
			@click="setCurrentInfo(key)"
		>{{label}}</button>
	</nav>
	<div
		class="container_section"
	>
		<div
			v-show="currentInfo==='site-info'"
		>
			<h3 title="Rather, they matter way less than you'd think." class="flat_top">IVs don't matter!</h3>
			<p>In Pok&eacute;mon Go, IVs don't matter. Here's why.</p>
			<h3 title="They might matter a lot once in a while.">Well, okay... IVs matter sometimes.</h3>
			<p>But of all the things that matter, they matter the least.</p>
			<ul>
				<li>Level matters more.</li>
				<li>Species (base stats) matters more.</li>
				<li>Shadow boost matters more.</li>
				<li>Moveset matters more.</li>
			</ul>
			<h3 title="This site will show you what the game doesn't.">An interactive demonstration.</h3>
			<p>PoGo tells you almost nothing about your Pok&eacute;mon's stats,
				apart from its IVs (and CP), which on their own can be incredibly
				misleading.</p>
			<p>It's my hope that these interactive web toys will
				demonstrate what is actually happening in-game, including
				the exact role IVs play in a Pok&eacute;mon's performance.</p>
			<h3 title="More interactive web toys coming soon.">A work in progress.</h3>
			<p>I am learning Vue.js to do this, and I work on it once in a while
				in my free time. While I have grand ambitions, progress will likely
				be piecemeal.</p>
		</div>
		<div
			v-show="currentInfo==='game-help'"
		>
			<div>
			</div>
			<h3 class="flat_top">Frequently Asked Questions</h3>
			<p title="I.e. things I get asked a lot during raid hour.">Common questions new or casual players might have about Pokémon Go.</p>
			<h3 class="spaceious-top">General</h3>
			<q-and-a
				:label="'What are IVs, anyway?'"
				:bullet="bullet"
			>
				<p>IV stands for individual value, a term inherited from the main series Pokémon games.</p><p>Each Pokémon species has "base stats" — every Blissey will always have high HP, every Slaking will always have high attack, every Weedle will always have low defense, etc. — but each individual specimen will differ very slightly between others of its species according to its IVs.</p>
				<p>This variance is quite small in practice, but is one of the only aspects of a Pokémon you can directly observe (via the team leader rating).</p>
				<p>You can increase a Pokémon's level by powering it up, you can change its base stats through evolution (sometimes), and you can change its moves via TMs, but in PoGo you cannot ever change a Pokémon's IVs. This makes high IV Pokémon or perfect IV Pokémon (hundos) highly sought after, but just remember: <strong>IVs don't matter</strong>!</p>
			</q-and-a>
			<q-and-a
				:label="'Which Pokémon are good (for raids)?'"
				:bullet="bullet"
			>
				<p>What matters most is a Pokémon's DPS (damage per second). You are not fighting the raid boss, but the raid timer — using long-lived Pokémon with poor damage output will make it much harder to win the raid.</p>
				<p>Unfortunately, the game's "recommended" raid teams will over-value defense, sometimes badly. The algorithm is better than it was, but you are certain to improve your raid performance (sometimes dramatically) if you choose your raid teams yourself.</p>
				<p>Pokémon don't have to be maxed, don't have to have good IVs, and don't have to be legendaries to perform well. What matters is that they're a solid species with the correct moves and are appropriate to the situation.</p>
				<p>For a general best-by-type list, use <a href="https://gamepress.gg/pokemongo/comprehensive-dps-spreadsheet" target="_blank">GamePress' DPS spreadsheet</a>.</p>
				<p>For counters to specific raid posses, use <a href="https://www.pokebattler.com/raids" target="_blank">PokéBattler</a>.</p>
			</q-and-a>
			<q-and-a
				:label="'Which Pokémon should I power up?'"
				:bullet="bullet"
			>
				<p>If you're just starting out:</p>
				<ul>
					<li>Honestly, don't worry about powering anything up, and definitely don't worry about IVs. Just find a species that is rated well and use the highest level specimens you can find. (A Pokémon's level is indicated by the arc around its image when you view it in your inventory.) A high-level Pokémon with bad IVs will perform almost as well as a hundo that was powered up to a comparable level, but will be <em>dramatically</em> cheaper.</li>
					<li>You can use CP to quickly gauge a Pokémon's level: the higher the CP, the higher the level. This works best between Pokémon of the same species.</li>
					<li>Weather boosted Pokémon can spawn as high as level 35, which is more than adequate for raid use. Seek these out when possible.</li>
				</ul>
				<p>If you have the resources and wish to power up or max a longer-term investment:</p>
				<ul>
					<li>Check breakpoints. You may not need to max something or power it up very much to see a large improvement in performance. (GamePress has a good <a href="https://gamepress.gg/pokemongo/breakpoint-calculator#/" target="_blank">breakpoint calculator</a>.)</li>
					<li>Only power up Pokémon you'll be using in the immediate future. The game could change or new Pokémon or moves might be released at any time, which could make your investment obsolete before you get the chance to use it.</li>
					<li>If maxing something, you risk missing breakpoints if its attack IV isn't 15. The other IVs don't matter nearly as much.</li>
					<li>Remember: of all the things that matter, IVs matter the least. A good Pokémon with a good legacy move and poor IVs is likely still to be a better investment than one with good IVs but without its legacy move, for example.</li>
				</ul>
			</q-and-a>
			<q-and-a
				:label="'Should I try to dodge during a raid?'"
				:bullet="bullet"
			>
				<p>Short answer: no.</p>
				<p>Long answer: maybe. Effective dodging requires a good internet connection, a responsive phone, and a good understanding of damage windows, and it can reduce your team's DPS if done incorrectly or too aggressively. Unless shortmanning, there's usually more than enough time to win a raid, so for casual players it's generally not worth attempting. (In fact, taking damage increases your stored energy, so not dodging at all might allow you do launch an additional charge move.)</p>
				<p>Precise dodging can increase your DPS quite a lot, though. It's worth practicing, but don't worry about it too much.</p>
			</q-and-a>
			<q-and-a
				:label="'This Pokémon dies really quickly! Why does everyone recommend it?'"
				:bullet="bullet"
			>
				<p>Pokémon with a high damage output are highly valued even when frail. High-damage, low-defense Pokémon are known as glass cannons and are sometimes the only way to complete certain shortmans or solo challenges.</p>
				<p>Depending on the raid boss' moveset, dodging may be required to get good use of a glass cannon. But even when not dodging, it often pays to put a single glass cannon in the lead position of your raid party — they are less likely to die at the beginning of the raid (when the boss has zero energy), whereas if they are brought in mid-raid, they might get wiped out by a nuke charge move before they’ve had a chance to do anything.</p>
				<p>You can fill your entire raid party with glass cannons, of course, and even with careful dodging, it might mean relobbying more often or using more potions and revives when you’re done. But the DPS gains are well worth it for a good portion of players.</p>
			</q-and-a>
			<h3 class="spacious-top">PVP (General)</h3>
			<q-and-a
				:label="'Why do people want low-attack Pokémon in PVP?'"
				:bullet="bullet"
			>
				<p>Low attack and high defense/HP Pokémon tend to perform better in the lower two leagues because the attack stat is weighted more heavily toward CP than the other two stats. (Rule of thumb: one attack IV is worth about two defense or stamina IVs.) This goes for base stats as well as IVs — tanky species (with low attack) are generally better. This is the direct opposite of what you want for raids.</p>
				<p>The idea is not to always have low attack, but to maximize "stat product" while still remaining under the limit — you should still come as close to the limit as possible, too. (Think <em>The Price is Right</em>.) To make up an example, perhaps a 0/15/15 maxes at 1481 but a 2/15/15 maxes at 1499, in which case, the second one is better.</p>
				<p>Low attack is not always best, though. For Pokémon that max below 1500 or 2500 (or for Master League, which has no CP limit), hundos will be preferred, just like with raids.</p>
				<p>There is also the issue of breakpoints and CMP tie breakers — times when the exact IV spread might make a difference between winning and losing a specific match. But, since <strong>IVs don't matter</strong> (i.e. other things matter more), you might not ever notice. Even "bad" IV Pokémon will perform perfectly well as long as they have the right moves.</p>
				<p>(That said, max attack for your lead in Master League is probably something you'll want to go out of your way for.)</p>
			</q-and-a>
			<q-and-a
				:label="'Should I buy a second charge move for my PVP Pokémon?'"
				:bullet="bullet"
			>
				<p>Generally, yes.</p>
				<p>Exceptions are case-by-case, usually when a second move is unusually expensive and wouldn’t add that much utility, e.g. Altaria/Skarmory, which can almost always get by with Sky Attack alone.</p>
				<p>NOTE: It’s much cheaper to get a second move on “baby” Pokémon (Togepi, Riolu, Mantyke, etc.) than on their evolved forms, so if investing in one, buy the move before evolving!</p>
			</q-and-a>
			<h3 class="spacious-top">PVP (Rockets)</h3>
			<q-and-a
				:label="'General tips'"
				:bullet="bullet"
			>
				<ol>
					<li>Don't lead with the Pokemon you want to lead with — switch to it after the battle starts. Switching "stuns" the AI for several seconds.</li>
					<li>Likewise, either side using a charged move "stuns" the AI, so favor fast moves that grant energy quickly:</li>
						<ul>
							<li>Lock On (the Regis, PorygonZ)</li>
							<li>Thunder Shock (<strong>Melmetal</strong>)</li>
							<li>Mud Shot (<strong>Swampert</strong>, Groudon)</li>
						</ul>
					<li>…or charged moves that don't need a lot of energy to use:</li>
						<ul>
							<li>Aqua Tail (<strong>Palkia</strong>, <strong>CD Gyarados</strong>)</li>
							<li>Body Slam (<strong>Snorlax</strong>)</li>
							<li>Cross Chop (<strong>Machamp</strong>)</li>
							<li>Dragon Claw (<strong>Dragonite</strong>)</li>
							<li>Power-up Punch (<strong>Lucario</strong>, Poliwrath, Medicham)</li>
						</ul>
					<li>Resisting a Rocket's attacks matters more than doing super effective damage to them.</li>
					<li>The lineup for each Rocket is somewhat random, so it's not unusual to have to try to fight them once to see what they're running and then make adjustments. See current lineup on the Silph Road's <a href="https://thesilphroad.com/rocket-invasions" target="_blank">website.</a></li>
				</ol>
			</q-and-a>
			<q-and-a
				:label="'Rocket leaders (shield breakers)'"
				:bullet="bullet"
			>
				<p>Rocket Leaders will indiscriminately use both shields against your first two charge moves, so <strong>shield breakers</strong> are especially important when fighting them.</p>
				<p>Your lead will almost certainly be sacrificed, so don't worry about it being especially effective or even that high of a level — it just has to use two charged moves ASAP to get those shields down.</p>
				<p>Example shield breakers:</p>
				<ol>
					<li><strong>Melmetal</strong> (Thunder Shock, Rock Slide + Superpower)</li>
						<ul>
							<li>+ good resistances, tanky stats</li>
							<li>– you need good access to Mystery Boxes (or a Pokémon HOME account) to invest in one</li>
							<li>TIP: Superpower gives you a debuff, so don't use it to break shields. But if you need to deal damage with it (perhaps vs Snorlax, after breaking both shields), have two of them charged so you can fire them back-to-back and avoid taking increased damage in between. Switch right afterward to clear the debuff.</li>
						</ul>
					<li><strong>Lucario</strong> (Counter, Power-up Punch + Aura Sphere / Shadow Ball)</li>
					<ul>
						<li>+ good resistances; amazing raid investment; Power-up Punch increases your attack stat, even when shielded, so Counter does more and more damage as you proceed</li>
						<li>– can be frail, and it's quite rare (use Poliwrath for a similar experience, though it's not nearly as good)</li>
						<li>TIP: For candy and dust savings, give it a second move as a Riolu (before evolving). You will want a second move for raid use anyway, but even if only trying for Power-up Punch, its moveset is large enough a second move will save you TMs.</li>
					</ul>
					<li><strong>Blaziken</strong> (Counter, Blaze Kick / Blast Burn)</li>
					<ul>
						<li>+ cheap; it had a CD, so likely you have a good one already; doesn't need second move, nor legacy move</li>
						<li>– frail, poor resistances</li>
					</ul>
					<li><strong>Swampert</strong> (Mud Shot, Muddy Water / Hydro Cannon)</li>
					<ul>
						<li>+ cheap; it had a CD, so likely you have a good one already; doesn't need second move, nor legacy move</li>
						<li>– less likely to be dealing super effective damage (adding a second move will help a little: Earthquake or Sludge Wave)</li>
					</ul>
					<li><strong>Dragonite</strong> (Dragon Breath, Dragon Claw)</li>
					<ul>
						<li>+ had a CD, though a while ago; not bad in raids; almost never resisted</li>
						<li>– a little rare; less likely to be dealing super effective damage</li>
					</ul>
				</ol>
			</q-and-a>
			<p></p>
		</div>
		<div
			v-show="currentInfo==='pogo-resources'"
	>
			<h3 class="flat_top">General</h3>
			<ul>
				<li><a href="https://old.reddit.com/r/TheSilphRoad/" target="_blank">The Silph Road (subreddit)</a></li>
					<ul>
						<li>Large forum for PoGo news, game analysis, etc.</li>
						<li>Always-current discussions</li>
						<li>Community-sourced info on event features and game bugs</li>
					</ul>
				<li><a href="https://thesilphroad.com/" target="_blank">The Silph Road (main site)</a></li>
					<ul>
						<li>Current Rocket lineup, research quests, egg pools, raids, and more</li>
						<li>High quality research into shiny rates and other game mechanics</li>
					</ul>
				<li><a href="https://shinyrates.com/" target="_blank">ShinyRates</a></li>
					<ul>
						<li>Live shiny rates from scanning bots (last 24 hours only)</li>
						<li>Quickly ascertain ballpark rates for species currently spawning in the wild</li>
					</ul>
				<li><a href="https://www.leekduck.com/" target="_blank">Leek Duck</a></li>
					<ul>
						<li>Info and infographics: event info, Ditto disguises, egg pools, raids, and more</li>
						<li>Start and end timers for game events with event descriptions</li>
						<li>Personal shiny checklist</li>
					</ul>
			</ul>
			<h3>Raids</h3>
			<ul>
				<li><a href="https://gamepress.gg/pokemongo/comprehensive-dps-spreadsheet" target="_blank">GamePress' DPS spreadsheet</a></li>
					<ul>
						<li>Compare Pokémon damage output (DPS and DPS^3*TDO)</li>
						<li>Can customize hypothetical movesets and moves</li>
						<li>EXAMPLE: in the search field, type '@fire' to see all Pokémon with fire moves, and '@*fire' to see all Pokémon with double fire moves</li>
					</ul>
				<li><a href="https://www.pokebattler.com/raids" target="_blank">PokéBattler</a></li>
					<ul>
						<li>Best counters per raid boss</li>
						<li><em>Very</em> customizable</li>
						<li>Accurately estimate how many trainers needed to win</li>
						<li>Pay to see your own Pokémon's raid results (5 Pokémon free)</li>
					</ul>
				<li><a href="https://gamepress.gg/pokemongo/breakpoint-calculator#/" target="_blank">GamePress' breakpoint calculator</a></li>
					<ul>
						<li>Breakpoints and bulkpoints for raids</li>
					</ul>
			</ul>
			<h3>PVP</h3>
			<ul>
				<li><a href="https://gostadium.club/rank-checker" target="_blank">GoStadium's rank checker</a></li>
					<ul>
						<li>Very flexible stat product analysis tool for PVP IVs</li>
					</ul>
				<li><a href="https://pvpoke.com/" target="_blank">PVPoke</a></li>
					<ul>
						<li>PVP rankings for multiple leagues (customizable)</li>
						<li>PVP Team builder and rater</li>
						<li>PVP battle practice</li>
					</ul>
			</ul>
			<h3>Advanced</h3>
			<ul>
				<li><a href="https://pokeminers.com/" target="_blank">PokéMiners</a></li>
					<ul>
						<li>Raw game data, including new and soon-to-be-released Pokémon, moves, and assets</li>
					</ul>
			</ul>
		</div>
	</div>
</div>
	`
});