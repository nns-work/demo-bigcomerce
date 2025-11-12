function toggleSearch(e) {
    const button = e.currentTarget;
    const $button = $(e.currentTarget);

    const searchbar = document.querySelector('.search--mobile');
    if (searchbar.style.display === "none") {
        searchbar.style.display = "block";
        document.querySelector('.mobile-search-input').focus();
        button.classList.add('search-open');
        
        $(document).mouseup((e) => {
            var $searchbar = $('.search--mobile');
            // if the target of the click isn't the container nor a descendant of the container
            if (!$searchbar.is(e.target) && $searchbar.has(e.target).length === 0
            && !$button.is(e.target) && $button.has(e.target).length === 0) {
                document.querySelector('#search-form--mobile').reset();
                searchbar.style.display = "none";
                button.classList.remove('search-open');
            }
        });
    } else {
        document.querySelector('#search-form--mobile').reset();
        searchbar.style.display = "none";
        button.classList.remove('search-open');
    }
    e.preventDefault();
}

function toggleSearchAssignment() {
    var triggers = document.querySelectorAll('.toggleSearch');

    for(let x=0; x < triggers.length; x++) {
        triggers[x].addEventListener("click", toggleSearch);
    }

    // hide the searchbar when page loads
    const searchbar = document.querySelector('.search--mobile');
    searchbar.style.display = "none";

}
export default toggleSearchAssignment;
