/**
 * MMORPG game engine written in Javascript.
 *
 * @author lottapixies https://github.com/lottapixies
 * @author randompixels https://github.com/randompixels
 * @version 0.1.0
 * @license MIT
 * @link https://github.com/lottapixies/mmorpg
 */

if (typeof game === 'undefined') {
	var game = {};
}

game.VERSION = "0.1.0";


/*
 * Game character
 */
game.CHARACTER = {
	name: "",
	handle: "",
	faction: null,
	class_type: null,
	born: null,
	stats: {
		strength: 0,
		agility: 0,
		intellect: 0,
		luck: 0
	},
	coins: 0,
	equipment: {

	},
	backpack: {

	},
	appearance: {
		
	}
};


/*
 * Game classes
 */
game.CLASSES = [
	{
		name: "Barbarian",
		handle: "barbarian",
		stats: {
			strength: 8,
			intellect: 2,
			agility: 5
		}
	}, {
		name: "Assassin",
		handle: "assassin",
		stats: {
			strength: 4,
			intellect: 6,
			agility: 9
		}
	}, {
		name: "Hunter",
		handle: "hunter",
		stats: {
			strength: 2,
			intellect: 5,
			agility: 8
		}
	}, {
		name: "Mage",
		handle: "mage",
		stats: {
			strength: 2,
			intellect: 9,
			agility: 2
		}
	}, {
		name: "Priest",
		handle: "priest",
		stats: {
			strength: 4,
			intellect: 7,
			agility: 4
		}
	}
];


/*
 * Equipment slots
 */
game.EQUIPMENT_SLOT_HEAD = 0;

game.EQUIPMENT_SLOT_SHOULDERS = 1;

game.EQUIPMENT_SLOT_CHEST = 2;

game.EQUIPMENT_SLOT_LEGS = 3;

game.EQUIPMENT_SLOT_HANDS = 4;

game.EQUIPMENT_SLOT_FEET = 5;

game.EQUIPMENT_SLOT_RING = 6;

game.EQUIPMENT_SLOT_AMULET = 7;

game.EQUIPMENT_SLOT_LEFT_HAND = 8;

game.EQUIPMENT_SLOT_RIGHT_HAND = 9;

game.EQUIPMENT_SLOTS = [
	{
		name: "Head",
		handle: "head",
		id: game.EQUIPMENT_SLOT_HEAD
	}, {
		name: "Shoulders",
		handle: "shoulders",
		id: game.EQUIPMENT_SLOT_SHOULDERS
	}, {
		name: "Chest",
		handle: "chest",
		id: game.EQUIPMENT_SLOT_CHEST
	}, {
		name: "Legs",
		handle: "legs",
		id: game.EQUIPMENT_SLOT_LEGS
	}, {
		name: "Hands",
		handle: "hands",
		id: game.EQUIPMENT_SLOT_HANDS
	}, {
		name: "Feet",
		handle: "feet",
		id: game.EQUIPMENT_SLOT_FEET
	}, {
		name: "Ring",
		handle: "ring",
		id: game.EQUIPMENT_SLOT_RING
	}, {
		name: "Amulet",
		handle: "amulet",
		id: game.EQUIPMENT_SLOT_AMULET
	}, {
		name: "Left hand",
		handle: "lefthand",
		id: game.EQUIPMENT_SLOT_LEFT_HAND
	}, {
		name: "Right hand",
		handle: "righthand",
		id: game.EQUIPMENT_SLOT_RIGHT_HAND
	}
];

/*
 * Equipment types
 */
game.EQUIPMENT_TYPE_ARMOR = 0;

game.EQUIPMENT_TYPE_WEAPON = 1;


/*
 * Equipment weapon types
 */
game.EQUIPMENT_WEAPON_SWORD = 0;

game.EQUIPMENT_WEAPON_DAGGER = 1;

game.EQUIPMENT_WEAPON_AXE = 2;

game.EQUIPMENT_WEAPON_HAMMER = 3;

game.EQUIPMENT_WEAPON_STAFF = 4;

game.EQUIPMENT_WEAPON_WAND = 5;

game.EQUIPMENT_WEAPON_BOW = 6;


/*
 * Equipment weapon classes
 */
game.EQUIPMENT_WEAPON_CLASSES = [
	{
		name: "Sword",
		handle: "sword",
		id: game.EQUIPMENT_WEAPON_SWORD
	}, {
		name: "Dagger",
		handle: "dagger",
		id: game.EQUIPMENT_WEAPON_DAGGER
	}, {
		name: "Axe",
		handle: "axe",
		id: game.EQUIPMENT_WEAPON_AXE
	}, {
		name: "Hammer",
		handle: "hammer",
		id: game.EQUIPMENT_WEAPON_HAMMER
	}, {
		name: "Staff",
		handle: "staff",
		id: game.EQUIPMENT_WEAPON_STAFF
	}, {
		name: "Wand",
		handle: "wand",
		id: game.EQUIPMENT_WEAPON_WAND
	}, {
		name: "Bow",
		handle: "bow",
		id: game.EQUIPMENT_WEAPON_BOW
	}
];

/*
 * Equipment armor classes
 */
game.EQUIPMENT_ARMOR_CLASS_CLOTH = 0;

game.EQUIPMENT_ARMOR_CLASS_LEATHER = 1;

game.EQUIPMENT_ARMOR_CLASS_MAIL = 2;

game.EQUIPMENT_ARMOR_CLASS_PLATE = 3;

