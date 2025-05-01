export class ErrorPacman extends Error {
  constructor(code, message) {
    super(message);
    this.name = "ErrorPacman";
    this.code = code;
  }

  toString() {
    return `S'ha produït un error:\nCodi: ${this.code}\nMissatge: ${this.message}\nPila: ${this.stack}`;
  }
}




// export class ErrorPacman extends Error {
//   constructor(code, message) {
//     super(message);
//     this.code = code;
//   }

//   toString() {
//     // console.log(`S'ha produit un error en el codi ${
//     //   this.code}missatge error: ${this.message}Pila: ${this.stack}`);
//     return `S'ha produït un error:\nCodi: ${this.code}\nMissatge: ${this.message}\nPila: ${this.stack}`;
//   }

  /**
   * Error 1, tecla no reconeguda
   */
// }


