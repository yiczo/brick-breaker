var __main = function() {
	window.enableDebugMode = true

	var game = Game()
	var scene = SceneStart(game)
	game.scene = scene

	// debug mode
	if (window.enableDebugMode) {
		window.addEventListener('keydown', function(event) {
			if (event.key == 'p') {
				window.paused = !window.paused
			}
		})
		// control speed
		document.querySelector('#id-input-speed').hidden = false
		document.querySelector('#id-input-speed').addEventListener('input', function(event) {
			var input = event.target
			window.fps = input.value
		})
	}
}

var images = {
	ball: 'image/ball.png',
	block: 'image/block.png',
	paddle: 'image/paddle.png',
}

loadImages(images, function() {
	__main()
})
