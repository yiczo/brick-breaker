var Paddle = function() {
	var image = imageFromName('paddle')
	var o = {
		image: image,
		x: 0,
		y: 0,
		speed: 5,
	}
	o.x = 400 * 0.5 - o.image.width * 0.5
	o.y = 300 - o.image.height

	o.move = function(x) {
		o.x = x
		if (o.x < 0) {
			o.x = 0
		}
		if (o.x > 400 - o.image.width) {
			o.x = 400 - o.image.width
		}
	}
	o.moveLeft = function() {
		o.move(o.x - o.speed)
	}
	o.moveRight = function() {
		o.move(o.x + o.speed)
	}
	o.collide = function(guaImage) {
		return collide(o, guaImage)
	}
	return o
}
