$('html').animate({
    scrollTop:0
}, 500)


//cursor
$('body').jstars({
    image_path:'img',
    image:'jstar-map.png',
    style:'rand',
    frequency:12,
})

//cover menu
$('.ham').on('click', function(){
    $(this).toggleClass('on')

    if ( $(this).hasClass('on') ) {

        $('body').append('<div class="cover"><div class="info"></div></div>')
            let menu ='<ul>'
            menu += '<li><a href="#sect1">ABOUT</a></li>'
            menu += '<li><a href="#sect2">GALLERY</a></li>'
            menu += '<li><a href="#sect3">SKILL</a></li>'
            menu += '<li><a href="#sect4">CONTACT</a></li>'
            menu += '</ul>'

            let call = '<div class="callme">'
            call += '<div class="mobile">'
            call += '<p>Tel</p>'
            call += '<span>010 3482 0412</span>'
            call += '</div>'
            call += '<div class="email">'
            call += '<p>E-mail</p>'
            call += '<span>blueorange0412@naver.com</span>'
            call += '</div>'
            call += '<div class="resume">'
            call += '<p>RESUME</p>'
            call += '<a href="./resume_yeojin.hwp" download="이력서(웹디자인)_조여진.hwp">다운로드 <i class="fa-solid fa-download"></i></a>'
            call += '</div>'
            call += '</div>'
        $('.info').append(menu, call)

        $('.cover').css({
            position: 'fixed',
            top:'0', left:'0', right:'0', bottom:'0',
            background:'black', color:'white',
            display:'flex',
            justifyContent:'center', alignItems:'center',
            zIndex:'99'
        })
        $('.info').css({
            display:'flex', zIndex:'9999',
            width:'78%',
            alignItems:'flex-end',
            
        })
        $('.cover ul').css({
            flex: '3 1 0'
        })
        $('.cover li').css({
            paddingTop: '70px', 
            fontSize:'70px',  fontFamily: 'Montserrat', fontWeight: 'bold',
        })

        $('.callme').css({
            flex: '1 1 0',
            fontSize:'25px', color: 'rgba:(255,255,255,0.5)',
            paddingBottom:'10px'
        })
        $('.callme >div').css({
            paddingTop: '40px'
        })
        $('.callme >div p').css({
            fontFamily: 'Montserrat', fontWeight: 'bold', 
            color: '#555', fontSize:'20px'
        })
    } else {
        $('.cover').remove()
    }
    
    return false
})


$('body').on('click', '.cover li a', function(){
    $('.cover').remove()
    $('.ham').removeClass('on')
})

//스크롤
var sect1 = $('#sect1').offset().top
var sect2 = $('#sect2').offset().top
var sect3 = $('#sect3').offset().top
var sect4 = $('#sect4').offset().top
console.log(sect1, sect2, sect3, sect4)

$(window).on('scroll',function(){
    var sct = $(this).scrollTop()
    if ( sct >= 0 && sct < (sect3/2) ) {
        $('.bar').removeClass('on')
        $('#menu li').removeClass('on')
        
        $('#sect3').removeClass('on')
        $('.skills').each(function(){
            $(this).data('easyPieChart').update(0);
            })

    } else if ( sct >= (sect3/2)) {
        $('.bar').addClass('on')
        $('#menu li').addClass('on')
        if ( !$('#sect3').hasClass('on')) {
            $('#sect3').addClass('on')
            $('.skills').each(function(idx) {
                $(this).data('easyPieChart').enableAnimation().update(chartRate[idx]);
            })
        }
        
    }

})




//섹션1
$('.sayhello').animatedHeadline({
    animationType:'type', 
    //rotate-1, rotate-2, rotate-3, scale, type, clip, loading-bar
    animationDelay: 800,
    barDelay: 1800,
    barWaiting: 300,
    lettersDelay: 10,
    typeLettersDelay: 100,
    selectionDuration: 300,
    typeAnimationDelay: 1000,
    revealDuration: 500,
    revealAnimationDelay: 1000
})

//섹션2
$('.slider_circle_10').EasySlides({
    'autoplay': true,
    'show': 12
})

//섹션3
$('.selector').animatedHeadline({
    animationType:'rotate-3', 
    //rotate-1, rotate-2, rotate-3, scale, type, clip, loading-bar
    animationDelay: 1500,
    barDelay: 1800,
    barWaiting: 300,
    lettersDelay: 50,
    typeLettersDelay: 100,
    selectionDuration: 300,
    typeAnimationDelay: 300,
    revealDuration: 300,
    revealAnimationDelay: 1500
})


var chartColor = ["#1760BF", "#074073", "#D9A50B", "#A69E86", "#595348", "#1760BF"]
var chartRate = [90, 80, 50, 70, 60, 70]
$('.skills').each(function(idx){
    $(this).attr({'data-percent':chartRate[idx]})
    $(this).easyPieChart({
        animate:1000,
        easing:'easeOutBounce',
        size: '170',
        trackColor: 'rgba(119,148,166,0.3)',
        barColor:chartColor[idx],
        scaleColor:	false,
        lineCap:'butt', //round, butt, squre
        lineWidth: 85,
        // onStep: function (from, to, percent) {
        //     $(this.el).find('.percent').text(Math.round(percent));
        // }
    })
    

})



// 섹션4



