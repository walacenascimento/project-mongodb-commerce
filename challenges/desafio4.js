db.produtos.updateOne( //  query que atribue a data corrente ao campo
  { nome: "Big Mac" }, // Cirtério de seleção filtrando por nome do documento
  { $currentDate: { ultimaModificacao: true } }, // operação, inclui a data atual do tipo date no campo ultimaModificacao
);

db.produtos.find( //  query que retorna o nome de todos os documentos em que o campo ultimaModificacao existe.
  { ultimaModificacao: { $exists: true } }, // Critério de seleção,  
  { _id: 0, nome: 1 }, // Operação, retorna o nome caso o campo especificado no critério de seleção exista.
);
