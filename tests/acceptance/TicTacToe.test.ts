import TicTacToe, { ControllableGame, Printer } from '../../src/TicTacToe';

interface ControllerInterface {
  move(input: any): void;
}

class MockController implements ControllerInterface {
  constructor(game: ControllableGame) {
    throw new Error('Method not implemented.');
  }

  move(input: number): void {
    throw new Error('Method not implemented.');
  }
}

describe('TicTacToe', () => {
  it('should ', () => {
    const print = jest.fn();
    const printer: Printer = { print };
    const game: TicTacToe = new TicTacToe(printer);
    const controller: MockController = new MockController(game);

    controller.move(0);
    controller.move(3);
    controller.move(2);
    controller.move(1);
    controller.move(4);
    controller.move(6);
    controller.move(8);

    expect(print).toHaveBeenCalledWith('Player X wins');
    expect(print).toHaveBeenCalledWith(`X|O|X
-+-+-
O|X| 
-+-+-
O| |X`);
  });
});
