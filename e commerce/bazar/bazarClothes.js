function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

let id = $_GET("id");
const container = document.querySelector(".box-clothes-det");

fetch(`http://localhost:3000/bazar/${id}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const box = document.createElement('div');
        box.setAttribute('class', 'box-clothes-det-div-imagem');
        box.setAttribute('data-id', data._id)
        
        const imagem = document.createElement('img');
        imagem.setAttribute('class', 'img-clothes');
        imagem.setAttribute('alt', data.nome);
        imagem.setAttribute('src', data.imagem)

        const body = document.createElement('div');
        body.setAttribute('class', 'box-clothes-det-body');

        const nome = document.createElement('p');
        nome.innerHTML = `${data.nome}`
        nome.setAttribute('class', 'box-clothes-body-paragrafo-nome');

        const valor = document.createElement('p');
        valor.innerHTML = `R$: ${data.valor}`
        valor.setAttribute('class', 'box-clothes-body-paragrafo-valor');

        const addCart = document.createElement('button');
        addCart.innerHTML = `Adicionar ao carrinho`
        addCart.setAttribute('class', 'box-clothes-det-btn');

        addCart.addEventListener('click', () => {
            //pega a sessao pelo cookie do carrinho e adiciona o id do produto
            fetch(`http://localhost:3000/cart`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data;
            })

        })

        box.appendChild(imagem);
        body.appendChild(nome);
        body.appendChild(valor);
        body.appendChild(addCart);
        container.appendChild(box);
        container.appendChild(body);

    })
    .catch(erro => {
        console.log("Deu erro!!!", erro)
    })