game.EQUIPMENT_ARMOR_CLASSES = [
	{
		name: "Cloth",
		handle: "cloth",
		id: game.EQUIPMENT_ARMOR_CLASS_CLOTH
	}, {
		name: "Leather",
		handle: "leather",
		id: game.EQUIPMENT_ARMOR_CLASS_LEATHER
	}, {
		name: "Mail",
		handle: "mail",
		id: game.EQUIPMENT_ARMOR_CLASS_MAIL
	}, {
		name: "Plate",
		handle: "plate",
		id: game.EQUIPMENT_ARMOR_CLASS_PLATE
	}
];

/*
 * Equipment rarity
 */
game.EQUIPMENT_RARITY_COMMON = 0;

game.EQUIPMENT_RARITY_UNCOMMON = 1;

game.EQUIPMENT_RARITY_RARE = 2;

game.EQUIPMENT_RARITY_LEGENDARY = 3;

game.EQUIPMENT_RARITY_UNIQUE = 4;

game.EQUIPMENT_RARITY_SET = 5;

game.EQUIPMENT_RARITY = [
	{
		name: "Common",
		handle: "common",
		id: game.EQUIPMENT_RARITY_COMMON
	}, {
		name: "Uncommon",
		handle: "uncommon",
		id: game.EQUIPMENT_RARITY_UNCOMMON
	}, {
		name: "Rare",
		handle: "rare",
		id: game.EQUIPMENT_RARITY_RARE
	}, {
		name: "Legendary",
		handle: "legendary",
		id: game.EQUIPMENT_RARITY_LEGENDARY
	}, {
		name: "Unique",
		handle: "unique",
		id: game.EQUIPMENT_RARITY_UNIQUE
	}, {
		name: "Set",
		handle: "set",
		id: game.EQUIPMENT_RARITY_SET
	}
];

/*
 * Equipment item
 */
game.ITEM = {
	name: "",
	handle: "",
	description: "",
	dps: 0,
	level: 1,
	id: null,
	equipment_type: null,
	equipment_class: null,
	weight: 1,
	durability: 10,
	equipment_slot: null,
	rarity: null,
	min_level: 1,
	stats: {
		agility: 1,
		strength: 1,
		intellect: 1
	}
};


/*
 * Equipment items
 */
game.ITEMS = [];


/*
 * Game factions
 */
game.FACTIONS = [
	{
		name: "The Immortals",
		handle: "immortals"
	}, {
		name: "Army of Light",
		handle: "armyoflight"
	}, {
		name: "Infernuum",
		handle: "infernuum"
	}
];



game.character = function (params) {

	this.name = null;
	this.level = 1;
	this.faction = null;
	this.class_type = null;
	this.born = null;
	this.stats = {
		strength: 0,
		agility: 0,
		intellect: 0,
		luck: 0
	};
	this.coins = 0;
	this.equipment = {};
	this.backpack_slots = 20;
	this.backpack = [];

	this.__constructor = function (params) {
		this.name = params.name;
		return this;
	};

	this.level_up = function() {
		this.level++;
		return this;
	};

	this.level_down = function() {
		this.level--;
		return this;
	};
	
	this.set_level = function(level) {
		this.level = level;
		return this;
	};

	this.get_level = function() {
		return this.level;
	};

	this.set_name = function(name) {
		this.name = name;
		return this;
	};

	this.get_name = function() {
		return this.name;
	};

	this.set_faction = function(faction) {
		this.faction = faction;
		return this;
	};

	this.get_faction = function() {
		return this.faction;
	};

	this.set_class = function(class_type) {
		this.class_type = class_type;
		return this;
	};

	this.get_class = function() {
		return this.class_type;
	};

	this.get_born = function() {
		return this.born;
	};

	this.get_stats = function() {
		return this.stats;
	};

	this.set_stats = function(stats) {
		this.stats = stats;
		return this;
	};

	this.set_stat = function(stat, value) {
		this.stats[stat] = value;
		return this;
	};

	this.get_coins = function() {
		return this.coins;
	};

	this.set_coins = function(coins) {
		this.coins = coins;
		return this;
	};

	this.inc_coins = function(coins) {
		this.coins = this.coins + coins;
	};

	this.dec_coins = function(coins) {
		if ((this.coins - coins) > 0) {
			this.coins = this.coins - coins;
		} else {
			this.coins = 0;
		}
		return this;
	};

	this.add_to_backpack = function(item) {
		if (this.backpack.length < this.backpack_slots) {
			this.backpack.push(item);
		} else {
			return false;
		}
		return this;
	};

	this.remove_from_backpack = function(item) {
		// TODO
	};

	this.get_backpack = function(backpack) {
		this.backpack = backpack;
		return this;
	};

	this.reset_backpack = function() {
		this.backpack = [];
		return this;
	};

	this.add_to_equipment = function(slot, item) {
		if (this.backpack.length < this.backpack_slots) {
			var tmp_item = this.get_equipment_item(slot);
			this.add_to_backpack(tmp_item);
			this.equipment[slot] = item;
		} else {
			return false;
		}
		return this;
	};

	this.remove_from_equipment = function(slot) {
		if (this.backpack.length < this.backpack_slots) {
			var item = this.get_equipment_item(slot);
			this.add_to_backpack(item);
		} else {
			return false;
		}
		return this;
	};

	this.get_equipment_item = function(slot) {
		if (this.equipment[slot] !== null) {
			return this.equipment[slot];
		} else {
			return false;
		}
	};

	this.reset_equipment = function() {
		this.equipment = [];
		return this;
	};

	return this.__constructor(params);
};


game.core = function () {

	this.helpers = {};
	
	this.settings = {

	};

	this.__constructor = function() {
		console.log('-- begin game autoload --');
		return this;
	};

	return this.__constructor();
};


$(document).ready(function () {
	new game.core();
});
