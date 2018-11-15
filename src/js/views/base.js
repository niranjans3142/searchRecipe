export const element = {
    searchButton : document.querySelector('.search'),
    searchInput : document.querySelector('.search__field'),
    searchResultList : document.querySelector('.results__list'),
    searchResult : document.querySelector('.results'),
    searchResultPages : document.querySelector('.results__pages'),
    recipe : document.querySelector('.recipe')
};

export const elementString = {
    loader : 'loader'
};

export const loaderRotate = (parent) => {
    const loader = `
        <div class="${elementString.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin',loader);
};

export const clearLoader = ()=> {
    const loader = document.querySelector(`.${elementString.loader}`);
    if(loader){
        loader.parentElement.removeChild(loader);
    }
}