


function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio)

  if(elemento &&  elemento.localName === "audio"){  // SE ELEMENTO EXISTE. QUE TENHA UM VALOR. QUE NÃO SEJA NULL QUE NÃO SEJA VAZIO OU FALSE OU UNDEFANIDE .. ENTÃO VAI CAIR COMO UMA CONDIÇÃO VERDADEIRA//
     elemento.play();
    }
   else{
    console.log("Elemento não encontrado")

   }

  }




const listaDeTeclas = document.querySelectorAll('.tecla')

for ( let contador = 0; contador < listaDeTeclas.length; contador++ ){
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`

  tecla.onclick = function (){
   tocaSom(idAudio)

  }

  
  tecla.onkeydown =  function (evento){

   console.log(evento.code)

    if (evento.code ==='Space'  || evento.code === 'NumpadEnter' || evento.code ==='Enter') {

      tecla.classList.add('ativa');
      
    }

   
  }
  

  tecla.onkeyup = function (){ 
      tecla.classList.remove('ativa')
  
    
  }


  }

  

