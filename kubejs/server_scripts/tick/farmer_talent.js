onEvent("player.tick", event => {

  let getXRange = () => { return 2 }
  let getYRange = () => { return 1 }
  let getZRange = () => { return 2 }

  const BoneMealItem = java('net.minecraft.item.BoneMealItem')
  const CropsBlock = java('net.minecraft.block.CropsBlock')
  const ItemStack = java('net.minecraft.item.ItemStack')
  const Items = java('net.minecraft.item.Items')
  const ParticleTypes = java('net.minecraft.particles.ParticleTypes')
  
  let playerPos = event.player.blockPosition()
  let world = event.player.level
  
  let pos = new BlockPos(
    playerPos.getX() + event.player.getRandom().nextInt(getXRange() * 2 + 1) - getXRange(),
    playerPos.getY() - event.player.getRandom().nextInt(getYRange() * 2 + 1) + getYRange(),
    playerPos.getZ() + event.player.getRandom().nextInt(getZRange() * 2 + 1) - getZRange()
  )

  let block = event.player.level.getBlockState(pos).func_177230_c() // getBlock
  let BoneMeal = Items.field_196106_bc // BONE_MEAL
  let HappyVillagerParticle = ParticleTypes.field_197632_y // HAPPY_VILLAGER
  
  if(event.player.isCrouching() && !event.player.stages.has('farmer')) {
    if(block instanceof CropsBlock) {
      const item = new ItemStack(BoneMeal)
      BoneMealItem.applyBonemeal(item, world.minecraftLevel, pos, event.player.minecraftPlayer)
      world.minecraftLevel.func_195598_a(HappyVillagerParticle, pos.getX(), pos.getY(), pos.getZ(), 100, 1, 0.5, 1, 0)
    }
  }
})