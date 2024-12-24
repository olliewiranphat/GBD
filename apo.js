//Guess My Birthday date
const myDate = 24
let input = prompt(`Pls guess my birthday date`)
// let guessTimes = 1
while (input != myDate) {

    if (input == 'q') {
        break

    } else if (input <= 10) {
        input = +prompt(`Wrong!, it's more than 10`)
    } else if (input <= 20) {
        input = +prompt(`Almost right!, but it's more than 20`)
    } else if (input >= 25) {
        input = +prompt(`Wrong!, but it's less than 25`)
    } else if (input > 31) {
        input = +prompt(`Pls enter a date in month`)
    }
}
if (input == myDate) {

    alert(`You guess right!`)
}
if (input == 'q') {
    alert(`OK, let's quit!`)
}

alert(`Go to website`)