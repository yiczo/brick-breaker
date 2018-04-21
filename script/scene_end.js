var SceneEnd = function(game) {
	var s = {
		game: game,
	}

	var game = s.game

	s.draw = function() {
		game.context.fillText('Game Over', 100, 100)
		game.context.fillText('press \'R\' to replay', 100, 130)
	}
	s.update = function() {

	}

	// events
	window.addEventListener('keydown', function(event) {
		if (game.scene != s) {
			return
		}
		if (event.key == 'r') {
			var gameScene = Scene(game)
			game.replaceScene(gameScene)
		}
	})

	return s
}
