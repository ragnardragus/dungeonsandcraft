// priority: 0

onEvent('block.modification', event => {

  // Modify ba_bt spawner
  event.modify('ba_bt:bt_land_spawner', block => {
    block.destroySpeed = 40 // BreakSpeed = +/- 10 seconds with iron pickaxe
  })

  // supplementaries sack most speed to havest
  event.modify('supplementaries:sack', block => {
    block.destroySpeed = 0.01
  })
})

