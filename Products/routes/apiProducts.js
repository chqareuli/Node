var express = require('express');
var app = express.Router();
const {  getProducts, addProducts, updateProducts, getProductsById, deleteProducts} = require('../services/customer-service')

  app.get('/',  (req, res) => {
    res.send(getProducts());
  });
  app.get('/:id',  (req, res) => {
    let record = getProductsById(req.params.id);
    res.send(record);
  });
  
  //POST add 
  app.post('/',  (req, res) => {
    var record = req.body;
    addProducts(record);
    res.send({result:'ok',msg:'record added successfully'});
  });
  
  app.put('/',  (req, res) => {
    var record = req.body;
    updateProducts(record);
    res.send({result:'ok',msg:'record updated successfully'});
  });
  
  app.delete('/',  (req, res) => {
    deleteProducts(req.body);
    res.send({result:'ok',msg:'record deleted successfully'});
  });


module.exports = app;
