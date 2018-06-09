/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/
/* TODO: check the information */
/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Swordmage" (v2.1), its five fighting styles, and its three disciplines
	
				This is taken from the DMs Guild website (https://www.dmsguild.com/product/224413/)
				This class and subclasses are published by Geeks New England
				
	Code by:	/u/Infiniteh
	Date:		2018-08-06 (sheet v12.999)

	Please support the creator of this content (Geeks New England) and download their material from the DMs Guild website: https://www.dmsguild.com/browse.php?author=Geeks%20New%20England
*/

var iFileName = "Swordmage, A True Arcane Half-Caster for 5e [Geeks New England's work, transcribed by /u/Infiniteh].js";
RequiredSheetVersion(12.999);

SourceList["GNE:SM"] = {
	name : "Geeks New England: Swordmage Class",
	abbreviation : "MM:BH",
	group : "Dungeon Masters Guild",
	url : "https://www.dmsguild.com/product/224413/",
	date : "2017/12/26"
};

// define the list of Swordmage spells
[	//level 0 (cantrips): none
	//level 1
	"absorb elements", "burning hands", "chromatic orb", "comprehend languages", "expeditious retreat", "faerie fire", 
	"false life", "feather fall", "fog cloud", "ice knife", "identify", "illusory script", "jump,", "longstrider","magic missile",
	"protection from evil and good", "ray of sickness", "shield", "sleep", "thunderwave", "witch bolt", "zephyr strike",
	//level 2
	"aganazzar's scorcher", "blindness/deafness", "blur", "darkness", "darkvision", "enlarge/reduce", "hold person", "invisibility", 
	"levitate", "locate object", "magic weapon", "melf's acid arrow", "mirror image", "misty step", "nystul's magic aura", 
	"scorching ray", "shatter", "snilloc's snowball swarm", "spider climb", 
	//level 3
	"counterspell", "dispel magic", "fear", "fireball", "flame arrows", "glyph of warding", "haste", "lightning bolt", 
	"magic circle", "melf's minute meteors", "protection from energy", "sleet storm", "slow", "stinking cloud", "vampiric touch", 
	//level 4
	"blight", "confusion", "dimension door", "elemental bane", "fire shield", "freedom of movement", "greater invisibility", 
	"ice storm", "locate creature", "stoneskin", "vitriolic sphere", 
	//level 5
	"animate objects", "cloudkill", "cone of cold", "far step", "immolation", "skill empowerment", "steel wind strike", 
	"telekinesis", "teleportation circle", 
].forEach(function (swordmageSpells) {
	if (SpellsList[swordmageSpells]) SpellsList[swordmageSpells].classes.push("swordmage");
});

ClassList["swordmage"] = {
	regExpSearch : /swordmage/i,
	name : "Swordmage",
	source : ["GNE:SM", 0],
	primaryAbility : "\n \u2022 Swordmage: Strength or Dexterity, and Intelligence;",
	prereqs : "\n \u2022 Swordmage: Strength 13 or Dexterity 13, and Intelligence 13;",
	die : 10,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Int"],
	skills : ["\n\n" + toUni("Swordmage") + ": Choose two from Acrobatics, Animal Handling, Athletics," +
				" Arcana, History, Insight, Intimidation, Perception, Persuasion, and Survival."],
	armor : [
		[true, true, false, false],
		[true, false, false, false]
	],
	weapons : [
		[true, true],
		[false, true]
	],
	equipment : "Swordmage starting equipment:\n \u2022 Scale mail -or- leather armor;\n \u2022 A martial weapon;\n" + 
	"\u2022 A dungeoneer's pack -or- An explorer's pack.\n\nAlternatively, " +
	"choose 5d4 \xD7 10 gp worth of starting equipment chosen from the lists in chapter 5 of the Player's Handbook .",
	subclasses : ["Swordmage disciplines", ["swordmage-battlemage", "swordmage-eldritch archer", "swordmage-spellsword"]],
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	abilitySave : 4, // Int
	spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 3, 2, 0, 0, 0, 0]  //lvl20
	],
	spellcastingKnown : {
		cantrips : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		spells : [0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11],
		prepared: false,
	},
	spellcastingList : {
		// 0 - 5th level spells from Swordmage spell list.
		class : "swordmage",
		level : [0, 5]
	},
	features : {
		"swordmage bond" : {
			name : "Swordmage Bond",
			source : ["GNE:SM", 0],
			minlevel : 1,
			description : "\n   " + 
			"You know a ritual that creates a magical bond between" +
			"yourself and one weapon. You perform the ritual over the" +
			"course of 1 hour, which can be done during a short rest. The" +
			"weapon must be within your reach throughout the ritual, at" +
			"the conclusion of which you touch the weapon and forge the" +
			"bond." +
			"Once you have bonded a weapon to yourself, you can’t be" +
			"disarmed of that weapon unless you are incapacitated. If it is" +
			"on the same plane of existence, you can summon that" +
			"weapon as a bonus action on your turn, causing it to teleport" +
			"instantly to your hand. As long as it is on the same plane as" +
			"you, you also know its precise location at all times." +
			"If your bonded weapon is broken or damaged, you can" +
			"spend 1 hour of meditation to recreate the weapon from a" +
			"fragment. This can be done during a short rest. This process" +
			"automatically destroys any other fragments of the weapon in" +
			"existence, so you can’t use it to create multiple copies of a" +
			"broken weapon." +
			"If you attempt to bond with a second weapon, you must" +
			"break the bond with your existing weapon.",
		},
		"magic sense" : {
				name : "Magic Sense",
				source : ["GNE:SM", 0],
				minlevel : 1,
				description : "\n   " + 
				"You can sense the presence of magic around you. As an" +
				"action, you can open your awareness to the Weave. Until the" +
				"end of your next turn, you can feel the hum of magic and see" +
				"a faint aura around any visible creature or object within 60" +
				"feet of you that bears magic, and you learn its school of" +
				"magic, if any. Your magic sense can penetrate most barriers," +
				"but it is blocked by 1 foot of stone, 1 inch of common metal, a" +
				"thin sheet of lead, or 3 feet of wood or dirt." +
				"You can use this feature a number of times equal to 1 +" +
				"your Intelligence modifier. When you finish a long rest you" +
				"regain all expended uses."
		},
		"fighting style" : { 
			name : "Fighting Style",
			source : ["GNE:SM", 0],
			minlevel : 2,
			description : "\n   " + 
			"At 2nd level, I adopt a particular style of fighting as my " +
			"specialty. I can’t take a Fighting Style option more than once, " +
			"even if I later get to choose again.",
			choices : ["Archery", "Defense", "Dueling", "Great Weapon Fighting", "Protection"],
			choicesNotInMenu : false, // TODO: check this
			"archery" : {
				name: "Archery",
				source : ["GNE:SM", 0],
				description: "I have +2 bonus on ranged weapon attacks.",
				calcChanges : {
					atkCalc: ["if (isRangedWeapon) {output.bHit += 2}",
					"I have +2 bonus on ranged weapon attacks."]
				}
			},
			"defense" : FightingStyles.defense,
			// {
			// 	name: "Defense Fighting Style",
			// 	source : ["GNE:SM", 0],
			// 	description: "While I am wearing armor, I gain a +1 bonus to AC.",
			// 	eval : "AddACMisc(1, 'Defense Fighting Style', 'While I am wearing armor, I gain a +1 bonus to AC.', 'tDoc.getField('Heavy Armor').isBoxChecked(0)')",
			// 	removeeval : "AddACMisc(0, 'Defense Fighting Style', 'While I am wearing armor, I gain a +1 bonus to AC.')"
			// },
			"dueling" : FightingStyles.dueling,
			// {
			// 	name: "Dueling Fighting Style",
			// 	calcChanges : {
			// 		atkCalc : [
			// 			"var areOffHands = function(n){for(var i=1;i<=n;i++){if ((/off.hand.attack/i).test(What('Bonus Action ' + i))) {return true; }; }; }(FieldNumbers.actions); if (!areOffHands && isMeleeWeapon && !isNaturalWeapon && !(/\\b(2|two).?hand(ed)?s?\\b/i).test(theWea.description)) {output.extraDmg += 2; }; ", "When I'm wielding a melee weapon in one hand and no weapon in my other hand, I do +2 damage with that melee weapon. This condition is always false if the bonus action 'Off-hand Attack' exists."]
			// },
			"great weapon fighting" : FightingStyles.great_weapon,
			// { 
			// 	name : "Great Weapon Fighting Style", //required;
			// 	description : "\n   " + 
			// 	"Reroll 1 or 2 on damage if wielding two-handed/versatile melee weapon in both hands"
			// },
			"protection" : FightingStyles.protection,
		},
		"subclassfeature3" : {
			name : "Spellcasting",
			source : ["GNE:SM", 0],
			minlevel : 2,
			description : "\n   " + "I can cast spells from the Swordmage spell list, using Intelligence as my spellcasting ability",
			additional : ["", "", "3 cantrips \u0026 3 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 9 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 11 spells known", "4 cantrips \u0026 12 spells known", "4 cantrips \u0026 13 spells known"],
		}
	}
};

