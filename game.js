//<<<<<<< HEAD
var gameRatio = window.innerWidth/window.innerHeight;
// var game = new Phaser.Game(Math.ceil(640*gameRatio), 640, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
var game = new Phaser.Game( window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
var trump_image;
var firstRunLandscape;

function preload() {
    game.load.tilemap('map', 'resource/tiles/test.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'resource/tiles/tileset.png');	
	game.load.image('trump', 'resource/image/trump.png');
	
	// Seb's broken build
	firstRunLandscape = game.scale.isGameLandscape;

	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	game.scale.forceOrientation(false, true);

	game.scale.enterIncorrectOrientation.add(handleIncorrect);

     game.scale.leaveIncorrectOrientation.add(handleCorrect);
}

var map;
var terrain;
var entities;

function create() {
    
	// Init tilemaps
	map = game.add.tilemap('map');

    map.addTilesetImage('tileset', 'tiles');

    terrain = map.createLayer('Terrain');
	entities = map.createLayer('Entities');
	entities.visible = false;
	
	for (var i = 0; i < map.width; i++) {
		for (var j = 0; j < map.height; j++) {
			map.putTile(-1, i, j, "Entities");
		}
	}

    terrain.resizeWorld();
	terrain.debugSettings.forceFullRedraw = true;
	// ..... // ....
	
	
	trump_image = game.add.sprite(0,0,'trump');
	trump_image.inputEnabled = true;
	
	game.physics.enable(trump_image, Phaser.Physics.ARCADE);
	game.input.addPointer();
		
	game.input.onDown.add(function() {
		console.log("fabo");
		game.physics.arcade.moveToPointer(trump_image, 400);
		});
	
	// console.log(map.getTile(0,0, "Terrain"));
	// console.log(map.getTile(0,0, "Entities"));
	console.log(terrain);
	console.log(entities);
}

function update() {
	if (Phaser.Rectangle.contains(trump_image.body, game.input.x, game.input.y))
		{
			trump_image.body.velocity.setTo(0,0);
		}
	
	// console.log(trump_image.position.x);
	// console.log(trump_image.position.y);
}
function handleIncorrect(){
   	if(!game.device.desktop){
   		document.getElementById("turn").style.display="block";
   	}
}



function handleCorrect(){
	if(!game.device.desktop){
		if(firstRunLandscape){
			gameRatio = window.innerWidth/window.innerHeight;
			game.width = Math.ceil(640*gameRatio);
			game.height = 640;
			game.renderer.resize(game.width,game.height);
			//game.state.start("Play");
		}
		document.getElementById("turn").style.display="none";
	}
}
