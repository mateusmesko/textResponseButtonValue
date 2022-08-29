


function clickValue(valor){
    


fetch("db.json")
  .then(response=>response.json())
  .then(data=>{
    console.log(valor)
    let htmlFrontValue
    if(valor==8)
    {
      
       valorNovo=data.posts
       
    }
    else
    {
       
        valorNovo=data.outroPost
    }
    document.body.innerHTML=`<button id="buttonInput" class="button-cta" onclick="clickValue(8)" value="8">Gerar senha</button>
    <button id="buttonInput" class="button-cta" onclick="clickValue(10)" value="10">Gerar senha</button>`
   
    valorNovo.forEach(function (dados){  
    htmlFrontValue=null

    htmlFrontValue+=`<h1>começo</h1>`;
        

    dados.comments.forEach(function(dados){
    
        htmlFrontValue+=
      ` <button id="buttonInput" class="button-cta"  >${dados.pretitulo1}</button>`;
    })
    htmlFrontValue+=`<h1>Fim</h1>`;
    console.log(htmlFrontValue)
    document.body.innerHTML+=htmlFrontValue
  })
});

}

