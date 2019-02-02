var myVar;

function loaderFunc() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loadContainer").style.display = "block";

    if (window.location.hash) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(window.location.hash).offset().top
        }, 1000);
    }
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function () {
    $(".profileImg").click(function(e) {
        $("#imgUpload").click();
        console.log("click");
    });

    function fasterPreview( uploader ) {
        if ( uploader.files && uploader.files[0] ){
            $('.profileImg').attr('src',
                window.URL.createObjectURL(uploader.files[0]) );
        }
    }
    $("#imgUpload").change(function(){
        fasterPreview( this );
    });
    window.onscroll = function () {
        myFunction()
    };
    var navbar = document.getElementById("header");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    $('.paper-list li').click(function () {
        $(this).addClass('list-items-active').siblings().removeClass('list-items-active');
        var show = this.id;
        $('#paperTabs > div.' + show).css('display', 'block');
        $('#paperTabs > div:not(".' + show + '")').hide(100);
        console.log($('#paperTabs > div.' + show));
        $('#paperTabs > div.' + show).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        return false;
    });

    $('.plan-list li').click(function () {
        $(this).addClass('list-items-active').siblings().removeClass('list-items-active');
        var show = this.id;
        $('#planTabs > div.' + show).css('display', 'flex');
        $('#planTabs > div:not(".' + show + '")').hide(100);
        return false;
    });
});
