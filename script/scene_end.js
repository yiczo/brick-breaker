var SceneEnd = function(game) {
	var s = {
		game: game,
	}

	var game = s.game

	s.draw = function() {
		game.context.fillText('Game Over', 100, 100)
	}
	s.update = function() {

	}

	return s
}
