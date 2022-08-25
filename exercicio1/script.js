const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
//a)
function caixaAlta (objeto){
    console.log(objeto.toUpperCase());
}
caixaAlta("Nome: " + objeto.nome+"\n"+ "Profissão: " +  objeto.profissao+"\n"+"Username: " + objeto.username+"\n"+"Senha: " + objeto.senha)
//b)
function textoCorrido (objeto){
    console.log(objeto);
}
textoCorrido(objeto.nome + " "+ objeto.profissao+ " "+ objeto.username + " "+objeto.senha)

//c)
function funcao3(objeto,callback) {
    const result = callback(objeto);
    console.log(result);
}
funcao3(objeto,textoCorrido);