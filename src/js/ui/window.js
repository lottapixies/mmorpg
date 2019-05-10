
mmorpg.window = function (params) {

	this.name = null;

	this.__constructor = function (params) {
		this.name = params.name;
		return this;
	};

	return this.__constructor(params);
};
