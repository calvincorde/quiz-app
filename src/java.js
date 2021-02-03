console.clear

const buttons = document.querySelectorAll ('.card__button');

buttons.forEach((button) => {
    button.addEventListener ('click', () => {
        const answer = button.parentNode.querySelector('.right_answer');
        answer.classList.toggle ('marked__right');

        button.innerText = answer.classList.contains('marked__right') 
        ?  'Hide Answer': 'Show Answer'
    });
});





const bookmarks = document.querySelectorAll ('.bookmark_saved')

bookmarks.forEach((div) => {
    div.addEventListener ('click', () => {
        const bookmarkIcon = div.querySelector('.bookmark__icon');
        bookmarkIcon.classList.toggle ('hidden');
    })
})


