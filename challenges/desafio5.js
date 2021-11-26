db.produtos.updateMany( // query que adiciona o documento ingrediente 
  { nome: { $nin: ["McChicken"] } }, // critério de seleção excluíndo o documento de nome "McChicken"
  { $addToSet: { ingredientes: "ketchup" } }, // operação, addToSet garante o o valor "ketchup" não será duplicado no campo "ingredientes"
);

db.produtos.find( // query que filtra por nome da campo
  {}, // critério de seleção
  { _id: 0, nome: 1, ingredientes: 1 }, // operação, informando os campos que serão retornados.
);
