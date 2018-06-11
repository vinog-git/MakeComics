window.onload = function () {
    document.querySelector('.btn').addEventListener('click', (e) => {
        loadImages(e);
    });
}

function loadImages(event) {
    event.preventDefault();
    let comicForm = document.querySelector('form');
    let numberOfPages = parseInt(comicForm.pageCount.value);
    let imageNameTemplate = comicForm.imageName.value;

    let htmlContent = '';
    for (let i = 1; i <= numberOfPages; i++) {
        let tempImgTag = `<img src= "img/${imageNameTemplate + i}.jpg" onerror="this.remove()"/>`;
        htmlContent += tempImgTag;
    }
    let imgContainer = document.getElementById('img-container');
    imgContainer.innerHTML = htmlContent


}
