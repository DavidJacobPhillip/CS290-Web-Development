// TASK #1 ========================================= (Completed)
// event-handling the twit button and creating the text-entry place
var twit_button = document.getElementById("create-twit-button");
var create_twit_screen = document.getElementById("modal-backdrop");
var new_twit_entry = document.getElementById("create-twit-modal");
twit_button.addEventListener('click', function(){
    console.log("== Create a Twit was clicked");
    create_twit_screen.classList.toggle("hidden");
    new_twit_entry.classList.toggle("hidden");
});

// TASK #2 ========================================= (Completed)
var twit_text_input = document.getElementById("twit-text-input");
var twit_author_input = document.getElementById("twit-attribution-input");

// event-handling the "x" button
var x_button = document.getElementsByClassName("modal-close-button");
x_button[0].addEventListener('click', function(){
    console.log("== Create a Twit was x'd out of");
    create_twit_screen.classList.toggle("hidden");
    new_twit_entry.classList.toggle("hidden");
    twit_text_input.value = "";
    twit_author_input.value = "";
});

// event-handling the "cancel" button
var cancel_button = document.getElementsByClassName("modal-cancel-button");
    cancel_button[0].addEventListener('click', function(){  
    console.log("== Create a Twit was cancelled out of");
    create_twit_screen.classList.toggle("hidden");
    new_twit_entry.classList.toggle("hidden");
    twit_text_input.value = "";
    twit_author_input.value = "";
});

// TASK #3/4 ========================================= (Completed)
// function that inserts a new twit into the DOM
function insert_twit(content, author){
    // the general html structure for a twit
    /*
    <article class="twit">
        <div class="twit-icon">
            <i class="fa fa-bullhorn"></i>
        </div>
        <div class="twit-content">
            <p class="twit-text">Twit Content</p>
            <p class="twit-author">
                <a href="#">Author Name</a>
            </p>
        </div>
    </article>
    */

    var twit_article = document.createElement('article');
    twit_article.classList.add("twit");
    // inserting the article into the DOM
    var twit_container = document.getElementsByClassName("twit-container");
    twit_container[0].appendChild(twit_article);
    
    // the fist div
    var twit_div_1 = document.createElement('div');
    twit_div_1.classList.add("twit-icon");
    twit_article.appendChild(twit_div_1);

    // the "i" html element in the first div
    var i_div_1 = document.createElement('i');
    i_div_1.classList.add("fa", "fa-bullhorn");
    twit_div_1.appendChild(i_div_1);

    // the second div
    var twit_div_2 = document.createElement('div');
    twit_div_2.classList.add("twit-content");
    twit_article.appendChild(twit_div_2);

    // the first paragraph in the second div
    var p_1_div_2 = document.createElement('p');
    p_1_div_2.classList.add("twit-text");
    p_1_div_2.textContent = content;
    twit_div_2.appendChild(p_1_div_2);

    // the second paragraph in the second div
    var p_2_div_2 = document.createElement('p');
    p_2_div_2.classList.add("twit-author");
    twit_div_2.appendChild(p_2_div_2);

    // the link in the second paragraph in the second div
    var a_p_2_div_2 = document.createElement('a');
    a_p_2_div_2.setAttribute('href', '#');
    a_p_2_div_2.textContent = author;
    p_2_div_2.appendChild(a_p_2_div_2);
}

// event-handler for creating the a new twit with the "create" button
var create_button = document.getElementsByClassName("modal-accept-button");
create_button[0].addEventListener('click', function(){  
    var content = twit_text_input.value;
    var author = twit_author_input.value;

    // ensuring author / content is not empty
    if (content ==  "" || author == ""){
        window.alert("Please enter values for both the author and text fields.");
    } else{
        console.log("== Creating a new button");
        create_twit_screen.classList.toggle("hidden");
        new_twit_entry.classList.toggle("hidden");
        insert_twit(content, author);
        twit_text_input.value = "";
        twit_author_input.value = "";
    }
});

// TASK #5 ========================================= (Completed)
// event handling for search button
var search_button = document.getElementById("navbar-search-button");
var search_input = document.getElementById("navbar-search-input");

search_button.addEventListener('click', function(){  
    var search_content = search_input.value;
    search_content = search_content.toUpperCase();

    var twits = document.getElementsByClassName("twit");
    var author_twits = document.getElementsByClassName("twit-author");
    var content_twits = document.getElementsByClassName("twit-text");
    console.log(author_twits.length);
    
    var occurances = 0;
    for(i = author_twits.length-1; i >= 0; i--){
        var c_author = author_twits[i].textContent.toUpperCase();
        var c_content = content_twits[i].textContent.toUpperCase();
        
        // determines if the string exists
        if (c_author.indexOf(search_content) == -1 && c_content.indexOf(search_content) == -1){
            occurances++;
        } 

        if (occurances == 1){
            twits[i].remove();
        } 

        occurances = 0;
    }
});


    
