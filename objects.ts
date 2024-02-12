{
  type Pessoa = { 
    nome: string
    idade: number
    corFavorita: string
  }

  const pessoa: Pessoa = {
    nome: "aaa", 
    idade: 12, 
    corFavorita: "cor"
  }

  const ObjetoLiteralPessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "aaa", 
    idade: 12, 
    corFavorita: "cor"
  }

  function foo(pessoa: Pessoa) {}

  type Carro = { 
    cor: string, 
    dono: Pessoa,
    revisoes: Array<string>
  }

  type WithReadonly = { 
    readonly a: string
  }

  

}