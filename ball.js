var Ball = function() {
	var image = imageFromPath('ball.png')
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
	return o
}
