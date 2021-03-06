events.listen('recipes', function (e) {
  e.shapeless(item.of('kubejs:rotten_leather'), ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'])
  e.smelting(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5)
  e.recipes.minecraft.smoking(item.of('minecraft:leather'), 'kubejs:rotten_leather').xp(.5)
  e.recipes.botania.runic_altar({
    output: {
      item: 'kubejs:rune_of_sins'
    },
    mana: 25000,
    ingredients: [{
        tag: 'botania:runes/lust'
      },
      {
        tag: 'botania:runes/gluttony'
      },
      {
        tag: 'botania:runes/greed'
      },
      {
        tag: 'botania:runes/sloth'
      },
      {
        tag: 'botania:runes/wrath'
      },
      {
        tag: 'botania:runes/envy'
      },
      {
        tag: 'botania:runes/pride'
      }
    ]
  })

  e.recipes.botania.petal_apothecary({
    output: {
      item: 'kubejs:mass_of_wills'
    },
    ingredients: [{
        item: 'botania:ancient_will_ahrim'
      },
      {
        item: 'botania:ancient_will_dharok'
      },
      {
        item: 'botania:ancient_will_guthan'
      },
      {
        item: 'botania:ancient_will_torag'
      },
      {
        item: 'botania:ancient_will_verac'
      },
      {
        item: 'botania:ancient_will_karil'
      }
    ]
  })

  e.recipes.mysticalagriculture.infusion({
    input: {
      item: 'botania:overgrowth_seed'
    },
    ingredients: [{
        item: 'botania:gaia_ingot'
      },
      {
        item: 'mysticalagradditions:insanium_block'
      },
      {
        item: 'botania:gaia_ingot'
      },
      {
        item: 'mysticalagradditions:insanium_block'
      },
      {
        item: 'botania:gaia_ingot'
      },
      {
        item: 'mysticalagradditions:insanium_block'
      },
      {
        item: 'botania:gaia_ingot'
      },
      {
        item: 'mysticalagradditions:insanium_block'
      }
    ],
    result: {
      item: 'kubejs:magical_soil'
    }
  })
  e.shaped(item.of('solarflux:sp_custom_allthemodium', 2), [
    'PPP',
    'SAS',
    'SDS'
  ], {
    S: 'solarflux:sp_5',
    A: '#forge:storage_blocks/allthemodium',
    D: '#forge:storage_blocks/diamond',
    P: 'solarflux:photovoltaic_cell_4'
  })
  e.shaped(item.of('solarflux:sp_custom_vibranium', 2), [
    'PPP',
    'SAS',
    'SAS'
  ], {
    S: 'solarflux:sp_custom_allthemodium',
    A: '#forge:storage_blocks/vibranium',
    P: 'solarflux:photovoltaic_cell_5'
  })
  e.shaped(item.of('solarflux:sp_custom_unobtainium', 2), [
    'PPP',
    'SAS',
    'SAS'
  ], {
    S: 'solarflux:sp_custom_vibranium',
    A: '#forge:storage_blocks/unobtainium',
    P: 'solarflux:photovoltaic_cell_6'
  })

  function customBlock(name, ingridient) {
    e.shapeless(item.of(ingridient, 9), name)
    e.shaped(item.of(name), [
      'AAA',
      'AAA',
      'AAA'
    ], {
      A: ingridient
    })
  }

  customBlock('kubejs:nether_star_block', 'minecraft:nether_star')
})