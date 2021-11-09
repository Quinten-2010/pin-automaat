input.onButtonPressed(Button.A, function () {
    music.playMelody("D D - D C5 - C5 C5 ", 369)
    music.playMelody("- D E C5 - - - - ", 200)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    music.playMelody("- C C C D C D C ", 120)
})
music.playMelody("E D G F B A C5 B ", 120)
music.playMelody("C D E F C C5 - C5 ", 120)
smarthome.ledBrightness(AnalogPin.P1, true, 47)
smarthome.UVLevel(AnalogPin.P0)
smarthome.dht11Sensor(DigitalPin.P0, smarthome.DHT11_state.DHT11_temperature_C)
basic.forever(function () {
	
})
