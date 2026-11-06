export default class Heroe {

    constructor(nombre, poder, debilidad, personalidad, estadisticas) {
        this._nombre = nombre;
        this._poder = poder;
        this._debilidad = debilidad;
        this._personalidad = personalidad;
        this._estadisticas = estadisticas;
    }


    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get poder() {
        return this._poder;
    }

    set poder(value) {
        this._poder = value;
    }

    get debilidad() {
        return this._debilidad;
    }

    set debilidad(value) {
        this._debilidad = value;
    }

    get personalidad() {
        return this._personalidad;
    }

    set personalidad(value) {
        this._personalidad = value;
    }

    get estadisticas() {
        return this._estadisticas;
    }

    set estadisticas(value) {
        this._estadisticas = value;
    }

    get mediaPoder() {
        return (this.estadisticas.dano + this.estadisticas.fuerza + this.estadisticas.inteligencia + this.estadisticas.velocidad + this.estadisticas.vida) / 5;
    }

    toString() {
        return `Héroe: ${this._nombre} (${this._personalidad})
                Poder principal: ${this._poder}
                Debilidad: ${this._debilidad}
                -- Atributos de combate --
                ${this._estadisticas.toString()}`;
    }

}


