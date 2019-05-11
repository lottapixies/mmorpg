
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
game.ITEMS = [
	{
		name: "Bonnet of Kings",
		handle: "bonnetofkings",
		id: 1,
		equipment_type: game.EQUIPMENT_TYPE_ARMOR,
		equipment_class: game.EQUIPMENT_ARMOR_CLASS_PLATE,
		weight: 1,
		durability: 10,
		equipment_slot: game.EQUIPMENT_SLOT_HEAD,
		rarity: game.EQUIPMENT_RARITY_UNIQUE,
		min_level: 10,
		stats: {
			agility: 2,
			strength: 6,
			intellect: 10
		}
	}, {
		name: "Spear of Destiny",
		handle: "spearofdestiny",
		id: 2,
		equipment_type: game.EQUIPMENT_TYPE_WEAPON,
		equipment_class: null,
		weight: 4,
		durability: 10,
		equipment_slot: game.EQUIPMENT_SLOT_LEFT_HAND,
		rarity: game.EQUIPMENT_RARITY_LEGENDARY,
		min_level: 20,
		stats: {
			agility: 20,
			strength: 13,
			intellect: 1
		}
	}, {
		name: "Ring of Emotions",
		handle: "ringofemotions",
		id: 3,
		equipment_type: null,
		equipment_class: null,
		weight: 0,
		durability: 0,
		equipment_slot: game.EQUIPMENT_SLOT_RING,
		rarity: game.EQUIPMENT_RARITY_RARE,
		min_level: 5,
		stats: {
			agility: 5,
			strength: 5,
			intellect: 30
		}
	}
];
