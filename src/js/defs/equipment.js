
/*
 * Equipment slots
 */
mmorpg.EQUIPMENT_SLOT_HEAD = 0;

mmorpg.EQUIPMENT_SLOT_SHOULDERS = 1;

mmorpg.EQUIPMENT_SLOT_CHEST = 2;

mmorpg.EQUIPMENT_SLOT_LEGS = 3;

mmorpg.EQUIPMENT_SLOT_HANDS = 4;

mmorpg.EQUIPMENT_SLOT_FEET = 5;

mmorpg.EQUIPMENT_SLOT_RING = 6;

mmorpg.EQUIPMENT_SLOT_AMULET = 7;

mmorpg.EQUIPMENT_SLOT_LEFT_HAND = 8;

mmorpg.EQUIPMENT_SLOT_RIGHT_HAND = 9;

mmorpg.EQUIPMENT_SLOTS = [
	{
		name: "Head",
		handle: "head",
		id: mmorpg.EQUIPMENT_SLOT_HEAD
	}, {
		name: "Shoulders",
		handle: "shoulders",
		id: mmorpg.EQUIPMENT_SLOT_SHOULDERS
	}, {
		name: "Chest",
		handle: "chest",
		id: mmorpg.EQUIPMENT_SLOT_CHEST
	}, {
		name: "Legs",
		handle: "legs",
		id: mmorpg.EQUIPMENT_SLOT_LEGS
	}, {
		name: "Hands",
		handle: "hands",
		id: mmorpg.EQUIPMENT_SLOT_HANDS
	}, {
		name: "Feet",
		handle: "feet",
		id: mmorpg.EQUIPMENT_SLOT_FEET
	}, {
		name: "Ring",
		handle: "ring",
		id: mmorpg.EQUIPMENT_SLOT_RING
	}, {
		name: "Amulet",
		handle: "amulet",
		id: mmorpg.EQUIPMENT_SLOT_AMULET
	}, {
		name: "Left hand",
		handle: "lefthand",
		id: mmorpg.EQUIPMENT_SLOT_LEFT_HAND
	}, {
		name: "Right hand",
		handle: "righthand",
		id: mmorpg.EQUIPMENT_SLOT_RIGHT_HAND
	}
];

/*
 * Equipment types
 */
mmorpg.EQUIPMENT_TYPE_ARMOR = 0;

mmorpg.EQUIPMENT_TYPE_WEAPON = 1;


/*
 * Equipment weapon types
 */
mmorpg.EQUIPMENT_WEAPON_SWORD = 0;

mmorpg.EQUIPMENT_WEAPON_DAGGER = 1;

mmorpg.EQUIPMENT_WEAPON_AXE = 2;

mmorpg.EQUIPMENT_WEAPON_HAMMER = 3;

mmorpg.EQUIPMENT_WEAPON_STAFF = 4;

mmorpg.EQUIPMENT_WEAPON_WAND = 5;

mmorpg.EQUIPMENT_WEAPON_BOW = 6;


/*
 * Equipment weapon classes
 */
mmorpg.EQUIPMENT_WEAPON_CLASSES = [
	{
		name: "Sword",
		handle: "sword",
		id: mmorpg.EQUIPMENT_WEAPON_SWORD
	}, {
		name: "Dagger",
		handle: "dagger",
		id: mmorpg.EQUIPMENT_WEAPON_DAGGER
	}, {
		name: "Axe",
		handle: "axe",
		id: mmorpg.EQUIPMENT_WEAPON_AXE
	}, {
		name: "Hammer",
		handle: "hammer",
		id: mmorpg.EQUIPMENT_WEAPON_HAMMER
	}, {
		name: "Staff",
		handle: "staff",
		id: mmorpg.EQUIPMENT_WEAPON_STAFF
	}, {
		name: "Wand",
		handle: "wand",
		id: mmorpg.EQUIPMENT_WEAPON_WAND
	}, {
		name: "Bow",
		handle: "bow",
		id: mmorpg.EQUIPMENT_WEAPON_BOW
	}
];

/*
 * Equipment armor classes
 */
mmorpg.EQUIPMENT_ARMOR_CLASS_CLOTH = 0;

mmorpg.EQUIPMENT_ARMOR_CLASS_LEATHER = 1;

mmorpg.EQUIPMENT_ARMOR_CLASS_MAIL = 2;

mmorpg.EQUIPMENT_ARMOR_CLASS_PLATE = 3;

mmorpg.EQUIPMENT_ARMOR_CLASSES = [
	{
		name: "Cloth",
		handle: "cloth",
		id: mmorpg.EQUIPMENT_ARMOR_CLASS_CLOTH
	}, {
		name: "Leather",
		handle: "leather",
		id: mmorpg.EQUIPMENT_ARMOR_CLASS_LEATHER
	}, {
		name: "Mail",
		handle: "mail",
		id: mmorpg.EQUIPMENT_ARMOR_CLASS_MAIL
	}, {
		name: "Plate",
		handle: "plate",
		id: mmorpg.EQUIPMENT_ARMOR_CLASS_PLATE
	}
];


/*
 * Equipment rarity
 */
mmorpg.EQUIPMENT_RARITY_COMMON = 0;

mmorpg.EQUIPMENT_RARITY_UNCOMMON = 1;

mmorpg.EQUIPMENT_RARITY_RARE = 2;

mmorpg.EQUIPMENT_RARITY_LEGENDARY = 3;

mmorpg.EQUIPMENT_RARITY_UNIQUE = 4;

mmorpg.EQUIPMENT_RARITY_SET = 5;

mmorpg.EQUIPMENT_RARITY = [
	{
		name: "Common",
		handle: "common",
		id: mmorpg.EQUIPMENT_RARITY_COMMON
	}, {
		name: "Uncommon",
		handle: "uncommon",
		id: mmorpg.EQUIPMENT_RARITY_UNCOMMON
	}, {
		name: "Rare",
		handle: "rare",
		id: mmorpg.EQUIPMENT_RARITY_RARE
	}, {
		name: "Legendary",
		handle: "legendary",
		id: mmorpg.EQUIPMENT_RARITY_LEGENDARY
	}, {
		name: "Unique",
		handle: "unique",
		id: mmorpg.EQUIPMENT_RARITY_UNIQUE
	}, {
		name: "Set",
		handle: "set",
		id: mmorpg.EQUIPMENT_RARITY_SET
	}
];

/*
 * Equipment item
 */
mmorpg.ITEM = {
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
mmorpg.ITEMS = [
	{
		name: "Bonnet of Kings",
		handle: "bonnetofkings",
		id: 1,
		equipment_type: mmorpg.EQUIPMENT_TYPE_ARMOR,
		equipment_class: mmorpg.EQUIPMENT_ARMOR_CLASS_PLATE,
		weight: 1,
		durability: 10,
		equipment_slot: mmorpg.EQUIPMENT_SLOT_HEAD,
		rarity: mmorpg.EQUIPMENT_RARITY_UNIQUE,
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
		equipment_type: mmorpg.EQUIPMENT_TYPE_WEAPON,
		equipment_class: null,
		weight: 4,
		durability: 10,
		equipment_slot: mmorpg.EQUIPMENT_SLOT_LEFT_HAND,
		rarity: mmorpg.EQUIPMENT_RARITY_LEGENDARY,
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
		equipment_slot: mmorpg.EQUIPMENT_SLOT_RING,
		rarity: mmorpg.EQUIPMENT_RARITY_RARE,
		min_level: 5,
		stats: {
			agility: 5,
			strength: 5,
			intellect: 30
		}
	}
];
