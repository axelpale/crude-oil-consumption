const consumption = require('./consumption.json')
const sprinkler = require('sprinkler')
const infobox = require('./infobox')

var c = document.getElementById('canvas')
var s = sprinkler.create(c)

// // Build image distribution.
// const imageDist = consumption.reduce((acc, datum) => {
//   let index = datum[0]
//   let country = datum[1]
//   let barrels = datum[2]
//
//
//   acc[url] =
//   if (emojilist.indexOf(emoji.id) >= 0) {
//     const url = 'img/openmoji/' + emoji.id + '.png'
//   } else {
//     console.warn(emoji.id + ' is missing.')
//   }
//   return acc
// }, {})

const barrelsPerDay = consumption.reduce((acc, datum) => {
  return acc + 1000 * datum[2]
}, 0)

s.start(['img/oil-drum-24x32.png'], {
  burnInSeconds: 10,
  imagesInSecond: barrelsPerDay / (24 * 60 * 60),
  zMin: 1,
  zMax: 1,
  rMin: -Math.PI / 12,
  rMax: +Math.PI / 12,
  aMin: 1,
  aMax: 1,
  drMin: 0,
  drMax: 0,
  daMin: 0,
  daMax: 0,
  dyMin: 500,
  dyMax: 600
})

document.body.appendChild(infobox({
  barrelsPerDay: barrelsPerDay
}))
