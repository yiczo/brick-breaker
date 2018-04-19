var Game = function(fps) {
	var g = {
		actions: {},
		keydowns: {},
	}
	var canvas = document.querySelector('#id-canvas')
	var context = canvas.getContext('2d')
	g.canvas = canvas
	g.context = context
	// draw
	g.drawImage = function(guaImage) {
		g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
	}
	// events
	window.addEventListener('keydown', function(event) {
		g.keydowns[event.key] = true
	})
	window.addEventListener('keyup', function(event) {
		g.keydowns[event.key] = false
	})
	g.registerAction = function(key, callback) {
		g.actions[key] = callback
	}

	// timer
	setInterval(function() {
		// run events
		var keys = Object.keys(g.actions)
		for (var i = keys.length - 1; i >= 0; i--) {
			var key = keys[i]
			if (g.keydowns[key]) {
				g.actions[key]()
			}
		}
		// update
		g.update()
		// clear
		g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
		// draw
		g.draw()
	}, (1000 / fps))
	return g
}
