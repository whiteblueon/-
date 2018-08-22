// require.config({
//     paths: {
//         // the left side is the module ID,
//         // the right side is the path to
//         // the jQuery file, relative to baseUrl.
//         // Also, the path should NOT include
//         // the '.js' file extension. This example
//         // is using jQuery 1.9.0 located at
//         // js/lib/jquery-1.9.0.js, relative to
//         // the HTML page.
//         jquery: '../jquery-1.12.4'
//     }
// });
require(['dialog1','jquery-1.12.4'],function(dialog){
    $('#btn').on('click',function(){
        dialog.open({
            width:200,
            height:200,
            title:'666',
            content:'content.html'

        });
    });
})