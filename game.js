var gameRatio = window.innerWidth/window.innerHeight;
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
var layer;

function create() {
    map = game.add.tilemap('map');

    map.addTilesetImage('tileset', 'tiles');

    layer = map.createLayer('Tile Layer 1');

    layer.resizeWorld();
	layer.debugSettings.forceFullRedraw = true;
	console.log(map.tilesets[0].tileProperties[0].move);

	trump_image = game.add.sprite(0,0,'trump');
	trump_image.inputEnabled = true;

	game.physics.enable(trump_image, Phaser.Physics.ARCADE);
	game.input.addPointer();

	game.input.onDown.add(function() {
		console.log("fabo");
		game.physics.arcade.moveToPointer(trump_image, 400);
		});
}

function update() {
	if (Phaser.Rectangle.contains(trump_image.body, game.input.x, game.input.y))
		{
			trump_image.body.velocity.setTo(0,0);
		}

	console.log(trump_image.position.x);
	console.log(trump_image.position.y);
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
		}
		document.getElementById("turn").style.display="none";
	}
}
