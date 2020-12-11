scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    scene.centerCameraAt(0, 0)
    pause(100)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTealDepressed, function (sprite, location) {
    game.over(true, effects.confetti)
})
let mySprite: Sprite = null
music.setVolume(68)
scene.setBackgroundColor(0)
tiles.setTilemap(tiles.createTilemap(hex`1000100003010302020202020202020202020202020202020504040404040404020202030302020404040404040404040202020303030404040302030304040402020203020204040202020204040403020406030202040402010404040403030204040302040404040404040402030302040402020404040404040404020202020404020202030202020204040201020204040202030302020202040402020404040402020303020202040404040404040404030203010404040404040404040402020302030304040404020203040402020303020404040402020202030404040203030204040404030302020204040402030302020202020202020702020101020202`, img`
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 . . . . . . . . 2 2 2 2 
    . 2 2 . . . . . . . . . . . . 2 
    . 2 . . . 2 2 2 2 . . . 2 2 . 2 
    . 2 . . 2 2 2 2 . . . 2 2 2 . 2 
    2 2 . . 2 2 . . . . 2 2 2 2 2 2 
    2 . . . . . . . . 2 2 . 2 . . 2 
    2 . . . . . . . . 2 . . 2 . . 2 
    2 2 2 2 2 2 2 . . 2 2 2 2 . . 2 
    . . . . . 2 2 . . 2 2 . . . . 2 
    . . 2 2 2 2 . . . . . . . . . 2 
    . . 2 . . . . . . . . . . 2 2 2 
    2 2 2 . . . . 2 2 2 . . 2 2 . . 
    2 . . . . 2 2 2 2 2 . . . 2 . . 
    2 . . . . . . . . 2 . . . 2 . . 
    2 2 2 2 2 2 2 2 . 2 2 2 2 2 . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.brick,sprites.dungeon.buttonOrange,sprites.dungeon.buttonTealDepressed,sprites.dungeon.chestClosed], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f 1 1 1 1 f . . . . . . 
    . . . . f 1 1 1 1 f . . . . . . 
    . . . . f 1 1 1 1 f . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 1 1 1 1 1 1 1 f . . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . . f f f f f f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.buttonOrange)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
forever(function () {
    music.playMelody("D A G E E G A D ", 120)
    music.playMelody("A D - E D F E C ", 120)
})
