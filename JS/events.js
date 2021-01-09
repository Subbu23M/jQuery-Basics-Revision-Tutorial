/// <reference path="../typings/globals/jquery/index.d.ts" />

// jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

// Basic Syntax

// $(document).ready(function(){
//     Block of code goes here
// })

$(document).ready(function(){

    // About Events in jQuery,
    // click change hover

    // 1) click event
    // When user clicks a button, adds class to <h1> element.

    // Ananymous function
    $('.btn').click(function(){
        $('h1').toggleClass('rem')

    })

    // 2) change event
    // Select all the input fields

    // Ananymous function
    $(':input').change(function(){
        $(this).addClass('rem')
    })

    // 3) hover event

    // Ananymous function
    $('.hover').hover(function(){
        $(this).addClass('rem')
    })

    // Mouse Events
    // 1) mouseenter mouseleave

    // Chain Method

    // Ananymous function
    $('.mouse')

    .mouseenter(function(){

        $(this).addClass('rem')

        .mouseleave(function(){
            $(this).addClass('re')
        })

    })

    // on function - we can group jQuery events

    // Ananymous function
    $('.on').on("click mouseenter hover",function(){
        $(this).addClass('re')
    })

    // Call back function

    // Multiple Event Handlers

    $('.change').on("mouseenter mouseleave",changeDiv)

    $('.change').on('click',changeClick)

    // Ananymous function
    function changeDiv(){
        $(this).toggleClass('rem')
    }

    // Ananymous function
    function changeClick(){
        $(this).off("mouseenter mouseleave",changeDiv)

        $(this).html(`I am clicked`)

        $(this).removeClass('rem')
    }

    // Animations in jQuery

    // Ananymous function
    $('#btn').click(function(){

        // Simple..if
        let simpleDiv = $('#simple')

        if(simpleDiv.is(':hidden')){
            simpleDiv.show()
        }
        else{
            simpleDiv.hide()
        }

        // We can use parametres in show and hide() methods,
        // 1second - 1000ms
        // fast and slow

        // We can use this statement also,
        // simpleDiv.toggleClass('hide')
        
    })

    // Slide and fade in jQuery
    $('#fade').click(function(){

        $('.sp').fadeOut(4000).fadeIn(4000)

        // fadeOut and fadeIn are similar to fadeToggle
        // fadeTo contains two parametres duration and opacity

        $('.sl').slideUp(4000);

        $('.am').animate({
            fontSize : '25px'
        },5000)

    })

});