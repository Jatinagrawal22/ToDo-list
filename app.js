
$('#inp').keypress(function(e){
    if(e.which===13){
        const todotext=$('#inp').val();
        $('#list').append(`<li><span><i class="fa fa-trash-o" style="font-size:24px"></i></span> ${todotext}</li>`)
        $('#inp').val("")
    }
})


// $('li').click(function(){
//     $(this).toggleClass('completed')
// });

$('ul').on('click','li',function(e){
    $(this).toggleClass('completed')
})

// $('span').click(function(){
//     $(this).parent().remove();
// })

$('#list').on('click','span',function(e){
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    })
    // For stop of event bubbing - parent is also taking property
    e.stopPropogation(); 
})


$('#plus').click(function(){
    $('#inp').fadeToggle();
})

// AJAX Model -- Asynchronous JavaScript and XML
// Client send request to server and server give data to JS layer in the format of JSon or XML that is send to client usind DOM Manipulation