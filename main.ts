let 占い = 0
input.onButtonPressed(Button.A, function () {
    占い = randint(0, 3)
    if (占い == 0) {
        basic.showIcon(IconNames.Happy)
        katakana.showString("ﾀﾞｲｷﾁ")
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    } else if (占い == 1) {
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
        katakana.showString("ﾁｭｳｷﾁ")
    } else if (占い == 2) {
        basic.showIcon(IconNames.Confused)
        katakana.showString("ｷﾁ")
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.Angry)
        katakana.showString("ｼｮｳｷﾁ")
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    }
    basic.clearScreen()
})
