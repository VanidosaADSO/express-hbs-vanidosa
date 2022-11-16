require('dotenv').config()
const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT

app.use(express.static('public'))

//Motor de plantilla
hbs.registerPartials(__dirname + '/public/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');

// ----------------------DASHBOARD--------------------
app.get('/', (req, res) => {
    // res.send('Hola Mundo')
    res.render('home', {
        nombre: 'Home'
    })
})

app.get('/home', (req, res) => {
    // res.send('Hola Mundo')
    res.render('home', {
        nombre: 'Home'
    })
})

// ------------------------ROLES---------------------------
app.get('/roles', (req, res) => {
    // res.send('Hola Mundo')
    res.render('roles', {
        nombre: 'Roles'
    })
})


app.get('/listar-roles', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listar-roles', {
        nombre: 'Listar roles'
    })
})

app.get('/modificar-rol', (req, res) => {
    // res.send('Hola Mundo')
    res.render('modificar-rol', {
        nombre: 'Modificar rol'
    })
})
// -------------------------USUARIOS-----------------------
app.get('/usuarios', (req, res) => {
    // res.send('Hola Mundo')
    res.render('usuarios', {
        nombre: 'Usuarios'
    })
})

app.get('/listar-usuarios', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listar-usuarios', {
        nombre: 'Listar Usuarios'
    })
})

app.get('/modificar-usuario', (req, res) => {
    // res.send('Hola Mundo')
    res.render('modificar-usuario', {
        nombre: 'Modificar Usuario'
    })
})
// -------------------------INSUMOS-----------------------
app.get('/insumos', (req, res) => {
    // res.send('Hola Mundo')
    res.render('insumos', {
        nombre: 'Insumos'
    })
})
app.get('/listar_insumos', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listar_insumos', {
        nombre: 'listar insumos'
    })
})
app.get('/modificar_insumo', (req, res) => {
    // res.send('Hola Mundo')
    res.render('modificar_insumo', {
        nombre: 'Insumos'
    })
})


// -------------------------PROVEEDORES-----------------------
app.get('/proveedores', (req, res) => {
    // res.send('Hola Mundo')
    res.render('proveedores', {
        nombre: 'Proveedores'
    })
})

app.get('/listar-proveedores', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listar-proveedores', {
        nombre: 'listar proveedores'
    })
})

app.get('/modificar-proveedores', (req, res) => {
    // res.send('Hola Mundo')
    res.render('modificar-proveedores', {
        nombre: 'modificar proveedores'
    })
})

// -------------------------COMPRAS-----------------------
app.get('/Compras', (req, res) => {
    // res.send('Hola Mundo')
    res.render('Compras', {
        nombre: 'Compras'
    })
})

app.get('/listar_Compras', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listar_Compras', {
        nombre: 'listar Compras'
    })
})

app.get('/modificar_compras', (req, res) => {
    // res.send('Hola Mundo')
    res.render('modificar_Compras', {
        nombre: 'modificar Compras'
    })
})


// -------------------------SERVICIOS-----------------------
app.get('/servicios', (req, res) => {
    // res.send('Hola Mundo')
    res.render('servicios', {
        nombre: 'Servicios'
    })
})



app.get('/listar-servicios', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listar-servicios', {
        nombre: 'listar servicios'
    })
})

app.get('/modificar-servicio', (req, res) => {
    // res.send('Hola Mundo')
    res.render('modificar-servicio', {
        nombre: 'modificar servicio'
    })
})


// -------------------------CLIENTES-----------------------
app.get('/clientes', (req, res) => {
    // res.send('Hola Mundo')
    res.render('clientes', {
        nombre: 'Clientes'
    })
})


app.get('/listar-clientes', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listar-clientes', {
        nombre: 'listar clientes'
    })
})

app.get('/modificar-cliente', (req, res) => {
    // res.send('Hola Mundo')
    res.render('modificar-cliente', {
        nombre: 'modificar cliente'
    })
})


// -------------------------CITAS-----------------------
app.get('/citas', (req, res) => {
    // res.send('Hola Mundo')
    res.render('citas', {
        nombre: 'Citas'
    })
})

app.get('/listar-citas', (req, res) => {
    // res.send('Hola Mundo')
    res.render('listar-citas', {
        nombre: 'listar citas'
    })
})

app.get('/modificar-cita', (req, res) => {
    // res.send('Hola Mundo')
    res.render('modificar-cita', {
        nombre: 'modificar cita'
    })
})


// ------------------------PRUEBAS-----------------------
// app.get('/home', (req, res) => {
//     res.sendFile(__dirname + '/public/views/home.hbs')
// })

// app.get('/contacto', (req, res) => {
//     res.send('Contacto')
// })

// app.get('*', (req, res) => {
//     //res.send('Página no encontrada')
//     res.sendFile(__dirname + '/public/views/404.hbs');
// })

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})
