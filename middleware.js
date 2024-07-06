"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Middleware functions must be has three parameters.
//? Last parameter is for next().
//Middleware
// app.get('/', (req, res, next) => {

//     console.log('middleware çalıştı.')

//     if (req.query.courseName == 'clarusway') {
//         next()
//     } else {
//         res.send({
//             message: 'Kurs ismi yanlış girildi.'
//         })
//     }

// })
// const middleware1=(req, res, next) => {

//     console.log('middleware çalıştı.')
//     next()}

// Route-Path:
// app.get('/', (req, res) => {

//     console.log('route-path çalıştı.')

//     res.send({
//         message: 'Hello World'
//     })

// })

/* ------------------------------------------------------- */
//! middleware-router arası mesaj iletme
//TODO req ve res ile bunu yapabiliriz.
// app.get("/", (req, res, next) => {
//   console.log("middleware çalıştı.");
//   // Bir sonraki controller'a data gönderme:
//   //REq
//   // req.message = 'Hello world from middleware BÜŞRA'
//   //res
//   if (req.query.courseName == "clarusway") {
//     res.message = "doğru yer";
//   } else {
//     res.send({
//       message: "ACABA?",
//     });
//   }

//   next();
// });

//* Route-Path:
// app.get("/", (req, res) => {
//   console.log("route-path çalıştı.");
//   res.send({
//     // message: req.message,
//     message: res.message,
//   });
// });

/* ------------------------------------------------------- */
//? yazdığımız aynı zamanda bir fonk olduğundan ayrıca da yazabiliyoruz.Ancak dikkat edilecek husus app'dan bunun haberdar olması için use.app()ile bildirmemiz gerektiğidir.
// app.get('/',(req, res, next) => {
//   console.log('middleware-1 çalıştı.')
//   next()
// })

// const middleware1=(req, res, next) => {
//   console.log('middleware-1 fonksiyonu çalıştı.')
//   next()
// }
// const middleware2=(req, res, next) => {
//   console.log('middleware-2 fonksiyonu çalıştı.')
//   next()
// }
// app.use([middleware2,middleware1])// tek use ile , koyup yazaviliriz fonk sadece dikkat et BURAYA önce yazdığın  önce çelışır.
//?URL e özel Middlewares
// app.use('/test', [middleware1, middleware2])

// app.get('/*',middleware1,middleware2, (req, res) => {
// res.send({
// message: 'Sorun yok.',
// })
// })

// app.get('/', (req, res) => {
// res.send({
// message: 'Sorun yok  middleware geçti.',
// })
// })
/* ------------------------------------------------------- */
//TODO___ AYRI DOSYADAN ÇAĞIRMA


const middlewares=require('./middlewares/')// orada arrayde export ettiğimden burada böyle çaığırabildim. Hepsine birden ihtiycacın varsa middlewarelerin array içinde yap 
// const {middleware1,middleware2,middleware3}=require('./middlewares/')// orada obje export ettiğimden destruc ile burada böyle çaığırabildim. bazılarına ihtiyacın var ise obj içinde yap.


app.get('/', middlewares.middleware1, (req, res) => {
  res.send({
  message: 'Sorun yok  middleware diğer klasörden geldi',
  })
  })

















/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
