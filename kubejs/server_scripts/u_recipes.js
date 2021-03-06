events.listen('recipes', function (e) {
    //Unobtanium
    e.shapeless('allthemodium:vibranium_unobtainium_alloy_dust', ['allthemodium:unobtainium_dust', 'allthemodium:vibranium_dust'])
    e.shapeless('allthemodium:unobtainium_allthemodium_alloy_dust', ['allthemodium:unobtainium_dust', 'allthemodium:allthemodium_dust'])
    e.shapeless('allthemodium:vibranium_allthemodium_alloy_dust', ['allthemodium:allthemodium_dust', 'allthemodium:vibranium_dust'])
    e.recipes.mekanism.nucleosynthesizing({
        'itemInput': {
            'ingredient': {
                'tag': 'forge:dusts/vibranium_unobtainium_alloy'
            }
        },
        'gasInput': {
            'gas': 'mekanism:antimatter',
            'amount': 1
        },
        'output': {
            'item': 'kubejs:uu_matter',
            'count': 16
        },
        'duration': 20
    })
    e.recipes.psi.trick_crafting({
        'input': {
            'tag': 'forge:dusts/vibranium_unobtainium_alloy'
        },
        'output': {
            'type': 'forge:nbt',
            'item': 'kubejs:uu_matter',
            'count': 4
        },
        'cad': {
            'item': 'psi:cad_assembly_psimetal'
        },
        'trick': 'psi:trick_ebony_ivory'
    })
    var uMatter = {
        'U': 'kubejs:uu_matter'
    }
    e.shaped(item.of('alltheores:ore_aluminum', 12), [
        ' UU',
        'UUU',
        'UUU'
    ], uMatter)
    e.shaped(item.of('alltheores:ore_copper', 12), [
        'U U',
        'UUU',
        'UUU'
    ], uMatter)
    e.shaped(item.of('alltheores:ore_lead', 12), [
        'UU ',
        'UUU',
        'UUU'
    ], uMatter)
    e.shaped(item.of('alltheores:ore_nickel', 12), [
        'UUU',
        ' UU',
        'UUU'
    ], uMatter)
    e.shaped(item.of('alltheores:ore_osmium', 12), [
        'UUU',
        'U U',
        'UUU'
    ], uMatter)
    e.shaped(item.of('alltheores:ore_platinum', 12), [
        'UUU',
        'UU ',
        'UUU'
    ], uMatter)
    e.shaped(item.of('alltheores:ore_silver', 12), [
        'UUU',
        'UUU',
        ' UU'
    ], uMatter)
    e.shaped(item.of('alltheores:ore_tin', 12), [
        'UUU',
        'UUU',
        'U U'
    ], uMatter)
    e.shaped(item.of('alltheores:ore_uranium', 12), [
        'UUU',
        'UUU',
        'UU '
    ], uMatter)
    e.shaped(item.of('alltheores:ore_zinc', 12), [
        ' UU',
        'UUU',
        'UU '
    ], uMatter)
    e.shaped(item.of('minecraft:gold_ore', 12), [
        ' UU',
        'UUU',
        ' UU'
    ], uMatter)
    e.shaped(item.of('minecraft:iron_ore', 12), [
        'UU ',
        'UUU',
        'UU '
    ], uMatter)
    e.shaped(item.of('minecraft:nether_quartz_ore', 12), [
        'UUU',
        'UUU',
        'U U'
    ], uMatter)
    e.shaped(item.of('minecraft:redstone', 16), [
        'U U',
        'U  ',
        'U U'
    ], uMatter)
    e.shaped(item.of('minecraft:glowstone_dust', 16), [
        'U U',
        '  U',
        'U U'
    ], uMatter)
    e.shaped(item.of('minecraft:end_stone', 32), [
        'U U',
        'UUU',
        'UUU'
    ], uMatter)
    e.shaped(item.of('minecraft:slime_ball', 16), [
        'U U',
        '   ',
        'U U'
    ], uMatter)
    e.shaped(item.of('industrialforegoing:plastic', 4), [
        'U U',
        'U U',
        'U U'
    ], uMatter)
    e.shaped(item.of('minecraft:white_wool', 16), [
        ' U ',
        'U U',
        ' U '
    ], uMatter)
    e.shaped(item.of('minecraft:obsidian', 16), [
        'UUU',
        'U U',
        'UUU'
    ], uMatter)
    e.shaped(item.of('minecraft:oak_log', 32), [
        ' U ',
        'UUU',
        ' U '
    ], uMatter)
    e.shaped(item.of('minecraft:bone', 8), [
        '  U',
        ' U ',
        'U  '
    ], uMatter)
    e.shaped(item.of('minecraft:leather', 4), [
        'U  ',
        ' U ',
        '  U'
    ], uMatter)
    e.shaped(item.of('minecraft:gunpowder', 16), [
        'U U',
        ' U ',
        'U U'
    ], uMatter)
})