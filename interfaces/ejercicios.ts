// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)


interface automovil {
    encender: boolean;
    velocidadMaxima: number;
    acelear(): void;
}
const conducirBatimovil = ( auto: automovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: automovil = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

conducirBatimovil(batimovil);

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface joker {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: joker = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: joker ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

reir(guason);


// Cree una interfaz para la siguiente funcion

interface ciudadano {
    (ciudadanos: string[]): number;
}

const ciudadGotica: ciudadano = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

ciudadGotica(['Pablo','Diego','Paruma']);



// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface caracters {
    nombre: string;
    edad?: number;
    sexo?: string;
    estadoCivil?: boolean;
    imprimirBio?(id: string ): void;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements caracters {
    public nombre: string;
    public edad?: number;
    public sexo?: string;
    public estadoCivil?: boolean;
    imprimirBio?(id: string): void {
        console.log( id + this.nombre + " es un crak!!" );
    }
}

const Pablo: Persona = { nombre: "Pablo", imprimirBio(id){ return id + this.nombre + " es un crak!!" }}

