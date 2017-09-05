$(function () {
    zhuangTi();
})

function zhuangTi() {
    $.ajax({
        url: 'http://127.0.0.1:9091/api/gettopics',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            //  for (var i = 0; i < data.length; i++) {
            var result = template('template-zhuangTi', data);
            console.log(result);
            $('.dongMan').html(result);
        }


    })
}