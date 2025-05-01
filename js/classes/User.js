export class User {
    // Atributs privats
    #nom;
    #cognom;
    // #idUsuari;
    #contrasenya;
    #dataNaixement;
    // #nivellDificultat;
  
    constructor(nom, cognom, dataNaixement, contrasenya) {
      this.#nom = nom;
      this.#cognom = cognom;
    //   this.#idUsuari = idUsuari;
      this.#contrasenya = contrasenya;
      this.#dataNaixement = dataNaixement;
    //   this.#nivellDificultat = nivellDificultat;
    }
  
    // Getters
    getNom() {
      return this.#nom;
    }
  
    getCognom() {
      return this.#cognom;
    }
  
    // getIdUsuari() {
    //   return this.#idUsuari;
    // }

    getContrasenya() {
      return this.#contrasenya;
    }
  
    getDataNaixement() {
      return this.#dataNaixement;
    }
  
    // getNivellDificultat() {
    //   return this.#nivellDificultat;
    // }
  
    // setNivellDificultat(nouNivell) {
    //   this.#nivellDificultat = nouNivell;
    // }
  }
  