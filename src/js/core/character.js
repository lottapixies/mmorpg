
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
