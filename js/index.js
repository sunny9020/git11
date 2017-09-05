 $(function () {
     //  轮播图效果调用
     slideEffect();
     //  tab切换栏效果;
     tabEffect();
     //  侧边栏效果
     clickEffect();

 })



 // 轮播图效果
 function slideEffect() {
     $.ajax({
         url: 'http://127.0.0.1:9091/api/getlunbo',
         dataType: "json",
         success: function (data) {
             var resultNav = template('lunbo', data);
             console.log(resultNav);
             //  console.log(data);

             $('.carousel-inner').html(resultNav);
             $('.item').eq(0).addClass('active');
         }
     })
 }

 //   tab 切换栏效果
 function tabEffect() {

     $.ajax({
         url: 'http://127.0.0.1:9091/api/gethometab/1',
         dataType: "json",
         success: function (data) {
             console.log(data);
             //  for (var i = 0; i < data.length; i++) {
             var result = template('template-tab', data);
             console.log(result);
             $('.moban').append(result);
             //  }
         }
     })

     $('.nav-tabs').on('click', 'li', function () {
         $('.moban').html('');
         $the = $(this);
         $.ajax({
             url: 'http://127.0.0.1:9091/api/gethometab/' + $the.data('type'),
             dataType: 'json',
             success: function (data) {
                 //  console.log(data);
                 //  for (var i = 0; i < data.length; i++) {
                 var result = template('template-tab', data);
                 $('.moban').append(result);

                 //  }
             }
         })
     })

 }
 // 侧边栏

 function clickEffect() {
     $('#click').click(function () {
         $('#list').css('left', '0');
         $('.cover').css({
             display: 'block'
         })
         $('.main').css('transform', 'translateX(50%)');
     })

     $('.cover').click(function () {
         $('#list').css('left', '-50%');
         $('.cover').css({
             display: 'none'
         })
         $('.main').css('transform', 'translateX(0)');
     })

 }