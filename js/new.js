window.onload = function () {
    var qs=location.search.length ? location.search.substring(1) : "";
    console.log('qs', qs);
    let id = qs.split('=')[1];
    getFlower(id);
}
function getFlower(id) {
    axios.get(`https://5dc51ddf0bbd050014fb8561.mockapi.io/api/v1/flowers/${id}`)
    .then(function (res) {
      let flower = res.data;
      let html = `
        <h2 class="new-item__title">${flower.title}</h2>
        <div class="new-item__image">
          <img src="${flower.image}">
          <hr>
          <div>${flower.memo}</div>
        </div>
        <div class="new-item__desc">
        ${flower.desc}
        </div>
      `;
      $('.new__item').html(html);
    })
    .catch(function (err) {
      console.log('err', err);
    })
}