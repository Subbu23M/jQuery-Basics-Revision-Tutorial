/// <reference path="../typings/globals/jquery/index.d.ts" />

// jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

// Basic Syntax

// $(document).ready(function(){
//     Block of code goes here
// })

$(document).ready(function(){

    // Adding background-color for all input elements.
    $(':input').addClass('border');
    
    // Adding background-color for all button elements.
    $('button').addClass('bord');

});