
export class Test {

  #zahl: number;

  constructor(zahl: number) {
    this.#zahl = zahl;
    console.log('Hallo Hannover! 🤩', this.#zahl);

  }
}
