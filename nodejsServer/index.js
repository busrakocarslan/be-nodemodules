"use strict"
//! ********************************     NODEJS  **************************************** */
//bugün nodejs i tanıyacağız. arka plan çalışması teknik tarafı.
// bir http request alabilmem ve bu gelenb istekleri kod blogunda çalıştırabilmem ve aktarabilmem için http servera ihtiyaç vardır. 
//? HTTP SERVER
// const http= require('node:http')// node : görürsen bil ki dahili global burayı tam not al bu modulün amacı http server istekleriine cevap verme.
// http.createServer// bu benim için bir server motoru çalıştıracak burada bir func var bu func ((request,response)=>{   .....    })
// const app=  http.createServer((request,response)=>{
//     response.end('Hello world')// response.edn serverin çıktısıdır.
// })// birinci parametre ile data alınır içinci ile data verilir 

// default local server/ local domain= local hosttur 
// defaul server IP (local IP)=127.0.0.1
// app.listen(8000, () => console.log('server çalıştı: http://127.0.0.1:8000'))

const app= http.createServer((req,res)=>{
   

})
app.listen(8000,()=> console.log('http://127.0.0.1:8000'))