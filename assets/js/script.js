let resposta;

function mudarCategoria(categoria) {
  const acessaApi = document.getElementById('link-list');
  acessaApi.innerHTML = "";

  let secao = document.createElement('h1');
  acessaApi.appendChild(secao);
  secao.textContent = categoria;

  let ul = document.createElement('ul');
  acessaApi.appendChild(ul)

  for (let prop in resposta) {
    if (resposta[prop].categoria === categoria) {
      let li = document.createElement('li');
      li.innerHTML = `<a href="${resposta[prop].link}">${resposta[prop].descricao}</a>`
      ul.appendChild(li);
    }
  }
}

(function () {
  axios.get('http://127.0.0.1:5500/assets/api/api-links.json')
    .then(function (response) {
      console.log(response.data);
      resposta = response.data
    })
    .catch(function (error) {
      console.log(error);
    });
})();