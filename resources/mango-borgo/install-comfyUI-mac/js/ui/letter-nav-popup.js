
export function popupLetterNav({ e, isLetterNavEnabled }) {
    const popElLetterNav = document.querySelector('#popElLetterNav')
    // Navigation Mode
        if (e.key === 'x' && e.shiftKey && e.metaKey) {
            isLetterNavEnabled = !isLetterNavEnabled
            console.log(isLetterNavEnabled)
            document.querySelector('.page-wrapper').classList.toggle('nav-mode-colors')
            popElLetterNav.innerText = `letter navigation : ${isLetterNavEnabled}`
            popElLetterNav.classList.add('animate')
            setTimeout(() => {
                popElLetterNav.classList.remove('animate')
            }, 1000);
            
        }
}