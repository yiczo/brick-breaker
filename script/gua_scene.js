class GuaScene {
	constructor(game) {
		this.game = game
	}
	draw() {

	}
	update() {

	}
}

class SceneStart extends GuaScene {
	constructor(game) {
		super(game)

		// events
		window.addEventListener('keydown', function(event) {
			if (!(game.scene instanceof SceneStart)) {
				return
			}
			if (event.key == 'q') {
				var gameScene = Scene(game)
				game.replaceScene(gameScene)
			}
		})
	}
	draw() {
		this.game.context.fillText('This is a game (hopefully)', 100, 100)
		this.game.context.fillText('press \'Q\' to start', 100, 130)
	}
}

class SceneEnd extends GuaScene {
	constructor(game) {
		super(game)

		// events
		window.addEventListener('keydown', function(event) {
			if (!(game.scene instanceof SceneEnd)) {
				return
			}
			if (event.key == 'r') {
				var gameScene = Scene(game)
				game.replaceScene(gameScene)
			}
		})
	}

	draw() {
		this.game.context.fillText('Game Over', 100, 100)
		this.game.context.fillText('press \'R\' to replay', 100, 130)
	}
}