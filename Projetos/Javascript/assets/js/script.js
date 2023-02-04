// AULA - HELLO WORLD

    // console.log("Olá Mundo 3.0")
    // alert("Olá Mundo")

// -------

// AULA - VARIÁVEIS

    // let nome = "Bonieky"
    // let idade = 90

    // console.log(nome)
    // console.log(idade)

// --------

// AULA - TIPOS DE DADOS & COMENTARIOS

    // let nome = "Bonieky" // TYPEOFF STRING
    // let idade = 90 // TYPEOFF NUMBER
    // let logado = true // TYPEOFF BOOLEAN
    // let lista = ["ovo", "massa", "corante"] // TYPEOFF OBJETO - ARRAY
    // let nomeCompleto = { nome: "Bonieky", idade: 90} // TYPEOFF OBJETO

    // O COMANDO ABAIXO EXIBE OS DADOS NO > CONSOLE <
    // console.log(typeof nomeCompleto)

    /*
    ESTE É UM COMENTARIO
    DE VARIAS LINHAS
    SÓ PORUQE EU QUERO.
    */

// --------

// AULA - EXERCICIO DE VARIAVEIS

    // 1. Crie uma variaável para armazenar o nome
    // do carro e ponha o valor Ferrari. E exiba-a
    // RESPOSTA:
    // let nomeDoCarro = "Ferrari"
    // console.log(nomeDoCarro)

    // 2. Crie uma variável para armazenar o preço
    // do bolo, que custa R$ 19.99. E exiba-a
    // RESPOSTA:
    // let precoDoBolo = 19.99
    // console.log(precoDoBolo)

    // 3. Corrija o código a seguir (e exiba-o).
    // let "cidade" = São Paulo
    // RESPOSTA:
    // let cidade = "São Paulo"
    // console.log(cidade)

// -------

// AULA - PONTO E VIRGULA

    // let nome = "Bonieky"; let idade = 90
    // console.log(nome); console.log(idade)

// -------

// AULA - LET, CONST, VAR

    // let nome = "Bonieky"
    // console.log(nome)

    // nome = "João"
    // console.log(nome)

    // OBSERVAÇAO !
    
        // LET: FUNCIONA APENAS NO CONTEXTO QUE FOI CRIADA.
        // CONST: UMA CONSTANTE QUE NAO MUDA SEU VALOR.
        // VAR: FUNCIONA EM QUALQUER CONTEXTO.

// -------

// AULA - OPERAÇOES EM VARIAVEIS

    // let nome = "Bonieky"
    // let sobrenome = "Lacerda"

    // let nomeCompleto = nome + " " + sobrenome

    // console.log(nomeCompleto)

    // OBSERVAÇAO !

        // CALCULO COM STRING: "10" + 5 = 105
        // CALCULO COM NUMBER:  10  + 5 = 15

// -------

// AULA - STRING E TEMPLATE STRING

    // let nome = "Bonieky"
    // let sobrenome = "Lacerda"

    // let nomeCompleto = nome + " " + sobrenome // STRING
    // let nomeCompleto = `${nome} ${sobrenome} da Silva` // TEMPLATE STRING COM EXPRESSAO

    // console.log("Nome: " + nomeCompleto)

    // ---------

    // let idade = 90

    // let idadeString = `Idade: ${idade + 2} anos` // TEMPLATE STRING COM EXPRESSAO
    // let idadeString = "Idade: " + idade + " anos" // STRING

    // console.log(idadeString)

    // OBSERVAÇAO !

        // `` = TEMPLATE STRING
        // `${}` = EXPRESSAO
        // NA EXPRESSAO É POSSIVEL PEGAR VARIAVEIS
        // PERMITINDO CONCATENAR VARIAVEL + NUMBER + STRING

// ------

// AULA - CONDICIONAL IF / ELSE

    // let idade = 90

    // if (idade > 17) {
    //     console.log("Você é maior de idade.")  
    // } else {
    //     console.log("Você é MENOR de idade.")
    // }
    
    // OBSERVAÇAO !

        // IF (IDADE = 17)  <-- ESTÁ DEFININDO UM VALOR PARA VARIAVEL !!!
        // IF (IDADE == 17) <-- CONDIÇAO SE IDADE FOR IGUAL A 17 !!!
        // IF (IDADE >= 17) <-- CONDIÇAO SE IDADE FOR MAIOR OU IGUAL A 17 !!!
        // IF (IDADE != 17) <-- CONDIÇAO SE IDADE FOR DIFERENTE DE 17 !!!

