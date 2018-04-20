var Ball = function() {
	var image = imageFromName('ball')
	var o = {
		image: image,
		x: 100,
		y: 100,
		speedX: 2,
		speedY: 2,
		fired: false,
	}
	o.move = function() {
		if (o.fired) {
			if (o.x < 0 || o.x > 400) {
				o.speedX *= -1
			}
			if (o.y < 0 || o.y > 300) {
				o.speedY *= -1
			}

			o.x += o.speedX
			o.y += o.speedY
		}
	}
	o.fire = function() {
		o.fired = true
	}
	o.containPoint = function(x, y) {
		var xIn = (x >= o.x && x <= o.x + o.image.width)
		var yIn = (y >= o.y && y <= o.y + o.image.height)
		return xIn & yIn
	}
	return o
}
