import React, {Component} from 'react'
import '../style/Board.css'
import ArrowKeysReact from 'arrow-keys-react';

const BOARD_SIZE = 30;
<<<<<<< HEAD
const SPEED = 5;
const GAME_SIZE = 600;
=======
const SPEED = 6;
const GAME_SIZE = 500;
>>>>>>> 1430e9eaa45e0fcc6a06bd53db016d6447c7b2ad

const DIRECTION = {
    UP: 'up',
    LEFT: 'left',
    DOWN: 'down',
    RIGHT: 'right'
};
// const APPLE = 'https://i.pinimg.com/originals/c8/43/c1/c843c1845f99082ceccb8c8303fa76db.png';
const CELL_TYPE = {
    FREE: 'rgba(14, 14, 14, 0.184)',
    SNAKE: '#82E0AA',
    APPLE: '#F1948A',
};

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...{
                highScore: 0,
                debug: true,
                played: 0,
            }, ...this.init()
        };
        setInterval(this.update, 1000 / SPEED);

        ArrowKeysReact.config({
            left: () => this.checkUpdateDir(DIRECTION.LEFT, DIRECTION.RIGHT),
            right: () => this.checkUpdateDir(DIRECTION.RIGHT, DIRECTION.LEFT),
            up: () => this.checkUpdateDir(DIRECTION.UP, DIRECTION.DOWN),
            down: () => this.checkUpdateDir(DIRECTION.DOWN, DIRECTION.UP),
        });
    }

    checkUpdateDir = (dir, oppositeDir) => {
        if (this.state.dir !== oppositeDir && !this.state.changedDirection) {
            this.setState({
                changedDirection: true,
                dir: dir,
            });
        }
    };

    init() {
        const board = Array.from(Array(BOARD_SIZE), () => new Array(BOARD_SIZE).fill(CELL_TYPE.FREE));
        const snake = getFreePos(board);
        board[snake.y][snake.x] = CELL_TYPE.SNAKE;
        const apple = getFreePos(board);
        board[apple.y][apple.x] = CELL_TYPE.APPLE;

        return {
            board: board,
            snake: [snake],
            apple: apple,
            dir: Object.values(DIRECTION)[getRandomInt(Object.values(DIRECTION).length)],
            gameOver: true,
            score: 0,
            changedDirection: false,
        }
    }

    onGameOver = () => {
        this.setState(state => {
            const highScore = Math.max(state.highScore, state.score);
            return {
                score: 0,
                highScore: highScore,
                gameOver: true,
                played: state.played + 1,
            }
        });
    };

    render() {
        return (
            <div style={{width: GAME_SIZE + 350, marginLeft: 'auto', marginRight: 'auto'}}>
                <div style={{width: GAME_SIZE, float: 'left', marginRight: 50}}>
                    <table id='table-board' className='Board' {...ArrowKeysReact.events} tabIndex="1">
                        <style>{
                            `:root { --game-width: ${GAME_SIZE}; }`
                        }</style>
                        <tbody>
                        {this.state.board.map((row, i) =>
                            <tr key={i}>
                                {row.map((value, j) =>
                                    <td key={j} style={{
                                        backgroundColor: value,
                                        width: GAME_SIZE / BOARD_SIZE,
                                        height: GAME_SIZE / BOARD_SIZE
                                    }}/>)
                                }
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className='SnakeScore' style={{width: 300, height: GAME_SIZE, float: 'right', textAlign: 'left'}}>
                    <h2>Scoreboard</h2>
                    <p>Score: {this.state.score}</p>
                    <p>High score: {this.state.highScore}</p>

                    <p>
                        <button onClick={this.restart} className='SankeRSbtn btn-primary'
                                disabled={this.state.gameOver ? '' : 'disabled'}>
                            {!this.state.gameOver ? 'Playing...' : (this.state.played === 0 ? 'Start' : 'Restart')}
                        </button>
                    </p>
                </div>
            </div>
        )
    }

    update = () => {
        if (this.state.gameOver) {
            return;
        }
        let x = 0;
        let y = 0;

        switch (this.state.dir) {
            case DIRECTION.UP:
                y--;
                break;
            case DIRECTION.LEFT:
                x--;
                break;
            case DIRECTION.DOWN:
                y++;
                break;
            case DIRECTION.RIGHT:
                x++;
                break;
            default:
                console.log('Cannot end here');
        }

        this.setState(state => {
            const new_pos = Object.assign({}, state.snake[state.snake.length - 1]);
            new_pos.x += x;
            new_pos.y += y;
            // Check for boundary collision
            if (new_pos.x < 0 || new_pos.x >= BOARD_SIZE || new_pos.y < 0 || new_pos.y >= BOARD_SIZE) {
                this.onGameOver();
                return {};
            }
            // check for snake collision
            if (state.snake.find(pos => pos.x === new_pos.x && pos.y === new_pos.y)) {
                this.onGameOver();
                return {};
            }
            // Check for apple collision
            if (new_pos.x === state.apple.x && new_pos.y === state.apple.y) {
                state.board[new_pos.y][new_pos.x] = CELL_TYPE.SNAKE;
                state.apple = getFreePos(state.board);
                state.board[state.apple.y][state.apple.x] = CELL_TYPE.APPLE;
                state.score += 10;
                state.highScore = Math.max(state.score, state.highScore);
            } else {
                // remove first element of snake
                const free_pos = state.snake.splice(0, 1)[0];
                state.board[free_pos.y][free_pos.x] = CELL_TYPE.FREE;
            }
            // add last element to snake
            state.snake.push(new_pos);
            state.board[new_pos.y][new_pos.x] = CELL_TYPE.SNAKE;
            return {
                board: state.board,
                snake: state.snake,
                apple: state.apple,
                score: state.score,
                changedDirection: false,
            };
        });
    };

    restart = () => {
        if (this.state.played === 0) {
            this.setState({gameOver: false});
        } else {
            this.setState(Object.assign(this.init(), {gameOver: false}));
        }
        document.getElementById('table-board').focus();
    }
}

/**
 * Returns an object {x, y} for which the board[y][x] is free
 * @param board
 */
function getFreePos(board) {
    let obj = {};
    do {
        obj = {
            x: getRandomInt(BOARD_SIZE),
            y: getRandomInt(BOARD_SIZE),
        };
    } while (board[obj.y][obj.x] !== CELL_TYPE.FREE);
    return obj;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default Board