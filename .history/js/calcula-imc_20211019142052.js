titulo.addEventListener("click", function(){
    console.log("Olá fui clicado por uma função anomnima")
})

var pacientes = document.querySelectorAll(".paciente");

for (var i=0; i < pacientes.length; i++){
        var paciente = pacientes[i]

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc");

        var pesoEhValido = true;
        var alturaEhValida = true;

        if (peso <= 0 || peso >= 1000) {
            console.log("Peso inválido!");
            pesoEhValido = false;
            tdImc.textContent = "Peso inválido";
            paciente.classList.add("paciente-invalido")
        }

        if (altura <= 0 || altura >= 3.00) {
            console.log("Altura inválida!");
            alturaEhValida = false;
            tdImc.textContent = "Altura inválida";
            paciente.classList.add("paciente-invalido")
            
        }

        if (pesoEhValido && alturaEhValida) {
            var imc = calculaImc(peso,altura)
            tdImc.textContent = imc
        }       
}
//Aula 
function calculaImc (peso,altura){
        var imc = 0; 

        imc = peso / (altura * altura);

        return imc.toFixed(2);
        
    }