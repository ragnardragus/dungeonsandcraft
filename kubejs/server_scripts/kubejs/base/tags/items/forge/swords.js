onEvent('item.tags', (event) => {

  let swords = [
   'majruszs_difficulty:end_sword',
   'majruszs_difficulty:wither_sword'
  ]

  swords.forEach((sword) => {
    event.add('forge:swords', sword)
  })
})