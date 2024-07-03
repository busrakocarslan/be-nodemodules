"use string"
//! -----------------------DOTENV---------------------------
//bZEN YAZILIMIN İÇİNE BİR TAKIM BİLGİLER DEĞİŞKENLER GÖNDERMEK İSTENEBİLİR.Birden çok yöntemi var ancak en çok kullanılan yöntemi ENV. ama tüm yöntemleri kısa kısa not edelim 
//TODO__1. Yöntem terminalde yazacacağımız değişkenleri node index' e göndermek çok kullanılmıyor
//HOST=localhost PORT=9999 EXTRA=1234 node index 
// gönderdiğimiz bu sabitlerde process.env de yakalanıyor. 
//TODO__2. Yöntem: Package.json dosyasına script içine ilgili console kodunu yazmak yazmak bu da çok kullanılmıyor.
//npm run ile package.json da bulunan script kısmında bulunan formulleri yazınca çalıştırır.Ör: npm run start gibi packega.json a bak
//TODO__3. Yöntem: İçeriğe değer göndermenin esas yöntemi Dotenv kullanmak. 
//! npm i dotenv // bunu kurunca node-module clasörünü oluşturuyor. Bu modulün görevi env dosyasını okumak, onu algılamak. Dosyanın ismi mutlaka .env olmak zorunda
//? modulün çalışması için de: require('dotenv').config()
//*sistemin en tepesinde bir yerde olmalı çalışma kodu

require('dotenv').config()

console.log(process.env.HOST);
console.log(process.env.PORT);
console.log(process.env.EXTRA);



//*process sistemin temel ayarlaının saklandığı bir değişken, global bi değişken. yani require etmeme gerek ypk demek global demek.Global değişkenlere sistemin her yerinden erişilebilir. 
// console.log(process.env);