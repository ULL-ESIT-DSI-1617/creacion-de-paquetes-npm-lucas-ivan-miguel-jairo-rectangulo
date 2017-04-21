var nuevo = require('ull-shape-lucas-ivan-miguel-jairo');
var Shape = nuevo.Shape
class Rectangle extends Shape {

    constructor(options) {

      super(options)

    }

    area() {

      var area = 0;
      area = this.width * this.height;
      return area;
    }
  }

  Shape.tipo.Rectangle = Rectangle;
  

module.exports = { Rectangle: Rectangle };

pepe = new Rectangle({width:2,height:2});

console.log (pepe.getArea())