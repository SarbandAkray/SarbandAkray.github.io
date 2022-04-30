//tvshow season and episodes

//fbi
let ep = 1;
let s = 1;
//seduction
let ep1 = 1;
let s1 = 1;
$(document).ready(()=> {
    for (let index = 1; index <23 ; index++) {
        $("#episodes").append("<button value='"+index+"'>episode "+index+"</button>");
    }
    for (let index = 1; index <9 ; index++) {
        $("#episodes1").append("<button value='"+index+"'>episode "+index+"</button>");
    }
    $("#FBI").attr("src","https://www.2embed.ru/embed/tmdb/tv?id=80748&s="+s+"&e="+ep+"");
    $("#SE").attr("src","https://www.2embed.ru/embed/tmdb/tv?id=81356&s="+s1+"&e="+ep1+"");
});

//title animation
anime({
    targets: '.path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});



//tvshow season and episodes

// FBI
$("#episodes").on('click', (e)=> {
    $("#FBI").attr("src","https://www.2embed.ru/embed/tmdb/tv?id=80748&s="+s+"&e="+e.target.value+"");

});
$("#seasons").on('click', (e)=> {
    $("#FBI").attr("src","https://www.2embed.ru/embed/tmdb/tv?id=80748&s="+e.target.value+"&e=1");
    s = e.target.value;
    $('#episodes')
    .find('button')
    .remove()
    .end();
    if (e.target.value==1) {
        for (let index = 1; index <23 ; index++) {
            $("#episodes").append("<button value='"+index+"'>episode "+index+"</button>");
        }
    }else if(e.target.value==2){
        for (let index = 1; index <20 ; index++) {
            $("#episodes").append("<button value='"+index+"'>episode "+index+"</button>");
        }
    }else if(e.target.value==3){
        for (let index = 1; index <16 ; index++) {
            $("#episodes").append("<button value='"+index+"'>episode "+index+"</button>");
        }
    }else if(e.target.value==4){
        for (let index = 1; index <20 ; index++) {
            $("#episodes").append("<button value='"+index+"'>episode "+index+"</button>");
        }
    }
});

//SE
$("#episodes1").on('click', (e)=> {
    $("#SE").attr("src","https://www.2embed.ru/embed/tmdb/tv?id=81356&s="+s1+"&e="+e.target.value+"");

});
$("#seasons1").on('click', (e)=> {
    $("#SE").attr("src","https://www.2embed.ru/embed/tmdb/tv?id=81356&s="+e.target.value+"&e=1");
    s1 = e.target.value;
    $('#episodes1')
    .find('button')
    .remove()
    .end();
    if (e.target.value==1) {
        for (let index = 1; index <9 ; index++) {
            $("#episodes1").append("<button value='"+index+"'>episode "+index+"</button>");
        }
    }else if(e.target.value==2){
        for (let index = 1; index <9 ; index++) {
            $("#episodes1").append("<button value='"+index+"'>episode "+index+"</button>");
        }
    }else if(e.target.value==3){
        for (let index = 1; index <9; index++) {
            $("#episodes1").append("<button value='"+index+"'>episode "+index+"</button>");
        }
    }
});
