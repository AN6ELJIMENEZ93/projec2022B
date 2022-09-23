import express from 'express'
const router = express.Router();
/*var express = require('express');
var router = express.Router();*/

/* GET home page. */
router.get('/',(req, res, next) =>{
  res.render('index', { title: 'Express',author:'Mora Jimenez Angel' });
});

export default router;
