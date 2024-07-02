"use string"//= beni katı kurallara zorla demek
/*--------------------------------------------------------------- 
MODULES
--------------------------------------------------------------- */
//* Yazılım dilinde bir kod bloğunu func da olabilir class da olabilir herhangi bir kod bloğunu ayrı bir dosyadan çağırıp çalıştırabiliyorsun. Node.js de comanScript genel js kullanıldığından import export değişiyor biraz.

//?REQİRE(İMPORT)

//* require(commonjs)=import(babel) bir dosyası import ederken modulesde require keywordunu kullanıyoruz.

// require() başka bir dosyası bu dosyanın içine aktarmaya yarar. () içine aktarmak istediğimiz dosyanın yolunu yazıyoruz. Aslında dosyası yazdığımız klasörde çalıştırıyor, çıktısını ise require ettiğimiz yere veriyor.
//* require ederken dosya uzantısı için sonuna .js yazmak zorunda değilsin onu kendi yakalıyor. Ayrıca dosya ismi index ise de onu da yazmak zorunda değilsin. Default file name: index'tir.

// require('./modules/index') //! dosya ismi index ise onu da yazmak zorunda değilim 
// require('./modules')
//? EXPORT 
// bir dosyanın içinde oluşturduğumuz func i başka bir dosyada require edeceğimiz zaman o func o dosyada çalışmasına izin vermemiz gerekmektedir, yani export etmemiz gerek. ÇIktı olarak func kendisini vermek istiyoruz burada sadece sonucunu değil.Burada da komutumuz modele.export 



/*--------------------------------------------------------------- */
//? exportu çalıştırma 

// const test = require('./modules/')

// test()
//*SHORTHAND
// require('./modules/')()//! tek bir func çıktısı olduğu zaman bu kısa kullanım ile çağırılabilir.

// const arrFunc=require('./modules/')
//* array destruc hali
// const [test1,test2,test3]=require('./modules/')
// test1()
// test2()
// test3()
//*obj 1.yöntem
// const objFunc= require('./modules')// nokta notasyonu
// objFunc.test1()
// objFunc.test2()
// objFunc.test3()

//*obj destruc hali
const {test1,test3:func3,test2,newVar}= require('./modules')
test1()
test2()
func3()
console.log(newVar);

/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*--------------------------------------------------------------- */
/*Babel ve CommonJS, JavaScript geliştirme ortamında önemli araçlardır, ancak farklı amaçlar için kullanılırlar. İşte aralarındaki temel farklar:

### Babel
**Babel** bir JavaScript derleyicisidir. Esas görevi, modern JavaScript özelliklerini (ES6 ve sonrasını) daha eski tarayıcılarda ve ortamlarca desteklenmeyen sürümlere dönüştürmektir. Örneğin, ES6'nın bazı özellikleri (let/const, arrow functions, classes, vs.) eski tarayıcılarda veya Node.js sürümlerinde çalışmaz. Babel, bu modern özellikleri ES5'e çevirerek kodunuzun daha geniş bir uyumluluğa sahip olmasını sağlar.

**Özellikleri:**
- Modern JavaScript özelliklerini destekler.
- Farklı tarayıcılar ve JavaScript motorları için geriye dönük uyumluluk sağlar.
- Eklentiler ve ön ayarlar ile genişletilebilir.
- JSX (React) ve TypeScript gibi diğer dillerin JavaScript'e çevrilmesini destekler.

### CommonJS
**CommonJS**, özellikle Node.js ortamında kullanılan bir modül sistemidir. Bu sistem, modüllerin (dosyaların) içeriğini diğer dosyalarla paylaşmasını ve kullanmasını sağlar. CommonJS modül sisteminde, `require` ve `module.exports` sözcükleri kullanılarak modüller dahil edilir ve dışa aktarılır.

**Özellikleri:**
- Senkron çalışır, yani modüller anında yüklenir.
- Server-side JavaScript geliştirme için tasarlanmıştır.
- Node.js tarafından desteklenir ve kullanılır.

### Özet
- **Babel**: Modern JavaScript özelliklerini eski tarayıcılar ve ortamlar için uyumlu hale getiren bir derleyicidir.
- **CommonJS**: Node.js ortamında modülleri yönetmek için kullanılan bir modül sistemidir.

Her iki araç da JavaScript ekosisteminde önemli yer tutar ve farklı ihtiyaçları karşılar. Babel, kodunuzu daha geniş bir uyumluluk sağlamak için kullanılırken, CommonJS modüller arasında kod paylaşımı ve yönetimi için kullanılır. */