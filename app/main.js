
class Aluno {
    constructor() {
        this.arrayAlunos = JSON.parse(localStorage.getItem('alunos')) || [];
        this.editAluno = null;
        this.listaTabela();
    }

    salvar() {
        let aluno = this.lerDados();

        if (this.validaCampos(aluno) == true) {
            if (this.editAluno == null) {
                this.adicionar(aluno);
            } else {
                this.atualizar(this.editAluno, aluno);
            }
        }

        this.listaTabela();
        this.cancelar();
        localStorage.setItem('alunos', JSON.stringify(this.arrayAlunos));
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayAlunos.length; i++) {
            let tr = tbody.insertRow();

            let td_nomeAluno = tr.insertCell();
            let td_categoria = tr.insertCell();
            let td_faixa = tr.insertCell();
            let td_ultimaGraduacao = tr.insertCell();
            let td_numeroAulas = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_nomeAluno.innerText = this.arrayAlunos[i].nomeDoAluno;
            td_categoria.innerText = this.arrayAlunos[i].categoria;
            td_faixa.innerText = this.arrayAlunos[i].faixa;
            td_ultimaGraduacao.innerText = this.arrayAlunos[i].dataGraduacao;
            td_numeroAulas.innerText = this.arrayAlunos[i].numeroAulas;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';
            imgEdit.setAttribute("onclick", `aluno.editar(${JSON.stringify(this.arrayAlunos[i])})`);
            td_acoes.appendChild(imgEdit);

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onclick", `aluno.deletar('${this.arrayAlunos[i].nomeDoAluno}')`);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(aluno) {
        this.arrayAlunos.push(aluno);
    }

    atualizar(alunoAntigo, alunoNovo) {
        for (let i = 0; i < this.arrayAlunos.length; i++) {
            if (this.arrayAlunos[i].nomeDoAluno == alunoAntigo.nomeDoAluno) {
                this.arrayAlunos[i].nomeDoAluno = alunoNovo.nomeDoAluno;
                this.arrayAlunos[i].categoria = alunoNovo.categoria;
                this.arrayAlunos[i].faixa = alunoNovo.faixa;
                this.arrayAlunos[i].dataGraduacao = alunoNovo.dataGraduacao;
                this.arrayAlunos[i].numeroAulas = alunoNovo.numeroAulas;
            }
        }
        this.editAluno = null;
    }

    editar(aluno) {
        this.editAluno = aluno;

        document.getElementById('aluno').value = aluno.nomeDoAluno;
        document.getElementById('categoria').value = aluno.categoria;
        document.getElementById('faixa').value = aluno.faixa;
        document.getElementById('dataGraduacao').value = aluno.dataGraduacao;
        document.getElementById('numeroAulas').value = aluno.numeroAulas;

        document.getElementById('btn-1').innerText = 'Atualizar';
    }

    lerDados() {
        let aluno = {}
    
        aluno.nomeDoAluno = document.getElementById('aluno').value;
    
        aluno.categoria = document.getElementById('categoria').value;
    
        aluno.faixa = document.getElementById('faixa').value;
    
        aluno.dataGraduacao = document.getElementById('dataGraduacao').value;
    
        aluno.numeroAulas = document.getElementById('numeroAulas').value;
    
        // Lê os dados salvos no localStorage, se existirem
        let alunosSalvos = JSON.parse(localStorage.getItem('alunos')) || [];
    
        // Adiciona o novo aluno ao array
        alunosSalvos.push(aluno);
    
        // Salva o array atualizado no localStorage
        localStorage.setItem('alunos', JSON.stringify(alunosSalvos));
    
        return aluno;
    }

    validaCampos(aluno) {
        let mensagem = '';

        if(aluno.nomeDoAluno ==''){
            mensagem += 'Informe o nome do aluno. \n';
        }

        if(aluno.categoria ==''){
            mensagem += 'Informe a categoria do aluno. \n';
        }

        if(aluno.faixa ==''){
            mensagem += 'Informe a faixa do aluno. \n';
        }

        if(aluno.dataGraduacao ==''){
            mensagem += 'Informe a data de graduação do aluno. \n';
        }

        if(aluno.numeroAulas ==''){
            mensagem += 'Informe o número de aulas do aluno. \n';
        }

        if(mensagem != '') {
            alert(mensagem);
            return false;
        }

        return true;
    }

    cancelar() {
        document.getElementById('aluno').value = '';
     
        document.getElementById('categoria').value = '';
     
        document.getElementById('faixa').value = '';
     
        document.getElementById('dataGraduacao').value = '';
     
        document.getElementById('numeroAulas').value ='';
     }
     

     deletar(nomeDoAluno) {
        if(confirm('Deseja remover o aluno ' + nomeDoAluno +'?')) {
            this.arrayAlunos = this.arrayAlunos.filter(aluno => aluno.nomeDoAluno !== nomeDoAluno);
            this.listaTabela();
            localStorage.setItem('alunos', JSON.stringify(this.arrayAlunos));
        }
    }
    
    ordenarPorAulas() {
        this.arrayAlunos.sort((a, b) => b.numeroAulas - a.numeroAulas);
        this.listaTabela();
      }
} 

var aluno = new Aluno();