'use strict'

/*
     Se require el paquete que contiene la clase Shape.
*/

var nuevo = require('ull-shape-lucas-ivan-miguel-jairo');
var Shape = nuevo.Shape

/**
 * Clase para representar un Rectangulo que es de tipo Shape.
 *
 * @param {object} options Bloque de código.
 * @param {width} options.width Ancho del Rectangulo.
 * @param {height} options.height Ancho del Rectangulo
 */


class Rectangle extends Shape {

    constructor(options) {

      super(options)

    }
    
/**
         * Esta funcion calcula el area de un Rectagulo.
         * @returns {area} Retorna el calculo del area de un Rectangulo.
         */


    area() {

      var area = 0;
      area = this.width * this.height;
      return area;
    }
  }

  Shape.tipo.Rectangle = Rectangle;
  

module.exports = { Rectangle: Rectangle };

