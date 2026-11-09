import Heroe from "./Heroe.js";
import Estadisticas from "./Estadisticas.js";
import Villano from "./Villano.js";
import HeroeCopia from "./HeroeCopia.js";

// 1. Lamine Tamal
const stats1 = new Estadisticas(90, 80, 'magico', 50, 80, 15);
const heroe1 = new Heroe('Lamine Tamal', 'Lanzamiento de tamales experto en desapariciones', 'Jamon', 'egocentrico', stats1);


// 2. Kylian Dictador
const stats2 = new Estadisticas(85, 95, 'tactico', 60, 99, 80);
const heroe2 = new Heroe('Kylian Dictador', 'Control mental sobre presidentes de clubes, pero solo si le pagan en tortugas', 'El banquillo', 'Autoritario pero esprinta si se asusta', stats2);

// 3. Negreira
const stats3 = new Estadisticas(70, 40, 'tecnologico', 30, 45, 95);
const heroe3 = new Heroe('Negreira', 'Rebobina el tiempo 5 segundos para inventarse faltas que no existieron', 'Que el barcelona pierda', 'Soberbio', stats3);

// 4. Señor Siesta
const stats4 = new Estadisticas(100, 20, 'somnoliento', 40, 10, 50);
const heroe4 = new Heroe('Señor Siesta', 'Invoca camas elásticas para que los villanos se duerman en medio del combate', 'El sonido de una alarma de móvil', 'Tranquilo', stats4);

const stats5 = new Estadisticas(99, 90, 'físico', 95, 92, 70);
const heroe5 = new Heroe('El Bicho', 'Al gritar "¡SIUUU!" crea una onda expansiva que aturde a los villanos', 'Los espejos, no puede evitar pararse a mirar sus propios abdominales', 'Extremadamente competitivo y se niega a beber otra cosa que no sea agua', stats5);

const stats6 = new Estadisticas(99, 90, 'físico', 95, 92, 70);
const villano1 = new Villano('El Jajas', 'Contagia su Risa a la gente haciendo que no puedan parar de reir','Alguien contándole un chiste malísimo', 'Extremadamente competitivo y se niega a beber otra cosa que no sea agua', stats6, 'Hacer que toda la ciudad se muera de la risa para poder robar los bancos sin oposición');

const copia1 = Object.create(heroe5);


const catalogoHeroes = [heroe1, heroe2, heroe3, heroe4, heroe5];
const catalogoVillanos = [villano1];

function ignorarMayusculas(texto) {
    return texto.toLocaleLowerCase();
}

function buscarHeroes(nombre, catalogo) {
    for (let i = 0; i < catalogo.length; i++) {
        if (ignorarMayusculas(nombre) === ignorarMayusculas(catalogo[i]._nombre)) {
            return catalogo[i]
        }
    }
}

function filtrarPorEstadisticaNumerica(nombreEstadistica, valorMinimo, catalogo) {
    let filtrados = [];
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i]._estadisticas[nombreEstadistica] > valorMinimo) {
            filtrados.push(catalogo[i]);
        }
    }

    return filtrados;
}


function copiaHeroe (nombre){

}

console.log(villano1)
