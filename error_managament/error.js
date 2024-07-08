"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//TODO_____ ******THROW**********:
//* biz api servicee yazıyor, kullandığımızapi in türü REST APİ, REST APİ nin özelliği data alışverişinde JSON KULLANMA. BE de data alışverirşinde gelen giden hep JSON olmak zorundadır. Hata yönetimindeki 1. amaç hatayı da ilgili formatta yani JSON da vermek. Eğer hata yönetimi yapmaz isek hata html gidiyor ve frontend afallıyor. 2.si buranın ağasıda paşası da BE developer der hata verilecekse bile o hatayı be developer verir:) Sistem kendi kafasına göre hata vermemeli, bu da developerin kontrolünde olma.
//  hata fırlat ve sistemi kilitle demek buna BLOCK CODE denir. trow block koddur.
// app.get("/user/:id", function (req, res) {
//?    throw new Error('HATA OLUŞTU') bu kod ile hatayı biz oluşturuyoruz.

// //   res.send({

// //       id:req.params.id,
// //       message:'hello world'
// //   })
//   if (isNaN(req.params.id)) {
//     res.errorStatusCode=400 // errorHandlere' a status code
//     throw new Error("id paramatresi sayı olmak zorundadır");
//   } else {
//     res.send({
//       message: "id doğru",
//     });
//   }
// });

/* ------------------------------------------------------- */
//TODO ******************   TRY/CACTH **************************
//! trow ile kendimiz hata veriypruz. try/chact ile de html olarak hata VERMEMESİNİ sağlayacağız.
// app.get("/user/:id", function (req, res) {
//   try {
//     if (isNaN(req.params.id)) {
//       throw new Error("id paramatresi sayı olmak zorundadır");
//     } else {
//       res.status(200).send({
//         error: false,
//         message: "id doğru,her şey yolunda",
//       });
//     }
//   } catch (err) {//* buradaki parametrenin adı herhangi bir şey olabilir, önemli olan parametre olmasıdır. try da gelenhatayı parametre üzerinden catch e vererek onu çalıştıracak!
//     res.status(500).send({
//       error: true,
//       message: err.message,parametre obje ve içerisinde mesaAGE VAR 
//     });
//   }
// });

/* ------------------------------------------------------- */
//TODO *****************       ASYNC_AWAİT

// const asyncFunction=async()=>{
//    throw new Error("async-error");

// }
// app.get('/async', async (req,res,next)=>{
//    await asyncFunction()
//    .then()
//    .catch((err)=>{next(err)})

// })
//* en güzel yolu 
//? npm i express-async-errors
// require etmek yeterli async fonksiyonlardaki hataları errorHandler yakaldı
require('express-async-errors')
const asyncFunction=async()=>{
    throw new Error("async-error",{cause:"async function içinde bir hatadır"});
 
 }
 app.get('/async', async (req,res,next)=>{
    await asyncFunction()
   
 
 })










/* ------------------------------------------------------- */
//? ***** ERROR HANDLER ******
// en az 4 parametreli olmak zorunda. hata ayıklayıcı parametre 1. sırada olmak zorunda
const errorHandler=(error,req,res,next)=>{
    const statusCode=res?.errorStatusCode || 500
    res.status(statusCode).send({
        error: true,
        message:error.message,// hata mesajı
        cause:error.cause,//* hata neden oluştu, gönderirken obje içinde yazmak zorundasın
        stack:error.stack// html error mesajı için olan kod bu sistemin oluşturduğu mesaj
      });

}
app.use(errorHandler)














/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

// kullandığımız api rest api, onun özelliği de JSON olması, aldığım data json verdiğim json
// hatayı da json vermeliyiz bu sebeple html olmamalı frontend afallar
// hatayı vereceksek de ben vermeliyim server değil
