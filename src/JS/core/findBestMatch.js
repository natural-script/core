import stringSimilarity from 'string-similarity'

String.prototype.findBestMatch = function (match) {
  if (this != undefined) {
    return stringSimilarity.findBestMatch(this.toString(), match).bestMatch
  } else {
    return undefined
  }
}
