export interface Printer {
  print(input: string): void;
}

export default class TicTacToe {
  constructor(printer: Printer) {
    printer.print('Player X\'s move');
    printer.print(` | | 
-+-+-
 | | 
-+-+-
 | | `);
  }

  move(input: number): void {
    throw new Error('Method not implemented.');
  }
}
