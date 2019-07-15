//botao quando confirmar a compra tirar do banco de dados
//fetch get id

const botaoDelete = document.querySelector('#btn-deletar');

botaoDelete.addEventListener('click', () => {
    fetch(`http://localhost:3000/bazar/${addClothes._id}`, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    })
        .then(() => {
            remove();
        })
        .catch(erro => {
            console.log(erro)
        })
})


