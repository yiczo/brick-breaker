var SceneStart = function(game) {
	var s = {
		game: game,
	}

	var game = s.game

	s.draw = function() {
		game.context.fillText('This is a game (hopefully)', 100, 100)
		game.context.fillText('press \'Q\' to start', 100, 130)
	}
	s.update = function() {

	}

	// events
	window.addEventListener('keydown', function(event) {
		if (game.scene != s) {
			return
		}
		if (event.key == 'q') {
			var gameScene = Scene(game)
			game.replaceScene(gameScene)
		}
	})

	return s
}
