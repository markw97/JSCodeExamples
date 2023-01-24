// In order to be valid for an i9, a candidate needs
// one document from group A or one document from group B and C
// Write a function which, given a list of documents, returns a boolean whether
// these documents are valid
// ex: isValid(["B","C"]) => true, isValid(["B"]) => false, etc.

function isValid(documents) {
    return documents.includes("A") || (documents.includes("B") && documents.includes("C"))
}

test("All Documents", () => {
    expect(isValid(["A","B","C"])). toBe(true);
})

test("No Documents", () => {
    expect(isValid([])). toBe(false);
})

test("A and B", () => {
    expect(isValid(["A","B"])). toBe(true);
})

test("B and C", () => {
    expect(isValid(["B","C"])). toBe(true);
})

test("Just A", () => {
    expect(isValid(["A"])). toBe(true);
})

test("Just B", () => {
    expect(isValid(["B"])). toBe(false);
})

test("Just C", () => {
    expect(isValid(["C"])). toBe(false);
})