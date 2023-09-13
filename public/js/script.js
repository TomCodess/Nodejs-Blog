document.addEventListener('DOMContentLoaded', function(){

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('.searchInput');
    const searchClose = document.getElementById('.searchClose');

    //adds event listeners to buttons, makes buttons usefl
    for(var i = 0; i < allButtons.length; i++){
        allButtons[i].addEventListener('click', function(){
            //manipulates the visibility of the search bar 
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        }) 
    }
});

