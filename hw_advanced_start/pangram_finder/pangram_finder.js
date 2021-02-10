const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter, index, phrase) => {
    return letter;
  })
}

module.exports = PangramFinder;

