describe("Estructuras", function() {
  var Pila = require('../../lib/estructuras/Pila');
  var pila;

  beforeEach(function() {
    pila = new Pila();
  });
  describe("Una pila", function () {
    it(" Puede meter y sacar elementos ", function() {
      pila.push("algo");
      var result=pila.pop();
      expect(result).toEqual("algo");
    });

    it(" es LIFO ", function() {
      pila.push("algo");
      pila.push("todo");
      var result=pila.pop();
      expect(result).toEqual("todo");
    });

    it(" conoce su tamaño ", function() {
      pila.push("algo");
      pila.push("todo");
      var result=pila.size();
      expect(result).toEqual(2);
    });

    it(" empieza midiendo cero ", function() {
      var result=pila.size();
      expect(result).toEqual(0);
    });

    it(" puede ser limitada ", function() {
      var nuevaPila=new Pila(1);
      nuevaPila.push("algo");
      expect(function() {nuevaPila.push("todo");}).toThrow();
    });

    it(" puede ser limitada ", function() {
      var nuevaPila=new Pila(1);
      expect(function() {nuevaPila.pop();}).toThrow();
    });
  });
});
