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
    return existe.saldo;
  }
};
// console.log(poderConsultarSaldo3(456));

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

function agregarSaldo(id, number) {
  let acumulador = 0;
  acumulador = poderConsultarSaldo3(id) + number;
  return acumulador;
}
// console.log(agregarSaldo(456, 300));

function transferenciaDeSaldo(id1, id2, number) {
  let saldoOrigen = poderConsultarSaldo3(id1) - number;
  let saldoTransferido = poderConsultarSaldo3(id2) + number;
  listaUsuarios.find((x) => x.id === id1).saldo = saldoOrigen;
  listaUsuarios.find((x) => x.id === id2).saldo = saldoTransferido;
}

transferenciaDeSaldo(123, 456, 300);
console.log(listaUsuarios)
transferenciaDeSaldo(456,777,300)
console.log(listaUsuarios);