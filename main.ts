namespace SpriteKind {
    export const weapon = SpriteKind.create()
}
namespace StatusBarKind {
    export const mana = StatusBarKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cutscene != 1) {
        adventurer.setVelocity(-20, 0)
        adventurer.setImage(assets.image`wizard facing left`)
        direction = 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (cutscene != 1) {
        adventurer.setVelocity(0, 0)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (cutscene != 1) {
        adventurer.setVelocity(0, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cutscene != 1) {
        adventurer.setVelocity(20, 0)
        adventurer.setImage(assets.image`wizard`)
        direction = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (cutscene != 1) {
        if (direction == 0) {
            ice_shard = sprites.createProjectileFromSprite(assets.image`ice shard`, adventurer, 35, 0)
        } else {
            ice_shard = sprites.createProjectileFromSprite(assets.image`ice shard`, adventurer, -35, 0)
        }
    }
})
let ice_shard: Sprite = null
let direction = 0
let adventurer: Sprite = null
let cutscene = 0
cutscene = 1
scene.setBackgroundImage(assets.image`background`)
let staff = sprites.create(assets.image`Staff`, SpriteKind.weapon)
staff.setPosition(28, 72)
staff.startEffect(effects.blizzard, 5000)
staff.startEffect(effects.blizzard, 5000)
staff.startEffect(effects.blizzard, 5000)
adventurer = sprites.create(assets.image`adventurer`, SpriteKind.Player)
adventurer.setPosition(170, 76)
pause(700)
animation.runImageAnimation(
adventurer,
assets.animation`adventure walking`,
100,
true
)
adventurer.setVelocity(-50, 0)
pause(1800)
adventurer.setVelocity(0, 0)
animation.stopAnimation(animation.AnimationTypes.All, adventurer)
pause(500)
animation.runImageAnimation(
adventurer,
assets.animation`adventurer wielding the staff`,
75,
false
)
staff.setVelocity(50, 0)
pause(900)
staff.setVelocity(0, 0)
adventurer.startEffect(effects.bubbles, 4000)
adventurer.startEffect(effects.bubbles, 4000)
adventurer.startEffect(effects.bubbles, 4000)
adventurer.startEffect(effects.bubbles, 4000)
adventurer.startEffect(effects.bubbles, 4000)
adventurer.startEffect(effects.starField, 4000)
animation.runImageAnimation(
adventurer,
assets.animation`wizard`,
500,
false
)
staff.setVelocity(7, 5)
pause(2000)
staff.setVelocity(0, 0)
pause(2000)
adventurer.setVelocity(50, 0)
staff.destroy()
animation.runImageAnimation(
adventurer,
assets.animation`wizaard`,
500,
false
)
pause(2050)
scene.setBackgroundImage(assets.image`main background`)
adventurer.setPosition(-2, 83)
pause(1000)
adventurer.setVelocity(0, 0)
cutscene = 0
adventurer.setStayInScreen(true)
let healthbar = statusbars.create(20, 1, StatusBarKind.Health)
let mana = statusbars.create(20, 1, StatusBarKind.Magic)
healthbar.attachToSprite(adventurer, 1, -2)
mana.attachToSprite(adventurer, 2, -2)
