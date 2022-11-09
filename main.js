"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
conducirBatimovil(batimovil);
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
reir(guason);
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
ciudadGotica(['Pablo', 'Diego', 'Paruma']);
class Persona {
    imprimirBio(id) {
        console.log(id + this.nombre + " es un crak!!");
    }
}
const Pablo = { nombre: "Pablo", imprimirBio(id) { return id + this.nombre + " es un crak!!"; } };
//# sourceMappingURL=main.js.map