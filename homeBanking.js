//lista de usuarios

const listaUsuarios = [
    {
        id: 123,
        nombre: 'Juan',
        apellido: 'Perez',
        saldo: 500.00,
        usuario: 'JuanitoLaguna',
        password: 'Juan123*'
    },
    {
        id: 456,
        nombre: 'Maria',
        apellido: 'Garcia',
        saldo: 1700.00,
        usuario: 'maria_garcia',
        password: '1Quilombo!'
    }
]

//pedir saldo
//Toma como variable id del cliente y devuelve un string con el
//valor en pesos y 2 decimales
//esta funcion anda bien!

const poderConsultarSaldo = (id) => {
    console.log(`Su saldo es de $ ${listaUsuarios.find(x => x.id === id).saldo.toFixed(2)}.`);
};
poderConsultarSaldo(123);

//pedir saldo V.2
//Toma como variable id del cliente y devuelve un string con el
//valor en pesos y 2 decimales
//esta funcion verifica que exista el usuario y devuelve a cada alternativa
//un string. 
//con id undefined anda bien, pero cuando el id existe no anda :(
// a ver quien lo arregla

const poderConsultarSaldo2 = (id) => {id == undefined ? 
    console.log(`Su saldo es de $ ${listaUsuarios.find(x => x.id === id).saldo.toFixed(2)}.`) :
    console.log('El usuario no existe');
};
poderConsultarSaldo2(123)