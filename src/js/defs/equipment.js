
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

mmorpg.EQUIPMENT_CLASS_CLOTH = 0;

mmorpg.EQUIPMENT_CLASS_LEATHER = 1;

mmorpg.EQUIPMENT_CLASS_MAIL = 2;

mmorpg.EQUIPMENT_CLASS_PLATE = 3;

mmorpg.EQUIPMENT_CLASSES = [
	{
		name: "Cloth",
		handle: "cloth",
		id: mmorpg.EQUIPMENT_CLASS_CLOTH
	}, {
		name: "Leather",
		handle: "leather",
		id: mmorpg.EQUIPMENT_CLASS_LEATHER
	}, {
		name: "Mail",
		handle: "mail"
		id: mmorpg.EQUIPMENT_CLASS_MAIL
	}, {
		name: "Plate",
		handle: "plate",
		mmorpg.EQUIPMENT_CLASS_PLATE
	}
];

mmorpg.ITEMS = [
	{
		name: "Bonnet of Kings",
		handle: "bonnetofkings",
		id: 1,
		equipment_type: mmorpg.EQUIPMENT_CLASS_PLATE,
		weight: 1,
		durability: 10,
		equipment_slot: mmorpg.EQUIPMENT_SLOT_HEAD,
		stats: {
			agility: 2,
			strength: 6,
			intellect: 10
		}
	}
];
