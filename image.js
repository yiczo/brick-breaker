var loadedImages = {}

var loadImages = function(images, callback) {
	var names = Object.keys(images)
	var loads = []
	for (var i = names.length - 1; i >= 0; i--) {
		let name = names[i]
		var path = images[name]
		let img = new Image()
		img.src = path
		img.onload = function() {
			loadedImages[name] = img
			loads.push(name)
			if (loads.length == names.length) {
				callback()
			}
		}
	}
}

var imageFromName = function(name) {
	return loadedImages[name]
}
