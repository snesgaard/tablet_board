window.onload = function() {
	var gameRatio = window.innerWidth/window.innerHeight;
	var game = new Phaser.Game(Math.ceil(640*gameRatio), 640, Phaser.CANVAS);
	var firstRunLandscape;
	var play = function(game){}



	play.prototype = {

		preload:function(){

			firstRunLandscape = game.scale.isGameLandscape;

			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

			game.scale.forceOrientation(false, true);

			game.scale.enterIncorrectOrientation.add(handleIncorrect);

      game.scale.leaveIncorrectOrientation.add(handleCorrect);

		},

		create:function(){

		}

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
				game.state.start("Play");
			}
			document.getElementById("turn").style.display="none";
		}
	}

	game.state.add("Play",play);
	game.state.start("Play");
}
