document.addEventListener('DOMContentLoaded', function(){


    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelectorAll('.searchBar');
    const searchInput = document.getElementsById('.searchInput');
    const searchClose = document.getElementsById('.searchClose');

    //adds event listeners to buttons, makes buttons usefl
    for(var i = 0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', function(){
            searchBar.style.visibility = 'visable';
            searchBar.classList.add('open');
        }) 

        
    }


});