ClassSubList["swordmage-battlemage"] = {
	regExpSearch : /^(?=.*ghost)(?=.*slayer).*$/i,
	subname : "Order of the Ghostslayer",
	source : ["MM:BH", 5],
	fullname : "Ghostslayer",
	features : {
		"subclassfeature3" : {
			name : "Rite of the Dawn",
			source : ["MM:BH", 5],
			minlevel : 3,
			description : "\n   " + "I know the Rite of the Dawn and add my Wis mod to its damage against some creatures",
			additional : levels.map(function (n) { return n < 3 ? "" : "+Wis mod damage to " + (n < 11 ? "undead" : "all"); }),
			extraname : "Crimson Rite",
			"dawn" : {
				source : ["MM:BH", 5],
				name : "Rite of the Dawn",
				description : "\n   " + "I can select radiant as the damage type for my crimson rite damage die"
			},
			eval : "ClassFeatureOptions(['blood hunter', 'subclassfeature3', 'dawn', 'extra']);",
			removeeval : "ClassFeatureOptions(['blood hunter', 'subclassfeature3', 'dawn', 'extra'], 'remove');"
		},
		"subclassfeature7" : {
			name : "Hallowed Veins",
			source : ["MM:BH", 5],
			minlevel : 7,
			description : desc([
				"My blood curses can now affect any creature, regardless of form or lack of blood",
				"In addition, undead targeted by my blood curse must make a Wis save (8+Prof+Wis mod)",
				"If failed, it can't target me with an attack until the end of my next turn"
			])
		},
		"subclassfeature11" : {
			name : "Supernal Surge",
			source : ["MM:BH", 5],
			minlevel : 11,
			description : desc([
				"As a bonus action, I can take on a ghostly form until the end of my next turn",
				"If taking the attack action in the same turn, I also make an attack with this bonus action",
				"While active, I can move through objects and creatures as if they were difficult terrain",
				"If I end my turn inside an object, I take 1d10 force damage; more if my form ends"
			]),
			usages : "Wisdom mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Gravesight",
			source : ["MM:BH", 5],
			minlevel : 15,
			description : "\n   " + "Out to 30 feet, I can see in magic darkness as well as invisible creatures and objects",
			vision : [["Devil's sight", 30], ["See invisible", 30]]
		},
		"subclassfeature18" : {
			name : "Vengeful Spirit",
			source : ["MM:BH", 5],
			minlevel : 18,
			description : desc([
				"When I reach 0 HP, I can let my soul fight on at the beginning on my next turn",
				"The spirit can move through objects and creatures as if they were difficult terrain",
				"It picks up my weapons, uses my stats, my AC, and can use all of my abilities",
				"It is immune to cold, necrotic, non-magical weapon damage, and my Crimson Rite",
				"When it takes any damage, my body dies, or I regain any HP, the spirit vanishes"
			])
		}
	}
};

