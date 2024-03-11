// 2. Create a class Shape with properties width and height and methods getArea().
//Create two classes Rectangle and Triangle that inherit from the Shape class and
//implement the getArea() method for their respective shapes.
class shape {
  getArea() {
    console.log("Area of shape is ---");
  }
}
class Rectangle extends shape {
  getArea(width, height) {
    let area = width * height;
    return area;
  }
}
class Triangle extends shape {
  getArea(width, height) {
    let area = (width * height) / 2;
    return area;
  }
}
const area = new Triangle();
const area1 = new Rectangle();
console.log("Area of Triangle :", area.getArea(10, 20));
console.log("Area of Rectangle :", area1.getArea(10, 20));
