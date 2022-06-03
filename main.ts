// ok
basic.showString("if he is hungry press A else press B", 69)

if (blockUntilInput()) {
    basic.showString("he will eat a meal with meat     does he want it to be spicy? if so press A else press B", 69)
    if (blockUntilInput()) {
        basic.showString("He will add chilli", 69)
    } else {
        basic.showString("He will add pepper", 69)
    }
} else {
    basic.showString("he will not eat a meal with meat     does he want to eat it with soy sauce? if so press A else press B", 69)
    if (blockUntilInput()) {
        basic.showString("He will eat it with rice", 69)
    } else {
        basic.showString("He will eat tomato sauce with pasta", 69)
    }
}

// input system
// will block this thread until input
function blockUntilInput() {

    // show something funny
    basic.showLeds(`
    . # # # .
    # . . . #
    . . # # .
    . . . . .
    . . # . .
    `)

    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            basic.clearScreen()
            return true
        } else if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
            return false
        }
    }

}
