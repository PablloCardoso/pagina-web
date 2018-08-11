function enviar(){
  var nome = document.getElementById("txt-nome");
  //Se o valor na variavel nome for diferente de vazio
  if(nome.value !=""){
  //Mostrar mensagem com nome
    alert("Desculpa, está área encontra-se em desenvolvimento," + nome.value +" ");

  }else {
  //Mostrar mensagem genérica
    alert("Desculpa, está área encontra-se em desenvolvimento");
  }
}
