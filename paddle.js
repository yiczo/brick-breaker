var Paddle = function() {
	var image = imageFromPath('paddle.png')
	var o = {
		image: image,
		x: 100,
		y: 200,
		speed: 5,
	}
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
