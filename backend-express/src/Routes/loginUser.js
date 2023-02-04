const { Router } = require("express");
const connect = require('./db_pool')

const router = Router(); //se llama router el app solo por documentacion

router.get("/loginuser",(req,res)=>{
    res.send("hola mundo")
})

router.post("/loginuser", (req, res) => {
    connect(function (err,client,done){
        let sql = `SELECT * FROM Persona NATURAL JOIN Usuario_app WHERE id_telefono= ${req.body.usuarioId} AND password= ${req.body.password}`
        direccion = 'http://localhost:3001/service/' + req.body.usuarioId
        client.query(sql, function(err, result){
            done(err);
            //si hay un error en la busqueda
            if(err){
                console.log("no existe usuario")
                res.redirect('http://localhost:3001/')
                return console.error('error running query', err)
            }

            if(Object.keys(result.rows).length == 0){
                console.log('no existe el usuario2')
                res.redirect('http://localhost:3001/')
            }else{ res.redirect(direccion)}
        });
    })
});

module.exports = router;