const score = {
    container: document.querySelector('.score'),
    current: document.querySelector('.current-score'),
    best: document.querySelector('.highscore')
}
// showing/hiding score
export const showScore = () => score.container.classList.remove('hidden');
export const hideScore = () => score.container.classList.add('hidden');
export const showHighScore = () => score.best.classList.remove('hidden');