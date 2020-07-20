import TicTacToe, { Printer } from '../../src/TicTacToe';

describe('TicTacToe', () => {
  describe('game setup', () => {
    it('should start with Player X\'s move', () => {
      const print = jest.fn();
      const printer: Printer = { print };
      const game: TicTacToe = new TicTacToe(printer);

      expect(print).toHaveBeenCalledWith('Player X\'s move');
    });
    it('should draw an empty board at startup', () => {
      const print = jest.fn();
      const printer: Printer = { print };
      const game: TicTacToe = new TicTacToe(printer);

      expect(print).toHaveBeenCalledWith(` | | 
-+-+-
 | | 
-+-+-
 | | `);
    });
  });
});
