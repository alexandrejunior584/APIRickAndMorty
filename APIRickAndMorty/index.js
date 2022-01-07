fetch("https://rickandmortyapi.com/api/character",{
	method: 'GET'
})
.then(response => response.json())
.then(function(json){
	var card = document.getElementById("card")
	json.results.map(function(results){
		card.innerHTML+='<div class="card-grid"> <img src='+results.image+'>  <strong class="nome" style="color: #4cd137; padding: 5px; ">'+results.name+'</strong>  </div>';
	})
})
