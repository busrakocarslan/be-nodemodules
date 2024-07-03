"use strict"
//! ********************************     NODEJS  **************************************** */
//bugün nodejs i tanıyacağız. arka plan çalışması teknik tarafı.
// bir http request alabilmem ve bu gelenb istekleri kod blogunda çalıştırabilmem ve aktarabilmem için http servera ihtiyaç vardır. 
//? HTTP SERVER
const http= require('node:http')// node : görürsen bil ki dahili global burayı tam not al bu modulün amacı http server istekleriine cevap verme. Bu bir BuiltIn Module
/******************************************************************************** */
// http.createServer()//* bu benim için bir server motoru çalıştıracak burada bir func var bu func ((request,response)=>{   .....    })
// const app=  http.createServer((request,response)=>{
//*     response.end('Hello world')// response.edn serverin çıktısıdır.
// })// birinci parametre ile data alınır içinci ile data verilir 

//* default local server/ local domain= localhost tur 
// defaul server IP (local IP)=127.0.0.1
// app.listen(8000, () => console.log('server çalıştı: http://127.0.0.1:8000'))
//*ÖRNEK 1
// const app = http.createServer((request, response) => {
//     response.end('Hello World')
//     console.log('Console Print')
//     })
//     // Default server domain (local domain) = localhost
//     // Default server IP (local IP) = 127.0.0.1
// app.listen(8000, () => console.log('Server started: http://127.0.0.1:8000'))
// const app= http.createServer((req,res)=>{
//! bu kısma end yapmazsak sosnusz döngğye girer sisteme çıktı ver demek gerek. 
//TODO__ ancak res.end işlemi bloklar devam eden kodlar çalışmaz!
//* res.end en önce yazacağımız yazıları res.white('') içine yazacağız: ancak dikkat et res.end i de en sona yazman lazım görmezse write' ı da yazmaz!!!!!!!!!!
//  if(req.url== '/'){
//     res.write('yazi1')
//     res.end(' main page ')
//  }else if (req.url=='/second'){
//     res.end('second page')
//  }else {
//     res.end('any page')
//  }

// })
// app.listen(8000,()=>console.log('http://127.0.0.1:8000'))


const app = http.createServer((req, res) => {
    if (req.url == '/') {
        if (req.method == 'GET') {

            res.writeHead(400,{
                "content-encoding":'utf-8'
            })

            const obj = {
                result: true,
                message: 'Hello World'
            };

            res.write(JSON.stringify(obj));//! obj direk çalışmaz json a çevirmek gerek
            res.end();
        } else {
            res.end('wrong method');
        }
    }
});

app.listen(8000, () => console.log('http://127.0.0.1:8000'));
