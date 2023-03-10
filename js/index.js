let btnLoadArticles = document.querySelector('#loadMore')
let loadArticles = document.getElementById('articlesLoadMore')

btnLoadArticles.onclick = function() {
    loadArticles.style.display = "flex";
    btnLoadArticles.style.display = "none";
};