// ------

// AULA - MULTI-CONDICIONAIS (&& E ||)

    // let idade = 18

    
    // if(idade >= 18) {
    //     if (idade < 60) {
    //         console.log("Você é um adulto.")
    //     }
    // }
    

    // if (idade < 18) {
    //     console.log("Você é uma criança.")
    // } else if (idade >= 18 && idade < 60) {
    //     console.log("Você é um adulto.")
    // } else if (idade >= 60) {
    //     console.log("Você é um idoso.")
    // }

    //OBSERVAÇAO !

        // && SIGNIFICA "e"
        // || SIGNIFICA "ou"
        // QUANDO HOUVER && E || NA MESMA CONDIÇAO
        // DEFINIR COM () QUEM É EXECUTADO PRIMEIRO

// ------

// AULA - DESMISTIFICANDO O IF

    // let idade = 17

    // let verificacao = idade >= 18

    // if (idade >= 18) {
    //     console.log("Entrou no IF")
    // } else {
    //     console.log("NÃO entrou no IF")
    // }


    // console.log(idade >= 18)

    //OBSERVAÇAO !

        // O IF VERIFICA SOMENTE SE É VERDADEIRO OU FALSO

// ------

// AULA - EXERCICIO DE CONDICIONAL

    // FAÇA O RESULTADO SER TRUE
        // let x = 10
        // let y = 5
        // console.log (x > y)

    // FAÇA O RESULTADO SER FALSE
        // let w = "10"
        // let z = 10
        // console.log(w === z)

    // FAÇA O RESULTADO SER TRUE DE OUTRA FORMA
        // let a = 10
        // let b = 5
        // console.log (a != b)

    // CRIE UMA CONDICIONAL PARA VERIFICAR SE O PREÇO DA 
    // CARNE ESTA BARATO OU CARO. PS: ATÉ 45 ESTÁ BARATO!
        // let preco = 40.3
        // if (preco <= 0) {
        //     console.log("Gratis!")
        // } else if (preco > 0 && preco <= 45) {
        //     console.log("Barato!")
        // } else if (preco > 45) {
        //     console.log("Caro!")
        // }

    // OBSERVAÇAO !

        // = (OPERADOR DE ATRIBUIÇAO) -  É USADO PARA ATRIBUIR VALORES A UMA VARIAVEL
        // == (VALORES IGUAIS) - É USADO PARA COMPARAÇAO ENTRE DUAS VARIAVEIS, INDEPENDENTE DO TIPO DE DADOS DAS VARIAVEIS.
        // === (VALORES E TIPOS IGUAIS) - É USADO PARA COMPARAÇAO ENTRE DUAS VARIAVEIS, MAS ISSO IRA VERIFICAR O TIPO ESCRITO, O QUE SIGNIFICA QUE ELE IRA VERIFICAR O TIPO DE DADOS E COMPARAR OS DOIS VALORES.

// ------

// AULA - CONDICIONAL TERNARIO

    // let isMember = true

    // let shipping = isMember ? 2 : 10 // TRUE = 2 OU FALSE = 10 // ISSO É UMA CONDICIONAL TERNARIA
    // console.log(isMember ? "Você é membro " : "Você não é membro")
    // console.log("Frete: " + shipping)

    // let age = 14

    // let isAdult = ((age >= 18) ? "Sim" : "Não")
    // console.log(isAdult)

// -----

// AULA - SWITCH

    // let profession = "atleta"

    // console.log("Profissao: " + profession)

    // switch (profession) {
    //     case "fiscal":
    //         console.log("Sua camisa será VERDE")
    //         break;
    //     case "bombeiro":
    //         console.log("Sua camisa será VERMELHA")
    //         break;
    //     case "policial":
    //         console.log("Sua camisa será AZUL")
    //         break;
    //     default:
    //         console.log("Sua camisa será PRETA")
    //         break;
    // }

// ------

// ------

