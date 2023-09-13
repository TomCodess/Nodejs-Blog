document.addEventListener('DOMContentLoaded', function(){


    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelectorAll('.searchBar');
    const searchInput = document.getElementsById('.searchInput');
    const searchClose = document.getElementsById('.searchClose');

    for(var i = 0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click')
    }


});

