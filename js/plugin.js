window.location.hash = "Simplicity";

$(document).ready(function() {
            $(window).on('hashchange', function(e){
            var x = window.location.hash;
              if((x == '#Mesureable') || (x == '#Result') ){
                 $('#user_camera').css('display','none');
                 $('#image_user_camera').show();
              }
            });
        });


$(document).ready(function() {
            $(window).on('hashchange', function(e){
            var x = window.location.hash;
              if(x == '#Simplicity'){
                 $('#s').css('text-decoration','underline');
                 $('#m').css('text-decoration','none');
                 $('#a').css('text-decoration','none');
                 $('#r').css('text-decoration','none');
                  $('#t').css('text-decoration','none');
              }
              if(x == '#Mesureable'){
                 $('#m').css('text-decoration','underline');
                 $('#s').css('text-decoration','none');
                 $('#a').css('text-decoration','none');
                 $('#r').css('text-decoration','none');
                  $('#t').css('text-decoration','none');
              }
              if(x == '#Accessibility'){
                 $('#a').css('text-decoration','underline');
                 $('#s').css('text-decoration','none');
                 $('#m').css('text-decoration','none');
                $('#r').css('text-decoration','none');
                   $('#t').css('text-decoration','none');
              }
              if(x == '#Result'){
                  $('#r').css('text-decoration','underline');
                 $('#a').css('text-decoration','none');
                 $('#s').css('text-decoration','none');
                 $('#m').css('text-decoration','none');
                 $('#t').css('text-decoration','none');
              }
              if(x == '#Time'){
                $('#t').css('text-decoration','underline');
                  $('#r').css('text-decoration','none');
                 $('#a').css('text-decoration','none');
                 $('#s').css('text-decoration','none');
                 $('#m').css('text-decoration','none');
              }
            });
        });



$(function(){
$('#s').click(function(){
                $('.menu_page').fadeOut(1000);
                window.location.hash = "Simplicity";
                $('.mask2').html("<img src='image/menu.png' style='width: 50px;height: 50px;right: 0px;position:absolute;'>");

            });
            $('#m').click(function(){
                $('.menu_page').fadeOut(1000);
                window.location.hash = "Mesureable";
                 $('.mask2').html("<img src='image/menu.png' style='width: 50px;height: 50px;right: 0px;position:absolute;'>");
            });
            $('#a').click(function(){
                $('.menu_page').fadeOut(1000);
                window.location.hash = "Accessibility";
                 $('.mask2').html("<img src='image/menu.png' style='width: 50px;height: 50px;right: 0px;position:absolute;'>");
            });
            $('#r').click(function(){
                $('.menu_page').fadeOut(1000);
                window.location.hash = "Result";
                 $('.mask2').html("<img src='image/menu.png' style='width: 50px;height: 50px;right: 0px;position:absolute;'>");
            });
            $('#t').click(function(){
                $('.menu_page').fadeOut(1000);
                window.location.hash = "Time";
                 $('.mask2').html("<img src='image/menu.png' style='width: 50px;height: 50px;right: 0px;position:absolute;'>");
            });
        });



      $(function(){
            $(window).load(function() {
                $('.menu_page1').delay(1000).slideUp(500);
            });
        });




$(function(){
          var i= 0;
          $('.mask2').click(function(){
             
              if(i % 2 == 0){
                 
                  $(this).html("<img src='image/menu1.png'  style='width: 50px;height: 50px;right: 0px;position:absolute;'>");
              }else{
                $(this).html("<img src='image/menu.png' style='width: 50px;height: 50px;right: 0px;position:absolute;'>");
              }
              i=i+1;
          });
      });


$(function(){
              $('.mask2').click(function(){
                  $('.menu_page').fadeToggle();
              });
          });



$(document).ready(function() {
      $('#fullpage').fullpage({
        sectionsColor: ['', '', ''],
        anchors: ['Time', 'Result', 'Accessibility','Mesureable','Simplicity'],
        menu: '#menu',
        loopTop: top,
        loopBottom: false
      });
    });



$(function(){
    $('#click_camera').click(function(){
        $('.modal_camera').fadeToggle();
    }); 
});

$(function(){
    $('#save_photo').click(function(){
        $('.modal_camera').fadeOut();
        $('#image_user_camera').hide();
        $('#user_camera').show();
    });
});



$(document).ready(function() {
            $(window).on('hashchange', function(e){
            var x = window.location.hash;
              if(x == '#Mesureable'){
                  $('#gif_m').fadeIn();
              }else{
                 $('#gif_m').hide();
              }

              if(x == '#Accessibility'){
                  $('#image_user_camera').fadeIn();
              }else{
                 $('#image_user_camera').hide();
              }

              if(x == '#Result'){
                  $('#gif_r').fadeIn();
              }else{
                 $('#gif_r').hide();
              }

              if(x == '#Time'){
                  $('#gif_t').fadeIn();
              }else{
                 $('#gif_t').hide();
              }


            });
        });