// AULA - DECLARANDO UMA FUNÇAO & COMO USAR UMA FUNÇAO

    // function gravidade() {
    //     console.log('A gravidade do planeta é:')
    //     console.log(9.8)
    // }

    // console.log("Opa, tudo bem?")
    // gravidade()

// ------

// AULA - PASSANDO PARAMETROS EM FUNÇOES & RETORNO DA FUNÇAO

    // function somar(n1,n2) {
    //     let resultado = n1 + n2
    //     console.log('Resultado: ' + resultado)
    // }
    // somar(10,15)

    // -----

    // function nomeCompleto(nome, sobrenome) {
    //     return `${nome} ${sobrenome}`
    // }

    // let completo = nomeCompleto("Bonieky", "Lacerda")
    // console.log('Completo: ' + completo)

// -------

// AULA - FUNÇAO COM RETORNO CONDICIONAL

    // function maiorDeIdade(idade) {
    //     if(idade >= 18) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    // let idade = 65
    // let verificacao = maiorDeIdade(idade)

    // if (verificacao) {
    //     console.log('É maior de idade')
    // } else {
    //     console.log('É menor e idade')
    // }

// ------

// AULA - EXERCICIO DE FUNÇOES #4

    // CALCULE A PORCENTAGEM ENTRE 2 NUMEROS.
    // EXEMPLO: 25% DE 40 É 10
    // FORMULA DE PORCENTAGEM (Y / X) * 100
    // USO DA FUNÇAO:

    // function calcPct(x, y) {
    //     return (y / x) * 100
    // }
    
    // let x = 40
    // let y = 10
    // let pct = calcPct(x, y)
    // console.log(`${pct}% de ${x} é ${y}`) 

// ------

// AULA - EXERCICIO DE FUNÇOES #5

    // CALCULE O PREÇO DO IMOVEL
    // - M2 = 3.000
    // - SE TIVER 1 QUARTO, O M2 É 1X
    // - SE TIVER 2 QUARTOS, O M2 É 1.2X
    // - SE TIVER 3 QUARTOS, O M2 É 1.5X
    // USO DA FUNÇAO:
    
    // RESPOSTA 1 MULTI CONDICIONAL

    // function calcularImovel(metragem, quartos) {
    //     let m2 = 3000
    //     let preco = 0

    //     if (quartos == 1) {
    //         return preco = metragem * m2

    //     } else if (quartos == 2) {
    //         return preco = metragem * (m2 * 1.2)

    //     } else if (quartos == 3) {
    //         return preco = metragem * (m2 * 1.5)

    //     }
    // }

    // RESPOSTA 2 CONDICIONAL TERNARIO

    // function calcularImovel(metragem, quartos) {
    //     let m2 = 3000
    //     let preco = (quartos == 1) ? 1 : (quartos == 2) ? 1.2 : (quartos == 3) ? 1.5 : 0 
    //     return m2 * preco * metragem
    // }
    
    // let metragem = 123
    // let quartos = 3
    // let preco = calcularImovel(metragem, quartos)

    // console.log(`A casa custa R$ ${preco}`)

// ------

// AULA - EXERCICIO DE FUNÇOES #6

    // CRIE UMA FUNÇAO QUE VALIDE USUARIO E SENHA
    // USUARIO CORRETO: PEDRO
    // SENHA 123

    // USO DA FUNÇAO

    // function validar(usuario, senha) {
    //     if (usuario === "pedro" && senha === "123") {
    //         return true
    //     }
    // }

    // let usuario = 'bonieky'
    // let senha = "1234"
    // let validacao = validar(usuario, senha)
    
    // if (validacao) {
    //     console.log("Acesso concedido")
    // } else {
    //     console.log("Acesso NEGADO!")
    // }

// ------

