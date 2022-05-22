window.addEventListener('load', function () {
let url=`http://localhost:3000/api/v1/candidato/`;

fetch(url)
  .then(response => response.json())    // a fetch le llega una respuesta en string que tiene que ser parseada a JSON
  .then(data => {
    //this.alert(data[0]._id) 
    let addHtml = ``;
    addHtml +=`<div class="container">`
        addHtml += `<div class="row">`
    for(let i in data){
        let idx = data[i]._id;
        let nombre = data[i].nomDePartido;
        let voto = data[i].voto;
        let nlista = data[i].numeroDeLista;
        let idCanPres = data[i].idCanPres;
        let nomCanPre = data[i].nomCanPres;
        let idCanVice = data[i].idCanVice;
        let nomVice = data[i].nomCanVice;
        let idSecre = data[i].idCanSecre;
        let nomCSecre = data[i].nomCanSecre;
        let propuesta = data[i].propuesta;
    

        addHtml += `<div class="col-12 col-sm-6 col-md-4 my-md-2">`
  addHtml +=`<img src="../img/user2.png" 
  alt="" class="rounded mx-auto d-block" width="100px"/> `
        addHtml+= `  <h2 class="text-center" id="textNombre"> ${nombre} </h2> <br />`
         
        addHtml += `<span class="fw-bold">Nro de lista: </span> <p class="fst-italic">${nlista}</p>`
        addHtml += `<span class="fw-bold">Candidato principal: </span> <p class="fst-italic">${nomCanPre}</p>`
        addHtml += `<span class="fw-bold">Candidato secundario: </span> <p class="fst-italic">${nomVice}</p>`
        addHtml += `<span class="fw-bold">Propuesta: </span> <p class="fst-italic">${propuesta}</p>`
        
          addHtml += `<div class="row mx-auto"> `
          addHtml += `<a id="${idx}" onclick="btnmodificar(id, ${voto})" class="btn btn-primary">votar</a>`
          addHtml+= `</div> </div>`  

        
    }
    addHtml+= `</div> </div> `
    htmlBody.innerHTML = addHtml;
    
  })
  .catch(error => console.error(error));



 
  
        
          
        
})



function btnmodificar(valor, voto){


let url=`http://localhost:3000/api/v1/candidato/${valor}`;
let xvoto = voto ;
xvoto+=1;


    let data = {
    voto: xvoto,
    
}

fetch(url,{
    method:'PUT',
    body: JSON.stringify(data),
    headers:{
        'Content-Type':"application/json"
    }
})
.then(
    res => res.json()
)
.then(
  data => {console.log(data)
    alert("Voto Realizado");

    
  }
)
.then(res2 => console.log(res2))
.catch(error=> console.log(error) )
  



  
}