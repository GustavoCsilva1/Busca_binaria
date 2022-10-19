const lista = []

for (let i = 1; i <= 8; i++) {
    lista.push(i)
}

// for (let i = 0; i <= lista.length; i++) {
//     const papelzinho = lista[i]
//     if(papelzinho == 60){
//         console.log('boa, achou', i); break
//     }
// }

const busca_binaria = (lista, left, right, valor)=>{  //parametros lista ordenado  valor esquerdo e valor direito, valor ha ser buscado
    console.log('alo', left, right)  
   if(right >= left){   // verifica se a lista esta ordenada. Se o lado direito for maior ou igual ao valor do lado esquerdo
      indice = parseInt(left + (right-left)/2) // divide a lista em 2 ou achar o meio do lista : lista de 5 posição formula left + (right-left)/2 =   1 + (5-1/2)

      if(lista[indice] === valor){ //se o valor do meio do lista for igual ao valor  desejado achamos o valor fim do programa
        console.log('achou!')
        return valor
      }
      if(lista[indice] > valor){ //se o valor do meio do lista for maior que o valor devemos voltar uma posição do lista pois os valores menores são os do lado esquedo do lista <-
        console.log('ta na esquerda')
        return busca_binaria(lista, left, indice-1, valor)
      }
      console.log('ta na direita')
      return busca_binaria(lista, indice+1, right, valor) // se o valor do meio do lista for menor que o valor desejado devemos andar uma posição adiante ->
     }

    return "não achou"
}

const output = busca_binaria(lista, 0, lista.length-1, 8);



