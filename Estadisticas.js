export default function Estadisticas (vida, dano, tipo, fuerza, velocidad, inteligencia)  {

        this._vida = vida;
        this._dano = dano;
        this._tipo = tipo;
        this._fuerza = fuerza;
        this._velocidad = velocidad;
        this._inteligencia = inteligencia;
    }
/*

    get vida() {
        return this._vida;
    }

    set vida(value) {
        this._vida = value;
    }

    get dano() {
        return this._dano;
    }

    set dano(value) {
        this._dano = value;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(value) {
        this._tipo = value;
    }

    get fuerza() {
        return this._fuerza;
    }

    set fuerza(value) {
        this._fuerza = value;
    }

    get velocidad() {
        return this._velocidad;
    }

    set velocidad(value) {
        this._velocidad = value;
    }

    get inteligencia() {
        return this._inteligencia;
    }

    set inteligencia(value) {
        this._inteligencia = value;
    }

    toString() {
        return `Tipo: ${this._tipo} | Vida: ${this._vida} | Daño: ${this._dano} | Fuerza: ${this._fuerza} | Velocidad: ${this._velocidad} | Inteligencia: ${this._inteligencia}`;
    }
*/


Estadisticas.prototype.toString = function () {
    return `Tipo: ${this._tipo} | Vida: ${this._vida} | Daño: ${this._dano} | Fuerza: ${this._fuerza} | Velocidad: ${this._velocidad} | Inteligencia: ${this._inteligencia}`
}