// AULA - ARROW FUNCTION

    // function somar(x, y) {   // FUNCTION PADRAO
    //     return x + y
    // }

    // const somar = (x, y) => { // ARROW FUNCTION
    //     return x + y
    // }

    // const somar = (x, y) => x + y // ARROW FUNCTION SIMPLIFICADA

    // console.log(somar(10, 5))

    // -----

    // function sobrenome(sob) { // FUNCTION PADRAO
    //     return 'Bonieky ' + sob
    // }

    // const sobrenome = sob => 'Bonieky ' + sob // ARROW FUNCTION

    // console.log(sobrenome('Lacerda'))

    // OBSERVAÇAO !

        // AS 2 FUNCTIONS FAZEM A MESMA COISA !
        // POREM AO ABRIR "{}" VOCE DEVE POR O "RETURN"

        // ARROW FUNCTION COM APENAS 1 LINHA DE CODIGO SIMPLES
        // PODEM SER FEITAS DIRETO, SEM USAR "{}"

        // QUANDO A ARROW FUNCTION TEM APENAS 1 PARAMETRO
        // NAO É NECESSARIO O USO DO "()"
        
// -----

// AULA - VARIAVEIS DENTRO DE FUNÇOES

    // let count = 0 // ESCOPO GLOBAL

    // function add() {
    //     let count = 0 // ESCOPO LOCAL
    //     count++
    // }

    // add()
    // add()

    // console.log(count)

    // OBSERVAÇAO ! 

        // ESCOPO GLOBAL - PODE SER USADA EM QUALQUER LUGAR
        // ESCOPO LOCAL - ELA SÓ PODE SER USADA DENTRO DE ONDE ESTA LOCALIZADA
        // A ESCOPO LOCAL TERA PREFERENCIA EM CIMA DA GLOBAL

// ------

// AULA - FUNÇOES DENTRO DE FUNÇOES

    // function addSquare(a, b) {
        
        // function square(x) { // FUNCTION PADRAO
        //     return x * x
        // }

    //     const square = (x) => { // ARROW FUNCTION
    //         return x * x 
    //     }

    //     let sqrA = square(a)
    //     let sqrB = square(b)
    //     return sqrA + sqrB
    // }

    // console.log(addSquare(2, 3))

    // OBSERVAÇAO !

        // AO COLOCAR UMA FUNÇAO DENTRO DA OUTRO
        // USAR UMA ARROW FUNCTION É UMA BOA ALTERNATIVA
        // MESMO QUE A ARROW FUNCTION NAO FIQUE DENTRO DE 1 LINHA SÓ
        // PARA PODER DIFERENCIAR CASO INCOMODE VER DUAS "FUNCTION"
        // (NAO É OBRIGATORIO)

// ------

// AULA - INTRODUÇAO A ARRAY

    // let colors = ['blue', 'red', 'green'] // ARRAY

    // console.log(colors)

    // let lista = [ // ARRAY
    //     'blabla',
    //     ['xx', 'yy'] // ARRAY DENTRO DE OUTRO ARRAY
    // ]

    // console.log(lista[1][0]) // CHAMANDO ARRAY QUE ESTA DENTRO DA "LISTA"

// ------

// AULA - OPERAÇOES BASICAS DE ARRAY

    // let ingredientes = [
    //     'agua',
    //     'farinha',
    //     'ovo',
    //     'corante',
    //     'sal'
    // ]


    // ingredientes.shift() // REMOVE O PRIMEIRO ITEM DO ARRAY
    // ingredientes.pop() // REMOVE O ULTIMO ITEM DO ARRAY

    // ingredientes.push('cebola') // ADICIONA UM NOVO ITEM AO ARRAY

    // console.log(ingredientes)
    
    // console.log(`Total de ingredientes: ${ingredientes.length}`)

    // OBSERVAÇAO !
        
        // AO USAR O "LENGHT"
        // VOCE OBTERA O VALOR NUMERICO DE QUANTOS
        // ITENS TEM DENTRO DO ARRAY

// -----

// AULA - EXERCICIO DE ARRAY

    // 1 - NO ARRAY ABAIXO, QUAL O NUMERO QUE PEGA A FERRARI?

    // let carros = ['BMW', 'Ferrari', 'Mercedes']
    // let x = 1
    // console.log('1. ' + carros[x])

    // // 2 - TROQUE A FERRARI POR AUDI

    // console.log('2. Lista com Audi')
    // carros[1] = 'Audi'    
    // console.log(carros)

    // // 3 - ADICIONE O VOLVO A LISTA

    // console.log('3. Lista com Volvo')
    // carros.push('Volvo')
    // console.log(carros)

    // // 4 - EXIBA QUANTOS ITENS TEM NO ARRAY
    
    // console.log('4. Itens no array')
    // console.log(carros.length)

