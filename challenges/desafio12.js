// 12.1
db.produtos.updateMany(
  {},
  { $push: {
    valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
);
// 12.2
db.produtos.find(
  {},
  { _id: 0, nome: 1, valoresNutricionais: 1 },
);
