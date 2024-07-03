"use string"
/*--------------------------------------------------------------- */
// console.log('module index started')
// console.log("ders deneme");




/*--------------------------------------------------------------- */
//? EXPORT 


// function test(){
//     console.log("test func çalıştı");
// }
// module.exports = test
//*SHORTHAND
// module.exports= function test (){
//         console.log('test fonk çalıştı');
// } 

function test1(){
    console.log('test 1 çalıştı');
}
function test2(){
    console.log('test 2 çalıştı');
}
function test3(){
    console.log('test 3 çalıştı');
}
//*1. yöntem: tamamını bir array içinde göndermek 
// module.exports=[
//     test1,
//     test2,
//     test3
// ]
//*2.yöntem: obje formatında göndermek
// module.exports={
//     test1:test1,
//     test2:test2,
//     test3:test3, 
//     }
//*SHORTHAND
// module.exports={// key-value aynı olduğundan tek yazmak yeterli
//     test1,
//     test2,
//     test3,
//     newVar:'deneme'
// }
//*3.yöntem // module.exports özünde bir obje olduğundan obje ataması olarak yapabiliriz. yani nokta notasyonu ile obj içine yeni bir değer atıyoruz burada.
// module.exports.test1=test1
// module.exports.test2=test2
// module.exports.test3=test3
// module.exports.newVar='deneme'

//*4. Yöntem func expression
// 3. methodda tanımlayıp export etmiştirk burada export ederken tanımladık. bURADAKİLER FUNC EXPERESSİON OLDUĞUNDAN FUNC İSMİ YAZMAYA GEREK YOK
// module.exports.test1= function(){
//     console.log('test 1 çalıştı');
// }
// module.exports.test2= function(){
//     console.log('test 2 çalıştı');
// }
// module.exports.test3= function(){
//     console.log('test 3 çalıştı');
// }
//  module.exports.newVar='deneme'

//*5. YÖNTEM EN ÇOK KULLANILACAK OLAN TEK BİR OBJ İÇİNDE HEPSNİ TANIMLAYARAK GÖNDERMEK

module.exports={
    test1:function test1(){
        console.log('test 1 çalıştı');
    },
    test2:function test2(){
        console.log('test 2 çalıştı');
    },
    test3:function test3(){
        console.log('test 3 çalıştı');
    },
    newVar:'extra values'
}















/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */