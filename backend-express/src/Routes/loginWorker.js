const { Router } = require("express");
const connect = require('./db_pool')

const router = Router(); //se llama router el app solo por documentacion

router.post("/loginworker", (req, res) => {
    connect(function (err,client,done){
        let sql = `SELECT * FROM Persona NATURAL JOIN Trabajador AS t WHERE t.cedula= ${req.body.trabajadorId} AND password=${req.body.password}`
        direccion = 'http://localhost:3001/waitingjob/' + req.body.trabajadorId

        client.query(sql,function(err,result){
            done(err)
            //si hay un error en la busqueda
            if(err){
                console.log("no existe el trabajador")
                res.redirect('http://localhost:3001/')
                return console.error('error running query', err)
            }
            if(Object.keys(result.rows).length == 0){
                console.log('no existe el trabajador2')
                res.redirect('http://localhost:3001/')
            }else{ res.redirect(direccion)}
        })
    })
});

module.exports = router;