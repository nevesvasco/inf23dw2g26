'use strict';
var mysql = require("../utils/db.js")

/**
 *
 * returns List
 **/
exports.clienteGET = function() {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM cliente", function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res);
      }
    });
  })};


/**
 *
 * body Cliente Cliente a ser adicionado , editado ou removido do negocio. (optional)
 * no response value expected for this operation
 **/
exports.clientePOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
    mysql.query("INSERT INTO cliente (nome, tipo_de_conta, numero_fiscal, email, contacto, plano, periodicidade_de_pagamento, data_ultimo_pagamento) Values(?,?,?,?,?,?,?,?)", [body.nome, body.tipo_de_conta, body.numero_fiscal, body.email, body.contacto, body.plano, body.periodicidade_de_pagamento, body.data_ultimo_pagamento], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      } else {
        console.log(res.insertId);
        resolve (res.insertId);
      }
    });
  });
}


/**
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.cliente_idDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
    mysql.query("DELETE FROM cliente WHERE id = ?", [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err); 
        console.log (res);
        reject();
      }
      else {
        console.log (res);
        resolve ({"deleted": id});
      }
    });
  });
}

/**
 *
 * id Long 
 * returns cliente
 **/
exports.cliente_idGET = function(id) {
  return new Promise(function(resolve, reject) {
    mysql.query("SELECT * FROM cliente WHERE id = ?", [id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}


/**
 *
 * body Cliente Cliente a ser adicionado , editado ou removido do negocio. (optional)
 * id Long 
 * no response value expected for this operation
 **/
exports.cliente_idPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
    mysql.query("UPDATE cliente set  nome = COALESCE( ?, nome), tipo_de_conta = COALESCE( ?, tipo_de_conta), numero_fiscal = COALESCE( ?, numero_fiscal), email = COALESCE( ?, email), contacto = COALESCE( ?, contacto), plano = COALESCE( ?, plano), periodicidade_de_pagamento = COALESCE( ?, periodicidade_de_pagamento), data_ultimo_pagamento = COALESCE( ?, data_ultimo_pagamento)   WHERE id = ?", [body.nome, body.tipo_de_conta, body.numero_fiscal, body.email, body.contacto, body.plano, body.periodicidade_de_pagamento, body.data_ultimo_pagamento, id], function (err, res) {
      if (err) {
        console.log(err);
        reject (err);
      }
      else {
        console.log(res);
        resolve(id);
      }
    });
  });
}