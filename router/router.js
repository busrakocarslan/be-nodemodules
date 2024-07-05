"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? "Router" is special app for URL control in ExpressJS.

// app.get('/',(req,res)=>{
//     res.send({
//         message:'hello BE'
//     })
// })

//!EXPRESS ROUTER
// const router = express.Router()

// router.get('/', (req, res) => { res.send({ message: 'Home Page' }) })
// router.get('/path', (req, res) => { res.send({ message: 'Path Page' }) })
// router.post('/', (req, res) => { res.send({ message: 'Post Page' }) })
// router.put('/', (req, res) => { res.send({ message: 'Put Page' }) })
// router.delete('/', (req, res) => { res.send({ message: 'Delete Page' }) })

//?2.yöntem
// router.route('/')
// .get((req, res) => { res.send({ message: 'Home Page' }) })
// router.post((req, res) => { res.send({ message: 'Post Page' }) })


const router=require('../routes/')

//*router tanımlandıktan sonra app.use() yapılmalı
// app.use(router)
//?app.use( require('../routes/index')) bu yöntemle  de bağlanabilir
app.use('/test', require('../routes/index')) //TODO__ÖNEMLİ NOT: eğer tüm pathları başka bir path altına taşıyacaksam örneğin test gibi router dosyasında hepsine ayrı ayrı yazmak yerine app.use içinde ilk parametreye yazabilirim!!!!




/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));