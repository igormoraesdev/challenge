export class UnexpectedError extends Error {
  constructor() {
    super('Something wrong. Try again!');
    this.name = 'UnexpectedError';
  }
}
