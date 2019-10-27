var consumption = require('./consumption.json')
var sprinkler = require('sprinkler')
var infobox = require('./infobox')

var can = document.getElementById('canvas')
var s = sprinkler.create(can)

// Consuption is an array of arrays.
// Each subarray has three elements:
// [int:index, str:country, float:barrels]

var barrelsPerDay = consumption.reduce(function (acc, datum) {
  return acc + 1000 * datum[2]
}, 0)

var barrelsPerSec = barrelsPerDay / (24 * 60 * 60)

// Image pick distribution
var a = 1
var b = 1
var c = 1

// Number of barrels per image
var n = [15, 16, 20]

// Estimate of average barrels in the image.
var barrelsPerImg = (a * n[0] + b * n[1] + c * n[2]) / (a + b + c)

s.start({
  'img/barrels-15_512x512.png': a,
  'img/barrels-16_512x512.png': b,
  'img/barrels-20_512x512.png': c
}, {
  angle: Math.PI,
  burnInSeconds: 20,
  imagesInSecond: barrelsPerSec / barrelsPerImg,
  constantDensity: false,
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
