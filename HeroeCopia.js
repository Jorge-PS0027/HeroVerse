import Heroe from "./Heroe.js";


export default function HeroeCopia (id, nombre, poder, debilidad, personalidad, estadisticas, tara) {
    const statsClonadas = new Estadisticas(
        estadisticas._vida,
        estadisticas._dano,
        estadisticas._tipo,
        estadisticas._fuerza,
        estadisticas._velocidad,
        estadisticas._inteligencia
    );



    Heroe.call(this, id, nombre, poder, debilidad, personalidad, statsClonadas);
    this.tara = tara;
}

HeroeCopia.prototype = Object.create(Heroe.prototype);
HeroeCopia.prototype.constructor = HeroeCopia;

HeroeCopia.prototype.estadisticasReales = function () {
    this._estadisticas._dano -= 10;
    this._estadisticas._fuerza -=10;
    this._estadisticas._inteligencia -= 10;
    this._estadisticas._velocidad -= 10 ;
    this._estadisticas._vida -= 10;

};

HeroeCopia.prototype.toString = function () {
    return `Nombre heroe: ${this._nombre} (copia barata)
            Tara: ${this.tara}`;
}

HeroeCopia.prototype.calcularMediaPoder = function () {
    return (this._estadisticas._dano + this._estadisticas._fuerza + this._estadisticas._inteligencia + this._estadisticas._velocidad + this._estadisticas._vida) / 5;
}