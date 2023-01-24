// Given a number, return the month using switch statements
// ex: getMonth(0) => January, getMonth(1) => February, etc.

function getMonth(N) {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[N]

    /*
    switch(N) {
        case 0:
            return "January"
        case 1:
            return "February"
        case 2:
            return "March"
        case 3:
            return "April"
        case 4:
            return "May"
        case 5:
            return "June"
        case 6:
            return "July"
        case 7:
            return "August"
        case 8:
            return "September"
        case 9:
            return "October"
        case 10:
            return "November"
        case 11:
            return "December"
        default:
            throw("Not a Month")
            break
    }
    */
}

test("May", () => {
    expect(getMonth(4)).toBe("May");
})

test("December", () => {
    expect(getMonth(11)).toBe("December");
})

test("January", () => {
    expect(getMonth(0)).toBe("January");
})