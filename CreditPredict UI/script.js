let opcion_elegida=[];
let deudas=[];
var modelo_credit_limit = null;

    
(async () => {
    console.log("Cargando modelo...");
    modelo = await tf.loadLayersModel("model.json");
    console.log("Modelo cargado...");
})();

function respuesta(num_pregunta,seleccionada){

	opcion_elegida[num_pregunta] = seleccionada.value;

	id="p" + num_pregunta;

	labels = document.getElementById(id).childNodes;
	labels[3].style.backgroundColor = "white";
	labels[5].style.backgroundColor = "white";
	labels[7].style.backgroundColor = "white";


	seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}
function creditolimi(){
	
}
function finalizar(){
	deudas[0] = document.getElementById("mala").value;
	deudas[1] = document.getElementById("buena").value;
	deudas[2] = document.getElementById("neutral").value;
	opcion_elegida[4]=document.getElementById("hijos").value;
	opcion_elegida[11]=document.getElementById("familia").value;
	opcion_elegida[12]=document.getElementById("ocupacion").value;
	opcion_elegida[13]=document.getElementById("trabajo").value;

	console.log(opcion_elegida);
	console.log(deudas);

	
}
