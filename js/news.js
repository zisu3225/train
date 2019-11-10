window.onload = function () {      
    getFlowersCount();
    getFlowers(1);
    $('.news__buttons').on('click', '.news-buttons__item', function () {
        $('.news__list').html(`<div class="news-content__loading"><img src="./image/loading.gif" alt=""></div>`);
        let page = $(this).html();
        getFlowers(page);
    })
}

function getFlowersCount(){
    axios.get('https://5dc51ddf0bbd050014fb8561.mockapi.io/api/v1/flowers')
    .then(function (res) {
        let data = res.data;
        let count = data.length;
        let buttonCount = Math.ceil(count / 10);
        let buttonHtml = '';
        for(let i = 1; i <= buttonCount; i++) {
            let singleHtml = `<a class="news-buttons__item">${i}</a>`
            buttonHtml += singleHtml;
        }
        $('.news__buttons').html(buttonHtml);
    })
}
function getFlowers(page) {
    axios.get(`https://5dc51ddf0bbd050014fb8561.mockapi.io/api/v1/flowers?page=${page}&limit=10`)
    .then(function (res) {
      let flowers = res.data;
      let listContentHtml = '';
      flowers.forEach((flower, index) => {
          let html = `
          <a class="news-list__item" href="./new.html?id=${flower.id}" target="_blank">
            <div class="news-item__image">
              <img src="${flower.image}" alt="">
            </div>
            <div class="news-item__desc">
                <h5>${flower.title}</h5>
                <div>${flower.desc}</div>
            </div>
        </a>
          `;
          listContentHtml += html;
      })
      $('.news__list').html(listContentHtml);
    })
    .catch(function (err) {
      console.log('err', err);
    })
}