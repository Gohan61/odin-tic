const gameBoard = (() => {
    //let board = ['','','','','','','','',''];
    let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function boardSquares(input, boardLocation) {
        board.splice(boardLocation, 1, input)
        return board;
        }
        return { boardSquares, board };
    })();

console.log(gameBoard.board);
console.log(gameBoard.boardSquares('x', 2));

const player = (playerName) => {
    const getName = () => playerName;
    return {getName}
};

const player1 = player(prompt('Choose your player name', ''));
const player2 = player(prompt('Choose your player name', ''));