let red: Sprite = null
let color = 0
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
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
airlock.setPosition(84, 101)
controller.moveSprite(airlock, 100, 0)
scene.cameraFollowSprite(airlock)
game.onUpdate(function () {
	
})
game.onUpdate(function () {
	
})
game.onUpdate(function () {
	
})
game.onUpdateInterval(4000, function () {
    let meeting: Sprite = null
    color = randint(1, 4)
    if (color == 1) {
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
            `, red, 50, 50)
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
        airlock.setPosition(84, 101)
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
            `, meeting, 50, 50)
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
        airlock.setPosition(84, 101)
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
            `, red, 50, 50)
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
        airlock.setPosition(84, 101)
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
            `, meeting, 50, 50)
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
        airlock.setPosition(84, 101)
    } else {
    	
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
