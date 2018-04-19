var __main = function() {
	var game = Game(60)

	var paddle = Paddle()
	var ball = Ball()
	
	var blocks = []
	for (var i = 0; i < 3; i++) {
		var b = Block()
		b.x = i * 150
		b.y = 50
		blocks.push(b)
	}

	game.registerAction('a', function() {
		paddle.moveLeft()
	})
	game.registerAction('d', function() {
		paddle.moveRight()
	})
	game.registerAction('f', function() {
		ball.fire()
	})

	var paused = false
	window.addEventListener('keydown', function(event) {
		if (event.key == 'p') {
			paused = !paused
		}
	})

	game.update = function() {
		if (paused) {
			return
		}
		ball.move()
		if (paddle.collide(ball)) {
			ball.speedY *= -1
		}

		for (var i = blocks.length - 1; i >= 0; i--) {
			var block = blocks[i]
			if (block.alive & block.collide(ball)) {
				block.kill()
				ball.speedY *= -1
				ball.speedX *= -1
			}
		}
	}

	game.draw = function() {
		game.drawImage(paddle)
		game.drawImage(ball)
		// draw blocks
		for (var i = blocks.length - 1; i >= 0; i--) {
			var block = blocks[i]
			if (block.alive) {
				game.drawImage(block)
			}
		}
	}
}

__main()
