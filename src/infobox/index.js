var template = require('./template.ejs')
require('./style.css')

module.exports = function (opts) {
  var htmlString = template(opts)
  var div = document.createElement('div')
  div.innerHTML = htmlString
  var elem = div.firstChild

  var icon = elem.querySelector('.infobox-icon')
  var body = elem.querySelector('.infobox-body')

  icon.addEventListener('click', function (ev) {
    body.classList.toggle('infobox-hidden')
  })

  return elem
}
