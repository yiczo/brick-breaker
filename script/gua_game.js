class Game {
	constructor() {
		this.scene = null
		this.actions = {}
		this.keydowns = {}
		this.canvas = document.querySelector('#id-canvas')
		this.context = this.canvas.getContext('2d')

		// https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback
		var that = this
		// events
		window.addEventListener('keydown', function(event) {
			that.keydowns[event.key] = true
		})
		window.addEventListener('keyup', function(event) {
			that.keydowns[event.key] = false
		})

		window.fps = 60
		
		var runloop = function() {
			setTimeout(function() {
				// run events
				var keys = Object.keys(that.actions)
				for (var i = keys.length - 1; i >= 0; i--) {
					var key = keys[i]
					if (that.keydowns[key]) {
						that.actions[key]()
					}
				}
				// update
				that.update()
				// clear
				that.context.clearRect(0, 0, that.canvas.width, that.canvas.height)
				// draw
				that.draw()

				runloop()
			}, (1000 / window.fps))
		}
		runloop()
	}

	static instance(...args) {
		this.i = this.i || new this(...args)
		return this.i
	}

	drawImage(guaImage) {
		this.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
	}

	registerAction(key, callback) {
		this.actions[key] = callback
	}

	update() {
		if (window.paused) {
			return
		}
		this.scene.update()
	}

	draw() {
		this.scene.draw()
	}

	replaceScene(scene) {
		this.scene = scene
	}
}