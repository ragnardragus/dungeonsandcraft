onEvent('item.smelted', event => {

  let rand = getRandomInt(25, 150)
   
  if(event.item.getItem().func_219971_r()) { // isEdible
    console.info('debug - xp random on crafted food: ' + rand)
    if(event.player.stages.has('farmer')) {
      event.server.runCommandSilent(`/xp add ${event.player.toString()} ${rand * (event.item.getCount() < 32 ? 1 : 2)}`)
    }
  }
})