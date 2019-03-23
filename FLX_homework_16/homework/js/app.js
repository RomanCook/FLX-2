//
//task1
//
function assign (target) {
	let newObj = target;
	for (let i =1; i<arguments.length; i++) {
		for (let key in arguments[i]) {
			if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
					newObj[key] = arguments[i][key];
				}
			
		}
	} 
	return newObj;
}
let defaults = { a: 123, b: 777 };
let options = { a: 456 };
let configs = assign({}, defaults, options);

//
//task2
//
let uno = 1;
function Bot (object) {
	if (typeof object !== 'object') {
		return console.log(`Please try to put correct object.`);
	}
	this.name = object.name;
	this.speed = object.speed;
	this.x = object.x;
	this.y = object.y;
	this.getDefaultSpeed = function () {
		return object.speed;
	}
}
	Bot.prototype.getSpeed = function () {
		return this.speed;
	}
	Bot.prototype.setSpeed = function (newSpeed) {
		if (Number.isFinite(newSpeed)) {
			this.speed = newSpeed;
			return `Speed was changed to new value of ${this.speed}.`
		} else {
			return `You cant change the speed.`
		}
	}
	Bot.prototype.getCoordinates = function () {
		return {x: this.x, y: this.y};
	}
	Bot.prototype.setCoordinates = function (x, y) {
		if (!isNaN(x) && !isNaN(y)) {
			this.x = x;
			this.y = y;
			return console.log(`Coordinates was changed to x: ${this.x}, y: ${this.y}.`);
		} else {
			return console.error(`You cant change coordinates.`);
		}
	}
	Bot.prototype.showPosition = function () {
		return `I am ${this.constructor.name} ${this.name}. I am located at ${this.x}:${this.y}.`
	}
	Bot.prototype.move = function(direction) {
		switch (direction) {
			case 'up': 
				this.y += this.speed;
				break;
			case 'down': 
				this.y -= this.speed;
				break;
			case 'right': 
				this.x += this.speed;
				break;
			case 'left': 
				this.x -= this.speed;
				break;
			default: 
				console.error(`Wrong direction`);
				break;
		}
	}

function Racebot (object) {
	if (typeof object !== 'object') {
		return console.log(`Please try to put correct object.`);
	}
	Bot.call(this, object);
	this.movementLog = null;
}
	Racebot.prototype = Object.create(Bot.prototype);
	Racebot.prototype.constructor = Racebot;
	Racebot.prototype.move = function(direction) {
		if (direction === this.movementLog) {
			++this.speed;
			this.movementLog = direction;
		} else {
			this.speed = this.getDefaultSpeed();
			this.movementLog = direction;
		}
		switch (direction) {
			case 'up': 
				this.y += this.speed;
				break;
			case 'down': 
				this.y -= this.speed;
				break;
			case 'right': 
				this.x += this.speed;
				break;
			case 'left': 
				this.x -= this.speed;
				break;
			default: 
				console.error(`Wrong direction`);
				break;
		}
	}
	
function Speedbot (object) {
	if (typeof object !== 'object') {
		return console.log(`Please try to put correct object.`);
	}
	Bot.call(this, object);
	this.prepareEngine = function () {
		this.speed +=2;
	}
	this.defaultSpeed = this.getDefaultSpeed();
}
	Speedbot.prototype = Object.create(Bot.prototype);
	Speedbot.prototype.constructor = Speedbot;
	Speedbot.prototype.move = function(direction) {
		switch (direction) {
			case 'up': 
				this.y += this.speed;
				break;
			case 'down': 
				this.y -= this.speed;
				break;
			case 'right': 
				this.x += this.speed;
				break;
			case 'left': 
				this.x -= this.speed;
				break;
			default: 
				console.error(`Wrong direction`);
				this.speed++;
				break;
		}
		if (this.speed>this.defaultSpeed) {
			this.speed--;
		}
	}
	
// let Botty = new Bot({name: "Betty", speed: 2, x: 0, y: 1});
// Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
// Botty.move('left');
// Botty.move('down');
// Botty.move('up');
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.

// let Zoom = new Racebot({name: "Lightning", speed: 2, x: 0, y: 1});
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
// Zoom.move('left');
// Zoom.move('down');
// Zoom.move('up');
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.

// let Broom = new Speedbot({name: "Thunder", speed: 2, x: 0, y: 1});
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
// Broom.prepareEngine();
// Broom.move('left');
// Broom.move('down');
// Broom.move('up');
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.
