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

var __main = function() {
	var game = Game()

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

	var enableDebugMode = true
	window.paused = false
	if (enableDebugMode) {
		window.addEventListener('keydown', function(event) {
			if (event.key == 'p') {
				window.paused = !window.paused
			}
		})
		window.addEventListener('keydown', function(event) {
			var k = event.key
			if ('12'.includes(k)) {
				blocks = loadLevel(Number(k))
			}
		})
		// control speed
		document.querySelector('#id-input-speed').hidden = false
		document.querySelector('#id-input-speed').addEventListener('input', function() {
			var input = event.target
			window.fps = input.value
		})
	}

	game.update = function() {
		if (window.paused) {
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
