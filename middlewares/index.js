"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

// const middleware1=(req, res, next) => {
//     console.log('middleware-1 fonksiyonu çalıştı.')
//     next()
//   }
//   const middleware2=(req, res, next) => {
//     console.log('middleware-2 fonksiyonu çalıştı.')
//     next()
//   }
//   const middleware3=(req, res, next) => {
//     console.log('middleware-3 fonksiyonu çalıştı.')
//     next()
//   }
  //*ARRAY İÇİNDE EXPORT
//   module.exports=[middleware1,middleware2,middleware3]
  //*OBJE İÇİNDE EXPORT
//   module.exports={middleware1,middleware2,middleware3}

//TODO__ hepsini direk obj içinde tanımlayıp export etme
module.exports={
     middleware1:(req, res, next) => {
        console.log('middleware-1 fonksiyonu çalıştı.')
        next()
      },
      middleware2:(req, res, next) => {
        console.log('middleware-2 fonksiyonu çalıştı.')
        next()
      },
      middleware3:(req, res, next) => {
        console.log('middleware-3 fonksiyonu çalıştı.')
        next()
      }

}