// -----

// AULA - O QUE SAO OBJETOS ? & ACESSANDO E ALTERANDO OBJETOS

    // PARTE 1

    // let personagem = {
    //     nome: 'Bonieky',
    //     idade: 90,
    //     pais: 'Brasil',
    //     olhos: ['Preto', 'Azul'], // ARRAY DENTRO DE OBJETO

    //     caracteristicas: {
    //         forca: 20,
    //         magia: 5,
    //         stamina:15
    //     }
    // }

    // personagem.nome = 'Pedro' // MUDANÇA DE NOME
    // personagem.caracteristicas.forca += 5 // AUMENTO DE FORÇA
    // personagem.olhos.push('Verde') // ADICIONANDO TERCEIRO OLHO

    // console.log(`${personagem.nome} tem ${personagem.idade} anos`)
    // console.log(`Magia: ${personagem.caracteristicas.magia}`)
    // console.log(`Força: ${personagem.caracteristicas.forca}`)
    // console.log(`Olho direito: ${personagem.olhos[1]}`)
    // console.log(`Terceiro olho: ${personagem.olhos[2]}`)
    
    // PARTE 2

    // let personagem = {
    //     nome: 'Bonieky',
    //     idade: 90,
    //     carros: [ // ARRAY
    //         { modelo: 'Fiat', cor: 'Preto'}, // 1 OBJETO COM 2 PROPRIEDADES
    //         { modelo: 'Ferrari', cor: 'Vermelho'} // 1 OBJETO COM 2 PROPRIEDADES
    //     ]
    // }

    // console.log(personagem.carros[1].modelo)
    

    // OBSERVAÇAO ! 

        // ARRAY = []
        // ACESSAR UM ITEM DENTRO DE UM ARRAY: [1]

        // OBJETO = {}
        // ACESSAR UM ITEM DENTRO DE UM OBJETO: .idade (OU QUALQUER OUTRO NOME QUE TENHA SIDO DEFINIDO)

        // PARA DEFINIR UM OUTRO VALOR USE O = 
        // TANTO PARA MUDAR O VALOR DO ITEM DO ARRAY COMO DO OBJETO

// -----

// AULA - FUNÇAO DENTRO DE OBJETO

    // let pessoa = {
    //     nome: 'Bonieky',
    //     sobrenome: 'Lacerda',
    //     idade: 90,
    //     nomeCompleto: function () {
    //         return `${this.nome} ${this.sobrenome}`
    //     }
    // }

    // console.log(pessoa.nomeCompleto())

    // OBSERVAÇAO !

        // THIS É UMA KEYWORD 
        // THIS SE ACESSA UM OBJETO EXISTENTE

        // FUNCTION TEM ACESSO AO THIS
        // ARROW FUNCTION NAO TEM ACESSO AO THIS

// -----

// AULA - O LOOP FOR & DANDO LOOP EM ARRAYS

    // for (let n = 0; n < 15; n++) {

    //     console.log('frase qualquer ' + n)
    // }

    // let cores = [
    //     {nome: 'preto', qt: 10},
    //     {nome: 'azul', qt: 5},
    //     {nome: 'vermelho', qt: 15}   
    // ]

    // for (let n = 0; n < cores.length; n++) {

    //     console.log(cores[n])
    // }

    // for(let i in cores) {
    //     cores[i].nome = cores[i].nome.toUpperCase();
    //     console.log(cores[i].nome)
    // }

    // for(let cor of cores) {
    //     console.log(`Nome: ${cor.nome} - ${cor.qt}`)
    // }

    // OBSERVAÇAO ! 

        // 1. DEFINIR VALOR: let n = 0 
        // 2. CONDIÇAO: n < 15
        // 3. RESULTADO: n++
        // 4. EXIBIR O LOOP: console.log('frase qualquer ' + n)

// -----

// AULA - O LOOP WHILE

    // let numero = 0
    // while (numero <= 10) {
    //     console.log(`O numero da vez é ${numero}`)
    //     numero++
    // }

    // for(let numero = 0; numero<= 10; numero++) {
    //     console.log(`O numero da vez é ${numero}`)
    // }

    // while(condicional) {
    //     execuçao
    // }

    // OBSERVAÇAO !

        // TANTO 'WHILE' QUANTO 'FOR' 
        // TERAO O MESMO RESULTADO

