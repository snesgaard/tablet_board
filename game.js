
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var trump_image;

function preload() {
    game.load.tilemap('map', 'tiles/test.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'tiles/tileset.png');	
	game.load.image('trump', 'assets/trump.png');
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
