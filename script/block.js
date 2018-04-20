var Block = function() {
	var image = imageFromName('block')
	var o = {
		image: image,
		x: 100,
		y: 100,
		alive: true,
	}
	o.kill = function() {
		o.alive = false
	}
	o.collide = function(guaImage) {
		return collide(o, guaImage)
	}
	return o
}
