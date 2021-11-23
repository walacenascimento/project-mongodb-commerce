db.produtos.updateMany(
  {}, // critério de seleção (filtro)
  {
    $set: { criadoPor: "Ronald McDonald" }, // operação 
  },
);

db.produtos.find(
  {}, // critério de seleção (filtro )
  { _id: 0, nome: 1, criadoPor: 1 }, // operação 
);
