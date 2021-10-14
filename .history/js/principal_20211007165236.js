    var botaoAdicionar = document.querySelector("#adicionar-paciente")
        botaoAdicionar.addEventListener("click", function(){
            event.preventDefault()    
            var form = document.querySelector("#form-adiciona")      

    function obtemPacienteDoFormulario(form) {
        var paciente = {
             nome : form.nome.value,
             peso : form.peso.value,
             altura : form.altura.value,
             gordura : form.gordura.value,
             imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente
    }

    function montaTr(paciente){
        var pacienteTr = document.createElement("tr");

        pacienteTr.classList.add("paciente")

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
        pacienteTr.appendChild(montaTd(paciente.peso, "info"))
    }

    function montaTd(dado, classe) {
        var td = document.createElement("td")
        td.classList.add(classe)
        td.textContent = dado

        return td
    }
            


            var tabela = document.querySelector("#tabela-pacientes");

            tabela.appendChild(pacienteTr);
        })
        


