import TicTacToe, { Printer } from '../../src/TicTacToe';

describe('TicTacToe', () => {
  it('should play a game of tic-tac-toe and announce the winner', () => {
    const print = jest.fn();
    const printer: Printer = { print };
    const game: TicTacToe = new TicTacToe(printer);

    game.move(0);
    game.move(3);
    game.move(2);
    game.move(1);
    game.move(4);
    game.move(6);
    game.move(8);

    expect(print).toHaveBeenCalledWith('Player X wins');
    expect(print).toHaveBeenCalledWith(`X|O|X
-+-+-
O|X| 
-+-+-
O| |X`);
  });
});
