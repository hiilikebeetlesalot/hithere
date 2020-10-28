namespace SpriteKind {
    export const meeting = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let red: Sprite = null
let color = 0
let meeting = sprites.create(img`
    bbbbbbbbbbbbb1bbbbbbbbbbb
    111111111111bd11111111111
    ddddddddddddb1ddddddddddd
    dddddddd666666666dddddddd
    ddddddd66666666666ddddddd
    dddddd6666666666666dddddd
    ddddd666666666666666ddddd
    dddd66666666666666666dddd
    dddd6666665f5f5666666d666
    666d666666fdddf666666d666
    666d6666665d2d5666666d666
    666d666666fdddf666666d666
    666d6666665f5f5666666d666
    666d66666666666666666d666
    666d66666666666666666d666
    666b66666666666666666b666
    8181166666666666666611818
    6666dd6666666666666dd6668
    666666d66666666666dd66666
    66666666666666666dd666666
    d66666666dd8888ddd66666dd
    dd8666666888888dd666668dd
    dd8d666668888888d666dd8dd
    ddddd666ddddb1dddd8ddd8dd
    dddddd8dddddb1dddd8dddddd
    `, SpriteKind.meeting)
let speed = 1
tiles.setTilemap(tiles.createTilemap(hex`0a00100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.floorLight2], TileScale.Sixteen))
effects.starField.startScreenEffect()
let airlock = sprites.create(img`
    5dddffffffffffffffd5
    5dfffffffffff1ffddd5
    5dddff1ffffffff1ffdf
    fd1fffffff1fffffdddf
    fdddffffffffffffffdf
    fdddffffffffffffffd5
    5df1f1ffffff1fffddd5
    5dddfffff1ffffffffd5
    5dffff1fffffffffdddf
    fdddffffffffffffffdf
    fdddffffffffffffffdf
    fdffff1fff1fffffddd5
    5dddffffffffffffffd5
    5dffffffffffff1fddd5
    5dddffffffffffffffdf
    5dddfff1ffffffffffdf
    fdffffffffffffffdddf
    fdddffffff1fff1fffd5
    fdffffffffffffffddd5
    5dddffffffffffffffd5
    `, SpriteKind.Player)
airlock.setPosition(84, 118)
controller.moveSprite(airlock, 100, 0)
scene.cameraFollowSprite(airlock)
game.onUpdate(function () {
	
})
game.onUpdate(function () {
	
})
game.onUpdate(function () {
	
})
game.onUpdateInterval(4000, function () {
    color = randint(1, 12)
    if (color == 1) {
        meeting.setPosition(10, 10)
        red = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . f f f f f f . . 
            . f 2 2 2 2 2 2 f . 
            . f f f f 2 2 f 2 f 
            f 9 9 1 1 f 2 f 2 f 
            f 1 9 9 9 f 2 f 2 f 
            . f f f f 2 2 f 2 f 
            . f 2 2 2 2 2 f 2 f 
            . f 2 2 2 2 2 2 f . 
            . f 2 2 2 2 2 2 f . 
            . f 2 f f f f 2 f . 
            . f f f . . f f f . 
            `, meeting, 0, speed)
        red.setPosition(15, -5)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        airlock.say("red was not the impostor")
    } else if (color == 2) {
        red = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . f f f f f f . . 
            . f 9 9 9 9 9 9 f . 
            . f f f f 9 9 f 9 f 
            f 9 9 1 1 f 9 f 9 f 
            f 1 9 9 9 f 9 f 9 f 
            . f f f f 9 9 f 9 f 
            . f 9 9 9 9 9 f 9 f 
            . f 9 9 9 9 9 9 f . 
            . f 9 9 9 9 9 9 f . 
            . f 9 f f f f 9 f . 
            . f f f . . f f f . 
            `, meeting, 0, speed)
        airlock.say("cyan was not the impostor")
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
    } else if (color == 3) {
        red = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . f f f f f f . . 
            . f a a a a a a f . 
            . f f f f a a f a f 
            f 9 9 1 1 f a f a f 
            f 1 9 9 9 f a f a f 
            . f f f f a a f a f 
            . f a a a a a f a f 
            . f a a a a a a f . 
            . f a a a a a a f . 
            . f a f f f f a f . 
            . f f f . . f f f . 
            `, meeting, 0, speed)
        airlock.say("purple was not the impostor")
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
    } else if (color == 3) {
        red = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . f f f f f f . . 
            . f 8 8 8 8 8 8 f . 
            . f f f f 8 8 f 8 f 
            f 9 9 1 1 f 8 f 8 f 
            f 1 9 9 9 f 8 f 8 f 
            . f f f f 8 8 f 8 f 
            . f 8 8 8 8 8 f 8 f 
            . f 8 8 8 8 8 8 f . 
            . f 8 8 8 8 8 8 f . 
            . f 8 f f f f 8 f . 
            . f f f . . f f f . 
            `, meeting, 0, speed)
        airlock.say("blue was not the impostor")
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
    } else if (false) {
        red = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . 
            . . f f f f f f . . 
            . f 7 7 7 7 7 7 f . 
            . f f f f 7 7 f 7 f 
            f 9 9 1 1 f 7 f 7 f 
            f 1 9 9 9 f 7 f 7 f 
            . f f f f 7 7 f 7 f 
            . f 7 7 7 7 7 f 7 f 
            . f 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 f . 
            . f 7 f f f f 7 f . 
            . f f f . . f f f . 
            `, meeting, 0, speed)
        airlock.say("lime was not the impostor")
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
        music.playMelody("A G A B A F A B ", 10000)
    }
})
forever(function () {
    music.playMelody("B B B F G C5 D A ", 500)
    music.playMelody("G E B A F D A B ", 500)
    music.playMelody("C5 G B A E D G C ", 500)
    music.playMelody("D F C5 C5 F A C5 C5 ", 500)
    music.playMelody("C5 B A F A C5 C5 G ", 500)
    music.playMelody("C E G B B G E C ", 500)
    music.playMelody("D C C5 B A E F C5 ", 500)
    music.playMelody("C A B C B E D C5 ", 500)
})
game.onUpdateInterval(500, function () {
    speed += 0.1
})
