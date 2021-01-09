/// <reference path="../typings/globals/jquery/index.d.ts" />

// jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. 

// Basic Syntax

// $(document).ready(function(){
//     Block of code goes here
// })

$(document).ready(function(){

    // First select the element

    // Ananymous function
    $('.btn').click(function(){
        alert(`You Pressed Me`);
    })

    // Adding text to all <h1> tags and it over-writes the innerHTML 
    $('h1').html(`Hello Covid-19 warriors`);

    // We can group the HTML elements and can add css,html,addClass methods.
    $('h2,h3,p,a').html(`added using jQuery`)

    // Finding the length
    let lenResult = $('h1,h2,h3,p,a').length;

    console.log(lenResult);
    // returns length-6 from jQuery Object

    // We can select the element using class name's and id's
    $('#head').html(`Added using jQuery`)

    $('.head').hide()

    // Navigating from parent to child
    $('.header > span').hide()

    // Navigating from parent to child without className and id's
    $('#main h4+h5+h6').css('color','teal');
    // Applies style for the end of the HTML element.

    // Adding additional classes to the HTML element visible only in DOM
    $('blockquote[class]').addClass('peri');

    // We can filter and add class for particular element.
    $('#classes > article[class="art"]').addClass('peri')

    // For != not equals to
    $('#links > a[href!="#"]').addClass('para')

    // For Begins with
    $('#links > a[href ^= "http"]').addClass('par')

    // For Ends with
    $('#links > a[href $= "org"]').addClass('pa')

    // Adding styles for the :first element
    $('.first > li:first').css('color','red');

    // Adding styles for the :last element
    $('.first > li:last').css('color','teal');

    // Adding styles for all the :even elements
    $('.second > li:even').css('color','teal');

    // Adding styles for all the :odd elements
    $('.second > li:odd').css('color','red');

    // Adding styles for :eq(n)
    $('.third > li:eq(2)').css('color','blue');

    // Adding styles for :lt(n)
    $('.third > li:lt(2)').css('color','grey');

    // Adding styles for :gt(n)
    $('.third > li:gt(2)').css('color','green');

});