export interface Printer {
  print(input: string): void;
}

export interface ControllableGame {
  move(input: string): void;
}

export default class TicTacToe implements ControllableGame {
  constructor(printer: Printer) {
    throw new Error('Method not implemented.');
  }

  move(input: string): void {
    throw new Error('Method not implemented.');
  }
}
