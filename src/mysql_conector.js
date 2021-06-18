import mysql from 'mysql'

let todos
// crear coneccion
const conector = mysql.createConnection(
    {
        host: 'localhost',
        user: 'pino',
        password: 'test0101',
        database: 'agenda_contactos'
    }
)

const conectar = () => {
    conector.connect(err => {
        if (err) throw err
        console.log('conectado')
    })
}

const agregarContacto = (numero, nombre) => {
    const sql = `INSERT INTO contactos (id_contacto, numero_contacto, nombre_contacto) VALUES (${null}, ${numero}, "${nombre}")`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const obtenerContactos = () => {
    const sql = 'SELECT * FROM contactos'
    conector.query(sql, function(err, result, field){
        todos = result
    })
    return todos
}

const borrarContacto = id => {
    const sql = `DELETE FROM contactos where id_contacto=${id}`
    conector.query(sql)
}


export {agregarContacto, obtenerContactos, borrarContacto }