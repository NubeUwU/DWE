class Singleton {
  static #instance = null;
  constructor() {
    if (Singleton.#instance) {
      throw new Error("No se puede inicializar un objeto de esta clase");
    }
  }
  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }
}
