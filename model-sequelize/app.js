"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data: and covert to object
app.use(express.json());
// Asnc errors to errorHandler:
require('express-async-errors')

// app.all("/", (req, res) => {
//   res.send("WELCOME TO TODO API");
// });
/* ------------------------------------------------------- */

//TODO *********** SEQUELIZE:
// npm i sequelize sqlite3
const { Sequelize, DataTypes } = require('sequelize')
//Connection:
const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

//?Sequelize MODEL: sequelize.define('tableName',{...columns})
// her bir model, veritabanında bir tabloya karşılık gelir.
const Todo = sequelize.define('todos', {
  // ID sutunu belirtmeye gerek yoktur. SEqulize ID sutununu otomatik oluşturur:
//   id: {
//     type: DataTypes.INTEGER, // DataType // sutun veri tipi.
//     allowNull: false, // default: true // sutun verisi boş olabilir mi?
//     unique: true, // default: false // benzersiz kayıt mı?
//     defaultValue: 0, // Kayıt eklendiğinde default olarak ne yazılsın?
//     // autoIncrement: true, // default: false, // Sutun değeri her bir jayıtta otomatik olarak +1 artsın mı?
//     // primaryKey: true, // default: false // tablonun her bir kaydını ifade eden benzersiz numara.
//     // comment: 'yorum ekleyebiliriz',
//     // field: 'custom_field_name'// buna gerek yok 30. satırdaki not sebebiyle!
//   },

title: {
    type: DataTypes.STRING(256), // varchar(256)
    allowNull: false
},

description: DataTypes.TEXT, // ShortHand

priority: { // 1: High, 0: Normal, -1: Low
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
},

isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
},
});
//* seculize de cerattedAt ile updatedAt i tanımlamaya gerek yok. Otomatik yapıyor

/* ------------------------------------------------------- */
//TODO ************ syncronization
// Syncronization: (Bir kere çalıştır.)
// Modelleri veritabanına uygula:
// sequelize.sync() // CREATE TABLE // First Command.
// sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
// sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP
sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

const router = express.Router()
// LİST TODO:
router.get('/', async (req, res) => {

    // const data = await Todo.findAll()
    const data = await Todo.findAndCountAll()

    res.status(200).send({
        error: false,
        result: data
    })

})









// CREATE TODO:
router.post('/', async (req, res) => {

    // const receivedData = req.body
    // res.send(receivedData)
    // console.log(receivedData)

    // const data= await Todo.create({
    //     title:receivedData.title,
    //     description:receivedData.description,
    //     priority:receivedData.priority,
    //     isDone:receivedData.isDone
    // })
    const data= await Todo.create(req.body)
    // console.log(data);
    res.status(201).send({
        error:false,
        result:data.dataValues,

    })

})
app.use(router)


/* ------------------------------------------------------- */

// continue from here...

const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
