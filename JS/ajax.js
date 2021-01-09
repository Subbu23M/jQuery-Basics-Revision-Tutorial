/// <reference path="../typings/globals/jquery/index.d.ts" />

// jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

// Basic Syntax

// $(document).ready(function(){
//     Block of code goes here
// })

// jQuery.ajax()

$.ajax({

    // url
    url:"plain.txt",

    // settings

    // The type of data that you're expecting back from the server:"text": A plain text string.
    dataType:"text",

    // GET is the default method.
    // The HTTP method to use for the request
    method:"GET",

    // A function to be called if the request succeeds. 
    success:findData,
    
    // A function to be called if the request fails
    error:noData

})

// Ananymous function
function findData(data,xhr,status){

    console.log(xhr);
    console.log(data);
    console.log(status);

    $('.result').text(data)
}

// Ananymous function
function noData(xhr,status){

    console.log(xhr);
    console.log(status);
    
    alert('no data found')
}

// Shorthand method for $.ajax,
// Shorthand Methods:These methods perform the more common types of Ajax requests in less code.
$('.resul').load('plain.txt',function(response,status,xhr){

    // Simple...if Statement

    if(status == "error"){
        alert("no data found:" + xhr.status + " " + xhr.statusText )
    }
    else{
        console.log('data found');
    }

    // console.log(response);

});

// Regular JS Object

// let contactDeatils = {
//     firstName : "Subramanyam",
//     lastname : "Dindukurthi",
//     place : " Kadapa",
//     stateName : "Andhra Pradesh"
// }

//JSON - JavaScript Object Notation

// let contactDeatils = {
//     "firstName" : "Subramanyam",
//     "lastname" : "Dindukurthi",
//     "place" : " Kadapa",
//     "stateName" : "Andhra Pradesh"
// }

// AJAX.JSON

$.getJSON('./JS/main.json',jsData)

// Ananymous function
function jsData(data){

    $.each(data,workData)

}

// Ananymous function
// append - next

function workData(index,dataSET){

    $('.main').append('<h3 class="re">' + dataSET.author + ": is the author number " + index + '</h3>')

}

// We follow these pattern in AJAX

// $.ajax({

    // url:.JS/main.json,
    // method:"GET",
    // dataType:"json",

// }).done(callBack function)