const produtos = []; 
const pessoas = []; 
  
 function sorteioNumAleatorio(min, max )  
 { 
   return Math.floor(Math.random() * (max - min + 1)) + min; 
 } 
  
  
 function exibirMenu()  
 { 
   console.log("1. Cadastrar Produto"); 
   console.log("2. Cadastrar Pessoas"); 
   console.log("3. Sortear"); 
   console.log("4. Sair"); 
 } 
  
  
 let continuar = true; 
 
 while (continuar)  
 { 
   exibirMenu(); 
  
   const opcao = parseInt(prompt("Escolha uma opção:"));  
  
   switch (opcao)  
   { 
 
     case 1: 
       const novoProduto = prompt("Digite o nome do produto :"); 
       produtos.push(novoProduto); 
       console.log(`Produto ${novoProduto} cadastrado com sucesso !`); 
       break; 
  
     case 2: 
       const novaPessoa = prompt("Digite o nome da pessoa :"); 
       pessoas.push(novaPessoa);  
       console.log(`Pessoa ${novaPessoa} cadastrada com sucesso !`); 
       break; 
  
     case 3: 
       if (produtos.length === 0)  
       { 
         console.log("Não há produtos cadastrados para o sorteio."); 
       } else if (pessoas.length === 0)  
       { 
         console.log("Não há pessoas cadastradas para o sorteio."); 
       } else  
       { 
         
         const numeroSorteado = sorteioNumAleatorio(0, produtos.length - 1);  
         
         const produtoSorteado = produtos[numeroSorteado]; 
         
         const pessoaSorteada = pessoas[sorteioNumAleatorio(0, pessoas.length - 1)]; 
  
         console.log(`A pessoa sorteada é : ${pessoaSorteada}`); 
         console.log(`E o produto sorteado é : ${produtoSorteado}`); 
       } 
       break; 
  
     case 4: 
       continuar = false; 
       console.log("Encerrando o programa."); 
       break; 
  
     default: 
       console.log("Opção inválida."); 
       break; 
   } 
 }
