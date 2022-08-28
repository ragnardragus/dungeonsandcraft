import mods.itemstages.ItemStages;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.util.text.MCTextComponent;
import crafttweaker.api.util.text.MCStyle;


var jobs = {

  // Enchanter
  "enchanter:Enchanter" : [
    <item:minecraft:enchanting_table>,
    <item:minecraft:enchanted_golden_apple>,
    <item:minecraft:experience_bottle>,
  ],

  // Sorcerer
  "sorcerer:Sorcerer" : [
    <item:minecraft:totem_of_undying>,
    
    <item:waystones:warp_stone>,
    <item:waystones:waystone>,
    <item:waystones:mossy_waystone>,
    <item:waystones:sandy_waystone>,
    <item:waystones:warp_plate>
  ],

  // Smith
  "smith:Smith" : [
    <item:minecraft:anvil>,
    <item:minecraft:chipped_anvil>,
    <item:minecraft:damaged_anvil>,
    <item:minecraft:grindstone>,
    <item:minecraft:blast_furnace>,
    <item:minecraft:smithing_table>
  ],

  // Farmer
  "farmer:Farmer" : [
    <item:minecraft:diamond_hoe>,
    <item:minecraft:netherite_hoe>,

    <item:minecraft:smoker>,

    <item:minecraft:golden_carrot>,
    <item:quark:golden_frog_leg>,
    <item:minecraft:golden_apple>
  ]

} as IItemStack[][string];

for stage, items in jobs {
  for item in items {
    restrictItem(item, stage.split(":")[0], stage.split(":")[1]);
  }
}

function restrictItem(item as IItemStack, stage as string, reqMessage as string) as void {
  var gold = new MCStyle().setColor(0xfcb103);

  ItemStages.restrict(item, stage)
    .preventPickup(false)
    .hiddenName(MCTextComponent.createStringTextComponent("Require " + reqMessage).setStyle(gold))
    .setHiddenInJEI(false);
}
