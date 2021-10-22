    var botaoAdicionar = document.querySelector("#adicionar-paciente")
        botaoAdicionar.addEventListener("click", function(){
            event.preventDefault()    
            var form = document.querySelector("#form-adiciona")      

            var paciente = obtemPacienteDoFormulario(form)

            
            var pacienteTr = montaTr(paciente)
            
            var tabela = document.querySelector("#tabela-pacientes");

            tabela.appendChild(pacienteTr);
        })
        
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
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

        return pacienteTr
    }

    function montaTd(dado, classe) {
        var td = document.createElement("td")
        td.classList.add(classe)
        td.textContent = dado

        return td
    }

    function validaPaciente(){
        var erros = [];

        if (paciente.nome.length == 0){
            erros.push("O nome não pode estar em branco")
        }

        if (paciente.gordura.length == 0){
            erros.push("A gordura não pode estar em branco")
        }

        if (paciente.peso.length == 0){
            erros.push("O peso não pode estar em branco")
        }

        if (paciente.altura.length == 0){
            erros.push("A altura não pode estar em branco")
        }

        return erros
    }