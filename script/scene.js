var loadLevel = function(n) {
	n = n - 1
	var level = levels[n]
	var blocks = []
	for (var i = 0; i < level.length; i++) {
		var p = level[i]
		var b = Block()
		b.x = p[0]
		b.y = p[1]
		blocks.push(b)
	}
	return blocks
}

var Scene = function(game) {
	var s = {
		game: game,
	}

	var game = s.game

	var paddle = Paddle()
	var ball = Ball()
	
	var blocks = loadLevel(1)

	game.registerAction('a', function() {
		paddle.moveLeft()
	})
	game.registerAction('d', function() {
		paddle.moveRight()
	})
	game.registerAction('f', function() {
		ball.fire()
	})

	s.draw = function() {
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
	s.update = function() {
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

		// handle gameover
		if (ball.y > paddle.y) {
			var end = new SceneEnd(game)
			game.replaceScene(end)
			return
		}
	}

	// debug mode
	if (window.enableDebugMode) {
		window.addEventListener('keydown', function(event) {
			var k = event.key
			if ('12'.includes(k)) {
				blocks = loadLevel(Number(k))
			}
		})
		// drag ball
		var enableDrag = false
		game.canvas.addEventListener('mousedown', function(event) {
			var x = event.offsetX
			var y = event.offsetY
			if (ball.containPoint(x, y)) {
				enableDrag = true
			}
		})
		game.canvas.addEventListener('mousemove', function(event) {
			if (enableDrag) {
				ball.x = event.offsetX
				ball.y = event.offsetY
			}
		})
		game.canvas.addEventListener('mouseup', function(event) {
			enableDrag = false
		})
	}
	return s
}
