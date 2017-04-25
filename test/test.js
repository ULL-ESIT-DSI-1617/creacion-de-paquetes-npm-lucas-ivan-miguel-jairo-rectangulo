// var getArea = require("ull-shape-lucas-ivan-miguel-jairo.js");

// describe("Cálculo de áreas", function() {
//   it("must compute the triangle area correctly", function() {
//     var result = index.calcula('Rectangle',  { width: 100, height: 100 });
//     /* There is a white space between consecutive columns */
//     //result.should.match(/^5000$/);
//     result.should.be.equal(5000)
//   })
// });

"use strict"

var Tri = require('../rectangle.js')
var Rectangle = Tri.Rectangle
var should = require('should');



describe("Rectangle", function() {

   it("Inicializacion", function() {
        should.exist(new Rectangle({width:15, height:15}));
   })
  
   it("Calculo del area rectangulo", function() {
        var result = new Rectangle({width:15, height:15}).area();
        result.should.equal(225);
   })
   
});