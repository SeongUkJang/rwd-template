// $(function () {

//     // 변수 등록하기

//     const headerBtn = $('.header-btn')
//     const header = $('header')//navOpen   , scroll

//     headerBtn.on('click', function (e) {
//         e.preventDefault()
//         header.toggleClass('navOpen')

//     })
    const headerBtn = document.querySelector('.header-btn')
    const header = document.querySelector('header')
    const fixedTopBtn = document.querySelector('.fixedTop')

    headerBtn.addEventListener('click', function (e){
        e.preventDefault()
        header.classList.toggle('navOpen')
    })

    // $(window).on('scroll', function () {
    //     let i = $(this).scrollTop()
    //     console.log(i);

    //     if (i >= 100) {
    //         header.addClass('scroll')
    //     } else {

    //         header.removeClass('scroll')
    //     }

    // })

    window.addEventListener('scroll', function(){
        let i = scrollY || document.documentElement.scrollTop;
        console.log(i);
        if ( i>= 100) {
            header.classList.add('scroll')
        }
        else {
            header.classList.remove('scroll')
        }
    })

    fixedTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

    gsap.to('.dep1 .tit_wrap>*', {
        opacity: 1,
        y: -30,
        duration: 1,
        stagger: .3
    })

    AOS.init({
        easing: 'ease'
    });