// -----

// AULA - EXERCICIOS DE LOOPS #8

    // 1. FAÇA UM LOOP QUE MOSTRE TODAS AS FRUTAS

    // let fruits = ['Maça', 'Uva', 'Banana']

    // for(let x in fruits) {
    //     console.log(fruits[x])
    // }

    // // 2. CONTE DE 1 ATÉ 100 ATRAVES DE UM WHILE

    // let numero = 1

    // while(numero <= 100) {
    //     console.log(numero)
    //     numero++
    // }

// -----

// AULA - FUNÇOES DE ARRAY

    // let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']

    // fruits.push() // ADICIONA UM ITEM NO ARRAY
    // fruits.pop() // APAGA O ULTIMO ITEM DO ARRAY
    // fruits.shift() // APAGA O PRIMEIRO ITEM DO ARRAY
    // fruits.join(' ') // JUNTA O ARRAY E DEVOLVE COMO UMA STRING, SEPARANDO CADA ITEM PELO VALOR COLOCADO ENTRE ()

    // fruits[0] = 'Pêra' // MODIFICA O ITEM 0 DO ARRAY
    // fruits[fruits.length - 1] = 'Pêra' // MODIFICA O ULTIMO ITEM DO ARRAY

    // fruits.pop()        // OUTRA FORMA DE MODIFICAR 
    // fruits.push('Pêra') // O ULTIMO ITEM DO ARRAY

    // console.log(fruits)
    
    // OBSERVAÇAO ! 

        // O JOIN NAO MODIFICA O ARRAY 

// ----------

// AULA - ORDENAÇAO DE ARRAY

    // let fruits = ['Maça', 'Uva', 'Laranja', 'Banana']
    // fruits.sort()
    // fruits.reverse()
    // console.log(fruits)

    // let cars = [
    //     { brand: 'Fiat', year: 2022 },
    //     { brand: 'Bmw', year: 2018 },
    //     { brand: 'Ferrari', year: 2020 },
    // ]

    // // RETORNA O ARRAY DO MENOR PARA O MAIOR
    // // TROCAR A PELO B = DO MAIOR PARA O MENOR
    // cars.sort((a, b) => a.year - b.year)

    // console.log(cars)

    // OBSERVAÇAO !

        // SORT() = ORGANIZA O ARRAY EM ORDEM ALFABETICA 
        // REVERSE() = REVERTE A ORDEM DO ARRAY
    
// ----------

// AULA - ITERAÇAO DE ARRAY1

    // let fruits = ['Banana', 'Laranja', 'Maça', 'Pera', 'Uva']

    // let bigFruits = fruits.filter((item) => {
    //     return item.length > 4 // SE O ITEM CONTERM MAIS DE 4 CARACTERES = TRUE
    // })
    // console.log(bigFruits)


    // let fruits = ['Banana', 'Laranja', 'Maça', 'Pera', 'Uva']

    // let ok = fruits.some((value) => {
    //     return value.length > 3
    // })
    // if (ok) {
    //     console.log('Algum item é maior que 3')
    // } else {
    //     console.log('Nenhum item é maior que 3')
    // }


    // let fruits = ['Banana', 'Laranja', 'Maça', 'Pera', 'Uva']

    // if (fruits.includes('Uva')) {
    //     console.log('Tem uva sim!')
    // } else {
    //     console.log('Não tem uva...')
    // }

    // OBSERVAÇAO ! 

        // A FUNÇAO FILTER GERA UM NOVO ARRAY ! 
        // VOCE PRECISA SALVAR ELA EM ALGUM LUGAR
        // O FILTER VEM COM 3 ITENS
        // 1. VALUE (NESTE CASO O NOME DADO FOI ITEM)
        // 2. INDEX (VAI DIZER EM QUAL INDEX ELE ESTÁ)
        // 3. ARRAY (O PROPRIO ARRAY COMPLETO CASO QUEIRA FAZER UMA COMPARAÇAO)

        // EVERY(): SÓ RETORNA TRUE CASO TODOS OS ITENS DO ARRAY SATISFAZEM A CONDIÇAO
        // SOME(): SÓ RETORNA TRUE SE ALGUM ITEM SATISFAZER A CONDIÇAO
        
        // INCLUDES(): ELE VERIFICA SE TEM O ITEM QUE FOI PASSADO DENTRO DO ARRAY

