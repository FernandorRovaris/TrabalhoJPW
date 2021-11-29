## Sobre e Autor
  Autor: Fernando H. Rovaris
  Academico: Universidade do Extremo Sul Catarinense
  Curso: Ciencia da Cuputação
  Diciplina: Java Web   
## INSTALAÇÃO
    pronpt: npm insltall 
            npm run Start
## ENDPOINTS
 ### Recurso 1
    Usuarios
 ### Modelo de Dado
 {
    _id: "619c390ca960eb3717969935",
    nome: "Maria thereza",
    nacimeto: "07-05-1997",
    sexo: "F",
    nacionalidde: "Brasileiro"
 }
 ### GET
     http://localhost:8080/api/user
 #### Requisição
   {}
 #### Exemplo de resposta
    [
        {"_id": "619c390ca960eb3717969935",
         "nome": "Maria thereza",
         "nacimeto": "07-05-1997",
         "sexo": "F",
         "nacionalidde": "Brasileiro",
         "__v": 0
        },
        {"_id": "619c390ca960eb3717969935",
         "nome": "Maria thereza",
         "nacimeto": "07-05-1997",
         "sexo": "F",
         "nacionalidde": "Brasileiro",
         "__v": 0
        }
    ]
 #### Erros
    status:400 {erro: 'Postagem não encontrado'}
    status:500 {erro: 'Erro não esperado'}
 #### Filtros
 ### POST
    http://localhost:8080/api/user
 #### Requisição
   bory=> {"nome": "Maria thereza",
            "nacimeto": "07-05-1997",
            "sexo": "F",
            "nacionalidde": "Brasileiro",
            "_id": "619c390ca960eb3717969935",
            "__v": 0
           }
 #### Exemplo de resposta
    {"nome": "Maria thereza",
     "nacimeto": "07-05-1997",
     "sexo": "F",
     "nacionalidde": "Brasileiro",
     "_id": "619c390ca960eb3717969935",
     "__v": 0}
 #### Erros
    status:400 {erro: 'Postagem não encontrado'}
    status:500 {erro: 'Erro não esperado'}
  ### PUT
     http://localhost:8080/api/user/:id
 #### Requisição
   bory=> {"nacionalidde": "Americama"}
 #### Exemplo de resposta
    {"nome": "Maria thereza",
     "nacimeto": "07-05-1997",
     "sexo": "F",
     "nacionalidde": "Brasileiro",
     "_id": "619c390ca960eb3717969935",
     "__v": 0}
 #### Erros
    status:400 {erro: 'Postagem não encontrado'}
    status:500 {erro: 'Erro não esperado'}
 ### DELETE
 #### Requisição
 #### Exemplo de resposta
 #### Erros
 ### Recurso 2
 ### Recurso 3
## AUTENTICAÇÃO
//