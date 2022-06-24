var swiper = new Swiper(".choose_swiper", {
    slidesPerView: 2.7,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    navigation: {
        nextEl: ".choose__button",
      },
  });

  var swiper = new Swiper(".combo_swiper", {
    slidesPerView: 3.5,
    // slidesPerView: 'auto',
    loop: true,
    grid: {
      rows: 1,
    },
    spaceBetween: 30,
    navigation: {
        nextEl: ".combo__button",
      },
  });





  
  $(document).ready(function () {
    $('.gifset__tabs').click(function (e) { 
      e.preventDefault();
      $('.giftset__tabs_block').removeClass('gifset__tabs_active')
      $(this).parent().addClass('gifset__tabs_active');
      $('.giftset__product_block').removeClass('tab_active')
      $($(this).attr('href')).addClass('tab_active')
    })
  });