// Another Quality Modpack 2 //
///////////////////////////////
const arrRemove = [
'ae2:matter_cannon',
'agape_space:enhanced_helmet',
'bewitchment:prickly_belt',
'bewitchment:specter_bangle',
'biomemakeover:altar',
'bno:aluminum_ingot',
'bno:copper_nugget',
'botania:balance_cloak',
'botania:blood_pendant',
'botania:cocoon',
'botania:diving_rod',
'botania:fel_pumpkin',
'botania:flight_tiara_0',
'botania:flight_tiara',
'botania:laputa_shard',
'botania:missile_rod',
'botania:smelt_rod',
'botania:spawner_claw',
'botania:super_lava_pendant',
'botania:terraform_rod',
'botania:tornado_rod',
'botania:water_ring',
'buildinggadgets:gadget_exchanging',
'consistency_plus:copper_nugget',
'darkutils:damage_plate_maim',
'darkutils:damage_plate_player',
'darkutils:damage_plate',
'darkutils:darkness_plate',
'darkutils:fatigue_plate',
'darkutils:flame_plate',
'darkutils:frost_plate',
'darkutils:levitation_plate',
'darkutils:misfortune_plate',
'darkutils:omen_plate',
'darkutils:poison_plate',
'darkutils:slowness_plate',
'darkutils:weakness_plate',
'darkutils:wither_plate',
'doom:daisy',
'doom:invisiblesphere',
'gobber2:gobber2_medallion_shielding',
'gobber2:gobber2_medallion_suffering',
'gobber2:gobber2_ring_airwalking',
'gobber2:gobber2_ring_farmer',
'gobber2:gobber2_ring_phoenix',
'gobber2:gobber2_ring_repair',
'gobber2:gobber2_ring_strength',
'gobber2:gobber2_ring_sunshine',
'gobber2:gobber2_staff_farmer',
'gobber2:gobber2_staff_hostile_ensnarement',
'hoverpets:blaze_pet',
'hoverpets:creeper_pet',
'hoverpets:panda_pet',
'hyperlighting:switch_board',
'indrev:bronze_axe', 
'indrev:bronze_boots', 
'indrev:bronze_chestplate', 
'indrev:bronze_helmet', 
'indrev:bronze_hoe', 
'indrev:bronze_leggings', 
'indrev:bronze_pickaxe', 
'indrev:bronze_shovel', 
'indrev:bronze_sword',
'indrev:copper_axe', 
'indrev:copper_boots', 
'indrev:copper_chestplate', 
'indrev:copper_helmet', 
'indrev:copper_hoe', 
'indrev:copper_leggings', 
'indrev:copper_pickaxe', 
'indrev:copper_shovel', 
'indrev:copper_sword', 
'indrev:damage_enhancer',
'indrev:silver_axe',
'indrev:silver_boots', 
'indrev:silver_chestplate', 
'indrev:silver_helmet', 
'indrev:silver_leggings',
'indrev:slaughter_mk1',
'indrev:slaughter_mk2',
'indrev:slaughter_mk3',
'indrev:slaughter_mk4',
'kibe:angel_ring',
'kibe:chunk_loader',
'kibe:cursed_lasso',
'kibe:diamond_kibe',
'kibe:diamond_lasso',
'kibe:diamond_spikes',
'kibe:gold_spikes',
'kibe:golden_kibe',
'kibe:iron_spikes',
'kibe:magma_ring',
'kibe:stone_spikes',
'kibe:water_ring',
'mcdw:sword_the_starless_night',
'mining_dims:caving_teleporter',
'mining_dims:climbing_teleporter',
'mining_dims:diamond_nugget',
'mining_dims:hunting_teleporter',
'mining_dims:mining_teleporter',
'mining_dims:nethering_portal_block',
'mining_dims:nethering_teleporter',
'miningutility:escape_rope',
'miningutility:mining_helmet',
'modern_industrialization:gravichestplate',
'modern_industrialization:quantum_boots',
'modern_industrialization:quantum_chestplate',
'modern_industrialization:quantum_helmet',
'modern_industrialization:quantum_leggings',
'modern_industrialization:quantum_sword',
'modern_industrialization:replicator',
'myloot:loot_chest_minecart',
'myloot:loot_chest',
'myloot:loot_shulker_box',
'myloot:opened_loot_chest',
'mythicmetals:bronze_axe', 
'mythicmetals:bronze_boots', 
'mythicmetals:bronze_chestplate', 
'mythicmetals:bronze_helmet', 
'mythicmetals:bronze_hoe', 
'mythicmetals:bronze_leggings', 
'mythicmetals:bronze_pickaxe', 
'mythicmetals:bronze_shovel', 
'mythicmetals:bronze_sword', 
'mythicmetals:copper_nugget',
'prefab:item_swift_blade_bronze',
'prefab:item_swift_blade_copper',
'prefab:item_swift_blade_diamond',
'prefab:item_swift_blade_gold',
'prefab:item_swift_blade_iron',
'prefab:item_swift_blade_netherite',
'prefab:item_swift_blade_obsidian',
'prefab:item_swift_blade_osmium',
'prefab:item_swift_blade_steel',
'prefab:item_swift_blade_stone',
'prefab:item_swift_blade_wood',
'quarryplus:flex_marker',
'quarryplus:marker16',
'quarryplus:remove_bedrock_module',
'quarryplus:waterlogged_flex_marker',
'quarryplus:waterlogged_marker16',
'resourceful_tools:crack_hammer_copper',
'resourceful_tools:crack_hammer',
'spectrum:block_flooder',
'spectrum:exchange_staff',
'techreborn:chunk_loader',
'techreborn:steel_boots', 
'techreborn:steel_chestplate', 
'techreborn:steel_helmet', 
'techreborn:steel_leggings', 
'things:hades_crystal',
'things:monocle',
'things:moss_necklace',
'valley:copper_nugget',
'winged:heart_of_the_sky',
'winged:wing_random',
'winged:wing_random_creative_flight'
];

onEvent('recipes', event => {
  arrRemove.forEach(function(item, index) {
    event.remove({output: item})
  });
  var doom_tools = [
    "axe",
    "pickaxe",
    "paxel",
  ];
  doom_tools.forEach(function (item, index) {
    event.remove({output: "doom:argent_" + item});
  });


  // Remove Kibe Generators due to ticking entity crashes
  var kibe_gen = [
    "mk1",
    "mk2",
    "mk3",
    "mk4",
    "mk5",
  ];
  kibe_gen.forEach(function(item, index) {
    event.remove({output: 'kibe:cobblestone_generator_' + item})
    event.remove({output: 'kibe:basalt_generator_' + item})
  });

  // Bewitchment Boats (Crashes due to TerraForm API)
  var bwBoats = [
    "juniper_boat",
    "cypress_boat",
    "elder_boat",
    "dragons_blood_boat"
  ];
  bwBoats.forEach(function(item, index) {
    event.remove({output: 'bewitchment:' + item})
  });
})