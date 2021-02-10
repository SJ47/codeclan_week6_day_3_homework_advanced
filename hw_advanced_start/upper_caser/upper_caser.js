const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
    // const uppercaseWord = this.words.map((word) => {
    //     return word.toUpperCase();
    // })
    // return uppercaseWord;

    // Refactored
    // return this.words.map((word) => {
    //     return word.toUpperCase();
    // })

    //re-refactored
    return this.words.map(word => word.toUpperCase())
}

module.exports = UpperCaser;

