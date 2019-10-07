const consumption = require('./consumption.json')
const sprinkler = require('sprinkler')
const infobox = require('./infobox')

var can = document.getElementById('canvas')
var s = sprinkler.create(can)

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

const barrelsPerSec = barrelsPerDay / (24 * 60 * 60)

// Image pick distribution
const a = 1
const b = 1
const c = 1

// Number of barrels per image
const n = [15, 16, 20]

// Estimate of average barrels in the image.
const barrelsPerImg = (a * n[0] + b * n[1] + c * n[2]) / (a + b + c)

s.start({
  'img/barrels-15_512x512.png': a,
  'img/barrels-16_512x512.png': b,
  'img/barrels-20_512x512.png': c
}, {
  angle: Math.PI,
  burnInSeconds: 20,
  imagesInSecond: barrelsPerSec / barrelsPerImg,
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
  dxMin: 0,
  dxMax: 0,
  dyMin: 100,
  dyMax: 200,
  dzMin: 0,
  dzMax: 0
})

document.body.appendChild(infobox({
  barrelsPerDay: barrelsPerDay
}))
