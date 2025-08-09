let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}


$(document).ready(function(){

    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.gallery .video').show(400);
        }
        else{
            $('.gallery .video').not('.' +filter).hide(200);
            $('.gallery .video').filter('.' +filter).show(200);
        }

    });

    $('.gallery').magnificPopup({
        delegate:'video',
        type:'video',
        gallery:{
            enabled:true,
        }
    });

});
