input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Confused)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
