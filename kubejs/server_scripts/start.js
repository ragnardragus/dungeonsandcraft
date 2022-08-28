// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

// Run command on server schedule !The even must has severJS att!
let runCommand = (event, cmd) => {
	event.server.schedule(10, event.server, function (callback) {
			callback.data.runCommandSilent(cmd)
	})
}

let getRandomArbitrary = (min, max) => {
	return Math.random() * (max - min) + min;
}

let getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}