const lista = []

for (let i = 1; i <= 10; i++) {
    lista.push(i)
}

// for (let i = 0; i <= lista.length; i++) {
//     const papelzinho = lista[i]
//     if(papelzinho == 60){
//         console.log('boa, achou', i); break
//     }
// }

const max = 10
const min = 0
const busca_binaria = (lista, max, min, valor)=>{  //parametros lista ordenado  valor esquerdo e valor direito, valor ha ser buscado

  console.log('alo', min, max)  
      indice = parseInt((min + max) / 2) // divide a lista em 2 ou achar o meio do lista : lista de 5 posição formula left + (right-left)/2 =   1 + (5-1/2)
      if(indice === valor){ //se o valor do meio do lista for igual ao valor  desejado achamos o valor fim do programa
        console.log('achou! seu numero é: ', valor)
        return valor
      } if(lista[indice] > valor){ //se o valor do meio do lista for maior que o valor devemos voltar uma posição do lista pois os valores menores são os do lado esquedo do lista <-
        console.log('sobe mais')
        return busca_binaria(lista, min, valor)
        
      } else 
       return busca_binaria(lista, indice+1, max, valor) // se o valor do meio do lista for menor que o valor desejado devemos andar uma posição adiante ->
      }


const output = busca_binaria(lista, 0, lista.length, 10);




