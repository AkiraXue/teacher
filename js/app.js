// document.body.addEventListener('touchmove', function(e) {
//       e.preventDefault();
//   }, { passive: false })


$('.box').on('webkitAnimationEnd', function() {
    $('.box1').removeClass('box');
})

$(".p1_jl").click(function() {
    $(".p1_4").show();
    $(".p1_6").hide();
    $(".p1_5").hide();
    $('.p1_j3').css('background-position', '193px 0px')
    $('.p1_jl').css('background-position', '0px 60px')
    $('.p1_j2').css('background-position', '392px 0px')

});

$(".p1_j2").click(function() {
    $(".p1_5").show();
    $('.p1_jl').css('background-position', '0px 0px')
    $(".p1_4").hide();
    $(".p1_6").hide();
    $('.p1_j2').css('background-position', '392px 60px')
    $('.p1_j3').css('background-position', '193px 0px')
});

$(".p1_j3").click(function() {
    $(".p1_6").show();
    $(".p1_4").hide();
    $(".p1_5").hide();
    $('.p1_jl').css('background-position', '0px 0px')
    $('.p1_j2').css('background-position', '392px 0px')
    $('.p1_j3').css('background-position', '193px 60px')
});






function musicPlay(name) {

    var obj = document.querySelector(name);

    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        WeixinJSBridge.invoke('getNetworkType', {}, function(res) {
            obj.play();
        });
    } else {
        obj.play();
    }
}
musicPlay('#msc_bg');

function bgMusic() {
    //背景音乐播放
    window.openMusic = true;
    var btn = document.querySelector('#musicBt');
    var msc = document.querySelector('#msc_bg');
    btn.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (msc.paused && !isArrFun(isPlayFlag)) {
            msc.play();
            btn.className = 'musicOn';
            openMusic = true;

        } else {
            msc.pause();
            btn.className = 'musicOff';
            openMusic = false;
        }
    });
}
bgMusic();


$('.swiper-container .swiper-slide').click(function() {
    $('.layer').fadeIn(500);
    $('.layer img').attr('src', $(this).find('img')[0].src);
    player.pause();
    isPlayFlag[0] = true;
    player1.pause();
    isPlayFlag[1] = true;


    $('.hezi').fadeOut();


})
$('.layer .bg').click(function() {
    $('.layer').fadeOut(500);
    $('.hezi').fadeIn();

})