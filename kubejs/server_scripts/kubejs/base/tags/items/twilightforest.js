onEvent('item.tags', (event) => {

  event.removeAll('twilightforest:portal/activator')
  event.add('twilightforest:portal/activator', 'minecraft:dragon_egg')
})