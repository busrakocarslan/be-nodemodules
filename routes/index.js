"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */
//!EXPRESS ROUTER

const router = require("express").Router()//? express bu klasötde tanımlı olmadığından ya bu yöntemi yazacaksın ya da aşağıdaki yöntemi bu daha kısa yazım
//const express=require('express')
//const router = express.Router()


router.get('/', (req, res) => { res.send({ message: 'Home Page' }) })
router.get('/path', (req, res) => { res.send({ message: 'Path Page' }) })
router.post('/', (req, res) => { res.send({ message: 'Post Page' }) })
router.put('/', (req, res) => { res.send({ message: 'Put Page' }) })
router.delete('/', (req, res) => { res.send({ message: 'Delete Page' }) })

//?2.yöntem
// router.route('/')
// .get((req, res) => { res.send({ message: 'Home Page' }) })
// router.post((req, res) => { res.send({ message: 'Post Page' }) })

module.exports=router
