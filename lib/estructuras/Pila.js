function Pila(max) {
  this.elementos = new Array();
  this.index=0;
  this.maxSize=max;
}

Pila.prototype.push = function (elto) {
  if (this.index==this.maxSize)
    throw "A mamarla";
  this.elementos[this.index]=elto;
  this.index++;
};

Pila.prototype.pop = function () {
  this.index--;
  return this.elementos[this.index];
};

Pila.prototype.size = function () {
  return this.index;
};

module.exports = Pila;