ClassSubList["swordmage-eldritch archer"] = {
	regExpSearch : /^(?=.*profane)(?=.*soul).*$/i,
	subname : "Order of the Profane Soul",
	source : ["MM:BH", 6],
	spellcastingFactor : "warlock3",
	spellcastingTable : [
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 0
		[0, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 1
		[2, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 2
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 3
		[3, 0, 0, 0, 0, 0, 0, 0, 0], //lvl 4
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 5
		[4, 2, 0, 0, 0, 0, 0, 0, 0], //lvl 6
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 7
		[4, 3, 0, 0, 0, 0, 0, 0, 0], //lvl 8
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl 9
		[4, 3, 2, 0, 0, 0, 0, 0, 0], //lvl10
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl11
		[4, 3, 3, 0, 0, 0, 0, 0, 0], //lvl12
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl13
		[4, 3, 3, 1, 0, 0, 0, 0, 0], //lvl14
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl15
		[4, 3, 3, 2, 0, 0, 0, 0, 0], //lvl16
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl17
		[4, 3, 3, 3, 1, 0, 0, 0, 0], //lvl18
		[4, 3, 3, 3, 2, 0, 0, 0, 0], //lvl19
		[4, 3, 3, 3, 2, 0, 0, 0, 0]  //lvl20
	],
	spellcastingKnown : {
		cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11]
	},
	spellcastingList : {
		class : "warlock",
		level : [0, 4]
	},
	features : {
		"subclassfeature3" : {
			name : "Otherwordly Patron",
			source : ["MM:BH", 6],
			minlevel : 3,
			description : "\n   " + "Choose an Otherwordly Patron using the \"Choose Feature\" button above",
			choices : ["the Archfey", "the Fiend", "the Great Old One", "the Undying", "the Celestial", "the Hexblade"],
			"the archfey" : {
				name : "Otherwordly Patron: the Archfey",
				description : "\n   " + "When I do rite damage, the target loses invisibility, 1/2 \u0026 3/4 cover until my next turn",
				eval : "var ToAdd = ['blood hunter', 'subclassfeature7.1', 'the archfey']; if (classes.known['blood hunter'].level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)} ToAdd[1] = 'subclassfeature15'; ToAdd[2] += 2; if (classes.known['blood hunter'].level >= 15 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"the fiend" : {
				name : "Otherwordly Patron: the Fiend",
				description : "\n   " + "When using the Rite of the Flame I may reroll a 1 on the rite damage die, once",
				eval : "var ToAdd = ['blood hunter', 'subclassfeature7.1', 'the fiend']; if (classes.known['blood hunter'].level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)} ToAdd[1] = 'subclassfeature15'; ToAdd[2] += 2; if (classes.known['blood hunter'].level >= 15 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"the great old one" : {
				name : "Otherwordly Patron: the Great Old One",
				description : "\n   " + "When I do a critical hit, the target Wis save or frightened of me until my next turn end",
				eval : "var ToAdd = ['blood hunter', 'subclassfeature7.1', 'the great old one']; if (classes.known['blood hunter'].level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)} ToAdd[1] = 'subclassfeature15'; ToAdd[2] += 2; if (classes.known['blood hunter'].level >= 15 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"the undying" : {
				name : "Otherwordly Patron: the Undying",
				description : "\n   " + "When I kill a hostile with a weapon attack, I regain HP equal to my rite damage die",
				eval : "var ToAdd = ['blood hunter', 'subclassfeature7.1', 'the undying']; if (classes.known['blood hunter'].level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)} ToAdd[1] = 'subclassfeature15'; ToAdd[2] += 2; if (classes.known['blood hunter'].level >= 15 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"the celestial" : {
				name : "Otherwordly Patron: the Celestial",
				description : "\n   " + "As a bonus action, I can expend a Blood Maledict use to heal a creature within 60 ft",
				additional : levels.map(function (n) {
					var die = "2d" + (n < 6 ? 4 : n < 11 ? 6 : n < 16 ? 8 : 10);
					return n < 3 ? "" : "heal " + die + " + Wisdom modifier";
				}),
				action : ["bonus action", ""],
				eval : "var ToAdd = ['blood hunter', 'subclassfeature7.1', 'the celestial']; if (classes.known['blood hunter'].level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)} ToAdd[1] = 'subclassfeature15'; ToAdd[2] += 2; if (classes.known['blood hunter'].level >= 15 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			},
			"the hexblade" : {
				name : "Otherwordly Patron: the Hexblade",
				description : "\n   " + "My next attack vs. a creature I target with a blood curse, is a critical hit on a 19 or 20",
				eval : "var ToAdd = ['blood hunter', 'subclassfeature7.1', 'the hexblade']; if (classes.known['blood hunter'].level >= 7 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)} ToAdd[1] = 'subclassfeature15'; ToAdd[2] += 2; if (classes.known['blood hunter'].level >= 15 && this.getField('Class Features Remember').value.indexOf(ToAdd.toString()) === -1) {ClassFeatureOptions(ToAdd)};"
			}
		},
		"subclassfeature3.1" : {
			name : "Pact Magic",
			source : ["MM:BH", 5],
			minlevel : 3,
			description : desc([
				"I can cast warlock cantrips/spells that I know, using Charisma as my spellcasting ability",
				"I can use a rite-imbued weapon as a spellcasting focus; I regain spell slots in a short rest"
			]),
			additional : ["", "", "2 cantrips \u0026 2 spells known", "2 cantrips \u0026 2 spells known", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known"]
		},
		"subclassfeature7" : {
			name : "Mystic Frenzy",
			source : ["MM:BH", 6],
			minlevel : 7,
			description : "\n   " + "When I cast a cantrip as an action, I can make one weapon attack as a bonus action",
			action : ["bonus action", " (with cantrip)"]
		},
		"subclassfeature7.1" : {
			name : "Revealed Arcana",
			source : ["MM:BH", 6],
			minlevel : 7,
			description : "\n   " + "Choose an Otherwordly Patron using the \"Choose Feature\" button above ",
			usages : 1,
			recovery : "long rest",
			choices : ["the Archfey", "the Fiend", "the Great Old One", "the Undying", "the Celestial", "the Hexblade"],
			choicesNotInMenu : true,
			"the archfey" : {
				name : "Revealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Blur using a profane soul spell slot",
				spellcastingBonus : {
					name : "Revealed Arcana",
					spells : ["blur"],
					selection : ["blur"],
					oncelr : true
				}
			},
			"the fiend" : {
				name : "Revealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Scorching Ray using a profane soul spell slot",
				spellcastingBonus : {
					name : "Revealed Arcana",
					spells : ["scorching ray"],
					selection : ["scorching ray"],
					oncelr : true
				}
			},
			"the great old one" : {
				name : "Revealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Detect Thoughts using a profane soul spell slot",
				spellcastingBonus : {
					name : "Revealed Arcana",
					spells : ["detect thoughts"],
					selection : ["detect thoughts"],
					oncelr : true
				}
			},
			"the undying" : {
				name : "Revealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Blindness/Deafness using a profane soul spell slot",
				spellcastingBonus : {
					name : "Revealed Arcana",
					spells : ["blindness/deafness"],
					selection : ["blindness/deafness"],
					oncelr : true
				}
			},
			"the celestial" : {
				name : "Revealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Lesser Restoration using a profane soul spell slot",
				spellcastingBonus : {
					name : "Revealed Arcana",
					spells : ["lesser restoration"],
					selection : ["lesser restoration"],
					oncelr : true
				}
			},
			"the hexblade" : {
				name : "Revealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Branding Smite using a profane soul spell slot",
				spellcastingBonus : {
					name : "Revealed Arcana",
					spells : ["branding smite"],
					selection : ["branding smite"],
					oncelr : true
				}
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?blood hunter,subclassfeature3,(the (archfey|fiend|great old one|undying|celestial|hexblade)).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'blood hunter,subclassfeature7.1,' + FeaChoice, false);};};"
		},
		"subclassfeature11" : {
			name : "Diabolic Channel",
			source : ["MM:BH", 6],
			minlevel : 11,
			description : desc([
				"As an action, I infuse a warlock spell into a rite-imbued weapon and attack with it",
				"It must have a 1 action casting time or be a conc. spell that activates with 1 action",
				"If the attack hits, it does weapon damage as well as casts the spell on the target",
				"If the spell requires any attack rolls, those all succeed against the target",
				"If the spell requires a save and the attack had adv., the target has disadv. on the save"
			]),
			action : ["action", ""]
		},
		"subclassfeature15" : {
			name : "Unsealed Arcana",
			source : ["MM:BH", 7],
			minlevel : 15,
			description : "\n   " + "Choose an Otherwordly Patron using the \"Choose Feature\" button above  ",
			usages : 1,
			recovery : "long rest",
			choices : ["the Archfey2", "the Fiend2", "the Great Old One2", "the Undying2", "the Celestial2", "the Hexblade2"],
			choicesNotInMenu : true,
			"the archfey2" : {
				name : "Unsealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Slow using a profane soul spell slot",
				spellcastingBonus : {
					name : "Unsealed Arcana",
					spells : ["slow"],
					selection : ["slow"],
					oncelr : true
				}
			},
			"the fiend2" : {
				name : "Unsealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Fireball using a profane soul spell slot",
				spellcastingBonus : {
					name : "Unsealed Arcana",
					spells : ["fireball"],
					selection : ["fireball"],
					oncelr : true
				}
			},
			"the great old one2" : {
				name : "Unsealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Haste using a profane soul spell slot",
				spellcastingBonus : {
					name : "Unsealed Arcana",
					spells : ["haste"],
					selection : ["haste"],
					oncelr : true
				}
			},
			"the undying2" : {
				name : "Unsealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Bestow Curse using a profane soul spell slot",
				spellcastingBonus : {
					name : "Unsealed Arcana",
					spells : ["bestow curse"],
					selection : ["bestow curse"],
					oncelr : true
				}
			},
			"the celestial2" : {
				name : "Unsealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Revivify using a profane soul spell slot",
				spellcastingBonus : {
					name : "Unsealed Arcana",
					spells : ["revivify"],
					selection : ["revivify"],
					oncelr : true
				}
			},
			"the hexblade2" : {
				name : "Unsealed Arcana",
				description : "\n   " + "Once per long rest, I can cast Blink using a profane soul spell slot",
				spellcastingBonus : {
					name : "Unsealed Arcana",
					spells : ["blink"],
					selection : ["blink"],
					oncelr : true
				}
			},
			eval : "if (FeaChoice === '') {var CFrem = What('Class Features Remember'); var tReg = /.*?blood hunter,subclassfeature3,(the (archfey|fiend|great old one|undying|celestial|hexblade)).*/i; if ((tReg).test(CFrem)) {FeaChoice = CFrem.replace(tReg, '$1'); AddString('Class Features Remember', 'blood hunter,subclassfeature15,' + FeaChoice + 2, false);};};"
		},
		"subclassfeature18" : {
			name : "Soul Syphon",
			source : ["MM:BH", 7],
			minlevel : 18,
			description : "\n   " + "When I kill a creature of CR15+ with an attack, I recover an expended spell slot"
		}
	}
};

ClassSubList["swordmage-spellsword"] = {
	regExpSearch : /mutant/i,
	subname : "Order of the Mutant",
	source : ["MM:BH", 7],
	features : {
		"subclassfeature3" : {
			name : "Formulas",
			source : ["MM:BH", 7],
			minlevel : 3,
			description : desc([
				"Use the \"Choose Features\" button above to add Mutagen Formulae to the third page",
				"When I gain a new mutagen formula I can also replace one I know with another"
			]),
			additional : levels.map(function (n) { return n < 3 ? "" : (n < 7 ? 3 : n < 11 ? 4 : n < 15 ? 5 : n < 18 ? 6 : 7) + " mutagen formulae"; }),
			extraname : "Mutagen Formula",
			extrachoices : ["Aether (prereq: level 11 blood hunter)", "Celerity", "Conversant", "Cruelty (prereq: level 11 blood hunter)", "Impermeable", "Mobility", "Nighteye", "Potency", "Precision (prereq: level 11 blood hunter)", "Rapidity", "Reconstruction (prereq: level 7 blood hunter)", "Sagacity", "Shielded", "Unbreakable", "Wariness"],
			"aether (prereq: level 11 blood hunter)" : {
				name : "Aether",
				source : ["MM:BH", 7],
				description : desc([
					"I gain 20 ft flying speed",
					"\u2022 Side effect: I have disadvantage on Strength and Dexterity ability checks"
				])
			},
			"celerity" : {
				name : "Celerity",
				source : ["MM:BH", 7],
				description : desc([
					"My Dexterity score increases by an amount equal to my mutation score",
					"\u2022 Side effect: My Wisdom score decreases by an amount equal to my mutation score"
				])
			},
			"conversant" : {
				name : "Conversant",
				source : ["MM:BH", 7],
				description : desc([
					"I gain advantage on Intelligence ability checks",
					"\u2022 Side effect: I have disadvantage on Charisma ability checks"
				])
			},
			"cruelty (prereq: level 11 blood hunter)" : {
				name : "Cruelty",
				source : ["MM:BH", 7],
				description : desc([
					"I can make a single weapon attack as a bonus action",
					"\u2022 Side effect: I have disadvantage on all saving throws"
				])
			},
			"impermeable" : {
				name : "Impermeable",
				source : ["MM:BH", 8],
				description : desc([
					"I gain resistance to piercing damage",
					"\u2022 Side effect: I gain vulnerability to slashing damage"
				])
			},
			"mobility" : {
				name : "Mobility",
				source : ["MM:BH", 8],
				description : desc([
					"I gain immunity to the grappled and restrained conditions; At 11th level also paralyzed",
					"\u2022 Side effect: I gain a penalty to initiative rolls equal to 2 times my mutation score"
				])
			},
			"nighteye" : {
				name : "Nighteye",
				source : ["MM:BH", 8],
				description : desc([
					"I gain darkvision up to 60 ft, or add an extra 60 ft to it if I already have darkvision",
					"\u2022 Side effect: I gain sunlight sensitivity"
				])
			},
			"potency" : {
				name : "Potency",
				source : ["MM:BH", 8],
				description : desc([
					"My Strength score increases by an amount equal to my mutation score",
					"\u2022 Side effect: My Dexterity score decreases by an amount equal to my mutation score"
				])
			},
			"precision (prereq: level 11 blood hunter)" : {
				name : "Precision",
				source : ["MM:BH", 8],
				description : desc([
					"My weapon attacks score critical hits on attack rolls of 19 and 20",
					"\u2022 Side effect: All healing that I recieve is halved"
				])
			},
			"rapidity" : {
				name : "Rapidity",
				source : ["MM:BH", 8],
				description : desc([
					"My speed increases with 15 ft (20 ft at 15th level)",
					"\u2022 Side effect: I have disadvantage on Dexterity ability checks"
				])
			},
			"reconstruction (prereq: level 7 blood hunter)" : {
				name : "Reconstruction",
				source : ["MM:BH", 8],
				description : desc([
					"At the start of my turn in combat when I'm conscious and above 0 HP, I regenerate HP",
					"The amount of HP I regenerate is equal to 2 times my mutagen score",
					"\u2022 Side effect: My speed decreases by 10 ft"
				])
			},
			"sagacity" : {
				name : "Sagacity",
				source : ["MM:BH", 8],
				description : desc([
					"My Wisdom score increases by an amount equal to my mutation score",
					"\u2022 Side effect: My armor class is reduced by my mutation score"
				])
			},
			"shielded" : {
				name : "Shielded",
				source : ["MM:BH", 8],
				description : desc([
					"I gain resistance to slashing damage",
					"\u2022 Side effect: I gain vulnerability to bludgeoning damage"
				])
			},
			"unbreakable" : {
				name : "Unbreakable",
				source : ["MM:BH", 8],
				description : desc([
					"I gain resistance to bludgeoning damage",
					"\u2022 Side effect: I gain vulnerability to piercing damage"
				])
			},
			"wariness" : {
				name : "Wariness",
				source : ["MM:BH", 8],
				description : desc([
					"I gain a bonus to my initiative rolls equal to 2 times my mutation score",
					"\u2022 Side effect: I gain disadvantage on Wisdom (Perception) checks"
				])
			}
		},
		"subclassfeature3.1" : {
			name : "Mutagen Craft",
			source : ["MM:BH", 7],
			minlevel : 3,
			description : desc([
				"I can craft mutagen during a short rest, which remain usable until my next long rest",
				"I can craft as many mutagen each short rest as listed above, but only one of each",
				"Taking a mutagen is a bonus action; Mutagens only affect Medium or smaller creatures",
				"The effects of a mutagen overlap and last until taking a short rest to willingly stop it",
				"Only I can gain the mutagen's full effect, other only get the side effect"
			]),
			usages : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
			recovery : "short rest",
			additional : levels.map(function (n) { return n < 3 ? "" : "Mutation Score: " + Math.ceil(n/4); }),
			action : ["bonus action", " (Consume Mutagen)"]
		},
		"subclassfeature11" : {
			name : "Strange Metabolism",
			source : ["MM:BH", 7],
			minlevel : 11,
			description : "\n   " + "As a bonus action, I can ignore the side effects of a single mutagen for 1 minute",
			usages : 1,
			recovery : "short rest",
			action : ["bonus action", ""]
		},
		"subclassfeature15" : {
			name : "Robust Physiology",
			source : ["MM:BH", 7],
			minlevel : 15,
			description : "\n   " + "I gain immunity to poison damage and the poison condition",
			savetxt : { immune : ["poison"] }
		},
		"subclassfeature18" : {
			name : "Exalted Mutation",
			source : ["MM:BH", 7],
			minlevel : 18,
			description : "\n   " + "I permanently gain all (side) effects of one mutagen, chosen from the formulae I know"
		}
	}
};

//weapon entry for the predatory strikes
WeaponsList["predatory strike"] = {
	regExpSearch : /^(?=.*predatory)(?=.*strike).*$/i,
	name : "Predatory Strikes",
	source : ["MM:OotL", 3],
	ability : 1,
	type : "Natural",
	damage : [1, "", "slashing"],
	range : "Melee",
	description : "In hybrid form; One attack as bonus action with Attack action",
	monkweapon : true,
	abilitytodamage : true
};

//a function to update the notes page with the Hybrid form
UpdateHybridForm = function() {
	var NotesPrefix = isTemplVis("ASnotes", true);
	if (!NotesPrefix) {
		NotesPrefix = DoTemplate("ASnotes", "Add");
	} else {
		NotesPrefix = NotesPrefix[1];
	};

	var BHlevelOld = classes.old["blood hunter"] ? classes.old["blood hunter"].classlevel : 0;
	var BHlevelNew = classes.known["blood hunter"] ? classes.known["blood hunter"].level : 0;
	if (BHlevelOld <= 2 && BHlevelNew <= 2) return;

	//a funtion to create the full text for the hybrid feature
	var makeHybridText = function(lvl) {
		if (lvl < 3) return "";
		var PSdie = lvl >= 18 ? "d10" : (lvl >= 11 ? "d8" : "d6");
		var theText = "Blood Hunter (Order of the Lycan) Hybrid form, at level " + lvl + ":\n   " + "As a" + (lvl < 11 ? "n " : " bonus ") + "action, I can transform into a Hybrid lycanthropy form" + "\n   " + "This form lasts for " + (lvl < 11 ? "10" : "30") + " minutes or until I transform back as an action" + "\n   " + "I can speak, use equipment, and wear armor in this form" + "\n   " + "I revert back to my normal form if I fall unconscious, drop to 0 HP, or die" + "\n   " + "While I am in this Hybrid form, I gain the following features:";
		theText += "\n\u25C6 " + "Bloodlust (Order of the Lycan 3, MM:OotL 2)" + "\n   " + "I must save to keep control if I took damage since the beginning of my last turn" + "\n   " + "This save happens at the start of each of my turns" + (lvl < 15 ? ", if I've taken any damage" : " and I have adv. on it") + "\n   " + "It is a Wisdom save DC 10 or DC half the damage taken, whichever is higher" + "\n   " + "I automatically fail if I am under an effect that prevents concentrating (like Rage)" + "\n   " + "If failed, I must move to the nearest creature and take the Attack action on it" + "\n   " + "After this Attack action, I regain control and can continue my turn";
		theText += "\n\u25C6 " + "Cursed Weakness (Order of the Lycan 3, MM:OotL 2)" + "\n   " + "I have vulnerability to damage from silvered weapons";
		theText += "\n\u25C6 " + "Feral Might (Order of the Lycan 3, MM:OotL 2)" + "\n   " + "I gain bonus melee damage equal to half my proficiency bonus (rounded down)" + "\n   " + "I have advantage on Strength checks and saving throws";
		theText += "\n\u25C6 " + "Predatory Strikes (Order of the Lycan 3, MM:OotL 2)" + "\n   " + "My unarmed strikes are more powerful and can be imbued with a Crimson Rite" + "\n   " + "These predatory strikes do " + PSdie + " damage and I can use Dex or Str with them" + "\n   " + "When I use them during an Attack action, I can make another as a bonus action";
		theText += "\n\u25C6 " + "Resilient Hide (Order of the Lycan 3, MM:OotL 2)" + "\n   " + "I have resistance to bludgeoning, piercing, and slashing damage" + "\n   " + "Attacks that are magical or from silvered weapons bypass this resistance" + "\n   " + "I gain +1 bonus to AC while I am not wearing heavy armor";
		if (lvl >= 7) theText += "\n\u25C6 " + "Improved Predatory Strikes (Order of the Lycan 7, MM:OotL 2)" + "\n   " + "If I have an active Crimson Rite, my predatory strikes are considered magical";
		if (lvl >= 11) {
			theText += "\n\u25C6 " + "Lycan Regeneration (Order of the Lycan 11, MM:OotL 2)" + "\n   " + "If I have less than half my max HP at the start of my turn, I heal myself" + "\n   " + "I regain 1 + Constitution modifier (min 1) HP; This doesn't work if I'm at 0 HP";
			theText += "\n\u25C6 " + "Beastly Precision (Order of the Lycan 11, MM:OotL 2)" + "\n   " + "I add half my proficiency bonus (rounded down) to my predatory strikes to hit";
		} 
		if (lvl >= 15) theText += "\n\u25C6 " + "Pack Hunter (Order of the Lycan 15, MM:OotL 2)" + "\n   " + "I get adv. on attack rolls vs. a target if at least one of my allies is within 5 ft of it" + "\n   " + "The ally can't be incapacitated for it to grant me advantage";
		return theText;
	};

	//update the hybrid feature on the notes page
	var BHstringOld = makeHybridText(BHlevelOld);
	var BHstringNew = makeHybridText(BHlevelNew);
	ReplaceString(NotesPrefix + "Notes.Left", BHstringNew, false, BHstringOld);

	//give an alert about what is going on
	if (BHlevelOld <= 2 && BHlevelNew > 2) {
		app.alert({
			cTitle : "Order of thy Lycan's Hybrid Form is on the Notes page",
			cMsg : "You can find the rules for the Hybrid Form on the first \"Notes\" page, (page no. " + (tDoc.getField(NotesPrefix + "Notes.Left").page + 1) + ").\n\nThe Hybrid Form you gain with the Hybrid Transformation class feature from Blood Hunter (Order of thy Lycan) has a lot of rules attached to it. Because of this, it is not possible to put them in the \"Class Features\". Additionally, all the Blood Curses and Crimson Rites take up all the space of the third page's Notes section. Thus, the rules for this Hybrid Form will be put on the first \"Notes\" page and will be updated there.",
			nIcon : 3
		});
	};
};
