// A string is considered "screaming" if 50% or more of its characters are capitalized
// noScreams is a function that should take in an array of strings and return an array with all screams removed

// FORBIDDEN KEYWORDS
// for, while

function noScreams(ray){
    return ray.filter((word) => {
        let letters = word.split("")
        let uppers = 0
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] === letters[i].toUpperCase()) {
                uppers++
            }
        }
        return uppers < letters.length / 2
    })
}

test("All Screaming", ()=>{
    const result = noScreams(["AAAA","BBBB", "CCCC"])
    expect(result.length).toBe(0)
}) 

test("None Screaming", ()=>{
    const result = noScreams(["aaaa","bbbb", "cccc"])
    expect(result.length).toBe(3)
}) 

test("Some Screaming", ()=>{
    const result = noScreams(["aaaA","BBBb", "cccC"])
    expect(result.length).toBe(2)
}) 