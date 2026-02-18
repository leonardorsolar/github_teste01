// Arquivo com erros intencionais para revisão do Copilot

function calcularTotal(preco, quantidade) {
    if (preco === 0) {   // ERRO: operador errado (atribuição)
        console.log("Preço inválido")
    }

    let total = preco * quantidade

    return total
}

// ERRO: variável não definida
console.log("Total:", calcularTotal(valor, 2))


// ERRO assíncrono mal implementado
async function buscarUsuario(id) {
    const response = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = response.json() // ERRO: falta await
    return data
}

buscarUsuario(1).then(user => {
    console.log(user.name.toUppercase()) // ERRO: método errado (toUpperCase)
})


// ERRO lógico
function dividir(a, b) {
    if (b === 0) {
        return "Não pode dividir por zero"
    }
    return a / b
}

console.log(dividir(10, 0))
