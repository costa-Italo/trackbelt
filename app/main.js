class Aluno {

    constructor() {
       this.arrayaAlunos = [];
    }

    salvar() {
        let aluno = this.lerDados();
        if(this.validaCampos(aluno) == true ) {
            this.adicionar(aluno);
        }
        console.log(this.arrayaAlunos);
    }

    adicionar(aluno) {
        this.arrayaAlunos.push(aluno);
    }

    lerDados() {
       let aluno = {}
       
       aluno.nomeDoAluno = document.getElementById('aluno').value;

       aluno.categoria = document.getElementById('categoria').value;

       aluno.faixa = document.getElementById('faixa').value;

       aluno.dataGraduacao = document.getElementById('dataGraduacao').value;

       aluno.numeroAulas = document.getElementById('numeroAulas').value;
      


       return aluno;
    }

    validaCampos(aluno) {
        let mensagem = '';

        if(aluno.nomeDoAluno ==''){
            mensagem += 'Informe o nome do aluno \n';
        }

        if(aluno.categoria ==''){
            mensagem += 'Informe a categoria do aluno \n';
        }

        if(aluno.faixa ==''){
            mensagem += 'Informe a faixa do aluno \n';
        }

        if(aluno.dataGraduacao ==''){
            mensagem += 'Informe a data de graduação do aluno \n';
        }

        if(aluno.numeroAulas ==''){
            mensagem += 'Informe o número de aulas do aluno \n';
        }

        if(mensagem != '') {
            alert(mensagem);
            return false;
        }

        return true;
    }

    cancelar() {
       
    }
}

var aluno = new Aluno();

