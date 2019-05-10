
if (typeof mmorpg === 'undefined') {
	var mmorpg = {};
}

mmorpg.core = function () {

	this.settings = {

	};

	this.__constructor = function() {
		console.log('-- begin game autoload --');
		return this;
	};

	return this.__constructor();
};
