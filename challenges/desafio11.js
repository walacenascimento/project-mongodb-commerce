db.produtos.updateMany(
  {},
  { $push: {
    tags: { $each: ["combo", "tasty"], $sort: 1 } } },
);

// 11.2
db.produtos.find(
  {},
  { _id: 0, nome: 1, tags: 1 },
);
