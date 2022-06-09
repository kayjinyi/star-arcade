const score = {
    container: document.querySelector('.score'),
    current: document.querySelector('.current-score'),
    best: document.querySelector('.highscore')
}
// showing/hiding score
export const showScore = () => score.container.classList.remove('hidden');
export const hideScore = () => score.container.classList.add('hidden');
export const showHighScore = () => score.best.classList.remove('hidden');
// Updating score
//Take the current state as a parameter, and updates both the DOM and the state with +1
export const updateScore = state => {
    const currentScore = Number(score.current.innerText);

    state.score = currentScore + 1;
    //Use padStart to prefix the current score with the necessary number of zeroes.
    score.current.innerText = (currentScore + 1).toString().padStart(6, '0');
};
//Set to the current score
export const setHighScore = state => {
    state.highScore = state.score;
    score.best.innerText = `HI ${state.score.toString().padStart(6, '0')}`;
};
//Reset the score
export const resetScore = state => {
    state.score = 0;
    score.current.innerText = '000000';
}