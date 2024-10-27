const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    //obtendo os valores da data atual
    let diaAtual = parseInt(document.getElementById('dia-atual').value);
    let mesAtual = parseInt(document.getElementById('mes-atual').value);
    let anoAtual = parseInt(document.getElementById('ano-atual').value);
    
    //obtendo os valores da data de nascimento
    let diaNascimento = parseInt(document.getElementById('dia-nascimento').value);
    let mesNascimento = parseInt(document.getElementById('mes-nascimento').value);
    let anoNascimento = parseInt(document.getElementById('ano-nascimento').value);

    let calcDataAno = anoAtual - anoNascimento;
    let calcDataMes = mesAtual - mesNascimento;
    let calcDataDia = diaAtual - diaNascimento;

    if (isNaN(diaAtual) || isNaN(mesAtual) || isNaN(anoAtual) ||
    isNaN(diaNascimento) || isNaN(mesNascimento) || isNaN(anoNascimento)) {
    alert("Por favor, insira valores válidos em todos os campos.");
        return;
    }

    if(calcDataMes < 0){
        calcDataAno -=1;
        calcDataMes +=12;
    }

    if(calcDataDia < 0){
        calcDataMes -= 1;
        calcDataDia += new Date(anoAtual, mesAtual - 1, 0).getDate();
    }


    if(diaAtual >= 32 || mesAtual >= 13 || diaNascimento >= 32 || mesNascimento >= 13){
        alert("Por favor, insira datas válidas")
    }

    // function calcDataAno(){
    //     return anoAtual - anoNascimento
    // }
    
    // function calcDataMes(){
    //     return mesAtual - mesNascimento;
    // }
    
    // function calcDataDia(){
    //     return diaAtual - diaNascimento;
    // }

    const ano = document.getElementsByClassName('anos')[0]
    ano.innerText = calcDataAno;
    
    const mes = document.getElementsByClassName('meses')[0];
    mes.innerText = calcDataMes;
    
    const dia = document.getElementsByClassName('dias')[0];
    dia.innerText = calcDataDia;
})






