db.produtos.updateMany(
  {}, // critério de seleção (filtro)
  { 
    $set: { valorUnitario: NumberDecimal("0.00") }, // operação
  },
);
db.produtos.find(
  {}, // critério de seleção (filtro)
  { _id: 0, nome: 1, valorUnitario: 1 }, // operação
);