// --------

// AULA - EVENTOS DE CLIQUE

    // function clicou() {
    //     console.log('Clicou no botão')
    // }
    
    // let botao = document.querySelector('.botao') // DEFINIR ELEMENTO

    // botao.addEventListener('click', clicou) // COLOCAR EVENTO - FORMA 1

    // botao.addEventListener('click', function() { // FORMA 2
    //     clicou()
    // })

    // botao.addEventListener('click', () => { // FORMA 3
    //     clicou()
    // })

    // document.querySelector('.botao').addEventListener('click', () => {
    //     clicou()
    // }) // DEFINIR ELEMENTO + COLOCAR EVENTO - FORMA 4

    // NO INDEX COLOCAR onclick="clicou()" - FORMA 5

// -------

// AULA - MANIPULANDO ELEMENTOS 1

    // function clicou() {
    //     const teste = document.querySelector('#teste')

        // console.log(teste.children) // RETORNA O FILHO DO ELEMENTO "teste"
        // console.log(teste.children[0].children) // RETORNA O FILHO DO FILHO[0] DO ELEMENTO "teste"

        // const ul = teste.querySelector('ul')
        
        // ul.innerHTML += "<li>Item alterado</li>" // ADICIONAR CONTEUDO - FORMA 1
        // ul.innerHTML = ul.innerHTML + "<li>Item alterado</li>"

        // ul.children[0].innerHTML = "Item <strong>alterado</strong>!"

    //     ul.outerHTML = "<strong>Alterado!</strong>" // PEGOU TODO O ELEMENTO E TROCOU PELO STRONG

    // }

    // OBSERVAÇAO !

        // O CHILDREN SÓ PEGA OUTROS ELEMENTOS
        // innerHTML PEGA O HTML INTERNO DO ELEMENTO, PODENDO ALTERAR OU CRIAR (TEXTO, TAG E ETC..)
        // innerText PEGA O TEXTO  INTERNO DO ELEMENTO, PODENDO ALTERAR OU CRIA TEXTOS
        // outHTML PEGA O ELEMENTO SELECIONADO E SUA PARTE INTERNA

// -------

// AULA - MANIPULANDO ELEMENTOS 2

    // function clicou() {
    //     const teste = document.querySelector('#teste')
    //     const ul = teste.querySelector('ul')

    //     // ul.children[0].append('(alterado)') // ADICIONA O CONTEUDO 
    //     // ul.children[0].innerHTML += '(alterado)' // DUPLICA O CONTEUDO QUE JÁ EXISTIA E ADICIONA O (alterado)

    //     let newLi = document.createElement('li')
    //     newLi.innerText = 'Item adicionado'

    //     ul.appendChild(newLi)
    // }


    // OBSERVAÇAO !

        // O append ADICIONA UM CONTEUDO NO FINAL DO CONTEUDO QUE JÁ EXISTE DENTRO DO ELEMENTO
        // O append NAO ADICIONA UM ELEMENTO ESCRITO, EXEMPLO: <li>teste</li> <- ISSO VAI SER UM TEXTO
        // O appendChildren ADICIONA UM TEXTO OU UM ELEMENTO DENTRO DO ELEMENTO SELECIONADO
        // O prepend ADICIONA UM CONTEUDO NO INICIO DO CONTEUDO QUE JÁ EXISTE DENTRO DO ELEMENTO

// -------

// AULA - MANIPULANDO ELEMENTOS 3

    // function clicou() {
    //     const teste = document.querySelector('#teste')
    //     const ul = teste.querySelector('ul')

    //     // const newButton = document.createElement('button')
    //     // newButton.innerHTML = "Botão"
    //     // ul.before(newButton)

    //     let newUl = document.createElement('ul')
        
    //     for(let i = 0; i<5; i++) {
    //         let newLi = document.createElement('li')
    //         newLi.innerHTML = 'Item add' + (i + 1)
    //         newUl.append(newLi)
    //     }

    //     ul.after(newUl)
    // }

    // OBSERVAÇAO ! 

        // after() ADICIONA UM CONTEUDO DEPOIS DO ELEMENTO SELECIONADO
        // before() ADICIONA UM CONTEUDO ANTES DO ELEMENTO SELECIONADO

