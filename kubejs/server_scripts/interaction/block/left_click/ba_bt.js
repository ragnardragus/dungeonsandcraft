onEvent('block.left_click', event => {

  // Battle Towers Spawners give Hunger if you try break
	if(event.block.id == 'ba_bt:bt_land_spawner') {
		let playerName = event.player.name
		let cmd = `/effect give ${playerName} minecraft:hunger 10 1`
		runCommand(event, cmd)
	}
})