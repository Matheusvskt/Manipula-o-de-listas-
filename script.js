window.onload = function(){
    const campoInteresse = document.querySelector("#interesse");
     campoInteresse.addEventListener("keyup", e =>{ // toda vez que pressionar e soltar uma tecla o evento é disparado
         if (e.key === "Enter") // se enter for pressioanado 
         adicionaInteresse();// o interesse é adicionado
     })

}

function adicionaInteresse(){
    const campoInteresse = document.querySelector("#interesse")//selecionando o botão interesse pelo id
    const listaInteresses = document.querySelector("ol")//selecionando o nó correspondente a lista ol

const novoLi = document.createElement("li");//criando um nó do tipo elemento Li
const novoSpan = document.createElement("span")// add um novo nó chamado span
const novoBotao = document.createElement("button")// add um novo nó chamado button

novoSpan.textContent = campoInteresse.value;// propriedade textContent para adicionar um valor na lista
novoBotao.textContent = "X";// adicionando conteudo caracter correspondente ao X

novoLi.appendChild(novoSpan);// acrescentando span como filho do li
novoLi.appendChild(novoBotao);//acrescentando botao como filho do li
listaInteresses.appendChild(novoLi);





novoBotao.onclick = function (){
listaInteresses.removeChild(novoLi);//removendo o elemento da lista de interersses
}


campoInteresse.value = '';//vazio para que o usuario possa inserir um valor 
}