// -------

// AULA - MANIPULANDO ATRIBUTOS

    // function clicou() {
    //     const input = document.querySelector('input')
    //     const botao = document.querySelector('.botao')

        // if (input.getAttribute('type') === 'text') {
        //     input.setAttribute('type', 'password')
        //     botao.innerText = 'Mostrar senha'
        // } else {
        //     input.setAttribute('type', 'text')
        //     botao.innerText = 'Ocultar senha'
        // }

        // if (input.hasAttribute('placeholder')) {
        //     console.log('Tem placeholder SIM')
        // } else {
        //     console.log('Não tem placeholder...')
        // }
    // }

// -------

// AULA - MANIPULANDO O CSS

    // function clicou() {
    //     const li = document.querySelector('li')

    //     li.style.backgroundColor = '#00F'
    //     li.style.fontSize = '20px'

    // }

// -------

// AULA -TRABALHANDO COM CLASSES

    // function clicou() {
    //     const button = document.querySelector('button')

    //     if (button.classList.contains('azul')) {
    //         button.classList.remove('azul')
    //         button.classList.add('verde')
    //     } else {
    //         button.classList.add('azul')
    //         button.classList.remove('verde')
    //     }

    //     // button.classList.toggle('azul') // CASO TENHA CLASS AZUL, IRA REMOVER / CASO NAO TENHA CLASS AZUL, IRA ADICIONAR
        
    //     if (button.classList.contains('azul')) {   
    //         button.classList.replace('azul', 'verde') // IRA TROCAR DE AZUL, PARA VERDE
    //     } else {
    //         button.classList.replace('verde', 'azul')
    //     }
    // }

    // OBSERVAÇAO !

        // CONTAINS = VERIFICA SE O ELEMENTE CONTEM ALGO
        // TOGGLE = SE TIVER A CLASS, VAI REMOVE / SE NAO TIVER A CLASS, VAI ADICIONAR
        // REPLACE = TROCA UMA PELA OUTRA (EXEMPLO LINHA 978)

// ------

// AULA - EVENTOS DE TECLADO 1 & 2

    // function apertou() {
    //     console.log('APERTOU!')
    // }

    // function segurou() {
    //     console.log('SEGUROU!')
    // }

    // function soltou(e) {
    //     console.log('TECLA APERTADA: ' + e.code)
    //     console.log('SHIFT? ' + e.shiftKey)
    //     console.log('CTRL? ' + e.ctrlKey)
    //     console.log('ALT? ' + e.altKey)
    //     console.log('--')
    // }

    // const input = document.querySelector('input')
    // input.addEventListener('keyup', soltou)

    // OBSERVAÇAO !

        // CODE: PEGA A TECLA QUE FOR APERTADA E ONDE ELA SE LOCALIZA. (EX: KeyA)
        // EXEMPLO: "shiftLeft"

        // KEY: PEGA A TECLA QUE FOR APERTADA SEM LOCALIZAR
        // EXEMPLO: "shift", ISSO APARECERA INDEPENDENTE DE QUAL SHIFT APERTAR

        // shiftKey: VERIFICA SE O SHIFT FOI APERTADO JUNTO COM OUTRA TECLA
        // ctrlKey: VERIFICA SE O CTRL FOI APERTADO JUNTO COM OUTRA TECLA
        // altKey: VERIFICA SE O ALT FOI APERTADO JUNTO COM OUTRA TECLA
        // CASO UM DESSES SEJA APERTADO, DEVOLVERA TRUE CASO CONTRARIO, FALSE

// ------

// AULA - EXERCICIO: LISTA DE TAREFAS SIMPLES & RESOLUÇAO

    // const input = document.querySelector('input')
    // const ul = document.querySelector('ul')

    // input.addEventListener('keyup', enviarTarefa)

    // function enviarTarefa(e) {
    //     if (e.key === 'Enter') {
    //         let newLi = document.createElement('li')
    //         newLi.innerHTML = input.value
    //         ul.appendChild(newLi)

    //         input.value = ''
    //     }
    // }

// -----

// AULA - O QUE É OO?


