db.produtos.updateMany( // query que insere o campo avalição com o valor 0.
  {}, // Critério de seleção
  { // Operação, insere no campo avaliação o valor zero do tipo Inteiro
    $set: { avaliacao: NumberInt(0) }, 
  },
);

db.produtos.updateMany( // query que incremente em 5 o campo avaliação
  { tags: "bovino" }, // critério de seleção, buscar somente por tipo "bovinos"
  { $inc: { avaliacao: 5 } }, // operção de incremento no documento avaliação
);

db.produtos.updateMany( // query que incremente em 3 o campo avaliação
  { tags: "ave" }, // critério de seleção, buscar somente por tipo "ave"
  { $inc: { avaliacao: 3 } }, // operção de incremento no documento avaliação
);

db.produtos.find( // query que retorna todos os tipos de sanduiche 
  {}, // criterio de seleção, passando um objeto vazio irá buscar por todos os documentos
  { _id: 0, nome: 1, avaliacao: 1 }, // Operação buscando por nome e avaliação.
);
