function msg(){
console.log("Boa noite!")
} 
  
msg()
  
  // //2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
  
function myName(nome){
console.log(`Bem-vindo(a), ${nome}!`)
  }
  
myName("Eliana")

  
  // //3 - crie uma função que receba nome, idade, e um estilo musical 
  // preferido (parâmetros) e exiba no console
  
function about(name, age, music){
console.log(`Meu nome é ${name}, eu tenho ${age} anos e amo ouvir ${music}`)
}
  
about("Eliana", 22, "pop")
  
  // //4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
  
function fun(movie, music){
console.log(`Meu filme favorito é ${movie} e minha música favorita é ${music}`)
}
  
fun("As vantagens de ser invisível", "Chandelier")


function calc(triplo){
return triplo * 3
}
  
console.log(calc(9))