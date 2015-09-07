function Pila(max) {
  this.elementos = [];
  this.index=0;
  this.maxSize=max;
}

Pila.prototype.push = function (elto) {
  this.checkOverflow();
  this.elementos[this.index]=elto;
  this.index++;
};

Pila.prototype.checkOverflow = function () {
  if (this.index==this.maxSize)
    throw "A mamarla";
};

Pila.prototype.pop = function () {
  this.checkContent();
  this.index--;
  return this.elementos[this.index];
};

Pila.prototype.checkContent = function () {
    if(this.index===0) throw "Mamandola";
};

Pila.prototype.size = function () {
  return this.index;
};

module.exports = Pila;
