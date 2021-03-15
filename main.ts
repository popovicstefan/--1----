music.playMelody("- - - - - - - - ", 120)
led.toggle(0, 0)
basic.pause(500)
basic.clearScreen()
led.toggle(1, 1)
basic.pause(500)
basic.clearScreen()
led.toggle(2, 2)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
