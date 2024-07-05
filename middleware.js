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
app.get("/", (req, res, next) => {
  console.log("middleware çalıştı.");
  // Bir sonraki controller'a data gönderme:
  //REq
  // req.message = 'Hello world from middleware BÜŞRA'
  //res
  if (req.query.courseName == "clarusway") {
    res.message = "doğru yer";
  } else {
    res.send({
      message: "ACABA?",
    });
  }

  next();
});

// Route-Path:
app.get("/", (req, res) => {
  console.log("route-path çalıştı.");
  res.send({
    // message: req.message,
    message: res.message,
  });
});

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
