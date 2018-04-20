var log = console.log.bind(console)

var collide = function(o1, o2) {
	var x1 = o1.x
	var x2 = o2.x
	var y1 = o1.y
	var y2 = o2.y
	var w1 = o1.image.width
	var w2 = o2.image.width
	var h1 = o1.image.height
	var h2 = o2.image.height

	var mx1 = x1 + w1 * 0.5
	var mx2 = x2 + w2 * 0.5
	var my1 = y1 + h1 * 0.5
	var my2 = y2 + h2 * 0.5

	if (Math.abs(mx1 - mx2) <= (w1 + w2) * 0.5) {
		if (Math.abs(my1 - my2) <= (h1 + h2) * 0.5) {
			return true
		}
	}
	return false
}
