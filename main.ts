basic.forever(function on_forever() {
    if (input.temperature() >= 22) {
        basic.showString("CALOR")
    } else {
        basic.showString("FRED")
    }
    
    if (input.lightLevel() >= 200) {
        music.stopMelody(MelodyStopOptions.All)
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music.stopMelody(MelodyStopOptions.All)
        music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
    } else {
        
    }
    
})
