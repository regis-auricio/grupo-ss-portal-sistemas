const area =
document.getElementById("orgaos");


let dados=[];



fetch("orgaos.json")

.then(res=>res.json())

.then(json=>{


dados=json;

mostrar(dados);


});





function mostrar(lista){


area.innerHTML="";



lista.forEach(orgao=>{


area.innerHTML+=`


<div class="col-lg-4 col-md-6 mb-4">


<div class="orgao-card shadow-sm">


<div class="text-center">


<img 
src="${orgao.logo}"
class="logo mb-3">


<h4>
${orgao.nome}
</h4>


<span class="tag">

${orgao.tipo}

</span>


<p class="mt-2 text-muted">

📍 ${orgao.cidade}

</p>


</div>



<hr>



<h6>

Sistemas disponíveis

</h6>



${

orgao.sistemas.map(s=>`

<div class="sistema">

<span>
${s.nome}
</span>


<a 
href="${s.url}"
class="btn btn-primary btn-sm btn-acesso">

Acessar

</a>

</div>


`).join("")

}


</div>


</div>


`;


});


}






document
.getElementById("busca")
.addEventListener("keyup",function(){


let texto=this.value.toLowerCase();



let resultado=dados.filter(o=>


o.nome.toLowerCase()
.includes(texto)

||

o.tipo.toLowerCase()
.includes(texto)

||

o.sistemas.some(s=>

s.nome.toLowerCase()
.includes(texto)

)


);



mostrar(resultado);



});