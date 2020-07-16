export interface Printer {
  print(input: string): void;
}

export default class TicTacToe {
  constructor(printer: Printer) {
    throw new Error('Method not implemented.');
  }

  move(input: number): void {
    throw new Error('Method not implemented.');
  }
}
