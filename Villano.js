import Heroe from "./Heroe.js";


export default function Villano (id, nombre, poder, debilidad, personalidad, estadisticas, planMalvado) {
    Heroe.call(this, id, nombre, poder, debilidad, personalidad, estadisticas);
    this._planMalvado = planMalvado;
}

Villano.prototype = Object.create(Heroe.prototype);
Villano.prototype.constructor = Villano;

Villano.prototype.toString = function () {
    return `Villano: ${this._nombre} 
            Plan Malvado: ${this._planMalvado}`;
}

Villano.prototype.calcularMediaPoder = function () {
    return (this._estadisticas._dano + this._estadisticas._fuerza + this._estadisticas._inteligencia + this._estadisticas._velocidad + this._estadisticas._vida) / 5;
}