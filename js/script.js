function fontsStyle(params) {

  var file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
  if (file_content == '') {
    fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        var c_fontname;
        for (var i = 0; i < items.length; i++) {
          var fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }
          c_fontname = fontname;
        }
      }
    });
  }
}
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}


testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }else{
    document.querySelector('body').classList.add('no-webp');
  }
});

var imageSlider = new Swiper('.example__container', {
  slidesPerView: 4,
  spaceBetween: 38,
  autoHeight: true,
  speed: 700,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
    sensitivity: 1,
  },
});
baguetteBox.run('.example-gallery', {
  buttons: 'true'
});

$(function(){
  $('.programms__row').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint:1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint:767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint:560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    ]
  });
});
$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('_lock');
  });
});

function ibg(){

  $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
      $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
  });
}

ibg();



$(document).ready(function() {
  $('.accordion__title').click(function(event) {
    if($('.accordion').hasClass('accordion_one')) {
      $('.accordion__title').not($(this)).removeClass('active');
      $('.accordion__content').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('accordion_active').next().slideToggle(300);
  });
});
