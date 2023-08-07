const mongoose = require('mongoose');

const connection=mongoose.connect("mongodb+srv://gofood:pathakamit399@cluster0.bppkopf.mongodb.net/gofoodmern?retryWrites=true&w=majority")

  
  module.exports = {connection};