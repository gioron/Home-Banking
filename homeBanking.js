//lista de usuarios

const listaUsuarios = [
  {
    id: 123,
    nombre: "Juan",
    apellido: "Perez",
    saldo: 500.0,
    usuario: "JuanitoLaguna",
    password: "Juan123*",
  },
  {
    id: 456,
    nombre: "Maria",
    apellido: "Garcia",
    saldo: 1700.0,
    usuario: "maria_garcia",
    password: "1Quilombo!",
  },
];

//pedir saldo
//Toma como variable id del cliente y devuelve un string con el
//valor en pesos y 2 decimales
//esta funcion anda bien!

/* const poderConsultarSaldo = (id) => {
    let existe = listaUsuarios.find(x => x.id === id).saldo.toFixed(2)
    if( existe != undefined ){
        console.log(`Su saldo es de $ .`);
    }else{
        console.log('No existe');
    } 
};
poderConsultarSaldo(444);  */

const poderConsultarSaldo3 = (id) => {
  let existe = listaUsuarios.find((x) => x.id === id);
  if (existe != undefined) {
    console.log(`Su saldo es de $ ${existe.saldo.toFixed(2)}.`);
  } else {
    console.log("No existe");
  }
};
poderConsultarSaldo3(456);

/* //pedir saldo V.2
//Toma como variable id del cliente y devuelve un string con el
//valor en pesos y 2 decimales
//esta funcion verifica que exista el usuario y devuelve a cada alternativa
//un string. 
//con id undefined anda bien, pero cuando el id existe no anda :(
// a ver quien lo arregla

const poderConsultarSaldo2 = id => {id == listaUsuarios.id ? 
    console.log(`Su saldo es de $ ${listaUsuarios.find(x => x.id === id).saldo.toFixed(2)}.`) :
    console.log('El usuario no existe');
};
/* poderConsultarSaldo2(123)
poderConsultarSaldo2(456)
poderConsultarSaldo2(777)
 */
/* function listaDeID(id) {
  if (id == listaUsuarios.id) {
    console.log(
      `Su saldo es de $ ${listaUsuarios
        .find((x) => x.id === id)
        .saldo.toFixed(2)}.`
    );
  } else {
    console.log("El usuario no existe");
  }
}

listaDeID(123)
 */
