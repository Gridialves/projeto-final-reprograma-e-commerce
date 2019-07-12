const container = document.querySelector('.box-clothes');

fetch(`http://localhost:3000/bazar/${addClothes._id}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(addCart => {

            container.addEventListener('click', () => {
                //trazer roupa detalhada
            })
        });
    })
    .catch(erro => {
        console.log("Deu erro!!!", erro)
    })