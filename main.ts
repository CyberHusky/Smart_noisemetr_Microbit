datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Asleep)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    is_logging = 1
    basic.showIcon(IconNames.EighthNote)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
})
input.onButtonPressed(Button.B, function () {
    is_logging = 0
    basic.clearScreen()
})
let is_logging = 0
datalogger.mirrorToSerial(true)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
datalogger.setColumnTitles(
"second",
"value"
)
let середнє_арифметичне = input.soundLevel()
let total_second = 0
is_logging = 0
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
    if (is_logging == 1) {
        for (let index = 0; index < 9; index++) {
            середнє_арифметичне += input.soundLevel()
            basic.pause(100)
        }
        середнє_арифметичне = середнє_арифметичне / 10
        total_second += 1
        datalogger.log(
        datalogger.createCV("second", total_second),
        datalogger.createCV("value", Math.round(середнє_арифметичне * 10) / 10)
        )
    }
})
