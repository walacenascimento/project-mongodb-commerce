// 10.1
db.produtos.updateMany(
  {},
  { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } },
);
// 10.2
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } }, 
);
// 10.3
db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);
// 10.4
db.produtos.find(
  {},
  { _id: 0, nome: 1, vendasPorDia: 1 },
);
