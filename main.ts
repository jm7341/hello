input.onGesture(Gesture.ScreenUp, function () {
    Display.controlDisplayOnOff(kitronik_VIEW128x64.onOff(false))
    game.resume()
})
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.ScreenDown, function () {
    Display.controlDisplayOnOff(kitronik_VIEW128x64.onOff(false))
    game.pause()
})
music.playTone(262, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.pause(100)
music.playTone(262, music.beat(BeatFraction.Whole))
Display.drawRect(50, 20, 60, 11)
Display.refresh()
if (input.buttonIsPressed(Button.B)) {
    Display.clear()
}
