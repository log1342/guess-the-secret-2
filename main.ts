input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    if (num > number) {
        basic.showString("LOWER")
    } else if (num < number) {
        basic.showString("HIGHER")
    }
    if (num == number) {
        basic.showString("WINNER")
        basic.showIcon(IconNames.Yes)
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
let num = 0
let number = 0
number = randint(0, 20)
num = 0
basic.forever(function () {
	
})
