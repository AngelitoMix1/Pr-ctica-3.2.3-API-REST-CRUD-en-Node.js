const Product = require('../models/productModel');

exports.list = (req,res)=> res.json(Product.all());

exports.get = (req,res)=>{
  const p = Product.find(req.params.id);
  if(!p) return res.status(404).json({error:'Not found'});
  res.json(p);
};

exports.create = (req,res)=>{
  const {name, price} = req.body;
  if(!name) return res.status(400).json({error:'name required'});
  const newP = Product.create({name, price});
  res.status(201).json(newP);
};

exports.update = (req,res)=>{
  const updated = Product.update(req.params.id, req.body);
  if(!updated) return res.status(404).json({error:'Not found'});
  res.json(updated);
};

exports.remove = (req,res)=>{
  Product.remove(req.params.id);
  res.json({message:'deleted'});
};