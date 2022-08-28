onEvent('block.right_click', event => {

  let jobs = [
    {
      stage: 'enchanter',
      items: [
        'minecraft:enchanting_table'
      ]
    },
    {
      stage: 'sorcerer',
      items: [
        'waystones:waystone',
        'waystones:mossy_waystone',
        'waystones:sandy_waystone'
      ]
    },
    {
      stage: 'smith',
      items : [
        'minecraft:anvil',
        'minecraft:chipped_anvil',
        'minecraft:damaged_anvil',
        'minecraft:grindstone',
        'minecraft:blast_furnace',
        'minecraft:smithing_table'
      ]
    },
    {
      stage: 'farmer',
      items: [
        'minecraft:smoker'
      ]
    }
  ]

  let capitalizeWord = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  }

  let disablekRightClick = (stage, item, chatMessage) => {
    if(event.block.id === item) {
      if(!event.player.stages.has(stage)) {
        event.player.tell(chatMessage)
        event.cancel();
      }
    }
  }

  jobs.forEach(job => {
    job.items.forEach(item => {
      let chatMessage = `You need to know '${capitalizeWord(job.stage)}' to use this!`
      disablekRightClick(job.stage, item, chatMessage)
    })
  })
})