var glob = require('glob')
var replace = require('replace')
var calculateColorScheme = require('./calculate')
var oldColor = process.argv[2]
var newColor = process.argv[3]

glob('**/**.css', function(err, files) {
  var oldScheme = calculateColorScheme(oldColor)
  var newScheme = calculateColorScheme(newColor)
  console.log('old scheme: ', oldScheme)
  console.log('new scheme: ', newScheme)
  // for (var i = 0; i < oldScheme.length; i++) {
  //   replaceTextInFiles(oldScheme[i], newScheme[i], files)
  // }
})

function replaceTextInFiles(text, replacement, files) {
  var replaceOpts = {
    regex: text,
    replacement: replacement,
    path: files,
    multiline: true
  }
  replace(replaceOpts)
}
