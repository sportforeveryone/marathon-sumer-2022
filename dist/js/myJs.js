function closeSidebar() {
    if (window.matchMedia("(min-width: 990px)").matches) {
        $("body").attr('class', 'sidebar-mini')
    } else {
        $("body").attr('class', 'sidebar-closed sidebar-collapse');
    }
}

if (window.matchMedia("(min-width: 990px)").matches) {
    $('#sidebar-t').css("position", "fixed");
} else {
    $('#sidebar-t').css("position", "absolute");
}

$(document).ready(function(){
    $('.cont_toggle1').click(function(){
        $('.cont_b11').slideToggle(300);
        return false;
    });
});

$(document).ready(function(){
    $('.cont_toggle2').click(function(){
        $('.cont_bl2').slideToggle(300);
        return false;
    });
});

$(document).ready(function(){
    $('.cont_toggle3').click(function(){
        $('.cont_bl3').slideToggle(300);
        return false;
    });
});

$(document).ready(function(){
    $('.cont_toggle4').click(function(){
        $('.cont_bl4').slideToggle(300);
        return false;
    });
});

$(document).ready(function(){
    $('.cont_toggle5').click(function(){
        $('.cont_bl5').slideToggle(300);
        return false;
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}