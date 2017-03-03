(function(){
    var lbt = $(".lbt").find(".swiper-container");
    var container = $(".mtbdList").find(".swiper-container");



    for(var i=1;i<=5;i++){
    	$(lbt).find(".swiper-wrapper").append(`<div class="swiper-slide"><img src="img/img${i}.jpg" alt="img${i}"></div>`);
    }
    var arr = [
        "",
        "澳信或将持续引领澳洲房产投资行业标准",
        "驳斥“澳信加价销售”的不实新闻",
        "澳信或将持续引领澳洲房产投资行业标准",
        "驳斥“澳信加价销售”的不实新闻",
        "澳信或将持续引领澳洲房产投资行业标准"
    ];
    for(var i=1;i<=5;i++){
        $(container).find(".swiper-wrapper").append(
        `<div class="swiper-slide">
            <a href="javascript:;">
                <img src="img/mtbd_${i}.jpg" alt="mtbd_${i}">
                <p>${arr[i]}</p>
            </a>
        </div>`);
    }

    var swiper = new Swiper(lbt, {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,//是否支持点击缩略点切换
        loop: true,//是否循环切换
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
    });


    var swiper2 = new Swiper(container, {
        nextButton: '.swiper-button-next',
        loop: true,//是否循环切换
        prevButton: '.swiper-button-prev',
        autoplay: 3000,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
    });


    //setTimeout(function(){poster();},3000);
    function poster(){
        window.open("http://chat.ausingroup.com/LR/minioffline160714.aspx?id=KRN85909498&cid=1483196398430290485175&lng=cn&sid=1485135232540657144306&p=http%3A//m.ausingroup.com/&r= ","_self");
    }
})()