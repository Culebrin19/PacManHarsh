export class ErrorPacman extends Error {
    /**
   * Crea un nou error personalitzat
   * @param {string} missatge Missatge de l'error
   */
  constructor(code, message) {
    super(message);
    this.name = "ErrorPacman";
    this.code = code;
  }

  toString() {
    return `S'ha produït un error:\nCodi: ${this.code}\nMissatge: ${this.message}\nPila: ${this.stack}`;
  }
}

  /**
   * Error 1, tecla no reconeguda
   */
// }


