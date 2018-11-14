import stringSimilarity from 'string-similarity'
String.prototype.findBestMatch = function (match) {
  if (this != undefined) {
    return stringSimilarity.findBestMatch(this.toString().punctuationAndArticleRemover(), match.map(word => word.punctuationAndArticleRemover())).bestMatch
  } else {
    return undefined
  }
}
