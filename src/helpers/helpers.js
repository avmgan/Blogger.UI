

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('/');
}
export {formatDate}


    // sidebar mobile
    // $('.hamburger-menu').on('click' , ()=>{
    //     $('.sidebar-mobile').toggleClass('show')
    //     $('.overlay').toggleClass('show')
    //     $('body').css('overflow' , 'hidden')
    // })
    // $('.overlay').on('click' , ()=>{
    //     $('.sidebar-mobile').removeClass('show')
    //     $('.overlay').removeClass('show')
    //     $('.search-header').removeClass('show')
    //     $('body').css('overflow' , 'scroll')
    // })

    // search header
    // $('.search-btn').on('click' , ()=>{
    //   $('.search-header').addClass('show')
    //   $('.overlay').addClass('show')
    //   $('body').css('overflow' , 'hidden')
    //   $('.sidebar-mobile').removeClass('show')
    // })
    // $('.close-search-wrapper').on('click' , ()=>{
    //     $('.search-header').removeClass('show')
    //     $('.overlay').removeClass('show')
    //     $('body').css('overflow' , 'scroll')
    // })

 
