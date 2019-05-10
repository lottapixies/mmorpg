
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


mmorpg.EQUIPMENT_TYPE_ARMOR = 0;

mmorpg.EQUIPMENT_TYPE_WEAPON = 1;


mmorpg.EQUIPMENT_WEAPON_SWORD = 0;

mmorpg.EQUIPMENT_WEAPON_DAGGER = 1;

mmorpg.EQUIPMENT_WEAPON_AXE = 2;

mmorpg.EQUIPMENT_WEAPON_HAMMER = 3;

mmorpg.EQUIPMENT_WEAPON_STAFF = 4;

mmorpg.EQUIPMENT_WEAPON_WAND = 5;

mmorpg.EQUIPMENT_WEAPON_BOW = 6;

mmorpg.EQUIPMENT_WEAPON_CLASSES = [
	{
		name: "Sword",
		handle: "sqord",
		id: mmorpg.EQUIPMENT_WEAPON_SWORD
	}, {
		name: "Dagger",
		handle: "dagger",
		id: mmorpg.EQUIPMENT_WEAPON_DAGGER
	}, {
		name: "Axe",
		handle: "axe"
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
		handle: "mail"
		id: mmorpg.EQUIPMENT_ARMOR_CLASS_MAIL
	}, {
		name: "Plate",
		handle: "plate",
		id: mmorpg.EQUIPMENT_ARMOR_CLASS_PLATE
	}
];


mmorpg.EQUIPMENT_RARITY_COMMON = 0;

mmorpg.EQUIPMENT_RARITY_UNCOMMON = 1;

mmorpg.EQUIPMENT_RARITY_RARE = 2;

mmorpg.EQUIPMENT_RARITY_LEGENDARY = 3;

mmorpg.EQUIPMENT_RARITY_UNIQUE = 4;

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
		handle: "rare"
		id: mmorpg.EQUIPMENT_RARITY_RARE
	}, {
		name: "Legendary",
		handle: "legendary",
		id: mmorpg.EQUIPMENT_RARITY_LEGENDARY
	}, {
		name: "Unique",
		handle: "unique",
		id: mmorpg.EQUIPMENT_RARITY_UNIQUE
	}
];


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
		stats: {
			agility: 2,
			strength: 6,
			intellect: 10
		}
	}
];
