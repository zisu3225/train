window.onload = function () {      
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    autoplay: true,
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })  
  
  axios.get('https://5dc51ddf0bbd050014fb8561.mockapi.io/api/v1/flowers?page=1&limit=4')
  .then(function (res) {
    let flowers = res.data;
    let listContentHtml = '';
    let newsContentHtml = '';
    flowers.forEach((flower, index) => {
        let html = `<div class="flowers-content__item ${index == 1 || index == 3 ? 'flowers-content__reverse' : ''}">
            <div class="flowers-item__image">
                <img src="${flower.image}" alt="">
            </div>
            <div class="flowers-item__list">
            <div>
                <h2>${flower.title}</h2>
                <div>${flower.desc}</div>
            </div>
            <div>
                <hr style="width:100px;">
                <div style="text-align:center;">${flower.memo}</div>
            </div>
            </div>
        </div>`;
        listContentHtml += html;
    })
    flowers.forEach((flower, index) => {
        let newhtml = `<div class="news-content__item ${index == 1 ? 'flowers-content__reverse' : ''}">
                <img src="${flower.image}" alt="">
                <h4>${flower.title}</h4>
                <div class="news-item__desc">${flower.desc}</div>
        </div>`;
        newsContentHtml += newhtml;
    })
    // $('.news-content__loading').css('display', 'none');
    $('.flowers__content').html(listContentHtml);
    $('.news__content').html(newsContentHtml);
  })
  .catch(function (err) {
    console.log('err', err);
  })
}