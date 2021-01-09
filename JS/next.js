/// <reference path="../typings/globals/jquery/index.d.ts" />

// jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.

// Basic Syntax

// $(document).ready(function(){
//     Block of code goes here
// })


$(document).ready(function () {

    // ** 1second = 1000ms

    // We can add multiple methods at a time by 'Chain Method'.

    $('div')

    .html(`Hello,World!`)
    .addClass('bord')
    .css("text-align","center");

    // each function(),iterates on each element.
    // contain two parametres - index and element
    // similar for...loop function in Vanilla JS

    // Ananymous function
    $('p').each(function(index,element){

        // console.log(index + " " + element);

        // console.log(index + " " + element.innerHTML);

        console.log(index + " " + $(element).text());

    });

    // Ananymous function
    // $('p').each(function(index){

        // console.log(index + " " + element);

        // console.log(index + " " + element.innerHTML);

        // console.log(index + " " + $(element).text());

        // let item = $(this)
        // console.log(index + " " + item.text());

    // });

    // To store all the classes of HTML elements in a variable

    // Global variable
    let classNames = [];

    // Ananymous function
    $('h1[class]').each(function(index){

        // Local Variable
        let item = $(this)

        classNames[index] = item.attr('class');
    });

    // console.log(classNames);
    console.log(classNames.join('  ,  '));

    // Ananymous function
    $('ul > li').each(function(index){

        if(index % 2 == 1 ){
            // If you divide index number with two returns one - Odd Number
            $(this).css("color","red");
        }

        else{
          // If you divide index number with two returns zero - Even Number
            $(this).css("color", "blue");
        }

    })

    // Adding image attributes using each function()

    // Ananymous function
    $('img').each(function(index){

        if(index % 2 ==1){

            // Odd Position
            $(this).attr({
                src:"./images/BingWallpaper-1.jpg",
                alt:'Wallpaper-1',
                title:"Wallpaper-1",
                class:'first-image'
            });

        }
        else{

            // Even Position
            $(this).attr({
                src: "./images/BingWallpaper-2.jpg",
                alt: "Wallpaper-2",
                title: "Wallpaper-2",
                class: "second-image"
            });
        }

    })

    // About Append -Next
    // About Prepend - Before

    // Stored in variables
    let appendText = $("#append-text");
    appendText.append('<h6 class="bord">Hello,World Next!</h6>')

    // Stored in variables
    let prependText = $("#prepend-text");
    prependText.prepend('<h5 class = "bord"> Hello,World! Before </h5>')

    // About appendTo - Next
    $('<h3 class = "border"> Hello Append To Next </h3>').appendTo(appendText)

    // About prependTo - Before
    $('<h3 class = "border"> Hello Prepend To Before </h3>').prependTo(prependText)

    // addClass
    $("blockquote").addClass('bord');

    // removeClass, with className removes particular class
    $("p").removeClass("bord");

    // removeClass without className removes all classes.
    $("p").removeClass();

    // toggleClass
    // Class Presents - remove class
    // Class Absents - add class

    $('a').click(function(){
        $(this).toggleClass('rem')
    })

    // hasClass - returns boolean value - True or False
    let classCheck = $('a').hasClass('rem');
    console.log(classCheck);

    // css - Adding multiple classes using JSON

    $('h6').css({

        // JSON - JavaScript Object Notation
        
        "color" : "red",
        "font-size": "2rem",
        "text-align" : "center"

    })
    
});